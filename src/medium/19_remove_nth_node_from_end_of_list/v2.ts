/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

// 快慢指针
function removeNthFromEnd(head: ListNode | null, n: number): ListNode | null {
  let quickPointer = head, slowPointer = head;
  while(n >= 0 && quickPointer) {
    quickPointer = quickPointer.next;
    n--;
  }
  while (quickPointer && slowPointer) {
    quickPointer = quickPointer.next;
    slowPointer = slowPointer.next;
  }
  if (slowPointer?.next) {
    slowPointer.next = slowPointer?.next?.next;
  }
  return head;
};