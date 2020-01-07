
var longestCommonPrefix = function(array) {
    
    // Check to see if array is defined
    if(array.length < 1 || array == []) {
     return ""
   }
   
   // sort array from smallest word to largest
   let sortedArray = array.sort((a,b) => a.length > b.length ? 1 : -1)

   // check to see if items in sortedArray match with one another
   let test = sortedArray.map(word => {
     if(word === sortedArray[0]) {
       return true
     } else {
       return false;
     }
   })

   // if all items in array match return matched item
   if(!test.includes(false)) {
     return sortedArray[0]
   }

   let flag = true
   let start = 0;
   let end = 0;

  end += 1
   
  // while sortedArray[0].slice(start, end) word keeps matching the current sortedArray[i].slice(start, end)
  // Keep looping thru each word
  // keep incrementing end by 1
   while(flag) {
     for(let i = 0; i < sortedArray.length; i++) {
        // Once words don't match return the last matching word
       if(sortedArray[0].slice(start,end) != sortedArray[i].slice(start,end)) {
         return sortedArray[0].slice(start, end - 1);
       } 
     }

     end += 1
     
   }
   
};