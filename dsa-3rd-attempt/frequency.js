// Given an array of strings, return an array of objects like { word, frequency }, 
// sorted by highest frequency first, and alphabetically if two words have the same frequency.


/* 
create a map to create the seen word
iterate through the array
    for each word check the map if it already exists in there
        if the word is not in the map; add it to the map as word as the key and 1 to keep a tally of the word
        if the word is in the map get the word from the map and update the frequency by addidng 1
after you go through the array

reconstruct the map into an array
    create an array of object {word: word, frequency: frequency} 
    iterate through the array and sort the frequency from highest to least
        if you have a frequency that are the same then check the word and sort the word alphabetically
*/


function countFrequency(array) {
    const wordMap = new Map();

    for (let word of array) {
        if (!wordMap.has(word)) {
            wordMap.set(word, 1);
        } else {
            wordMap.set(word, wordMap.get(word) + 1);
        }
    }

    let result = Array.from(wordMap).map(([word, frequency]) => ({word: word, frequency: frequency}));
    
    // sort results
    result.sort((a, b) => {
        if (b.frequency !== a.frequency) {
            return b.frequency - a.frequency;
        } else {
            return a.word.localeCompare(b.word)
        }
    })

}