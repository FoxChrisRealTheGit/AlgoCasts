// --- Directions
// Print out the n-th entry in the fibonacci series.
// The fibonacci series is an ordering of numbers where
// each number is the sum of the preceeding two.
// For example, the sequence
//  [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
// forms the first ten entries of the fibonacci series.
// Example:
//   fib(4) === 3

// my solution
// this is also the first solution in the video
// this seems to be linear runtime complexity
// function fib(n) {
//     var arr = [0,1]
//     for(let i=2; i<=n; i+=1){
//         arr.push(arr[i-1] + arr[i-2])
//     }
//     return arr[n]
// }

// recursive solution
// this is exponential runtime
function slowFib(n){
    if (n<2){
        return n;
    }
    return fib(n-1) + fib(n-2)
}

// memiozed recursive solution
//working, very generic memoize function
function memoize(cb){
    const cache = {};
    return function(...args){
        if (cache[args]){
            return cache[args];
        }
        const result = cb.apply(this, args);
        cache[args] = result;
        return result;
    }
}
const fib = memoize(slowFib)

module.exports = fib;
