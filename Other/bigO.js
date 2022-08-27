/*
the idea of big o notation is to figure out how many times your code will have to loop on itself to complete. 
the first sample has a high big o notation, but bow space notation,
the second sample does the same function significantly faster but uses much more space. 

this is based off the sumTwoNumbers algorithm challenge on leetcode: https://leetcode.com/problems/two-sum/

*/



var twoSum = function(nums, target) {
    
  for (let i = 0; i < nums.length; i++){
  
      let complament = target - nums[i];
      for (let j = 0; j < nums.length; j++) {
          if (nums[j] === complament && i !=j)
          return [i, j];
      }
  }
  
};

/*
Big O notation
4.14.22 office hours recording 
N = nums.length
Time Complexity = N^2

*/


var twoSum = function(nums, target) {
  var complements = {}
  for (let i = 0; i < nums.length; i++){
    
    var complement = target - nums[i];
    complements[complement] = i;

  }

  for (var i = 0; i < nums.length; i++){
    var num =  nums[i];
    var complementIndex = complements[num];

    if(complementIndex != null && complementIndex != i){
      return [i, complementIndex];
    }
  }
};