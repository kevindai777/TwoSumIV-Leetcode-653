//Objective is the same as 'Two Sum' but the input is now a BST.

class Node {
    constructor(left, right, val) {
      this.left = left
      this.right = right
      this.val = val
    }
}
  
class Tree {
    constructor(root) {
      this.root = null
    }
  
    createRoot(val) {
      this.root = new Node(null, null, val)
    }
  
    addLeftNode(node, val) {
      node.left = new Node(null, null, val)
    }
  
    addRightNode(node, val) {
      node.right = new Node(null, null, val)
    }
}

let tree = new Tree()
tree.createRoot(200)
tree.addLeftNode(tree.root, 500)
tree.addRightNode(tree.root, 700)
tree.addLeftNode(tree.root.left, 600)
tree.addRightNode(tree.root.right, 800)
tree.addLeftNode(tree.root.left.left, 1000)
tree.addRightNode(tree.root.left, 950)
tree.addLeftNode(tree.root.right, 720)
tree.addRightNode(tree.root.right.right, 440)
tree.addLeftNode(tree.root.left.left.left, 560)
tree.addRightNode(tree.root.right.right.right, 810)

let target = 1310


//O(n) solution that iterates over the BST and uses a hashset to keep track of the values.
//If the complement of the value exists in the hashset, then return true.

let set = new Set()

function dfs(node) {
    if (!node) {
        return false
    }

    if (set.has(target - node.val)) {
        return true
    }
    set.add(node.val)

    return dfs(node.left) || dfs(node.right)
}

return dfs(tree.root)