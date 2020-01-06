/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
  
  // convert string to an array
  let arr = s.split("")
  
  let obj = {
     "I" : 1,
     "IV" : 4,
      "V" : 5,
      "IX" : 9,
      "X" : 10,
      "XL" : 40,
      "L" : 50,
      "XC" : 90,
      "C" : 100,
      "CD" : 400,
      "D" : 500,
      "CM" : 900,
      "M" : 1000
  }
  
  let sum = 0;
  
  // iterate thru array
  for(i = 0; i < arr.length; i++) {
    
    // check to see if the current and previous number add up to a possible key in obj.
    // if it does then add the value of that key to sum
    if(obj[arr[i] + arr[i + 1]]){
      sum += obj[arr[i] + arr[i + 1]]
      continue
    }
    // check to see if the previous and current number add up to a possible key in obj
    // if it does then don't do anything since the value of the key has already been added from our first if statment
    else if(obj[arr[i - 1] + arr[i]]) {
      continue
    }
      
      sum += obj[arr[i]]
  }
  
  return sum;
  
};