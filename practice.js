class Node {
    constructor(val) {
        this.val = val;
        this.next = null
    }
}

class SLL {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0
    }

    push() {
        let newNode = new Node(55)
        if (this.head == null) {
            this.head = newNode
            this.tail = this.head
        } else {
            this.tail.next = newNode
            this.tail = newNode
        }

        this.length++
        return this.newNode

    }
}

let list = new SLL()
list.push(55)
console.log(SLL)