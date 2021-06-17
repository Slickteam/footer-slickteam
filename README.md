# \<footer-slickteam>

This webcomponent follows the [open-wc](https://github.com/open-wc/open-wc) recommendation.

## Installation
```bash
npm i @slickteam/footer-slickteam
```

## Usage

- **Html vanilla**

```html
<script type="module">
  import '@slickteam/footer-slickteam/index.js';
</script>

<footer-slickteam></footer-slickteam>
```

- **Vue.js**

```html
<template>
  <div>
    <h1>Test Page</h1>
    <footer-slickteam></footer-slickteam>
  </div>
</template>

<script>
import '@slickteam/footer-slickteam';

export default {
  name: 'TestPage'
}
</script>

<style scoped>
/* Put CSS */
</style>

```

### Template

``` html
    <footer-slickteam
      textCredit="Test Slickteam"
      hideTwitterIcon
      urlTwitterIcon="https://slickteam.fr"
      hideFacebookIcon
      urlFacebookIcon="https://slickteam.fr"
      hideLinkedinIcon
      urlLinkedinIcon="https://slickteam.fr"
      hideGithubIcon
      urlGithubIcon="https://slickteam.fr"
      hideMediumIcon
      urlMediumIcon="https://slickteam.fr"
    ></footer-slickteam>
```
### Options

Attribute           | Type               | Description
---                 | ---                | ---
`textCredit`        | String             | Content of text in left of footer
`hideTwitterIcon`   | Boolean            | Hide Twitter icon
`urlTwitterIcon`    | String             | Url of Twitter icon
`hideFacebookIcon`  | Boolean            | Hide Facebook icon
`urlFacebookIcon`   | String             | Url of Facebook icon
`hideLinkedinIcon`  | Boolean            | Hide Linkedin icon
`urlLinkedinIcon`   | String             | Url of Linkedin icon
`hideGithubIcon`    | Boolean            | Hide Github icon
`urlGithubIcon`     | String             | Url of Github icon
`hideMediumIcon`    | Boolean            | Hide Medium Icon
`urlMediumIcon`     | String             | Url of Medium icon

## Development
### Linting with ESLint, Prettier, and Types
To scan the project for linting errors, run
```bash
npm run lint
```

You can lint with ESLint and Prettier individually as well
```bash
npm run lint:eslint
```
```bash
npm run lint:prettier
```

To automatically fix many linting errors, run
```bash
npm run format
```

You can format using ESLint and Prettier individually as well
```bash
npm run format:eslint
```
```bash
npm run format:prettier
```

### Testing with Web Test Runner
To run the suite of Web Test Runner tests, run
```bash
npm run test
```

To run the tests in watch mode (for &lt;abbr title=&#34;test driven development&#34;&gt;TDD&lt;/abbr&gt;, for example), run

```bash
npm run test:watch
```

### Demoing with Storybook
To run a local instance of Storybook for your component, run
```bash
npm run storybook
```

To build a production version of Storybook, run
```bash
npm run storybook:build
```


### Tooling configs

For most of the tools, the configuration is in the `package.json` to reduce the amount of files in your project.

If you customize the configuration a lot, you can consider moving them to individual files.

### Local Demo with `web-dev-server`
```bash
npm start
```
To run a local development server that serves the basic demo located in `demo/index.html`
