// 1. Two Sum
// Given an array of integers, return indices of the two numbers such that they add up to a specific target.
// You may assume that each input would have exactly one solution, and you may not use the same element twice.
// You can return the answer in any order.
// Example:
// Input: nums = [2,7,11,15], target = 9
// Output: [0,1]
// Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
var twosum = function (nums, target) {
  const numMap = {};
  for (let i = 0; i < nums.length; i++) {
    const complement = target - nums[i];
    console.log(
      `i: ${i}, nums[i]: ${
        nums[i]
      }, complement: ${complement}, numMap: ${JSON.stringify(numMap)}`
    );
    if (numMap[complement] !== undefined) {
      return [numMap[complement], i];
    }
    numMap[nums[i]] = i;
  }
};
console.log(twosum([2, 7, 11, 15], 9)); // Output: [0, 1]
// Explanation: The function takes an array of integers and a target integer as input.
//  It returns the indices of the two numbers that add up to the target. The function
// uses a hash map to store the indices of the numbers as it iterates through the array.
//  For each number, it checks if the complement (target - current number) exists in the
//  hash map. If it does, it returns the indices of the two numbers.

//2. Palindrome Number
// Given an integer x, return true if x is palindrome integer.
// An integer is a palindrome when it reads the same backward as forward.
// For example, 121 is a palindrome while 123 is not.
var isPalindrome = function (x) {
  if (x < 0) return false; // Negative numbers are not palindromes
  let reversed = 0;
  let original = x;
  while (original > 0) {
    reversed = reversed * 10 + (original % 10);
    original = Math.floor(original / 10);
  }
  return x === reversed;
};
console.log(isPalindrome(121)); // Output: true
console.log(isPalindrome(-121)); // Output: false
// Explanation: The function takes an integer as input and returns true if it's a palindrome, false otherwise.
// It first checks if the number is negative (negative numbers can't be palindromes).
// Then it reverses the number and checks if it's equal to the original number.

// 3. Longest Common Prefix
// Write a function to find the longest common prefix string amongst an array of strings.
// If there is no common prefix, return an empty string "".
// Example 1:
// Input: strs = ["flower","flow","flight"]
// Output: "fl"
// Example 2:
// Input: strs = ["dog","racecar","car"]
// Output: ""
// Explanation: There is no common prefix among the input strings.
var longestCommonPrefix = function (strs) {
  if (strs.length === 0) return "";
  let prefix = strs[0];
  console.log(`Initial prefix: ${prefix}`);
  for (let i = 1; i < strs.length; i++) {
    console.log(`Checking string: ${strs[i]}`);
    while (strs[i].indexOf(prefix) !== 0) {
      console.log(
        `Prefix not found in ${
          strs[i]
        }, shortening prefix from ${prefix}-----${strs[i].indexOf(prefix)}`
      );
      prefix = prefix.slice(0, -1);
      if (prefix === "") return "";
    }
  }
  return prefix;
};
console.log(longestCommonPrefix(["flower", "flow", "flight"])); // Output: "fl"
console.log(longestCommonPrefix(["dog", "racecar", "car"])); // Output: ""
// Explanation: The function takes an array of strings as input and returns the longest common prefix.
// It initializes the prefix to the first string and iteratively checks each string in the array.
// If the current string does not start with the prefix, it shortens the prefix until a match is found.
// 4. Valid Parentheses
// Given a string s containing just the characters '(', ')', '{', '}', '[' and ']',
// determine if the input string is valid.
// An input string is valid if:
// Open brackets must be closed by the same type of brackets.
// Open brackets must be closed in the correct order.
// Every close bracket has a corresponding open bracket of the same type.
// Example 1:
// Input: s = "()"
// Output: true
// Example 2:
// Input: s = "()[]{}"
// Output: true
// Example 3:
// Input: s = "(]"
// Output: false
// Example 4:
// Input: s = "([)]"
// Output: false
// Example 5:
// Input: s = "{[]}"
// Output: true
var isValid = function (s) {
  const stack = [];
  const map = {
    "(": ")",
    "{": "}",
    "[": "]",
  };
  for (let char of s) {
    if (map[char]) {
      stack.push(map[char]);
    } else if (stack.length === 0 || stack.pop() !== char) {
      return false;
    }
  }
  return stack.length === 0;
};
console.log(isValid("()")); // Output: true
console.log(isValid("()[]{}")); // Output: true
console.log(isValid("(]")); // Output: false
console.log(isValid("([)]")); // Output: false
console.log(isValid("{[]}")); // Output: true
// Explanation: The function takes a string of parentheses as input and checks if it's valid.
// It uses a stack to keep track of the opening brackets. For each character in the string,
// if it's an opening bracket, it pushes the corresponding closing bracket onto the stack.
// If it's a closing bracket, it checks if it matches the top of the stack. If not, it returns false.
// At the end, if the stack is empty, it means all brackets were matched correctly, and it returns true.


