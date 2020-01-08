
var isValid = function(string) {
  
  // convert string to array
  let arr = string.split("");
    
  if(arr.length == 1) {
      return false
  }

  // store key and value pairs of open/closed brackets
  let obj = {
    "{" : "}",
    "[" : "]",
    "(" : ")"
  }

  // initialize stack array
  let stack = []

  // iterate thru arr and push every opening bracket to the stack
  // if string is a closing bracket 
  // - check to see if the last opening bracket in the stack matches with the closing bracket
  // if not return false (string is not valid) 
  for(let bracket of arr) {
    if(obj[bracket]) {
      stack.push(bracket)
    } else {
      let lastBracket = stack.pop()
      if(bracket != obj[lastBracket]) {
        return false
      } 
    }

  }
  
  // check to see if every opening bracket in the stack found its closing bracket
  // if not, return false
  if(stack.length != 0) {
    return false
  }

  return true


};