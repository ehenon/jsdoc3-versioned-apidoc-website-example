# JSDoc 3 versioned API doc website example

Project serving as an example for using [JSDoc 3](https://jsdoc.app/) and generating a versioned API doc website via [GitHub Pages](https://pages.github.com/) and the [Docdash](https://github.com/clenemt/docdash) template theme.

## Process

A sample documented source code is created in the `/src` folder of the repository.

At each release creation, a GitHub Action is automatically launched to update the documentation website. This action:
- Checkouts the code
- Retrieves the new release tag name
- Generates the documentation from the `jsdoc.conf.json` configuration file, using the [Docdash](https://github.com/clenemt/docdash) template theme and selecting the `README.md` file of the project as content for the homepage
- Pushes the new documentation files into the appropriate `docs/vX.X.X` folder of the `gh-pages` website branch
- Updates the main page of the API doc website to handle the new release tag

## Links

- [GitHub repository](https://github.com/ehenon/jsdoc3-versioned-apidoc-website-example)
- [Documentation website](https://ehenon.github.io/jsdoc3-versioned-apidoc-website-example)
- ["Update documentation" GitHub Action](https://github.com/ehenon/jsdoc3-versioned-apidoc-website-example/blob/main/.github/workflows/jsdoc-action.yml)
