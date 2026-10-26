class ListNode:

    def __init__(self, val: int, next: ListNode | None = None):
        self.val = val
        self.next = next


class LinkedList:
    size: int = 0
    head: ListNode | None = None

    def __init__(self):
        return
        
    def get(self, index: int) -> int:
        if self.size <= index:
            return -1

        current_node: ListNode = self.head
        current_index: int = 0

        while current_index < index:
            current_node = current_node.next
            current_index += 1
        
        return current_node.val

    def insertHead(self, val: int) -> None:
        self.head = ListNode(val=val, next=self.head)
        self.size += 1

    def insertTail(self, val: int) -> None:
        if self.head is None:
            self.insertHead(val)
            return
        
        current_node: ListNode = self.head

        while current_node.next is not None:
            current_node = current_node.next
        
        current_node.next = ListNode(val=val)
        self.size += 1

    def remove(self, index: int) -> bool:
        if self.size <= index:
            return False
        
        dummy_node: ListNode = ListNode(val=0, next=self.head)
        current_node: ListNode = dummy_node
        current_index: int = 0

        while current_index < index:
            current_node = current_node.next
            current_index += 1
        
        current_node.next = current_node.next.next
        self.head = dummy_node.next
        self.size -= 1

        return True

    def getValues(self) -> List[int]:       
        result: List[int] = []
        current_node: ListNode | None = self.head

        while current_node is not None:
            result.append(current_node.val)
            current_node = current_node.next
        
        return result
        
