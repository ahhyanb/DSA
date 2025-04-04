// function mergeIntervals(array) {

// }


/*
Problem 2: Merge Intervals
Description: Given an array of intervals where intervals[i] = [start_i, end_i], merge all overlapping intervals and return an array of the non-overlapping intervals that cover all the intervals in the input.​

Approach: Sort the intervals based on the start time. Iterate through the sorted intervals, merging overlapping ones by comparing the current interval with the previous one.​

Example:

javascript
Copy
Input: intervals = [[1,3], [2,6], [8,10], [15,18]]
Output: [[1,6], [8,10], [15,18]]

*/

// sort the intervals by their start time
// make a new array to hold the merged times
// add the first array in the merged list
// iterate through the intervals
    // if the merged list second number is smaller than the current first name
    // update the second number from the last interval in the merged list with the number bigger between the current intervals number and the last intervals second number in the merged list
        // if not push the current array in the merged list
// return the merged list




function mergeIntervals(array) {

    if (array.length === 0) return [];
    
    array.sort((a, b) => a[0] - b[0]);

    let merged = array[0];
    console.log("this is the merged list ", merged);

    for (let i = 1; i < array.length; i++) {
        let current = array[i];
        console.log("this is the current number in the iteration ", current);

        let lastMerged = merged[merged.length - 1];
        console.log("this should be the last number in the merged list ", lastMerged);

        if (lastMerged[1] >= current[0]) {
            lastMerged[1] = Math.max(current[1], lastMerged[1]);
        } else {
            merged.push(current);
        }

    }
    console.log(merged)
    return merged;
}


let intervals = [[1,3], [8,10], [15,18], [2,6]];
mergeIntervals(intervals);
