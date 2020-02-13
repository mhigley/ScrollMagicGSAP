exports.onCreateWebpackConfig = ({ stage, loaders, actions }) => {
  // Custom loader is no longer needed because we dynamically load the Magic.js component with react-loadable
  // if (stage === "build-html") {
  //   actions.setWebpackConfig({
  //     module: {
  //       rules: [
  //         {
  //           test: /Magic.js/,
  //           use: loaders.raw(),
  //         },
  //       ],
  //     },
  //   })
  // }
}

exports.onCreateNode = args => {
  // console.log(args)
}
