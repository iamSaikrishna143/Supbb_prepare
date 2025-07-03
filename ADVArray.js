//Left Rotate an Array by One Position
// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// let copy = arr[0];

// for (let i = 0; i < arr.length - 1; i++) {
//   arr[i] = arr[i + 1];
// }
// arr[arr.length - 1] = copy;
// console.log(arr); // Output: [2, 3, 4, 5, 6, 7, 8, 9, 10, 1]

//right Rotate an Array by One Position
// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// let copy = arr[arr.length - 1];
// for (let i = arr.length - 1; i > 0; i--) {
//   arr[i] = arr[i - 1];
// }
// arr[0] = copy;
// console.log(arr); // Output: [10, 1, 2, 3, 4, 5, 6, 7, 8, 9]

// Left Rotate an Array by K Positions
// function leftRotate(arr, k) {
//     k = k % arr.length;
//     let copy = arr.slice(0, k);
//     for (let i = 0; i < arr.length - k; i++) {
//         arr[i] = arr[i + k];
//     }
//     for (let i = arr.length - k, j = 0; i < arr.length; i++, j++) {
//         arr[i] = copy[j];
//     }
//     return arr;
// }
// // Example usage:
// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// let k = 3;
// console.log(leftRotate(arr, k)); // Output: [4, 5, 6, 7, 8, 9, 10, 1, 2, 3]

// Right Rotate an Array by K Positions
// function rightRotate(arr, k) {
//     k = k % arr.length;
//     let copy = arr.slice(arr.length - k);
//     for (let i = arr.length - 1; i >= k; i--) {
//         arr[i] = arr[i - k];
//     }
//     for (let i = 0, j = arr.length - k; i < k; i++, j++) {
//         arr[i] = copy[i];
//     }
//     return arr;
// }
// // Example usage:
// let arr2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// let k2 = 3;
// console.log(rightRotate(arr2, k2)); // Output: [8, 9, 10, 1, 2, 3, 4, 5, 6, 7]/

// remove duplicates from sorted array
// var removeDuplicates = function (nums) {
//   if (nums.length === 0) return 0;
//   let i = 0;
//   for (let j = 1; j < nums.length; j++) {
//     console.log(`i: ${i}, j: ${j}, nums[i]: ${nums[i]}, nums[j]: ${nums[j]}`);
//     if (nums[i] !== nums[j]) {
//       i++;
//       nums[i] = nums[j];
//     }
//   }
//   console.log(`Final array: ${nums.slice(0, i + 1)}`);
//   return i + 1; // Return the new length of the array
// };
// // Example usage:   
// let nums = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4];
// let newLength = removeDuplicates(nums);
// console.log(`New length: ${newLength}`); // Output: 5

// Merge Sorted Array

// var merge = function (nums1, m, nums2, n) {
//     let p1 = m - 1;
//     let p2 = n - 1;
//     let p = m + n - 1;
//     while (p1 >= 0 && p2 >= 0) {
//         if (nums1[p1] > nums2[p2]) {
//             nums1[p] = nums1[p1];
//             p1--;
//         } else {
//             nums1[p] = nums2[p2];
//             p2--;
//         }
//         p--;
//     }   
//     // Copy remaining elements of nums2, if any
//     while (p2 >= 0) {
//         nums1[p] = nums2[p2];
//         p2--;
//         p--;
//     }
//     return nums1;
// }
// // Example usage:
// let nums1 = [1, 2, 3, 0, 0, 0];
// let m = 3;
// let nums2 = [2, 5, 6];
// let n = 3;
// console.log(merge(nums1, m, nums2, n)); // Output: [1, 2, 2, 3, 5, 6]

// Best Time to Buy and Sell Stock
// var maxProfit = function (prices) {
//     let maxProfit = 0;
//     let minPrice = Infinity;
//     for (let price of prices) {
//         if (price < minPrice) {
//             minPrice = price; // Update the minimum price
//         } else {
//             maxProfit = Math.max(maxProfit, price - minPrice); // Calculate profit
//         }
//     }
//     return maxProfit; // Return the maximum profit
// };
// // Example usage:
// let prices = [7, 1, 5, 3, 6, 4];
// console.log(maxProfit(prices)); // Output: 5 (Buy at 1, Sell at 6)

