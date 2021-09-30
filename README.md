# \<footer-slickteam>

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

### Demo with Storybook

Before running story, you need to generate "built" webcomponent
```bash
npm run storybook
```

To run a local instance of Storybook for your component, run
```bash
npm run storybook
```

To build a production version of Storybook, run
```bash
npm run storybook:build
```

### Local Demo
```bash
npm run dev
```
To run a local development server that serves the basic demo located in `demo/index.html`
