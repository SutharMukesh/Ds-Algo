class Node {
	constructor(value) {
		this.left = null;
		this.right = null;
		this.value = value;
	}
}

class BinarySearchTree {
	constructor() {
		this.root = null;
	}
    getParentNodeOfChild(value){
        // Traversing all the node with leaf pointer
		let leaf = this.root;
		while (leaf != null) {
            // console.log(leaf)
            // if value is less than the current node's value
			if (value < leaf.value) {
                // check if current node has any left child
				if (leaf.left == null || leaf.left.value == value) {
					return leaf
				} else {
					leaf = leaf.left;
				}
			} else if (value > leaf.value) {
				if (leaf.right == null || leaf.right.value == value) {
					return leaf
				} else {
					leaf = leaf.right;
				}
            }
             else {
                // If the value is same as the node's value // duplicates
                // return leaf
                leaf = null;
			}
        }
        return leaf
    }
    
    // O(logn)
	insert(value) {
        // If BST is empty then set the root node
        if (this.root == null) {
			this.root = new Node(value);
			return this;
		}

        let leaf = this.getParentNodeOfChild(value)
        if(value<leaf.value){
            leaf.left = new Node(value)
        }else{
            leaf.right = new Node(value)
        }

		return leaf;
	}

    // O(logn)
	lookup(value) {
        let leaf = this.getParentNodeOfChild(value)
        if(value==leaf.left.value){
            return leaf.left
        }else if(value==leaf.right.value){
            return leaf.right
        }else{
            return null;
        }
    }

    remove(value){
        let currentNode = this.root;
        if(!currentNode){
            return null;
        }

        while(currentNode!==null){
            if(value<currentNode.value){
                
                let leftNode = currentNode.left;
                // Value found on the left side
                if(leftNode.value==value){
                    if(leftNode.left === null && leftNode.right === null){
                        currentNode.left = null;
                    }else if(leftNode.left === null && leftNode.right){
                        // only has right side tree
                        currentNode.left = leftNode.right
                    }
                    else if(leftNode.right===null && leftNode.left){
                        // only has left side tree
                        currentNode.left = leftNode.left
                    }
                    else{
                        // Has both side tree
                        let leftRightNode = leftNode.right;
                        if(leftRightNode.left === null && leftRightNode.right ===null){
                            leftRightNode.left = leftNode.left
                            currentNode.left = leftRightNode
                            return currentNode
                        }
                        while(leftRightNode.left != null){
                            leftRightNode = leftRightNode.left
                        }
                        leftRightNode.left = leftNode.left
                        currentNode.left = leftRightNode
                    }
                    return currentNode
                }
                currentNode = leftNode
            }else if(value>=currentNode.value){
                
                let rightNode = currentNode.right;
                // Value found on the left side
                if(rightNode.value==value){
                    if(rightNode.left === null && rightNode.right === null){
                        currentNode.right = null;
                    }else if(rightNode.left === null && rightNode.right){
                        // only has right side tree
                        currentNode.right = rightNode.right
                    }
                    else if(rightNode.right===null && rightNode.left){
                        // only has left side tree
                        currentNode.right = rightNode.left
                    }
                    else{
                        // Has both side tree
                        let rightLeftNode = rightNode.left;
                        if(rightLeftNode.left === null && rightLeftNode.right ===null){
                            rightLeftNode.right = rightNode.right
                            currentNode.right = rightLeftNode
                            return currentNode
                        }
                        while(rightLeftNode.left != null){
                            rightLeftNode = rightLeftNode.left
                        }
                        rightLeftNode.right = rightNode.right
                        currentNode.right = rightLeftNode
                    }
                    return currentNode
                }
                currentNode = rightNode
            }
        }
    }
}

const tree = new BinarySearchTree();
tree.insert(9);
tree.insert(4);
tree.insert(6);
tree.insert(20);
tree.insert(170);
tree.insert(15);
tree.insert(1);
// console.log(tree.lookup(15))
// console.log(tree.lookup(1))
// console.log(tree.lookup(4))
tree.remove(9);
console.log(JSON.stringify(traverse(tree.root)));

function traverse(node) {
	if (!node) return null;
	const tree = { value: node.value };
	tree.left = node.left === null ? null : traverse(node.left);
	tree.right = node.right === null ? null : traverse(node.right);
	return tree;
}
