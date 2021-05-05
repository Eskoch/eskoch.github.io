class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
    }

    add(element) {
        let node = new Node(element)
        let current = this.head;

        if(this.head == null) {
            this.head = node;
        }
        else {
          while(current.next) {
            current = current.next;
          }
          current.next = node;
        }
    }

    remove(element) {
        if(this.head == null) return false;
        if(this.head.data == element) {
            this.head = this.head.next;
            return true;
        }
        let curr = this.head;
        let prev = curr;
        while(curr.next) {
            prev = curr;
            curr = curr.next;
            if(curr.data == element) {
                prev.next = curr.next;
                return true;
            }
        }
        return false;
    }

    print() {
        let arr = [];
        let i = 0;
        let current = this.head;
        while(current) {
            arr[i] = current.data;
            current = current.next;
            i++;
        }
        console.log('[' + arr.join() + ']');
    }
}

let list = new LinkedList();
list.add(0);
list.add(1);
list.add(2);
list.add(3);
list.add(4);
list.print();
list.remove(4);
list.print();