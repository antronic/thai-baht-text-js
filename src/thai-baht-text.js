/**
 * @author Jirachai Chansivanon <antronic.inc@gmail.com>
 * @see {@link https://github.com/antronic/that-baht-text-js|GitHub}
 */

import { eachOf } from 'async'

// options

const primaryCurrency = 'บาท'
const secondaryCurrency = 'สตางค์'
const fullMoney = 'ถ้วน'

const numbersText = 'ศูนย์,หนึ่ง,สอง,สาม,สี่,ห้า,หก,เจ็ด,แปด,เก้า,สิบ'.split(',')
const unitsText = 'สิบ,ร้อย,พัน,หมื่น,แสน,ล้าน'.split(',')


// convert function without async

const convert = (numberInput) => {
	let numberStr = numberInput.toString()
	numberStr = numberStr.split('').reverse().join('')

	let millionSubfix = ''
	let textOutput = ''

	numberStr.split('').map((number, i) => {

		const currentNumber = Number(number)
		let numberText = numbersText[currentNumber]
		let unitText = ''

		if (i !== 0) {
			unitText = unitsText[Math.abs(i - 1) % 6]
		}

		if (i % 6 === 1 && currentNumber <= 2) {
			if (currentNumber === 2) {
				unitText = 'สิบ'
				numberText = 'ยี่'
			} else if ( i > 6 && currentNumber === 1) {
				unitText = 'สิบ'
				numberText = ''
			} else {
				numberText = ''
			}
		}

		if (i >= 6 && i % 6 === 0) {
			if (currentNumber === 1) {
				if (i + 1 < numberStr.length) {
					numberText = 'เอ็ด'
				}
			}
		}

		if (numberStr.length > 1 && currentNumber === 1) {
			numberText = 'เอ็ด'
		}

		if (currentNumber === 0) {
			unitText = ''
			numberText = ''
		}

		if (i >= 6 && i % 6 === 0) {
			const millionCount = Math.floor(i / 12)
			millionSubfix = 'ล้าน'.repeat(millionCount)
		} else {
			millionSubfix = ''
		}

		textOutput = numberText + unitText + millionSubfix  + textOutput
	})
	return textOutput
}

// convert function with async

const convertAsync = (numberInput) => {
	let numberStr = numberInput.toString()
	numberStr = numberStr.split('').reverse().join('')

	let millionSubfix = ''
	let textOutput = ''

	return new Promise(
		(done) => {
			eachOf(numberStr, (number, i, callback) => {

				const currentNumber = Number(number)
				let numberText = numbersText[currentNumber]
				let unitText = ''

				// DEBUG
				// console.log(`${i} -> ${i %7} -> ${currentNumber} -> ${Math.abs(i - 1) % 6} -> ${unitsText[i - 1 % 6]}`)

				if (i !== 0) {
					unitText = unitsText[Math.abs(i - 1) % 6]
				}

				if (i % 6 === 1 && currentNumber <= 2) {
					if (currentNumber === 2) {
						unitText = 'สิบ'
						numberText = 'ยี่'
					} else if ( i > 6 && currentNumber === 1) {
						unitText = 'สิบ'
						numberText = ''
					} else {
						numberText = ''
					}
				}

				if (i >= 6 && i % 6 === 0) {
					if (currentNumber === 1) {
						if (i + 1 < numberStr.length) {
							numberText = 'เอ็ด'
						}
					}
				}

				if (currentNumber === 0) {
					unitText = ''
					numberText = ''
				}

				if (numberStr.length > 1 && currentNumber === 1) {
					numberText = 'เอ็ด'
				}

				if (i >= 6 && i % 6 === 0) {
					const millionCount = Math.floor(i / 12)
					millionSubfix = 'ล้าน'.repeat(millionCount)
				} else {
					millionSubfix = ''
				}

				textOutput = numberText + unitText + millionSubfix  + textOutput
				callback()
			}, () => {
				done(textOutput)
			})
		}
	)
}

// export default as convert without async

export default (numberInput) => {
	let numberStr = numberInput.toString()

	const decimalStr = numberStr.split('.')[0]
	const floatingStr = numberStr.split('.')[1]

	let textOutput = ''

	textOutput = convert(decimalStr)
	if (floatingStr !== undefined) {
		textOutput = `${textOutput}${primaryCurrency}${convert(floatingStr)}${secondaryCurrency}`
	} else {
		textOutput = `${textOutput}${primaryCurrency}${fullMoney}`
	}

	return textOutput
}

// exprot convert with async

exports.convertAsync = (numberInput) => {
	let numberStr = numberInput.toString()

	const decimalStr = numberStr.split('.')[0]
	const floatingStr = numberStr.split('.')[1]

	let textOutput = ''

	return new Promise(
		(done) => {
			convertAsync(decimalStr).then((str) => {
				textOutput = str
				if (floatingStr !== undefined) {
					convertAsync(floatingStr)
						.then((floatingStrOutput) => {
							textOutput = `${textOutput}${primaryCurrency}${floatingStrOutput}${secondaryCurrency}`
							done(textOutput)
						})
				} else {
					textOutput = `${textOutput}${primaryCurrency}${fullMoney}`
					done(textOutput)
				}
			})
		}
	)
}


// export for ES5

module.exports = exports['default']
module.exports.async = exports.convertAsync