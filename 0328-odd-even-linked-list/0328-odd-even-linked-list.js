/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var oddEvenList = function(head) {
    if(head === null || head.next=== null) return head

    let oddhead = head; let evenhead = head.next; let evenstore = head.next
    while(evenhead && evenhead.next){
        oddhead.next = oddhead.next.next
        evenhead.next = evenhead.next.next

        oddhead = oddhead.next
        evenhead = evenhead.next
    }
    oddhead.next = evenstore
    return head
};