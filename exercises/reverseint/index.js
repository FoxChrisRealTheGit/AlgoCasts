// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

// function reverseInt(n) {
//     arr = n.toString().split('')
//     if (arr[0] === '-'){
//         var noneg = arr.slice(1)
//         noneg.reverse().unshift(arr[0])
//         return +noneg.join('')
//     }else{
//         return +arr.reverse().join('')
//     }
// }


// function reverseInt(n) {
//   const rev= n.toString().split('').reverse().join('')

//   if (n <0){
//     return parseInt(rev) * -1
//   }
//   return parseInt(rev)
// }

function reverseInt(n) {
    const rev= n.toString().split('').reverse().join('')
    return parseInt(rev) * Math.sign(n)
  }

module.exports = reverseInt;
