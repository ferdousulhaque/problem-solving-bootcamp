// https://leetcode.com/problems/merge-similar-items/

const mergeSimilarItems = function (items1, items2) {
  let hashmap = new Map();
  for (let i = 0; i < items1.length; i++) {
    let oneItem = items1[i];
    if (!hashmap.has(oneItem[0])) {
      hashmap.set(oneItem[0], oneItem[1]);
    } else {
      let currentValue = hashmap.get(oneItem[0]);
      hashmap.set(oneItem[0], currentValue + oneItem[1]);
    }
  }
  for (let i = 0; i < items2.length; i++) {
    let oneItem = items2[i];
    if (!hashmap.has(oneItem[0])) {
      hashmap.set(oneItem[0], oneItem[1]);
    } else {
      let currentValue = hashmap.get(oneItem[0]);
      hashmap.set(oneItem[0], currentValue + oneItem[1]);
    }
  }
  
  // Specific to Num Sort
  return [...hashmap].sort((a, b) => a[0] - b[0]);
};

// Test Case 1
console.log(
  mergeSimilarItems(
    [
      [1, 1],
      [4, 5],
      [3, 8],
    ],
    [
      [3, 1],
      [1, 5],
    ]
  )
);
