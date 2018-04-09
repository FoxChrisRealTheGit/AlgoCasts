// --- Directions
// Write a program that console logs the numbers
// from 1 to n. But for multiples of three print
// “fizz” instead of the number and for the multiples
// of five print “buzz”. For numbers which are multiples
// of both three and five print “fizzbuzz”.
// --- Example
//   fizzBuzz(5);
//   1
//   2
//   fizz
//   4
//   buzz

function fizzBuzz(n) {
    for(var x = 1; x<= n; x +=1){
        if((x%3===0) && (x%5===0)){
            console.log("fizzbuzz")
        }else if (x%3===0){
            console.log("fizz")
        }else if(x%5===0){
            console.log("buzz")
        }else{
            console.log(x)
        }
    }
}

module.exports = fizzBuzz;
