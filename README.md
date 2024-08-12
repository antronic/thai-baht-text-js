# Thai Baht Text JS

[![NPM Download](https://img.shields.io/npm/dt/thai-baht-text.svg?style=flat-square)](https://www.npmjs.com/package/thai-baht-text)
[![codecov-svg](https://img.shields.io/codecov/c/github/antronic/thai-baht-text-js.svg?style=flat-square)](https://codecov.io/gh/antronic/thai-baht-text-js)
[![NPM Version](https://img.shields.io/npm/v/thai-baht-text.svg?style=flat-square)](https://www.npmjs.com/package/thai-baht-text)
[![license-svg](https://img.shields.io/badge/license-MIT-blue.svg?style=flat-square)](https://opensource.org/licenses/MIT)
![ts](https://flat.badgen.net/badge/Built%20With/TypeScript/blue)

[Installation](#installation) | [Usage](#usage)


>### Now, Thai Baht text supports TypeScript 🎉!!

Thai Baht Text JS converts numbers into Thai text. It provides flexibility as a cross-platform library for both browser and Node.js, written in TypeScript.

In the browser, you can simply add `thai-baht-text.min.js` in a script tag without needing to install any additional libraries or polyfills.

```Javascript
> 10050
// หนึ่งหมื่นห้าสิบบาทถ้วน
```

## Installation | วิธีติดตั้ง
```bash
npm install thai-baht-text --save
```
##### or
```bash
yarn add thai-baht-text
```
<!--
NOT AVAILABLE YET!
##### or
```bash
bower install thai-baht-text --save
``` -->


## Usage | วิธีการใช้งาน

#### Javascript ES5

```javascript
const ThaiBahtText = require('thai-baht-text') // for ES5

let money = 10050
let moneyText = ThaiBahtText(money)

console.log(moneyText)
// OUTPUT: หนึ่งหมื่นห้าสิบบาทถ้วน

money = 12345678988888.50

console.log(ThaiBahtText(money))
// OUTPUT: สิบสองล้านล้านสามแสนสี่หมื่นห้าพันหกร้อยเจ็ดสิบแปดล้านเก้าแสนแปดหมื่นแปดพันแปดร้อยแปดสิบแปดบาทห้าสิบสตางค์
```
#### More infomation [ES5 Example](/example/example_es5.js)
___

#### Javascript ES6

```javascript
import ThaiBahtText from 'thai-baht-text'

let money = 10050
const moneyText = ThaiBahtText(money)

console.log(moneyText)
// OUTPUT: หนึ่งหมื่นห้าสิบบาทถ้วน

money = 12345678988888.50

console.log(ThaiBahtText(money))
// OUTPUT: สิบสองล้านล้านสามแสนสี่หมื่นห้าพันหกร้อยเจ็ดสิบแปดล้านเก้าแสนแปดหมื่นแปดพันแปดร้อยแปดสิบแปดบาทห้าสิบสตางค์
```

#### More infomation [ES6 Example](/example/example_es6.js)


#### More infomation [Browser version (UMD)](/example/example_umd)

#### CAUTION!

You can use number that doesn't over than `9007199254740991` that is `MAX_SAFE_INTEGER` of javascript.

คุณสามารถใส่เลขได้ไม่เกิน `9007199254740991` ซึ่งเป็น `MAX_SAFE_INTEGER` ของ javascript
___

## Development
* `npm run test` to run all tests in this project
* `npm run test:watch` to run all tests in watch mode. This allows us to develop/refactor code and get fast feedback to ensure we don't break anything.

## License
The Thai-Baht-Text JS is open-sourced software licensed under the [MIT license](https://opensource.org/licenses/MIT).

## Ending message
If you found bugs or some missing point, please send pull request back or open an issue.

Thank you so much 😃
<br /><br />

Regards,

Jirachai Chansivanon
___
<br /><br /><br />
แปลง เลข เป็น บาทไทย,

thai baht text javascript,

thai baht text js
that-baht-text.js
that-baht-text.js typescript

Convert number to Thai Baht as Text

แปลงเลขให้เป็นหน่วยบาทไทย