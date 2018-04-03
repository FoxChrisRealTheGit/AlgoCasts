// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false

// function palindrome(str) {
//    var arrstr = str.split('') 
//     if (arrstr.length === 1){
//         return true
//     }else if (arrstr[0] !== arrstr[arrstr.length-1]){
//         return false
//     }

//     let revstr = str.split('').reverse().join('')
//     if (str === revstr){
//         return true
//     }else{
//         return false
//     }

// }



    // function palindrome(str) {
    //     return str === str.split('').reverse().join('')
    //  }



     function palindrome(str) {
      
        return str.split('').every((char, i)=>{
            return char === str[str.length-i-1]
        })
     }
module.exports = palindrome;