// Sort the colors
// var sortColors = function (nums) {
//     let low = 0, mid = 0, high = nums.length - 1;
//     while (mid <= high) {
//         if (nums[mid] === 0) {
//             [nums[low], nums[mid]] = [nums[mid], nums[low]];
//             low++;
//             mid++;
//         } else if (nums[mid] === 1) {
//             mid++;
//         } else {
//             [nums[mid], nums[high]] = [nums[high], nums[mid]];
//             high--;
//         }
//     }
//     return nums; // Return the sorted array
// };
// // Example usage:
// let nums = [2, 0, 2, 1, 1, 0];
// console.log(sortColors(nums)); // Output: [0, 0, 1, 1, 2, 2]


// Kandane's Algorithm for Maximum Subarray
// var maxSubArray = function (nums) {
//     let maxSum = nums[0];
//     let currentSum = nums[0];
//     for (let i = 1; i < nums.length; i++) {
//         currentSum = Math.max(nums[i], currentSum + nums[i]); // Update current sum
//         maxSum = Math.max(maxSum, currentSum); // Update max sum
//     }
//     return maxSum; // Return the maximum subarray sum
// };
// // Example usage:
// let nums = [-2, 1, -3, 4, -1, 2, 1, -5, 4];
// console.log(maxSubArray(nums)); // Output: 6 (subarray [4, -1, 2, 1] has the largest sum of 6)
// Explanation: The function uses Kadane's algorithm to find the maximum subarray sum.
// It initializes `maxSum` and `currentSum` with the first element of the array.
// Then, it iterates through the array, updating `currentSum` to be either the
// current element or the sum of the current element and the previous `currentSum`.
// It updates `maxSum` whenever `currentSum` exceeds it. Finally, it returns `maxSum`,
// which is the maximum subarray sum found in the array.



// majority element
// var majorityElement = function(nums) {
//     let count = 0;
//     let candidate;
//     for (let num of nums) {
//         if (count === 0) {
//             candidate = num; // Set candidate when count is zero
//         }
//         count += (num === candidate) ? 1 : -1; // Increment or decrement count
//     }
//     // Verify if candidate is indeed the majority element
//     count = 0;
//     for (let num of nums) {
//         if (num === candidate) {
//             count++;
//         }
//     }
//     return count > nums.length / 2 ? candidate : null; // Return candidate if it's a majority
// };
// // Example usage:
// let nums = [3, 2, 3];
// console.log(majorityElement(nums)); // Output: 3
// Explanation: The function uses the Boyer-Moore Voting Algorithm to find the majority element
// in the array. It maintains a count and a candidate. When the count reaches zero,
// it sets the current number as the candidate. It increments the count if the current number
// matches the candidate, otherwise decrements it. After finding a candidate, it verifies
// if it appears more than half the time in the array. If so, it returns the
// candidate; otherwise, it returns null. This algorithm runs in O(n) time and uses O(1) space.


// Trapping Rain Water
// var trap = function(height) {
//     let left = 0, right = height.length - 1;
//     let leftMax = 0, rightMax = 0;
//     let waterTrapped = 0;

//     while (left < right) {
//         if (height[left] < height[right]) {
//             if (height[left] >= leftMax) {
//                 leftMax = height[left];
//             } else {
//                 waterTrapped += leftMax - height[left];
//             }
//             left++;
//         } else {
//             if (height[right] >= rightMax) {
//                 rightMax = height[right];
//             } else {
//                 waterTrapped += rightMax - height[right];
//             }
//             right--;
//         }
//     }
//     return waterTrapped; // Return the total amount of trapped water
// }
// // Example usage:
// let height = [0,1,0,2,1,0,1,3,2,1,2,1];
// console.log(trap(height)); // Output: 6
// Explanation: The function uses a two-pointer approach to calculate the amount of water trapped
// between the bars represented by the `height` array. It maintains two pointers, `left 
// and `right`, and two variables `leftMax` and `rightMax` to track the maximum heights
// encountered from both sides. It iterates through the array, moving the pointers inward,
// and calculating the water trapped at each step based on the minimum of the two maximum heights.
// This algorithm runs in O(n) time and uses O(1) space, making it efficient for this problem.

