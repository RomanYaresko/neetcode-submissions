# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next

class Solution:
    def removeNthFromEnd(self, head: Optional[ListNode], n: int) -> Optional[ListNode]:
        if head is None:
            return head

        def getChildStep(head: ListNode, step: int) -> ListNode | None:
            if step <= 1:
                return head.next
            
            child: ListNode | None = head.next
            if child is None:
                return child
            
            return getChildStep(child, step - 1)

        dummy_head: ListNode = ListNode(next=head)
        left: ListNode = dummy_head
        right: ListNode | None = getChildStep(head, n)

        while right is not None:
            left = left.next
            right = right.next
        
        left.next = left.next.next
        return dummy_head.next



