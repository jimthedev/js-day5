/**
Given a non-negative integer, return an array or 
list of the individual digits in order.

123 => [1,2,3]

1 => [1]

8675309 => [8,6,7,5,3,0,9]
**/

function digitize(n) {
  return n.toString().split('').map(function(numAsString){
    return +numAsString; // or use parseint
  });
}

console.assert(digitize(123)[0] === 1)
console.assert(digitize(8675309)[6] === 9)