/*

Problem Statement:
You are given an array of strings where each string represents a 
line of text. Your task is to build an index where:

Each unique word is a key in a map.

The value for each key is a linked list of nodes.

Each node contains:
    lineNumber: The line where the word appears.
    position: The index of the word in that line.
    next: A reference to the next occurrence of the word.

*/


/*

1 - define a class node to create individual node
    node needs to hold 3 things 
        line number: line where the word appears
        position: the spot of the word in the line
        next: points to the next occurence of the word
    The node should be able to connect to another node by using "next".


2 - define linked list class to join the nodes
    linked list needs to do 2 main things
        1 - store the first node 
        2 - add a new node to the list
            if its empty add it as the head
            if not add it to the end of the list

3 - define the function to find all the words and create the index
    function needs to: 
        1 - make an empty map to hold the words and their lists
        2 - go through each line of strings
            starting the line from 0
        3 - go through each word of the line
            avoid spaces
            create a list of those words using an array

            for each word we need to remember where it is in the list and 
            its spot in the list
                add each word to the map and 
                if the word isnt seen yet add a linkedList and store the lineNumber, position, and next to hold the next occurrence
                if the word is in the map get that word in the map and add the occurrence to that node
        4 - return the map as an object
    
        

*/