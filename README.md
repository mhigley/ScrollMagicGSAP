<!-- AUTO-GENERATED-CONTENT:START (STARTER) -->
<p align="center">
  <a href="https://scrollmagic.io/">
    <img alt="ScrollMagic" src="https://scrollmagic.io/assets/img/demo_tophat.png" width="60" />
  </a>
  <a href="https://greensock.com/">
    <img alt="GreenSock" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/16327/logo-man.svg" width="60" />
  </a>
</p>
<h1 align="center">
  ScrollMagic & GreenSock combo
</h1>

Below is a copy of the error that I'm receiving during a `gatsby build`. Local server works just fine.

```shell
  success open and validate gatsby-configs - 0.019s
  success load plugins - 0.376s
  success onPreInit - 0.003s
  success delete html and css files from previous builds - 0.011s
  success initialize cache - 0.007s
  success copy gatsby files - 0.039s
  success onPreBootstrap - 0.008s
  success createSchemaCustomization - 0.005s
  success source and transform nodes - 0.062s
  success building schema - 0.234s
  success createPages - 0.001s
  success createPagesStatefully - 0.038s
  success onPreExtractQueries - 0.001s
  success update schema - 0.028s
  success extract queries from components - 0.221s
  success write out requires - 0.004s
  success write out redirect data - 0.003s
  success onPostBootstrap - 0.002s
  ⠀
  info bootstrap finished - 2.994 s
  ⠀
  success Building production JavaScript and CSS bundles - 9.744s
  success Rewriting compilation hashes - 0.003s
  success run queries - 9.843s - 3/3 0.30/s
  failed Building static HTML for pages - 1.047s

  ERROR #95313

  Building static HTML failed

  See our docs page for more info on this error: https://gatsby.dev/debug-html


    2 | import { TweenLite as Tween, TimelineMax as Timeline } from "gsap"
    3 |
  > 4 | ScrollMagic.Scene.addOption("tweenChanges", false, function(val) {
      |                   ^
    5 |   return !!val
    6 | })
    7 |


    WebpackError: TypeError: Cannot read property 'addOption' of undefined

    - magic.anim.js:4 Module../src/utils/magic.anim.js
      src/utils/magic.anim.js:4:19

    - index.js:1 Module../src/pages/index.js
      src/pages/index.js:1:1

    - CSSPlugin.js:158 Module._compile
      node_modules/gsap/CSSPlugin.js:158:1

    - CSSPlugin.js:169 Object.Module._extensions..js
      node_modules/gsap/CSSPlugin.js:169:2
```

_Have another more specific idea? You may want to check out our vibrant collection of [official and community-created starters](https://www.gatsbyjs.org/docs/gatsby-starters/)._

## 🚀 Quick start

1.  **Clone my repo**

    Use the Gatsby CLI to create a new site, specifying the hello-world starter.

    ```shell
    git clone git@github.com:mhigley/ScrollMagicGSAP.git
    ```

1.  **Change into directory, install, and run develop**

    Navigate into your new site’s directory and start it up.

    ```shell
    cd ScrollMagicGSAP && npm i && gatsby develop
    gatsby develop
    ```

    Your site is now running at `http://localhost:8000`!

    **Note: Node version 12.8.1 may be required to install correctly**

    ```shell
    nvm use 12.8.1
    ```

1.  **Run the build to see the errors**

    Your site is now running at `http://localhost:8000`!

    ```shell
    nvm use 12.8.1
    ```

    See above for error. Help me Dev Jedis. You're my only hope.
