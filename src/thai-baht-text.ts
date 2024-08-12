/**
 * @author Jirachai Chansivanon <antronic.inc@gmail.com>
 * @see {@link https://github.com/antronic/that-baht-text-js|GitHub}
 */

// Constants
const MAX_POSITION = 6
const UNIT_POSITION = 0
const TEN_POSITION = 1

const PRIMARY_UNIT = 'บาท'
const SECONDARY_UNIT = 'สตางค์'
const WHOLE_NUMBER_TEXT = 'ถ้วน'

const NUMBER_TEXTS = ['ศูนย์', 'หนึ่ง', 'สอง', 'สาม', 'สี่', 'ห้า', 'หก', 'เจ็ด', 'แปด', 'เก้า', 'สิบ']
const UNIT_TEXTS = ['สิบ', 'ร้อย', 'พัน', 'หมื่น', 'แสน', 'ล้าน']

const getIntegerDigits = (numberStringInput: string): number => parseInt(numberStringInput.split('.')[0], 10)
const getFractionalDigits = (numberStringInput: string): number => parseInt(numberStringInput.split('.')[1], 10)

const hasFractionalDigits = (numberInput: number | undefined) => numberInput !== undefined && numberInput !== 0

function isZeroValue(numberStringInput: string): boolean
function isZeroValue(numberInput: number): boolean
function isZeroValue(input: string | number): boolean {
	return parseInt(`${input}`, 10) === 0
}

const isUnitPosition = (position: number) => position == UNIT_POSITION
const isTenPosition = (position: number) => position % MAX_POSITION == TEN_POSITION
const isMillionsPosition = (position: number) => (position >= MAX_POSITION && position % MAX_POSITION == 0)
const isLastPosition = (position: number, lengthOfDigits: number) => position + 1 < lengthOfDigits

const reverseNumber = (number: number): string => {
	const numberStr = number.toString()
	return numberStr.split('').reverse().join('')
}

const getBathUnit = (position: number, number: string) => {
	let unitText = ''

	if (!isUnitPosition(position)) {
		unitText = UNIT_TEXTS[Math.abs(position - 1) % MAX_POSITION]
	}

	if (isZeroValue(number) && !isMillionsPosition(position)) {
		unitText = ''
	}

	return unitText
}

const getBathText = (position: number, number: string, lengthOfDigits: number) => {
	const _number: number = parseInt(number, 10)
	let numberText = NUMBER_TEXTS[_number]

	if (isZeroValue(_number)) {
		return ''
	}

	if (isTenPosition(position) && _number == 1) {
		numberText = ''
	}

	if (isTenPosition(position) && _number == 2) {
		numberText = 'ยี่'
	}

	if (isMillionsPosition(position) && isLastPosition(position, lengthOfDigits) && _number == 1) {
		numberText = 'เอ็ด'
	}

	if (lengthOfDigits > 1 && isUnitPosition(position) && _number == 1) {
		numberText = 'เอ็ด'
	}

	return numberText
}

const convert = (numberInput: number): string => {
	const numberReverse: string = reverseNumber(numberInput)
	let textOutput = ''

	numberReverse.split('')
		.forEach((number: string, i) => {
			textOutput = `${getBathText(i, number, numberReverse.length)}${getBathUnit(i, number)}${textOutput}`
		})
	return textOutput
}

const parseFloatWithPrecision = (number: string, precision = 2): string => {
	const numberFloatStr = parseFloat(number).toString().split('.')
	const integerUnitStr = numberFloatStr[0]
	const fractionalUnitStr = (numberFloatStr.length == 2) ? numberFloatStr[1].substring(0, precision) : '00'
	return parseFloat(`${integerUnitStr}.${fractionalUnitStr}`).toFixed(precision)
}


const convertFullMoney = (numberInput: string) => {
	const numberStr: string = parseFloatWithPrecision(numberInput)

	const integerDigits: number = getIntegerDigits(numberStr)
	const fractionalDigits: number = getFractionalDigits(numberStr)

	const intTextOutput = convert(integerDigits)
	const textOutput = []
	if (intTextOutput) {
		textOutput.push(`${[intTextOutput, PRIMARY_UNIT].join('')}`)
	}
	if (intTextOutput && !hasFractionalDigits(fractionalDigits)) {
		textOutput.push(WHOLE_NUMBER_TEXT)
	}
	if (hasFractionalDigits(fractionalDigits) && convert(fractionalDigits)) {
		textOutput.push(`${[convert(fractionalDigits), SECONDARY_UNIT].join('')}`)
	}

	return textOutput.join('')
}

function ThaiBahtText(stringNumberInput: string): string
function ThaiBahtText(numberInput: number): string

function ThaiBahtText(input: string | number): string {
	if (isNaN(Number(`${input}`))) {
		throw new TypeError('Invalid input. Expected a number or a string representing a number.')
	}
	return convertFullMoney(`${input}`)
}

interface Window {
	ThaiBahtText: typeof ThaiBahtText
	THBText: typeof ThaiBahtText
}

if (typeof module !== 'undefined' && typeof module.exports !== 'undefined') {
	module.exports = ThaiBahtText
	exports.ThaiBahtText = ThaiBahtText
	exports.THBText = ThaiBahtText
	exports.default = ThaiBahtText
} else {
	window.ThaiBahtText = ThaiBahtText
	// Support legacy version
	window.THBText = window.ThaiBahtText
}