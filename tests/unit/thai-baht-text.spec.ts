
/* eslint-disable import/no-extraneous-dependencies */

import { expect } from 'chai'

import ThaiBahtText from '../../src/thai-baht-text'

describe('Thai Baht Text', () => {
	it('should be a function', () => {
		expect(ThaiBahtText).to.be.a('function')
	})

	it('should throw an error for not a number input', () => {
		expect(() => { ThaiBahtText('000e') }).to.throw(
			TypeError, 'Invalid input. Expected a number or a string representing a number.'
		)
		expect(() => { ThaiBahtText('10a') }).to.throw(
			TypeError, 'Invalid input. Expected a number or a string representing a number.'
		)
	})

	it('should not convert very small amount', () => {
		expect(ThaiBahtText(0.0001)).to.equal('')
		expect(ThaiBahtText(0.001)).to.equal('')
		expect(ThaiBahtText(0.009)).to.equal('')
	})

	it('should convert to Satang', () => {
		expect(ThaiBahtText(0.01)).to.equal('หนึ่งสตางค์')
		expect(ThaiBahtText(0.1)).to.equal('สิบสตางค์')
		expect(ThaiBahtText(0.10)).to.equal('สิบสตางค์')
		expect(ThaiBahtText(0.11)).to.equal('สิบเอ็ดสตางค์')
		expect(ThaiBahtText(0.12)).to.equal('สิบสองสตางค์')
		expect(ThaiBahtText(0.123)).to.equal('สิบสองสตางค์')
		expect(ThaiBahtText(0.2)).to.equal('ยี่สิบสตางค์')
		expect(ThaiBahtText(0.20)).to.equal('ยี่สิบสตางค์')
		expect(ThaiBahtText(0.21)).to.equal('ยี่สิบเอ็ดสตางค์')
		expect(ThaiBahtText(0.25)).to.equal('ยี่สิบห้าสตางค์')
		expect(ThaiBahtText(0.255)).to.equal('ยี่สิบห้าสตางค์')
		expect(ThaiBahtText(0.5)).to.equal('ห้าสิบสตางค์')
		expect(ThaiBahtText(0.50)).to.equal('ห้าสิบสตางค์')
		expect(ThaiBahtText(0.75)).to.equal('เจ็ดสิบห้าสตางค์')
		expect(ThaiBahtText(0.99)).to.equal('เก้าสิบเก้าสตางค์')
		expect(ThaiBahtText(0.999)).to.equal('เก้าสิบเก้าสตางค์')
	})

	it('should convert to Baht', () => {
		expect(ThaiBahtText(1)).to.equal('หนึ่งบาทถ้วน')
		expect(ThaiBahtText(10)).to.equal('สิบบาทถ้วน')
		expect(ThaiBahtText(11)).to.equal('สิบเอ็ดบาทถ้วน')
		expect(ThaiBahtText(12)).to.equal('สิบสองบาทถ้วน')
		expect(ThaiBahtText(20)).to.equal('ยี่สิบบาทถ้วน')
		expect(ThaiBahtText(21)).to.equal('ยี่สิบเอ็ดบาทถ้วน')
		expect(ThaiBahtText(22)).to.equal('ยี่สิบสองบาทถ้วน')
		expect(ThaiBahtText(100)).to.equal('หนึ่งร้อยบาทถ้วน')
		expect(ThaiBahtText(101)).to.equal('หนึ่งร้อยเอ็ดบาทถ้วน')
		expect(ThaiBahtText(111)).to.equal('หนึ่งร้อยสิบเอ็ดบาทถ้วน')
		expect(ThaiBahtText(121)).to.equal('หนึ่งร้อยยี่สิบเอ็ดบาทถ้วน')
	})

	it('should convert big number to Baht', () => {
		expect(ThaiBahtText(1000000)).to.equal('หนึ่งล้านบาทถ้วน')
		expect(ThaiBahtText(1000001)).to.equal('หนึ่งล้านเอ็ดบาทถ้วน')
		expect(ThaiBahtText(11000001)).to.equal('สิบเอ็ดล้านเอ็ดบาทถ้วน')
		expect(ThaiBahtText(11000000)).to.equal('สิบเอ็ดล้านบาทถ้วน')
	})

	it('should convert multiple million round to Baht', () => {
		expect(ThaiBahtText(1000000000000000000)).to.equal('หนึ่งล้านล้านล้านบาทถ้วน')
		expect(ThaiBahtText(1000000000001)).to.equal('หนึ่งล้านล้านเอ็ดบาทถ้วน')
		expect(ThaiBahtText(1000000000000)).to.equal('หนึ่งล้านล้านบาทถ้วน')
		expect(ThaiBahtText(1001000000001)).to.equal('หนึ่งล้านหนึ่งพันล้านเอ็ดบาทถ้วน')
		expect(ThaiBahtText(1001000001001)).to.equal('หนึ่งล้านหนึ่งพันล้านหนึ่งพันเอ็ดบาทถ้วน')
		expect(ThaiBahtText(1001000000000)).to.equal('หนึ่งล้านหนึ่งพันล้านบาทถ้วน')
		expect(ThaiBahtText(1000000000)).to.equal('หนึ่งพันล้านบาทถ้วน')
		expect(ThaiBahtText(10000000)).to.equal('สิบล้านบาทถ้วน')
		expect(ThaiBahtText(100000000)).to.equal('หนึ่งร้อยล้านบาทถ้วน')
	})

	it('should convert complex number to Baht', () => {
		expect(ThaiBahtText(6321298)).to.equal('หกล้านสามแสนสองหมื่นหนึ่งพันสองร้อยเก้าสิบแปดบาทถ้วน')
		expect(ThaiBahtText(10034567)).to.equal('สิบล้านสามหมื่นสี่พันห้าร้อยหกสิบเจ็ดบาทถ้วน')
		expect(ThaiBahtText(20034567)).to.equal('ยี่สิบล้านสามหมื่นสี่พันห้าร้อยหกสิบเจ็ดบาทถ้วน')
		expect(ThaiBahtText(30034567.00)).to.equal('สามสิบล้านสามหมื่นสี่พันห้าร้อยหกสิบเจ็ดบาทถ้วน')
	})

	it('should convert number to Baht with Satang', () => {
		expect(ThaiBahtText(11.25)).to.equal('สิบเอ็ดบาทยี่สิบห้าสตางค์')
		expect(ThaiBahtText(100.50)).to.equal('หนึ่งร้อยบาทห้าสิบสตางค์')
		expect(ThaiBahtText(567.01)).to.equal('ห้าร้อยหกสิบเจ็ดบาทหนึ่งสตางค์')
		expect(ThaiBahtText(123456789.999)).to.equal('หนึ่งร้อยยี่สิบสามล้านสี่แสนห้าหมื่นหกพันเจ็ดร้อยแปดสิบเก้าบาทเก้าสิบเก้าสตางค์')
	})
})
