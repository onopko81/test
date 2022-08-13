import {Prova} from '../src/'

const expect = require('chai').expect
const assert = require('chai').assert






describe('onopko-test', () => {
    it('funziona', () => {
      //  expect(true).to.be.true
        assert.equal(Math.pow(2,2),4)
        expect(4).to.be.a('number'); // Recommended
    })
    it('number', () => {
        //  expect(true).to.be.true
        assert.equal(Math.pow(2,2),4)
        expect(4).to.be.a('number'); // Recommended
    })

    it('valore', () => {
        const l = new Prova('onofrio', 'napolitano')
        const b = l.init()
           expect(b).to.be.a('string')
    })
})