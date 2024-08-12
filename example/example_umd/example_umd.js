/* eslint-disable import/no-extraneous-dependencies */

// This module is very simple to use
// You just put the number that you want to convert into the first parameter
// LIKE THIS --> ThaiBahtText(Number)

const money1 = 10050
const moneyText1 = ThaiBahtText(money1)

console.log(moneyText1)
// OUTPUT: หนึ่งหมื่นห้าสิบบาทถ้วน

const money2 = 12345678988888.50
const moneyText2 = ThaiBahtText(money2)

console.log(moneyText2)
// OUTPUT: สิบสองล้านล้านสามแสนสี่หมื่นห้าพันหกร้อยเจ็ดสิบแปดล้านเก้าแสนแปดหมื่นแปดพันแปดร้อยแปดสิบแปดบาทห้าสิบสตางค์

// Display on browser
const box1 = document.createElement('div')
box1.appendChild(
  document.createTextNode(`${money1} = ${moneyText1}`)
)

const box2 = document.createElement('div')
box2.appendChild(
  document.createTextNode(`${money2} = ${moneyText2}`)
)

document.body.appendChild(box1)
document.body.appendChild(box2)

// You can see that this module can handle big number, but
// it must not over than 9007199254740991 that is MAX_SAFE_INTEGER of javascript.
