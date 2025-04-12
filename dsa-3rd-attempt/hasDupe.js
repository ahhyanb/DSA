function hasDupe(array) {
    // create a map
    // loop through the array
        // for each array check if its in the map
            // if the num is already in the map return true (you found a duplicate)
            // if the num is not in the map move forward to the next number
        // if you go to the end with out finding a dupe return false

        let seen = new Set();

        for (let num of array) {
            if (!seen.has(num)) {
                seen.add(num);
            } else {
                return true;
            }
        }
        return false;
}

console.log(hasDupe([1,2,3,4,4,5])); // true
console.log(hasDupe([1,2,3,4,5])); // false


/*
- Create an empty Set called "seen"
- Create an empty result array
- Loop through the input array
    - If value is not in seen:
        - Add it to seen
        - Push it to result array
- Return result array

*/

function removeDuplicate(nums) {
    let seen = new Set();
    let result = [];

    for (let num of nums) {
        if(!seen.has(num)) {
            seen.add(num);
            result.push(num);
        }
    }

    return result;

}