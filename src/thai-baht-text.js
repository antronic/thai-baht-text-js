/**
 * @author Jirachai Chansivanon <antronic.inc@gmail.com>
 * @see {@link https://github.com/antronic/that-baht-text-js|GitHub}
 */

// options

const MAX_POSITION = 6
const UNIT_POSITION = 0
const TEN_POSITION = 1

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
	return position == UNIT_POSITION
}

const isTenPostition = (position) => {
	return position % MAX_POSITION == TEN_POSITION
}

const isMillionsPosition = (position) => {
	return (position >= MAX_POSITION && position % MAX_POSITION == 0)
}

const isLastPosition = (position, lengthOfDigits) => {
	return position + 1 < lengthOfDigits
}

const getBathUnit = (position, number) => {

	let unitText = ""

	if (!isUnitPostition(position)) {
		unitText = unitsText[Math.abs(position - 1) % MAX_POSITION]
	}

	if( isZeroValue(number) && !isMillionsPosition(position)){
		unitText = ""
	}

	return unitText
}

const getBathText = (position, number, lengthOfDigits) => {

	let numberText = numbersText[number]

	if(isZeroValue(number)){
		return "";
	}

	if (isTenPostition(position) && number == 1) {
		numberText = ''
	}

	if (isTenPostition(position) && number == 2) {
		numberText = 'ยี่'
	}

	if (isMillionsPosition(position) && isLastPosition(position, lengthOfDigits) && number == 1 ) {
		numberText = 'เอ็ด'
	}

	if ( lengthOfDigits > 1 && isUnitPostition(position) && number == 1) {
		numberText = 'เอ็ด'
	}

	return numberText
}

// convert function without async
const convert = (numberInput) => {

	const numberReverse = reverseNumber(numberInput)
  let textOutput = ''
  // console.log('>', numberReverse.split(''))
	numberReverse.split('').each((number, i) => {
		textOutput = getBathText(i, number, numberReverse.length) + getBathUnit(i, number) + textOutput
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

// For each with better performance version
Array.prototype.each = function (cb) {
  for (let i = 0; i < this.length; i++) {
    cb(this[i], i)
  }
}

if (typeof module !== 'undefined' && typeof module.exports !== 'undefined') {
  module.exports = convertFullMoney
  exports.default = convertFullMoney
  exports.THBText = convertFullMoney
} else {
  window.THBText = convertFullMoney
}
