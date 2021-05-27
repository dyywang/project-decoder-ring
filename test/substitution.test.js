// Write your tests here!
const expect = require("chai").expect
const substitution = require("../src/substitution").substitution


describe("substitution", ()=>{
    it("should return the encoded message when using the Substitution function", ()=>{
        const expected = "jrufscpw"
        const actual = substitution("thinkful", "xoyqmcgrukswaflnthdjpzibev")
        expect(expected).to.eql(actual)
    })
    it("should return the encoded message when using the Substitution function", ()=>{
        const expected = "elp xhm xf mbymwwmfj dne"
        const actual = substitution("You are an excellent spy", "xoyqmcgrukswaflnthdjpzibev")
        expect(expected).to.eql(actual)
    })
    it("should return the encoded message when using the Substitution function", ()=>{
        const expected = "y&ii$r&"
        const actual = substitution("message", "$wae&zrdxtfcygvuhbijnokmpl")
        expect(expected).to.eql(actual)
    })
    it("should return the decoded message when using the Substitution function", ()=>{
        const expected = "thinkful"
        const actual = substitution("jrufscpw", "xoyqmcgrukswaflnthdjpzibev", false);
        expect(expected).to.eql(actual)
    })
    it("should return false if the alphabet is too short", ()=>{
        const expected = false
        const actual = substitution("thinkful", "short")
        expect(expected).to.eql(actual)
    })
    it("should return false if the alphabet has duplicate letters", ()=>{
        const expected = false
        const actual = substitution("thinkful", "abcabcabcabcabcabcabcabcyz")
        expect(expected).to.eql(actual)
    })
    
} )