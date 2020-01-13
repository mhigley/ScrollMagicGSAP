import ScrollMagic from "scrollmagic"
import { TweenLite as Tween, TimelineMax as Timeline } from "gsap"

ScrollMagic.Scene.addOption("tweenChanges", false, function(val) {
  return !!val
})

ScrollMagic.Scene.extend(function() {
  var Scene = this,
    _tween

  var log = function() {
    if (Scene._log) {
      Array.prototype.splice.call(arguments, 1, 0, "(animation.gsap)", "->")
      Scene._log.apply(this, arguments)
    }
  }

  Scene.on("progress.plugin_gsap", function() {
    updateTweenProgress()
  })
  Scene.on("destroy.plugin_gsap", function(e) {
    Scene.removeTween(e.reset)
  })

  var updateTweenProgress = function() {
    if (_tween) {
      var progress = Scene.progress(),
        state = Scene.state()
      if (_tween.repeat && _tween.repeat() === -1) {
        if (state === "DURING" && _tween.paused()) {
          _tween.play()
        } else if (state !== "DURING" && !_tween.paused()) {
          _tween.pause()
        }
      } else if (progress !== _tween.progress()) {
        if (Scene.duration() === 0) {
          if (progress > 0) {
            _tween.play()
          } else {
            _tween.reverse()
          }
        } else {
          if (Scene.tweenChanges() && _tween.tweenTo) {
            _tween.tweenTo(progress * _tween.duration())
          } else {
            _tween.progress(progress).pause()
          }
        }
      }
    }
  }

  Scene.setTween = function(TweenObject, duration, params) {
    var newTween
    if (arguments.length > 1) {
      if (arguments.length < 3) {
        params = duration
        duration = 1
      }
      TweenObject = Tween.to(TweenObject, duration, params)
    }
    try {
      if (Timeline) {
        newTween = new Timeline({
          smoothChildTiming: true,
        }).add(TweenObject)
      } else {
        newTween = TweenObject
      }
      newTween.pause()
    } catch (e) {
      log(
        1,
        "ERROR calling method 'setTween()': Supplied argument is not a valid TweenObject"
      )
      return Scene
    }
    if (_tween) {
      Scene.removeTween()
    }
    _tween = newTween

    if (TweenObject.repeat && TweenObject.repeat() === -1) {
      _tween.repeat(-1)
      _tween.yoyo(TweenObject.yoyo())
    }

    if (Scene.tweenChanges() && !_tween.tweenTo) {
      log(
        2,
        "WARNING: tweenChanges will only work if the TimelineMax object is available for ScrollMagic."
      )
    }

    if (
      _tween &&
      Scene.controller() &&
      Scene.triggerElement() &&
      Scene.loglevel() >= 2
    ) {
      var triggerTweens = Tween.getTweensOf(Scene.triggerElement()),
        vertical = Scene.controller().info("vertical")
      triggerTweens.forEach(function(value, index) {
        var tweenvars = value.vars.css || value.vars,
          condition = vertical
            ? tweenvars.top !== undefined || tweenvars.bottom !== undefined
            : tweenvars.left !== undefined || tweenvars.right !== undefined
        if (condition) {
          log(
            2,
            "WARNING: Tweening the position of the trigger element affects the scene timing and should be avoided!"
          )
          return false
        }
      })
    }

    if (parseFloat(Tween.version) >= 1.14) {
      var list = _tween.getChildren
          ? _tween.getChildren(true, true, false)
          : [_tween],
        newCallback = function() {
          log(
            2,
            "WARNING: tween was overwritten by another. To learn how to avoid this issue see here: https://github.com/janpaepke/ScrollMagic/wiki/WARNING:-tween-was-overwritten-by-another"
          )
        }
      for (var i = 0, thisTween, oldCallback; i < list.length; i++) {
        thisTween = list[i]
        if (oldCallback !== newCallback) {
          oldCallback = thisTween.vars.onOverwrite
          thisTween.vars.onOverwrite = function() {
            if (oldCallback) {
              oldCallback.apply(this, arguments)
            }
            newCallback.apply(this, arguments)
          }
        }
      }
    }
    log(3, "added tween")

    updateTweenProgress()
    return Scene
  }

  Scene.removeTween = function(reset) {
    if (_tween) {
      if (reset) {
        _tween.progress(0).pause()
      }
      _tween.kill()
      _tween = undefined
      log(3, "removed tween (reset: " + (reset ? "true" : "false") + ")")
    }
    return Scene
  }
})

export default ScrollMagic
