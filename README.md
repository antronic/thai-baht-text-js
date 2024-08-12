# Thai Baht Text JS

[![NPM Download](https://img.shields.io/npm/dt/thai-baht-text.svg?style=flat-square)](https://www.npmjs.com/package/thai-baht-text)
[![codecov-svg](https://img.shields.io/codecov/c/github/antronic/thai-baht-text-js.svg?style=flat-square)](https://codecov.io/gh/antronic/thai-baht-text-js)
[![NPM Version](https://img.shields.io/npm/v/thai-baht-text.svg?style=flat-square)](https://www.npmjs.com/package/thai-baht-text)
[![license-svg](https://img.shields.io/badge/license-MIT-blue.svg?style=flat-square)](https://opensource.org/licenses/MIT)
![ts](https://flat.badgen.net/badge/Built%20With/TypeScript/blue)

![Thai Baht Text JS](/content/thai-baht-text-cover.jpg)

[Installation](#%EF%B8%8F-installation--%E0%B8%A7%E0%B8%B4%E0%B8%98%E0%B8%B5%E0%B8%95%E0%B8%B4%E0%B8%94%E0%B8%95%E0%B8%B1%E0%B9%89%E0%B8%87) | [Usage](#%EF%B8%8F-usage--%E0%B8%A7%E0%B8%B4%E0%B8%98%E0%B8%B5%E0%B8%81%E0%B8%B2%E0%B8%A3%E0%B9%83%E0%B8%8A%E0%B9%89%E0%B8%87%E0%B8%B2%E0%B8%99)


>### Now, Thai Baht text supports TypeScript 🎉!!

Thai Baht Text JS converts numbers into Thai text. It provides flexibility as a cross-platform library for both browser and Node.js, written in TypeScript.

```Javascript
> 10050
// หนึ่งหมื่นห้าสิบบาทถ้วน
```

## ⚒️ Installation | วิธีติดตั้ง
```bash
npm install thai-baht-text --save
```
or
```bash
yarn add thai-baht-text
```
<!--
NOT AVAILABLE YET!
##### or
```bash
bower install thai-baht-text --save
``` -->


## ⚙️ Usage | วิธีการใช้งาน

**[Live Demo](#)** (Coming soon)

### Node.js
```javascript
// ----CommonJS----
const ThaiBahtText = require('thai-baht-text') // for CommonJS
// ----ES Module----
import ThaiBahtText from 'thai-baht-text'

let money = 10050
let moneyText = ThaiBahtText(money)

console.log(moneyText)
// OUTPUT: หนึ่งหมื่นห้าสิบบาทถ้วน

money = 12345678988888.50

console.log(ThaiBahtText(money))
// OUTPUT: สิบสองล้านล้านสามแสนสี่หมื่นห้าพันหกร้อยเจ็ดสิบแปดล้านเก้าแสนแปดหมื่นแปดพันแปดร้อยแปดสิบแปดบาทห้าสิบสตางค์
```

### In the browser

Since Thai Baht Text JS is built as a UMD module, you can simply add `thai-baht-text.min.js` as the `src` in a script tag in the browser without needing to install any additional libraries or polyfills.

```html
  ...
  <script src="https://cdn.jsdelivr.net/npm/thai-baht-text/dist/thai-baht-text.min.js"></script>
  <script>
    console.log(ThaiBahtText(12500.25))
    // หนึ่งหมื่นสองพันห้าร้อยบาทยี่สิบห้าสตางค์
  </script>
</body>
```

### More infomation
- **[CommonJS Example](/example/example_es5.js)**
- **[ES Module Example](/example/example_es6.js)**
- **[Browser version (UMD)](/example/example_umd)**

## 🧑‍💻 Development
* `npm run test` to run all tests in this project
* `npm run test:watch` to run all tests in watch mode. This allows us to develop/refactor code and get fast feedback to ensure we don't break anything.
* `npm run buid` to compile and minify the project, then output it to the `dist` directory.

<!-- ## Library & Development Tools
* [Stryker](https://stryker-mutator.io/) -->

## 🗺️ Features plan
- [ ] Return just only number text without unit
- [ ] Convert to Thai number


## License
The Thai-Baht-Text JS is open-sourced software licensed under the [MIT license](https://opensource.org/licenses/MIT).

## ✉️ Dear you,
If you find any bugs or have a feature request, please open a pull request or create an issue.


<br /><br /><br />
___
แปลง เลข เป็น บาทไทย,

thai baht text javascript,

thai baht text js
that-baht-text.js
that-baht-text.js typescript

Convert number to Thai Baht as Text

แปลงเลขให้เป็นหน่วยบาทไทย