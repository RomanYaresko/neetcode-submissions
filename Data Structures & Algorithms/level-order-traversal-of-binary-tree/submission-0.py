# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
from collections import defaultdict

class Solution:
    def levelOrder(self, root: Optional[TreeNode]) -> List[List[int]]:
        if root is None:
            return []

        layers: defaultdict = defaultdict(list, {0: [root.val]})

        def dfs(start: TreeNode, layer = 0):
            q: deque = deque([])

            if start.left is not None:
                q.append(start.left)
                layers[layer].append(start.left.val)  

            if start.right is not None:
                q.append(start.right)
                layers[layer].append(start.right.val)

            while q:
                curr: TreeNode = q.popleft()
                dfs(curr, layer + 1)

        dfs(root, 1)

        return list(layers.values())
