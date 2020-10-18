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

        
        // leaf = new Node(value)
        // // Traversing all the node with leaf pointer
		// let leaf = this.root;
		// while (leaf != null) {
        //     // if value is less than the current node's value
		// 	if (value < leaf.value) {
        //         // check if current node has any left child
		// 		if (leaf.left == null) {
		// 			leaf.left = new Node(value);
		// 			leaf = null;
		// 		} else {
		// 			leaf = leaf.left;
		// 		}
		// 	} else if (value > leaf.value) {
		// 		if (leaf.right == null) {
		// 			leaf.right = new Node(value);
		// 			leaf = null;
		// 		} else {
		// 			leaf = leaf.right;
		// 		}
		// 	} else {
        //         // If the value is same as the node's value // duplicates
		// 		leaf = null;
		// 	}
		// }
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
}

const tree = new BinarySearchTree();
tree.insert(9);
tree.insert(4);
tree.insert(6);
tree.insert(20);
tree.insert(170);
tree.insert(15);
tree.insert(1);
console.log(tree.lookup(15))
console.log(tree.lookup(1))
console.log(tree.lookup(4))
console.log(JSON.stringify(traverse(tree.root)));

function traverse(node) {
	if (!node) return null;
	const tree = { value: node.value };
	tree.left = node.left === null ? null : traverse(node.left);
	tree.right = node.right === null ? null : traverse(node.right);
	return tree;
}
