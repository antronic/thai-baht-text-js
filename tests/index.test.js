
/* eslint-disable import/no-extraneous-dependencies */

import { expect } from 'chai'
import ThaiBaht from '../thai-baht-text'

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
  })

  it('should convert complex number to baht', () => {
    expect(ThaiBaht(6321298)).to.equal('หกล้านสามแสนสองหมื่นหนึ่งพันสองร้อยเก้าสิบแปดบาทถ้วน')
  })
})
