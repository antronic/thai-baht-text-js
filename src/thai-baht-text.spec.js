
/* eslint-disable import/no-extraneous-dependencies */

import { expect } from 'chai'
import ThaiBaht from './thai-baht-text'

describe('Thai Baht Text', () => {
	it('should be a function', () => {
		expect(ThaiBaht).to.be.a('function')
	})

	it('should convert to Baht', () => {
		expect(ThaiBaht(1)).to.equal('หนึ่งบาทถ้วน')
		expect(ThaiBaht(10)).to.equal('สิบบาทถ้วน')
		expect(ThaiBaht(11)).to.equal('สิบเอ็ดบาทถ้วน')
		expect(ThaiBaht(12)).to.equal('สิบสองบาทถ้วน')
		expect(ThaiBaht(20)).to.equal('ยี่สิบบาทถ้วน')
		expect(ThaiBaht(21)).to.equal('ยี่สิบเอ็ดบาทถ้วน')
		expect(ThaiBaht(22)).to.equal('ยี่สิบสองบาทถ้วน')
		expect(ThaiBaht(100)).to.equal('หนึ่งร้อยบาทถ้วน')
		expect(ThaiBaht(101)).to.equal('หนึ่งร้อยเอ็ดบาทถ้วน')
		expect(ThaiBaht(111)).to.equal('หนึ่งร้อยสิบเอ็ดบาทถ้วน')
		expect(ThaiBaht(121)).to.equal('หนึ่งร้อยยี่สิบเอ็ดบาทถ้วน')
	})

	it('should convert big number to baht', () => {
		expect(ThaiBaht(1000000)).to.equal('หนึ่งล้านบาทถ้วน')
		expect(ThaiBaht(1000001)).to.equal('หนึ่งล้านเอ็ดบาทถ้วน')
		expect(ThaiBaht(11000001)).to.equal('สิบเอ็ดล้านเอ็ดบาทถ้วน')
		expect(ThaiBaht(11000000)).to.equal('สิบเอ็ดล้านบาทถ้วน')
	})

	it('should convert multiple million round to bath', () => {
		expect(ThaiBaht(1000000000000000000)).to.equal('หนึ่งล้านล้านล้านบาทถ้วน')
		expect(ThaiBaht(1000000000001)).to.equal('หนึ่งล้านล้านเอ็ดบาทถ้วน')
		expect(ThaiBaht(1000000000000)).to.equal('หนึ่งล้านล้านบาทถ้วน')
		expect(ThaiBaht(1001000000001)).to.equal('หนึ่งล้านหนึ่งพันล้านเอ็ดบาทถ้วน')
		expect(ThaiBaht(1001000001001)).to.equal('หนึ่งล้านหนึ่งพันล้านหนึ่งพันเอ็ดบาทถ้วน')
		expect(ThaiBaht(1001000000000)).to.equal('หนึ่งล้านหนึ่งพันล้านบาทถ้วน')
		expect(ThaiBaht(1000000000)).to.equal('หนึ่งพันล้านบาทถ้วน')
		expect(ThaiBaht(10000000)).to.equal('สิบล้านบาทถ้วน')
		expect(ThaiBaht(100000000)).to.equal('หนึ่งร้อยล้านบาทถ้วน')
	})

	it('should convert complex number to baht', () => {
		expect(ThaiBaht(6321298)).to.equal('หกล้านสามแสนสองหมื่นหนึ่งพันสองร้อยเก้าสิบแปดบาทถ้วน')
	})

	it('should convert number to baht with satang', () => {
		expect(ThaiBaht(100.50)).to.equal('หนึ่งร้อยบาทห้าสิบสตางค์')
	})

	it('should convert number to bath asyncronously', (done) => {
		ThaiBaht.async(100).then((moneyText) => {
			expect(moneyText).to.equal('หนึ่งร้อยบาทถ้วน')
			done()
		})
	})
})
