function concordance(string) {

    let map = new Map;

    let words = string.split(" ");
    console.log(words);

    for (let i = 0; i < words.length; i++) {

        if (!map.has(words[i])) {
            map.set(words[i], [i]);
        } else {
            map.get(words[i]).push(i);
        }
    }

    return Object.fromEntries(map);
}

/*
    Problem: You are given a string of text. 
    Your task is to generate a concordance for the text, 
    where the concordance is a list of unique words along 
    with their positions (index of occurrence) in the text.
*/

// split the string to each word and set them in an array
    // create a map to hold the seen words
        // for each word check if its in the map
        // if its in the map push or add the index to that word's value
        // if its not in the map add the word and the index
// return the map but convert it into an object;
    

console.log(concordance("the quick brown fox jumped over the lazy dog"));