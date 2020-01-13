exports.onCreateWebpackConfig = ({ stage, loaders, actions }) => {
  if (stage === "build-html") {
    actions.setWebpackConfig({
      module: {
        rules: [
          {
            test: /scrollmagic/,
            use: loaders.null(),
          },
          {
            test: /ScrollMagic/,
            use: loaders.null(),
          },
        ],
      },
    })
  }
}

exports.onCreateNode = args => {
  // console.log(args)
}
