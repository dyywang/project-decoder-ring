// Write your tests here!

const caesar = require("../src/caesar").caesar
const expect = require("chai").expect

describe("caesar", () => {
    it ("should return the encoded message using the Caesar function", () => {
        const expected = "wklqnixo"
        const actual = caesar("thinkful", 3)
        expect(expected).to.eql(actual)
    })
    it ("should return the encoded message using the Caesar function", () => {
        const expected = "bpqa qa i amkzmb umaaiom!"
        const actual = caesar("This is a secret message!", 8)
        expect(expected).to.eql(actual)
    })
    it ("should return the decoded message using the Caesar function", () => {
        const expected = "thinkful"
        const actual = caesar("wklqnixo", 3, false)
        expect(expected).to.eql(actual)
    })
    it ("should return false when there is no shift", () => {
        const expected = false
        const actual = caesar("thinkful")
        expect(expected).to.eql(actual)
    })
    it ("should return false when the shift is invalid", () => {
        const expected = false
        const actual = caesar("thinkful", -77)
        expect(expected).to.eql(actual)
    })
})