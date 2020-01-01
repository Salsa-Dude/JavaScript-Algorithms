

var twoSum = function(nums, target) {
  const hash = {}
  for(let i = 0; i < nums.length; i++) {

    let currentNumber = nums[i];
    
    // subtract currentNumber from target to get the missing sum pair
    let neededValue = target - currentNumber;

    // checks if the missing pair is a key in the hash
    // each key has a index value pair
    let index2 = hash[neededValue]
    if(index2 != null) {
      return [index2, i]
    } else {
      // if missing pair is not a key, add the current number as a new key in hash
      // with the value as the index
      hash[currentNumber] = i
    }

  }
}

console.log(twoSum([2, 7, 11, 15], 9))