// 6. Remove Duplicates from Sorted Array
// Given a sorted array nums, remove the duplicates in-place such that each element appears only once and returns the new length.
// Do not allocate extra space for another array, you must do this by modifying the input array in-place with O(1) extra memory.
// Example 1:
// Input: nums = [1,1,2]
// Output: 2, nums = [1,2]
// Explanation: Your function should return length = 2, with the first two elements of nums being 1 and 2 respectively.
// It doesn't matter what you leave beyond the returned length.
// Example 2:
// Input: nums = [0,0,1,1,1,2,2,3,3,4]
// Output: 5, nums = [0,1,2,3,4]
var removeDuplicates = function (nums) {
    if (nums.length === 0) return 0;
    let i = 0;
    for (let j = 1; j< nums.length; j++) {
        console.log(`i: ${i}, j: ${j}, nums[i]: ${nums[i]}, nums[j]: ${nums[j]}`);
        
        if (nums[i] !== nums[j]) {
            i++;
            nums[i] = nums[j];
        }
    }
    return i + 1;
}
console.log(removeDuplicates([0, 0, 1, 1, 1, 2, 2, 3, 3, 4])); // Output: 5
// Explanation: The function takes a sorted array as input and removes duplicates in-place.
// It uses two pointers: one to track the position of unique elements and another to iterate through the array.
// When a unique element is found, it is moved to the position of the next unique element.
// Finally, it returns the length of the modified array.

//7. larget word in a sentence
// Given a string s, return the length of the longest word in the sentence.
// A word is defined as a maximal substring consisting of non-space characters only.
// Example 1:
// Input: s = "The quick brown fox jumped over the lazy dog"
// Output: 6
// Explanation: The longest word in the sentence is "jumped", which has a length of 6.
var lengthOfLongestWord = function (s) {
  const words = s.split(" ");
  let maxLength = 0;
  for (let word of words) {
    console.log(`word: ${word}, length: ${word.length}`);
    maxLength = Math.max(maxLength, word.length);
  }
  return maxLength;
};
console.log(lengthOfLongestWord("The quick brown fox jumped over the lazy dog")); // Output: 6
// Explanation: The function takes a string as input and splits it into words.      
// It then iterates through each word, checking its length and updating the maximum length found.
// Finally, it returns the length of the longest word.



// Most Asked Interview Questions hashtag#JavaScript - Part 06

// 1.       Write a function to find the longest word in a sentence.
// 2.       How do you check if a string is a palindrome?
// 3.       Write a program to remove duplicates from an array.
// 4.       Program to reverse a string without using built-in methods.
// 5.       Find the maximum count of consecutive 1’s in an array.
// 6.       Write a function to calculate the factorial of a given number.
// 7.       Merge and sort two sorted arrays. For example: [0, 3, 4, 31] and [4, 6, 30] should return [0, 3, 4, 4, 6, 30, 31].
// 8.       Check if every value in one array has a corresponding squared value in another array.
// 9.       Check if one string can be rearranged to form another.
// 10.   Extract unique objects from an array of objects.
// 11.   Write a program to find the maximum number in an array.
// 12.   Filter and return only even numbers from an array.
// 13.   Check if a number is prime.
// 14.   Find the largest number in a nested array.
// 15.   Generate a Fibonacci sequence up to a specified number of terms.
// 16.   Count the occurrences of each character in a string.
// 17.   Sort an array of numbers in ascending order.
// 18.   Sort an array of numbers in descending order.
// 19.   Reverse the order of words in a sentence without using the reverse() method.
// 20.   Flatten a deeply nested array into a single-dimensional array.
// 21.   Convert a string input into a nested object (e.g., "a.b.c", "someValue" should return {a: {b: {c: "someValue"}}}).
// 22.   Write a function that converts an object into a query string (e.g., {name: "John", age: 30} to "name=John&age=30").
// 23.   Implement a function to deep clone an object.
// 24.   Write a function to find the index of the first non-repeating character in a string.
// 25.   Check if a number is an Armstrong number (e.g., 153 = 1³ + 5³ + 3³).