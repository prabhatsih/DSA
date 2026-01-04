//Define class for representing a node for singly linked list
class Node {
    constructor(data) {
        this.data = data
        this.next = null
    }
}

//head always points to the first node and if this.head = null then this is a empty linked list.
class SinglyLinkedList {
    constructor() {
        this.head = null
    }


    //Because, We crate a empty linked list above so now we have to create a function through we can insert new node at the end
    insertAtEnd(data) {
        const newNode = new Node(data);

        //If list is empty
        if (this.head === null) {
            this.head = newNode
            return
        }

        //Else head is not empty
        let current = this.head;

        while (current.next !== null) {
            current = current.next
        }

        current.next = newNode;

    }

    //Print List to check that we walk node by node because we haven't index
    printList() {
        let current = this.head;
        while (current !== null) {
            console.log(current.data)
            current = current.next
        }
    }


    //Inserting data at the starting of linked list
    insertAtStart(data) {
        const newNode = new Node(data)
        newNode.next = this.head
        this.head = newNode
    }

    insertAtPosition(data, position) {
        if(position === 0) {
            this.insertAtStart(data)
            return;
        }

        const newNode = new Node(data);
        let current = this.head
        let count = 0

        while(current !== null && count < position - 1) {
            current = current.next;
            count++
        }

        if(current === null) {
            console.log("Position out of range");
            return;
        }

        newNode.next = current.next;
        current.next = newNode;
    }


}

const list = new SinglyLinkedList();

list.insertAtEnd(10);
list.insertAtEnd(20);
list.insertAtStart(5);
list.insertAtPosition(15,2);

list.printList();