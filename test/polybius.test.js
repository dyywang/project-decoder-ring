// Write your tests here!
const expect = require("chai").expect
const polybius = require("../src/polybius").polybius

describe("Polybius", ()=>{
    it("should return the encoded message when using the Polybius function", ()=>{
        const expected = "4432423352125413"
        const actual = polybius("thinkful")
        expect(expected).to.eql(actual)
    })
    it("should return the encoded message when using the Polybius function", ()=>{
        const expected = "3251131343 2543241341"
        const actual = polybius("Hello world")
        expect(expected).to.eql(actual)
    })
    it("should return the decoded message when using the Polybius function", ()=>{
        const expected = "hello world"
        const actual = polybius("3251131343 2543241341", false)
        expect(expected).to.eql(actual)
    })
    it("should return the decoded message when using the Polybius function", ()=>{
        const expected = "th(i/j)nkful"
        const actual = polybius("4432423352125413", false)
        expect(expected).to.eql(actual)
    })
    it("should return false if there is an odd number of coordinates", ()=> {
        const expected = false
        const actual = polybius("44324233521254134", false)
        expect(expected).to.eql(actual)
    })

})