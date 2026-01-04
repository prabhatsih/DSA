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


}

const list = new SinglyLinkedList();

list.insertAtEnd(10);
list.insertAtEnd(20);
list.insertAtStart(5);

list.printList();