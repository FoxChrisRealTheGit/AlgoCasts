// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'

//my solution, very close to solution 1
// function capitalize(str) {
//     let empty = []
//       let arr = str.split(" ")
//       for(let str of arr){
          
//           empty.push(str[0].toUpperCase() + str.slice(1))
//       }
//       return empty.join(" ")
//   }


// the brute force second solution, the first solution is better
  function capitalize(str) {
    let result = str[0].toUpperCase();

    for(let x = 1; x < str.length; x +=1){
        if (str[x-1] === " "){
           result += str[x].toUpperCase();
        } else{
            result += str[x]
        }
    }
    return result
  }


module.exports = capitalize;
