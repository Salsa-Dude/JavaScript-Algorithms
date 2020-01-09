
var removeDuplicates = function(nums) {
    let hash = {}

    for(let i = 0; i < nums.length; i++) {
        // index for value (nums[i]) exists in hash
        if(hash[nums[i]]) {
            nums.splice(i,1);
            i--; // decrease counter because of splice
        } else {
            hash[nums[i]] = 1
        }
    }

    return nums.length

};