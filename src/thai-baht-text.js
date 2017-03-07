import { eachOf } from 'async'

const convert = (numberInput, subfix = '') => {
	let numberStr = numberInput.toString()

	const numbersText = 'ศูนย์,หนึ่ง,สอง,สาม,สี่,ห้า,หก,เจ็ด,แปด,เก้า,สิบ'.split(',')
	const unitsText = 'สิบ,ร้อย,พ้น,หมื่น,แสน,ล้าน'.split(',')

	let textOutput = ''
	for(let i = numberStr.length - 1; i >= 0; i--) {
		const currentNumber = Number(numberStr.charAt(i))
		let numberText = numbersText[currentNumber]
		let unitText = ''

		if (i !== numberStr.length - 1) {
			unitText = unitsText[numberStr.length - 2 - i]
		}

		if (numberStr.length - ( i + 1 ) === 1 && currentNumber <= 2) {
			if (currentNumber === 2) {
				unitText = 'ยี่สิบ'
			} else {
				numberText = ''
			}
		}

		textOutput = numberText + unitText + subfix + textOutput
	}

	return textOutput
}

const convertAsync = (numberInput, subfix = '') => {
	let numberStr = numberInput.toString()
	numberStr = numberStr.split('').reverse().join('')

	const numbersText = 'ศูนย์,หนึ่ง,สอง,สาม,สี่,ห้า,หก,เจ็ด,แปด,เก้า,สิบ'.split(',')
	const unitsText = 'สิบ,ร้อย,พ้น,หมื่น,แสน,ล้าน'.split(',')

	let textOutput = ''

	return new Promise(
		(done) => {
			eachOf(numberStr, (number, i, callback) => {
				const currentNumber = Number(number)
				let numberText = numbersText[currentNumber]
				let unitText = ''

				if (i !== numberStr.length - 1) {
					unitText = unitsText[numberStr.length - 2 - i]
				}

				if (numberStr.length - ( i + 1 ) === 1 && currentNumber <= 2) {
					if (currentNumber === 2) {
						unitText = 'ยี่สิบ'
					} else {
						numberText = ''
					}
				}

				textOutput = numberText + unitText + subfix + textOutput
				callback()
			}, () => {
				done(textOutput)
			})
		}
	)
}

export default (numberInput) => {
	let numberStr = numberInput.toString()

	const decimalStr = numberStr.split('.')[0]
	const floatingStr = numberStr.split('.')[1]

	let textOutput = ''

	textOutput = convert(decimalStr)
	if (floatingStr !== undefined) {
		textOutput = `${textOutput}บาท${convert(floatingStr)}สตางค์`
	} else {
		textOutput = `${textOutput}บาทถ้วน`
	}

	return textOutput
}

exports.convertAsync = (numberInput) => {
	let numberStr = numberInput.toString()

	const decimalStr = numberStr.split('.')[0]
	const floatingStr = numberStr.split('.')[1]

	const millionCount = (decimalStr.length > 7) ? decimalStr.length % 7 : 0

	console.log(millionCount)

	let textOutput = ''

	return new Promise(
		(done) => {
			convertAsync(decimalStr).then((str) => {
				textOutput = str
				if (floatingStr !== undefined) {
					convertAsync(floatingStr)
						.then((floatingStrOutput) => {
							textOutput = `${textOutput}บาท${floatingStrOutput}สตางค์`
							done(textOutput)
						})
				} else {
					textOutput = `${textOutput}บาทถ้วน`
					done(textOutput)
				}
			})
		}
	)
}

exports.test = () => {
	console.log('just test!')
}

module.exports = exports['default']
module.exports.async = exports.convertAsync