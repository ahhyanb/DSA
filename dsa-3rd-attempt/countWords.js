/*
You're given an array of strings representing words. 
Return an array of objects, where each object contains 
a word and its frequency, sorted by most frequent to least frequent.
If two words have the same frequency, sort them alphabetically.

inout: array of strings
outputt: array of objects with the word and frequency

create a map to hold the result and the seen words
for each string
    if the string is not in the map
        add it to the map with the word as the key and the number 1 as the value to signify its frequency
    if the string is already in the map
        simply get the word in the map and update the frequency add 1
after you go through the whole array, 
    sort the map by descending order by most frequent to least frequent

return the sorted map as an array




*/


function countWords(array) {

}