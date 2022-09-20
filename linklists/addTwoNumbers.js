function ListNode(value, next) {
    this.value = value;
    this.next = null;
  }
  function makeList(arr) {
    let head = new ListNode(0);
    let tail = head;
    for (item of arr) {
      tail.next = new ListNode(item);
      tail = tail.next;
    }
    return head.next;
  }

let l1 = makeList( [9,9,9,9,9,9,9])
let l2 = makeList([5,6,4])
var addTwoNumbers = function(l1, l2) {
    let answer = new ListNode(0)
    let head = answer
    let sum = 0
    let remainder = 0
l1 = rev(l1)
l2=rev(l2)
// let answer = []
    while(l1.next!=null || l2.next!=null){
        console.log(l1.value)
        if(remainder>0) {
            sum =l1.value + l2.value + remainder
        remainder=0}
        else{
            sum =l1.value + l2.value + remainder
            
        }
        console.log(l1.value,l2.value)
        console.log(sum)
        if(sum >9){
            remainder= 1
            sum = sum - 10
            console.log(remainder)
        }
        // answer.push(sum)
        let next = new ListNode(sum)
        answer.next = new ListNode(sum)
        answer= answer.next
        console.log(sum)
        l1 = l1.next
        l2=l2.next? l2.next : new ListNode(0)    }
        return head.next

};
function rev(head){
let current = head
let prev = null
while(current!= null){
    let next = current.next;
    current.next = prev;
    prev = current;
    current = next;
    
}
return prev

}

// console.log(rev(l1))
console.log(addTwoNumbers(l1,l2))