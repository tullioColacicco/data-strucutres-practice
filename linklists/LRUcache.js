function Node(key,value){
    this.key = key
    this.value = value
    this.prev = null
    this.next = null

}

function DoubleLinkedList() {
    this.head = null
    this.tail = null
    this.length = 0
}

 DoubleLinkedList.prototype.push = function(key,value){
    let node = new Node(key,value)
    console.log(node)
    if(!this.head){
        this.head = node
        this.tail = node
    }else {
        this.tail.next = node
        node.prev = this.tail
        this.tail = node
    }
    this.length ++
    return node.value
 }

 DoubleLinkedList.prototype.remove = function(node){
    //if node  length is 1
    if(!node.next && !node.prev){
        this.head = null
        this.tail = null
    }
    // if node is the tail
    else if(!node.next){
        this.tail = node.prev
        this.tail.next = null

    } 
    // if node is the head
    else if(!node.prev){
        this.head = node.next
        this.head.prev = null
    } 
    else {
        const prev = node.prev
        const next = node.next
        prev.next = next
        next.prev = prev
    }
 }
let map = {
    a: 1
}

let double = new DoubleLinkedList()

console.log(double.push('a',1))
console.log(double.push('b',2))
console.log(double)

