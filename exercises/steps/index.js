// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a step shape
// with N levels using the # character.  Make sure the
// step has spaces on the right hand side!
// --- Examples
//   steps(2)
//       '# '
//       '##'
//   steps(3)
//       '#  '
//       '## '
//       '###'
//   steps(4)
//       '#   '
//       '##  '
//       '### '
//       '####'


//my solution
// function steps(n) {
//     let str = []
//     for(let i=0; i<n; i+=1){
//         str[i]= " "
//     }
//     for(let x=0; x<n; x+=1){
//         str[x]= "#"
//         console.log(str.join(""))
//     }
// }


//solution #1
// function steps(n) {
//     for (let r = 0; r < n; r += 1) {
//         let str = ""
//         for (let c = 0; c < n; c += 1) {
//             if (c <= r) {
//                 str += "#"
//             } else {
//                 str += " "
//             }
//         }
//         console.log(str)
//     }
// }

//recursive solution
function steps(n, row = 0, stair = "") {
    if (n === row) {
        return;
    }
    if (n === stair.length){
        console.log(stair)
        return steps(n, row+ 1)
    }
    const add = stair.length <= row ? "#" : " "
    steps(n, row, stair + add)

}

module.exports = steps;
