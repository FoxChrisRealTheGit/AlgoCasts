// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

// My solution
// function anagrams(stringA, stringB) {
//     let map1 = {} 
//     let map2 = {};
//     let strA = stringA.replace(/[^\w]/, "").toLowerCase();
//     let strB = stringB.replace(/[^\w]/, "").toLowerCase();
//     ans = false
//     for(let char of strA){
//         if (map1[char]){
//             map1[char]+=1;
//         }else{
//             map1[char] = 1
//         }
//     }
//     for(let char of strB){
//         if (map2[char]){
//             map2[char]+=1;
//         }else{
//             map2[char] = 1
//         }
//     }
//     for(let char in map2){
//         if(map1[char]){
//             ans = true;
//         }else if (!map1[char]){
//             ans = false
//         }
//     }
//     return ans
// }


// first video solution 
// function anagrams(stringA, stringB) {
//     let aCharMap = buildCharMap(stringA)
//     let bCharMap = buildCharMap(stringB)

//     if (Object.keys(aCharMap).length !== Object.keys(bCharMap).length) {
//         return false
//     }

//     for(let char in aCharMap){
//         if(aCharMap[char] !== bCharMap[char]){
//             return false
//         }
//     }
//     return true
// }

// function buildCharMap(str) {
//     const charMap = {}

//     for (let char of str.replace(/[^\w]/g, "").toLowerCase()) {
//         charMap[char] = charMap[char] + 1 || 1;
//     }
//     return charMap
// }

// second video solution
function anagrams(stringA, stringB) {
    return cleanString(stringA) === cleanString(stringB)
}

function cleanString(str){
    return str.replace(/[^\w]/g, "").toLowerCase().split("").sort().join("")
}

module.exports = anagrams;
