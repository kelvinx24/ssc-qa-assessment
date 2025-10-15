# **Take-Home Assignment Part 1: "Functional Programming - Remove Duplicates"**

## **Problem**
Write a **pure function** that removes duplicates from a list/array while preserving the original order of first occurrences.

**Choose ONE language:** JavaScript, Python, C#, or Go

**Example:**
```
Input:  [1, 2, 3, 2, 4, 1, 5]
Output: [1, 2, 3, 4, 5]
```

## **Requirements**
1. **Pure function** - same input always gives same output, no side effects
2. **Don't modify** the original input 
3. **Use functional programming approaches** (built-in methods like filter, map, etc.)
4. **Test your solution** with the provided test cases

## **Test Cases**
Your function should handle these cases:

```javascript
// JavaScript example:
removeDuplicates([1, 2, 3, 2, 4, 1, 5])  // [1, 2, 3, 4, 5]
removeDuplicates([1, 1, 1])              // [1]
removeDuplicates([])                     // []
```

```python
# Python example:
remove_duplicates([1, 2, 3, 2, 4, 1, 5])  # [1, 2, 3, 4, 5]
remove_duplicates([1, 1, 1])              # [1]
remove_duplicates([])                     # []
```

## **Deliverables**
- Working function that passes the test cases
- Brief comment explaining your approach

## **Evaluation Focus**
- **Functional Programming**: Uses FP concepts (pure functions, immutability)
- **Code Quality**: Clean, readable implementation
- **Correctness**: Function works as specified

**Time Estimate:** 30 minutes

## **Notes**
- Focus on demonstrating functional programming understanding
- Simple, clear solutions are preferred over complex ones