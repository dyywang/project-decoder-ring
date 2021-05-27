// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const caesarModule = (function () {
  // you can add any code you want within this function scope
  function caesar(input, shift = null, encode = true) {
    if (shift === null) return false
    if (shift >= 26 || shift <= -26) return false
    const offset = encode ? 1 : -1
    return input.toLowerCase().split("")
            .map(character=>{
              const thischar = character.charCodeAt()
              let result = thischar
              //if (thischar >= 65 && thischar <= 90 ) result = (thischar + 26 - 65 + shift * offset) % 26 + 65
              if (thischar >= 97 && thischar <= 122) result = (thischar + 26 - 97 + shift * offset) % 26 + 97
              return String.fromCharCode(result)
            })  
            .join("")  
  }
  return {
    caesar,
  };
})();

module.exports = { caesar: caesarModule.caesar };

