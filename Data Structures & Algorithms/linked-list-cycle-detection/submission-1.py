# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next

class Solution:
    def hasCycle(self, head: Optional[ListNode]) -> bool:
        def getIthChildNode(i: int, head: ListNode) -> None | ListNode:
            if i <= 1:
                return head.next
            
            child: None | ListNode = head.next
            if child is None:
                return child
            
            return getIthChildNode(i - 1, child)

        if head is None:
            return False

        slow: int = head
        fast: int = getIthChildNode(2, head)

        while True:
            if slow == fast:
                return True
            
            if fast is None:
                return False
            
            slow = getIthChildNode(1, slow)
            fast = getIthChildNode(2, fast)

