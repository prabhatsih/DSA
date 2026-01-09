class DoublyNode {
    constructor(data) {
        this.data = data
        this.next = null
        this.prev = null
    }
}

class DoublyLinkedList {
    constructor() {
        this.head = null //first node
    }

    //Insert Data at end
    insertAtEnd(data) {
        const newNode = new DoublyNode(data)

        //If Doubly Linked List is blank
        if(this.head == null) {
            this.head = newNode
            return;
        }

        //Otherwise Insert data at last position
        let t = this.head;
        while(t.next != null) {
            t = t.next;
        }

        t.next = newNode;
        newNode.prev = t;
    }

    printDLL() {
        let t1 = this.head;
        while(t1.next != null) {
            console.log(t1.data);
            t1 = t1.next;
        }
        console.log(t1.data);
    }

}

const obj = new DoublyLinkedList();
obj.insertAtEnd(10);
obj.insertAtEnd(15);
obj.insertAtEnd(20);

obj.printDLL();