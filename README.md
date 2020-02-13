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

1.  **Create a Gatsby site.**

    Use the Gatsby CLI to create a new site, specifying the hello-world starter.

    ```shell
    # create a new Gatsby site using the hello-world starter
    gatsby new my-hello-world-starter https://github.com/gatsbyjs/gatsby-starter-hello-world
    ```

1.  **Start developing.**

    Navigate into your new site’s directory and start it up.

    ```shell
    cd my-hello-world-starter/
    gatsby develop
    ```

1.  **Open the source code and start editing!**

    Your site is now running at `http://localhost:8000`!

    _Note: You'll also see a second link: _`http://localhost:8000/___graphql`_. This is a tool you can use to experiment with querying your data. Learn more about using this tool in the [Gatsby tutorial](https://www.gatsbyjs.org/tutorial/part-five/#introducing-graphiql)._

    Open the `my-hello-world-starter` directory in your code editor of choice and edit `src/pages/index.js`. Save your changes and the browser will update in real time!

## 🧐 What's inside?

A quick look at the top-level files and directories you'll see in a Gatsby project.

    .
    ├── node_modules
    ├── src
    ├── .gitignore
    ├── .prettierrc
    ├── gatsby-browser.js
    ├── gatsby-config.js
    ├── gatsby-node.js
    ├── gatsby-ssr.js
    ├── LICENSE
    ├── package-lock.json
    ├── package.json
    └── README.md

1.  **`/node_modules`**: This directory contains all of the modules of code that your project depends on (npm packages) are automatically installed.

2.  **`/src`**: This directory will contain all of the code related to what you will see on the front-end of your site (what you see in the browser) such as your site header or a page template. `src` is a convention for “source code”.

3.  **`.gitignore`**: This file tells git which files it should not track / not maintain a version history for.

4.  **`.prettierrc`**: This is a configuration file for [Prettier](https://prettier.io/). Prettier is a tool to help keep the formatting of your code consistent.

5.  **`gatsby-browser.js`**: This file is where Gatsby expects to find any usage of the [Gatsby browser APIs](https://www.gatsbyjs.org/docs/browser-apis/) (if any). These allow customization/extension of default Gatsby settings affecting the browser.

6.  **`gatsby-config.js`**: This is the main configuration file for a Gatsby site. This is where you can specify information about your site (metadata) like the site title and description, which Gatsby plugins you’d like to include, etc. (Check out the [config docs](https://www.gatsbyjs.org/docs/gatsby-config/) for more detail).

7.  **`gatsby-node.js`**: This file is where Gatsby expects to find any usage of the [Gatsby Node APIs](https://www.gatsbyjs.org/docs/node-apis/) (if any). These allow customization/extension of default Gatsby settings affecting pieces of the site build process.

8.  **`gatsby-ssr.js`**: This file is where Gatsby expects to find any usage of the [Gatsby server-side rendering APIs](https://www.gatsbyjs.org/docs/ssr-apis/) (if any). These allow customization of default Gatsby settings affecting server-side rendering.

9.  **`LICENSE`**: Gatsby is licensed under the MIT license.

10. **`package-lock.json`** (See `package.json` below, first). This is an automatically generated file based on the exact versions of your npm dependencies that were installed for your project. **(You won’t change this file directly).**

11. **`package.json`**: A manifest file for Node.js projects, which includes things like metadata (the project’s name, author, etc). This manifest is how npm knows which packages to install for your project.

12. **`README.md`**: A text file containing useful reference information about your project.

## 🎓 Learning Gatsby

Looking for more guidance? Full documentation for Gatsby lives [on the website](https://www.gatsbyjs.org/). Here are some places to start:

- **For most developers, we recommend starting with our [in-depth tutorial for creating a site with Gatsby](https://www.gatsbyjs.org/tutorial/).** It starts with zero assumptions about your level of ability and walks through every step of the process.

- **To dive straight into code samples, head [to our documentation](https://www.gatsbyjs.org/docs/).** In particular, check out the _Guides_, _API Reference_, and _Advanced Tutorials_ sections in the sidebar.

## 💫 Deploy

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/gatsbyjs/gatsby-starter-hello-world)

<!-- AUTO-GENERATED-CONTENT:END -->
