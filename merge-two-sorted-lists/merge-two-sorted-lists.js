




var mergeTwoArrays = function(arr1, arr2) {
    let hash = {}
    let newArr = []
    
    for(let num of arr1) {
      if(hash[num]) {
        hash[num] += 1
      } else {
        hash[num] = 1
      }
    }
    
    for(let num of arr2) {
      if(hash[num]) {
        hash[num] += 1
      } else {
        hash[num] = 1
      }
    }
    
    for(let key in hash) {
      if(hash[key] == 1) {
        newArr.push(key)
      } else {
        for(let i = 0; i < hash[key]; i++) {
          newArr.push(key)
        }
      }
    }
    
    
    
    return newArr.sort()
    
    };
    
    
    
    mergeTwoArrays([1,2,4],[1,3,4])