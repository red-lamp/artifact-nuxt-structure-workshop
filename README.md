# artifacts-nuxt-structure

## Build Setup

```bash
# install dependencies
$ npm install

# serve with hot reload at localhost:3000
$ npm run dev

# build for production and launch server
$ npm run build
$ npm run start

# generate static project
$ npm run generate
```

For detailed explanation on how things work, check out [Nuxt.js docs](https://nuxtjs.org).

---

## Component usage workshop

### Set up workshop
1. Clone project at https://github.com/red-lamp/artifact-nuxt-structure-workshop
2. Checkout to "workshop/component-uasge" branch
3. npm install

### Favicon, Meta data and Manifest
1. Go to nuxt.config.js
2. Set Meta data
3. Set Favicon
4. Set Manifest
    - Description at https://web.dev/add-manifest/ and https://thangman22.medium.com/%E0%B8%A7%E0%B9%88%E0%B8%B2%E0%B8%81%E0%B8%B1%E0%B8%99%E0%B8%94%E0%B9%89%E0%B8%A7%E0%B8%A2-manifest-%E0%B8%81%E0%B8%B1%E0%B8%9A-progressive-web-apps-c2fe991251a7

### Style Guides
1. SASS Guidelines at https://sass-guidelin.es/
2. Select and Install CSS Framework use to be base style eg https://bulma.io/
3. Reset browser and CSS framework html style
    - Bulma use [Normalize.css](https://necolas.github.io/normalize.css/) for makes browsers render all elements more consistently
    - Example reset all elements at https://clarle.github.io/yui3/yui/docs/cssnormalize/normalize-basic-example.html
4. Embed font
    - Download font at https://fonts.google.com/
    - Generate webfont at https://www.fontsquirrel.com/tools/webfont-generator or https://transfonter.org/
    - Method at https://www.designil.com/how-to-embed-web-font.html
5. Set style guides
6. Set global style

### Layout

### Page

### Component
- [CSS Selector](https://www.w3schools.com/cssref/css_selectors.asp)
1. Container
2. Grid
    - Display eg. inline, inline-block, block, flex
    - Box sizing eg. content-box, border-box
    - Learning flex at https://css-tricks.com/snippets/css/a-guide-to-flexbox/ and https://flexboxfroggy.com/
3. Button
4. Input
5. Navigation bar
6. Hero banner
7. Our service
8. Contact
9. Footer

### Device and Browser conditions
- [mobile-device-detect](https://github.com/duskload/mobile-device-detect)
