class node:
    def __init__(self, value):
        self.data = value
        self.left = None
        self.right = None

class Tree:
    def createNode(self, data):
        return node(data)
    
    def insert(self, node, data):
        if node is None:
            return self.createNode(data)
        if data < node.data:
            node.left = self.insert(node.left, data)
        else:
            node.right = self.insert(node.right, data)
        return node
    
    def traverse_inorder(self, root):
        if root is not None:
            self.traverse_inorder(root.left)
            print(root.data)
            self.traverse_inorder(root.right)
            
        

#Driver Code
tree = Tree()
root = tree.createNode(5)
print(root.data)
tree.insert(root,2)
tree.insert(root, 10)
tree.insert(root, 7)
tree.insert(root, 15)
# tree.insert(root, 12)
# tree.insert(root, 20)
# tree.insert(root, 30)
# tree.insert(root, 6)
# tree.insert(root, 8)
