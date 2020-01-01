

var reverse = function(num) {
  if (num === 0) return 0
 
 // check if number is negative
 const sign = num < 0 ? -1 : 1
 let reverse = 0 
 // get absolute value of number
 let tempNum = Math.abs(num)
 
 while (true) {
    // divide tempNum by 10 to get remainder
    // first remainder will be the last digit of the number
    reverse += tempNum % 10
    
    // mutate tempNum by diving it by 10 and rounding it to the nearest integer
    tempNum = Math.floor(tempNum / 10)
    
    if (tempNum === 0) break
    
    // mutiply reverse by 10 to increase place value
    reverse *= 10
  
 }

 reverse *= sign
 
 if (reverse < Math.pow(-2, 31) || reverse > Math.pow(2, 31) - 1) {
     return 0
 }
 
 return reverse
 
}

// Another way using arrays

//     let arr = x.toString().split("")
//     let reverseNumber;
    
//     if(arr[0] == "-") {
//         arr.shift()
//         reverseNumber = parseInt(-Math.abs(parseInt(arr.reverse().join(""))))
//     } else {
//         reverseNumber = parseInt(arr.reverse().join(""))
//     }
    
//     if(reverseNumber < (Math.pow(2, 31) * -1) || reverseNumber > (Math.pow(2, 31) - 1)) {
//         return 0
//     } 

//     return reverseNumber
// };
    
