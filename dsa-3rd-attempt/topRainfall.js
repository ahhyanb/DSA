/* 
"Return the top 3 cities with the most rainfall combined from two linked lists."
*/

/*
input: two LinkedLists
output: an array of top 3 rainfall

create a map to hold the combined linked list
create a while loop to traverse through the linked lists
create a left variable to hold the first head 
create a right variable to hold the second head
if the left is not in the map add it to the map 
if the right is not in the map add it to the map
if the left is already in the map update the rainfall
if the right is already in the map update the rainfall

after you get the results sort the results by the most rainfall to the least rainfall
return the the first 3 cities with the the most rainfall

*/

/*
input: two linked lists
output: node that both linked lists points to

create a left variable to hold the fist node 
create a right variable to hold the secode node 

create a while as long as the left and right are not null 
if the left and right values do not matach
    move the right and left to the next node 
if the left and right points to the same node 
    return that node
after traversing throught the list and no match is found return null

*/

class Node {
    constructor(val, next = null) {
      this.val = val;
      this.next = next;
    }
  }
  
  function findIntersection(headA, headB) {
    let left = headA;
    let right = headB;
  
    while (left !== right) {
      left = left ? left.next : headB;
      right = right ? right.next : headA;
    }
  
    return left;
  }
  
  // Shared tail node
  const shared = new Node("shared");
  
  // List A: a → shared
  const a = new Node("a", shared);
  
  // List B: b → shared
  const b = new Node("b", shared);
  
  // Run the function
  const result = findIntersection(a, b);
  
  console.log("Result:", result); // Should print shared node
  console.log("Same as shared?", result === shared); // true
  
  /*
Initial:
left = a1
right = b1

Step 1:
left → a2
right → x

Step 2:
left → x
right → a1

Step 3: 
left → b1
right → a2

Step 4: 
left → x
right → x

Eventually:
They both point to the same node: Yes points to x

  */