/**
 * Remove duplicates from an array while preserving the order
 * of first occurrences.
 *
 * @param {Array} arr - The input array containing elements.
 * @returns {Array} A new array with duplicate elements removed.
 */
function removeDuplicates(arr) {
  const seenSet = new Set(); 

  const isNewElement = (x) => {
    if (!seenSet.has(x)) {
      seenSet.add(x);
      return true;
    }
    return false;
  };

  return arr.filter(isNewElement);
}

// Printing test cases below for reviewer convenience — can be disregarded if unnecessary.
console.log(removeDuplicates([1, 2, 3, 2, 4, 1, 5])); // [1, 2, 3, 4, 5]
console.log(removeDuplicates([1, 1, 1]));             // [1]
console.log(removeDuplicates([]));                    // []