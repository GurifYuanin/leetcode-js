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
class ListNode {
  val: number
  next: ListNode | null
  constructor(val?: number, next?: ListNode | null) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
  }
}

// 算出总长度相减得到正序的位置
function removeNthFromEnd(head: ListNode | null, n: number): ListNode | null {
  let depth = 0;
  let point = head;
  while(point) {
    depth++;
    point = point.next;
  }
  point = head;
  for (let m = depth - n; m > 1; m--) {
    if (point) {
      point = point?.next;
    } else {
      break;
    }
  }
  if (point && point.next) {
    point.next = point.next?.next;
  }
  return head;
};