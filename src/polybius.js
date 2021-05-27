// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const polybiusModule = (function () {
  // you can add any code you want within this function scope

  const polymatrix = {
    "a": 11, "b": 21, "c": 31, "d": 41, "e": 51,
    "f": 12, "g": 22, "h": 32, "(i/j)": 42, "k": 52,
    "l": 13, "m": 23, "n": 33, "o": 43, "p": 53,
    "q": 14, "r": 24, "s": 34, "t": 44, "u": 54,
    "v": 15, "w": 25, "x": 35, "y": 45, "z": 55,
  }

  function findCoordinatePair(letter) {
    if (letter.charCodeAt() < 97 || letter.charCodeAt() > 122) return letter
    if (letter === "i" || letter === "j") return polymatrix["(i/j)"]
    return polymatrix[letter] ? polymatrix[letter] : letter
  }

  function findChar(pair) {
    for (const letter in polymatrix) {
      if (polymatrix[letter] === pair) return letter
    }
    return pair;
  }

  function polybius(input, encode = true) {
    if (encode) {
      return input.toLowerCase().split("")
        .map(letter => findCoordinatePair(letter))
        .join("")
    } else {
      //decode
      let inputarray = []
      if (input.split("").map(letter=> letter === " " ? "": letter).join("").length % 2 !== 0)
        return false 
      for (let i = 0; i < input.length; i++) {
        //detect if it is a legitimate pair
        if (input[i] >= 1 && input[i] <= 5 && input[i + 1] >= 1 && input[i + 1] <= 5) {
          inputarray.push((parseInt("" + input[i] + input[i + 1])))
          i++
        } else { inputarray.push(input[i]) }
      }
      return inputarray.map(pair => findChar(pair))
        .join("")
    }
  }


  function polybiusOld(input, encode = true) {
    // your solution code here
    if (encode) {
      //encode
      return input.split("")
        .map(char => {
          let charval = char.charCodeAt()
          let resultstring = ""

          if (charval < 97 || charval > 122) return char  //keep value if not alpha 
          charval += char >= "j" ? -1 : 0 //offset for letters j and later
          charval -= 96 //reset to matrix value

          let coordx = charval % 5   //set y coordinate
          coordx = coordx === 0 ? 5 : coordx
          let coordy = Math.floor(charval / 5.1) + 1  //set y coord 

          resultstring += "" + coordx + coordy
          return resultstring
        })
        .join("")
    }
    else {
      //decode
      let resultarray = []
      let inputarray = []

      for (let i = 0; i < input.length; i++) {
        //detect if it is a legitimate pair
        if (input[i] >= 1 && input[i] <= 5 && input[i + 1] >= 1 && input[i + 1] <= 5) {
          inputarray.push([input[i], input[i + 1]])
          i++
        } else { inputarray.push(input[i]) }
      }

      return inputarray.map(pair => {
        if (pair.length === 1) return pair //if not a pair
        let product = parseInt(pair[0]) + parseInt((pair[1] - 1) * 5) + 96
        console.log(product)
        if (product > 105) product += 1
        if (product === 105) return "(i/j)"
        return String.fromCharCode(product)
      })
        .join("")
    }
  }
  return {
    polybius,
  };
})();

module.exports = { polybius: polybiusModule.polybius };
