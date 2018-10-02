/* eslint-disable import/no-extraneous-dependencies */

const THBText = require('thai-baht-text') // for ES5

// This module is very simple to use
// You just put the number that you want to convert into the first parameter
// LIKE THIS --> THBText(Number)

let money = 10050
const moneyText = THBText(money)

console.log(moneyText)
// OUTPUT: หนึ่งหมื่นห้าสิบบาทถ้วน

money = 12345678988888.50

console.log(THBText(money))
// OUTPUT: สิบสองล้านล้านสามแสนสี่หมื่นห้าพันหกร้อยเจ็ดสิบแปดล้านเก้าแสนแปดหมื่นแปดพันแปดร้อยแปดสิบแปดบาทห้าสิบสตางค์

// You can see that this module can handle big number, but
// it must not over than 9007199254740991 that is MAX_SAFE_INTEGER of javascript.
