const ThaiBaht = require('thai-baht-text') // for ES5

// This module is very simple to use
// You just put the number that you want to convert into the first parameter
// LIKE THIS --> ThaiBaht(Number)

let money = 10050
let moneyText = ThaiBaht(money)

console.log(moneyText)
// OUTPUT: หนึ่งหมื่นห้าสิบบาทถ้วน

money = 12345678988888.25

console.log(ThaiBaht(money))
// OUTPUT: สิบสองล้านล้านสามแสนสี่หมื่นห้าพ้นหกร้อยเจ็ดสิบแปดล้านเก้าแสนแปดหมื่นแปดพ้นแปดร้อยแปดสิบแปดบาทยี่สิบห้าสตางค์

// You can see that this module can handle big number, but
// it must not over than 9007199254740991 that is MAX_SAFE_INTEGER of javascript.

// BUT!!! If your number is too long and javascript cannot wait a computer process
// I have provide the function to handle it

// You can use .async function for wait result until computer processed
// LIKE THIS --> ThaiBaht.async(Number)

money = 9007199254740991

ThaiBaht.async(money)
	.then((moneyTextOutput) => {
		console.log(moneyTextOutput)
		// OUTPUT: เก้าพ้นเจ็ดล้านล้านเอ็ดแสนเก้าหมื่นเก้าพ้นสองร้อยห้าสิบสี่ล้านเจ็ดแสนสี่หมื่นเก้าร้อยเก้าสิบเอ็ดบาทถ้วน
	})

// You need to use 'then' after you call .async function
// It will return the data when process is finished