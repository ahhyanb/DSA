/*
Problem Statement:
You are given two strings: s and p. You need to find all the starting indices of p's anagrams in s.

The result should be an array of indices where each index represents the start of an anagram of p in s.

Input: s = "cbaebabacd", p = "abc"
Output: [0, 6]
Explanation: 
- The substring "cba" starting at index 0 is an anagram of "abc".
- The substring "bac" starting at index 6 is an anagram of "abc".

*/

/* 

1 - create an array to store results

2 - go through the characters of the string by the lenght of p 
    for example if p.length is 2 
        look at the first 2 characters in the s string
        sort the two characters and sort the p string
        if the current two characters in the s matches the p string
        add the index to the result... 
        if not move the first pointer one, and the second pointer forward that way the selection is still p.length

    keep iterating until there are no more characters

3- return the result array
    
*/

function findAnagrams(s, p) {
    let result = [];
    
    let pCount = new Map();
    
    for (let char of p) {
        if (!pCount.has(char)) {
            pCount.set(char, 1);
        } else {
            pCount.set(char, pCount.get(char) + 1);
        }
    }
    
    let left = 0;
    let right = p.length;

    let windowCount = new Map();

    while (right !== s.length) {
        let current = s.slice(left, right);
        for (let letter of current) {
            if (!windowCount.has(letter)) {
                windowCount.set(letter, 1);
            } else {
                windowCount.set(letter, windowCount.get(letter) + 1);
            }
        }
     


    }



    console.log(result);
    return result;
    
}


const string = "cbaebabacd";
const find = "abc";

findAnagrams(string, find);