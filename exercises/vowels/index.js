// --- Directions
// Write a function that returns the number of vowels
// used in a string.  Vowels are the characters 'a', 'e'
// 'i', 'o', and 'u'.
// --- Examples
//   vowels('Hi There!') --> 3
//   vowels('Why do you ask?') --> 4
//   vowels('Why?') --> 0

// my solution
// function vowels(str) {
//     let count = 0;
//     for (let char of str.toLowerCase()){
//         if (char === "a" || char === "e" || char === "i" ||char === "o"|| char ==="u"){
//             count+=1
//         }
//     }
//     return count
// }


// solution number one
// function vowels(str) {
//     let count = 0;
//     const checker = ["a", "e", "i", "o", "u"]
//     for (let char of str.toLowerCase()){
//         if (checker.includes(char)){
//             count+=1
//         }
//     }
//     return count
// }

// regex solution
function vowels(str) {
    let matches = str.match(/[aeiou]/gi)
    return matches ? matches.length : 0
}


module.exports = vowels;
