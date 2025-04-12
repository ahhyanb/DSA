function inverBinaryTree(root) {

    if (root === null) return null;

    let temp = root.left;
    root.left = root.right;
    root.right = temp;
    
    inverBinaryTree(root.left);
    inverBinaryTree(root.right);

    return root;
}


/*
If root is null, return null
Else
    Swap left and right children
    Recursively call the function on left
    Recursively call the function on right
Return the root

*/