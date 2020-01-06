
// - Answer without converting number into a string
var isPalindrome = function(number) {
  let palindromeNum = 0;
  let copyNumber = number
   
   if(number < 0) {
       return false;
   }
  
  while(true) {
    // last digit of the number will be the remainder of % 10
    let lastDigit = copyNumber % 10;
    
    // add lastDigit to palindromeNum
    palindromeNum += lastDigit;

    // Mutate copyNumber by dividing it by 10 
    copyNumber = Math.floor(copyNumber / 10);

    if(copyNumber === 0) {
      break
    }

    // increase place value
    palindromeNum *= 10;
  

  }
  
  return palindromeNum === number
};


// - Converting the integer to a string
// var isPalindrome = function(x) {
//   let splitNumber = x.toString().split("")
//   let newArray = []
  
  
//   while (splitNumber.length != 0) {
//     let last = splitNumber.pop();
//     newArray.push(last);
//   }

// if(parseInt(newArray.join("")) === x) {
//   return true;
// }

// return false
// };