
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */

function ListNode(val, next) {
  this.val = (val === undefined ? 0 : val)
  this.next = (next === undefined ? null : next)
}

function nodeList2arr(node) {
  const result = [];
  let currentNode = node;
  while (currentNode) {
    result.push(currentNode.val);
    currentNode = currentNode.next;
  }
  return result;
}

function arr2nodeList(arr) {
  const nodeList = new ListNode(arr[0]);
  let currentNode = nodeList;
  for (let i = 1; i < arr.length; i++) {
    currentNode.next = new ListNode(arr[i]);
    currentNode = currentNode.next;
  }
  return nodeList;
}

var addTwoNumbers = function (l1, l2) {
  const reversedList1 = nodeList2arr(l1);
  const reversedList2 = nodeList2arr(l2);
  const length1 = reversedList1.length;
  const length2 = reversedList2.length;
  const minLength = Math.min(length1, length2);
  const maxLength = Math.max(length1, length2);
  const longerList = length1 > length2 ? reversedList1 : reversedList2;
  let isFurther = false;
  const result = [];
  let i = 0;
  for (; i < maxLength; i++) {
    let sum = i < minLength ?
      reversedList1[i] + reversedList2[i] :
      longerList[i];
    if (isFurther) {
      sum++;
    }
    isFurther = sum >= 10
    result.push(sum % 10);
  }
  if (isFurther) {
    result.push(1);
  }
  return arr2nodeList(result);
};