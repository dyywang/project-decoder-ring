// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const substitutionModule = (function () {
  function substitution(input, alphabet, encode = true) {
    if (alphabet === undefined) return false
    if (alphabet.length !== 26) return false
    //encode

    const alphabetarray = alphabet.split("")
    //false if there are duplicates in alphabet:
    if (alphabetarray.some((letter, index, thisarray)  => 
          thisarray.lastIndexOf(letter)!== index))
          return false
    if (encode)
      return input.toLowerCase().split("")
            .reduce( (acc, letter) => {
              let lettercode = letter.charCodeAt() - 97
              if (lettercode < 0 || lettercode > 26) 
                acc += letter
              else 
                acc += alphabetarray[lettercode]   
              return acc
            },"")
    else 
    //decode 
      return input.split("")
            .reduce( (acc, letter) => {
              if (letter === " ") acc += " "
              acc += String.fromCharCode(alphabetarray.indexOf(letter) + 97)
              return acc
            }, "")
  }
  return {
    substitution,
  };
})();

module.exports = { substitution: substitutionModule.substitution };
