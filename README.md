# Thai Baht Text JS

## About Thai-Baht-Text JS
Convert number to Thai Baht as Text
แปลง เลข ให้เป็น หน่วยบาทไทย

## Installation
#### วิธีติดตั้ง
```bash
npm install thai-baht-text --save
```
##### or
```bash
yarn add thai-baht-text
```


## Usage
#### วิธีการใช้งาน

#### Javascript ES5

```javascript
const ThaiBaht = require('thai-baht-text') // for ES5

let money = 10050
let moneyText = ThaiBaht(money)

console.log(moneyText)
// OUTPUT: หนึ่งหมื่นห้าสิบบาทถ้วน

money = 12345678988888.25

console.log(ThaiBaht(money))
// OUTPUT: สิบสองล้านล้านสามแสนสี่หมื่นห้าพ้นหกร้อยเจ็ดสิบแปดล้านเก้าแสนแปดหมื่นแปดพ้นแปดร้อยแปดสิบแปดบาทยี่สิบห้าสตางค์

money = 9007199254740991

ThaiBaht.async(money)
	.then((moneyTextOutput) => {
		console.log(moneyTextOutput)
		// OUTPUT: เก้าพ้นเจ็ดล้านล้านเอ็ดแสนเก้าหมื่นเก้าพ้นสองร้อยห้าสิบสี่ล้านเจ็ดแสนสี่หมื่นเก้าร้อยเก้าสิบเอ็ดบาทถ้วน
	})
```
#### More infomation [ES5 Example](https://github.com/antronic/thai-baht-text-js/)
___

#### Javascript ES6

```javascript
import ThaiBaht from 'thai-baht-text' // for ES6

let money = 10050
let moneyText = ThaiBaht(money)

console.log(moneyText)
// OUTPUT: หนึ่งหมื่นห้าสิบบาทถ้วน

money = 12345678988888.25

console.log(ThaiBaht(money))
// OUTPUT: สิบสองล้านล้านสามแสนสี่หมื่นห้าพ้นหกร้อยเจ็ดสิบแปดล้านเก้าแสนแปดหมื่นแปดพ้นแปดร้อยแปดสิบแปดบาทยี่สิบห้าสตางค์

money = 9007199254740991

ThaiBaht.async(money)
	.then((moneyTextOutput) => {
		console.log(moneyTextOutput)
		// OUTPUT: เก้าพ้นเจ็ดล้านล้านเอ็ดแสนเก้าหมื่นเก้าพ้นสองร้อยห้าสิบสี่ล้านเจ็ดแสนสี่หมื่นเก้าร้อยเก้าสิบเอ็ดบาทถ้วน
	})
```
#### More infomation [ES6 Example](https://github.com/antronic/thai-baht-text-js/)

___

#### CAUTION!

> You can use number that doesn't over than 9007199254740991<br />
> that is MAX_SAFE_INTEGER of javascript.

> คุณสามารถใส่เลขได้ไม่เกิน 9007199254740991<br />
> ​ซึ่งเป็น MAX_SAFE_INTEGER ของ javascript
___
## Library & Development Tools
* Javascript ES6
* [Async](https://github.com/caolan/async)
* Babel

## License
The Thai-Baht-Text JS is open-sourced software licensed under the [MIT license](https://opensource.org/licenses/MIT).
___
<br /><br /><br />
แปลง เลข เป็น บาทไทย, 

thai baht text javascript,

thai baht text js
