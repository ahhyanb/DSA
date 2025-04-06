/* 
Given a string s, find the length of the longest 
substring that contains at most two different characters.

Input: s = "eceba"
Output: 3
Explanation: The answer is "ece", which has a length of 3.
*/

/* 
// Step 1: Initialize variables
    - Create a 'charMap' (Map) to keep track of characters and their counts
    - Create a 'maxCount' variable and set it to 0 (to store the longest substring length found)
    - Create a 'left' pointer and set it to 0 (this will help us shrink the window when needed)

// Step 2: Go through the string with a 'right' pointer
    - For each character in the string (move 'right' from 0 to the end of the string):
        - If the character is NOT in 'charMap', add it with a count of 1
        - If the character IS in 'charMap', increase its count by 1

        - While the 'charMap' has more than two distinct characters:
            - Decrease the count of the character at index 'left'
            - If the count of that character becomes 0, remove it from the 'charMap'
            - Move the 'left' pointer forward by 1

        - Update 'maxCount' to be the maximum between 'maxCount' and (right - left + 1)

// Step 3: Return 'maxCount'

*/

function findLongest(s) {
    let charMap = new Map();
    let maxCount = 0;
    let left = 0;

    for (let right = 0; right < s.length; right++) {
        if (!charMap.has(s[right])) {
            charMap.set(s[right], 1);
        } else {
           charMap.set(s[right], (charMap.get(s[right])) + 1);
        }

        while(charMap.size > 2) {
            charMap.set(s[left], charMap.get(s[left]) - 1);
        
            if(charMap.get(s[left]) === 0) {
                charMap.delete(s[left]);
            }

            left++;
        }
        
        maxCount = Math.max(maxCount, right - left + 1);
    }

    return maxCount;
}

console.log(findLongest("aaaabc"));