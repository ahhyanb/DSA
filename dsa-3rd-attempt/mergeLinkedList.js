function combineMonthlyRainfallTotals(list1, list2) {

    let listMap = new Map();

    function traverseList(list) {
        let current = list.head;
        while (current) {
            let { city, rainfall } = current.value;
            if (!listMap.has(city)) {
                listMap.set(city, rainfall);
            } else {
               listMap.set(city, listMap.get(city) + rainfall);
            }
            current = current.next;
        }
    }

    traverseList(list1);
    traverseList(list2);

    return Array.from(listMap.entries().map(([ city, rainfall ]) => ({city: city, rainfall: rainfall})));

}

/* 

input: two linked lists
output: an array of objects with city and rainfall totals

create a map to hold the seen cities in the list
create a function to traversre down the linkedlist and insert to map
    in the function create a for loop to traverse down the list
        if the city is not in the map; add the city to the map as the key and the value to be the rainfall
        if the city is already in the map; get the city and update the rainfall
call the new function with the list1 to the map
call the new function with list2 to add to the map

then convert the map to an array 
    use the key of the map as the city and the value of the map to be the rainfall
(i may need to look up a way to convert a map to an array)

return the newly converted map which is an array
*/