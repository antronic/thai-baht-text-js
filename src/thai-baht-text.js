/**
 * @author Jirachai Chansivanon <antronic.inc@gmail.com>
 * @see {@link https://github.com/antronic/that-baht-text-js|GitHub}
 */

// options

const primaryCurrency = 'บาท'
const secondaryCurrency = 'สตางค์'
const fullMoney = 'ถ้วน'

const numbersText = 'ศูนย์,หนึ่ง,สอง,สาม,สี่,ห้า,หก,เจ็ด,แปด,เก้า,สิบ'.split(',')
const unitsText = 'สิบ,ร้อย,พัน,หมื่น,แสน,ล้าน'.split(',')

const getFractionalDigits = (numberInput) => {
	return numberInput.split('.')[1]
}

const hasFractionalDigits = (numberInput) => {
	return numberInput !== undefined && numberInput !== '00'
}

const getIntegerDigits = (numberInput) => {
	return numberInput.split('.')[0]
}

const reverseNumber = (number) => {
	const numberStr = number.toString()
	return numberStr.split('').reverse().join('')
}

const isZeroValue = (number) => {
	return number == 0
}

const isUnitPostition = (position) => {
	return position == 0
}

const isMillionsPosition = (position) => {
	return (position >= 6 && position % 6 === 0)
}

const getBathUnit = (position, number) => {

	let unitText = ""

	if (!isUnitPostition(position)) {
		unitText = unitsText[Math.abs(position - 1) % 6]
	}

	if( isZeroValue(number) && !isMillionsPosition(position)){
		unitText = ""
	}

	return unitText
}

// convert function without async
const convert = (numberInput) => {

	const numberReverse = reverseNumber(numberInput)
	let textOutput = ''

	numberReverse.split('').map((number, i) => {
		const currentNumber = Number(number)
		let numberText = numbersText[currentNumber]

		let unitText
		if (i % 6 === 1 && currentNumber <= 2) {
			if (currentNumber === 2) {
				numberText = 'ยี่'
			} else if (i > 6 && currentNumber === 1) {
				numberText = ''
			} else {
				numberText = ''
			}
		}

		if (i >= 6 && i % 6 === 0) {
			if (currentNumber === 1) {
				if (i + 1 < numberReverse.length) {
					numberText = 'เอ็ด'
				}
			}
		}

		if (numberReverse.length > 1 && i === 0 && currentNumber === 1) {
			numberText = 'เอ็ด'
		}

		if (currentNumber === 0) {
			unitText = (i >= 6 && i % 6 === 0) ? unitText : ''
			numberText = ''
		}

		unitText = getBathUnit(i, number)
		textOutput = numberText + unitText + textOutput
		return number
	})
	return textOutput
}

const convertFullMoney = (numberInput) => {
	const numberStr = parseFloat(numberInput).toFixed(2)

	const integerDigits = getIntegerDigits(numberStr)
	const fractionalDigits = getFractionalDigits(numberStr)

	let textOutput = convert(integerDigits)

	if (hasFractionalDigits(fractionalDigits)) {
		textOutput = `${textOutput}${primaryCurrency}${convert(fractionalDigits)}${secondaryCurrency}`
	} else {
		textOutput = `${textOutput}${primaryCurrency}${fullMoney}`
	}
	return textOutput
}

// export default as convert without async
export default convertFullMoney

// exprot convert with async
exports.async = numberInput => (
	new Promise(resolve => resolve(convertFullMoney(numberInput)))
)

// export for ES5
module.exports = exports.default
module.exports.async = exports.async
