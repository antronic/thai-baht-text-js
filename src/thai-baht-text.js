/**
 * @see {@link https://github.com/antronic/that-baht-text-js|GitHub}
 */

// Constants
const MAX_POSITION = 6
const PRIMARY_UNIT = 'บาท'
const SECONDARY_UNIT = 'สตางค์'
const WHOLE_NUMBER_TEXT = 'ถ้วน'

const NUMBER_TEXTS = 'ศูนย์,หนึ่ง,สอง,สาม,สี่,ห้า,หก,เจ็ด,แปด,เก้า,สิบ'.split(',')
const UNIT_TEXTS = 'สิบ,ร้อย,พัน,หมื่น,แสน,ล้าน'.split(',')

// Helper Functions
const reverseNumber = (number) => number.toString().split('').reverse().join('')

const getBathText = (position, number, lengthOfDigits) => {
	let numberText = NUMBER_TEXTS[number]

	if (number === 0) {
		return ''
	}

	if (position % MAX_POSITION === 1 && number === 1) {
		numberText = lengthOfDigits === 2 ? 'เอ็ด' : ''
	}

	if (lengthOfDigits > 1 && position % MAX_POSITION === 0 && number === 1) {
		numberText = 'เอ็ด'
	}

	return numberText
}

const convert = (numberInput) => {
	const numberReverse = reverseNumber(numberInput)
	let textOutput = ''

	numberReverse.split('').forEach((number, i) => {
		textOutput = `${getBathText(i, number, numberReverse.length)}${UNIT_TEXTS[Math.abs(i - 1) % MAX_POSITION]}${textOutput}`
	})

	return textOutput
}

const convertFullMoney = (numberInput) => {
	const SMALL_AMOUNT_THRESHOLD = 0.01

	const number = parseFloat(numberInput)

	if (number < 0) {
		return `ลบ${convertFullMoney(Math.abs(number))}`
	}

	if (number < SMALL_AMOUNT_THRESHOLD) {
		return ''
	}

	const numberStr = number.toFixed(2)
	const [integerPart, fractionalPart] = numberStr.split('.')

	const intTextOutput = convert(reverseNumber(integerPart))
	const textOutput = [intTextOutput && `${intTextOutput}${PRIMARY_UNIT}`,
		fractionalPart && convert(reverseNumber(fractionalPart)) && `${convert(reverseNumber(fractionalPart))}${SECONDARY_UNIT}`].filter(Boolean).join('')

	return textOutput || WHOLE_NUMBER_TEXT
}

// Export
if (typeof module !== 'undefined' && typeof module.exports !== 'undefined') {
	module.exports = convertFullMoney
	exports.default = convertFullMoney
	exports.THBText = convertFullMoney
} else {
	window.THBText = convertFullMoney
}
