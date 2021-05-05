class Queue {
    constructor() {
        this.elements = [];
    }

    enqueue(element) {
        this.elements.push(element);
    }
    dequeue() {
        return this.elements.shift();
    }
    peek() {
        return !this.isEmpty() ? this.elements[0] : undefined;
    }
    length() {
        return this.elements.length;
    }
    isEmpty() {
        return this.elements.length == 0;
    }
    print() {
        if(this.isEmpty()) return 'empty queue';
        this.elements.forEach(e => console.log(e));
    }
}
let myQueue = new Queue();
console.log(myQueue.print());
for (let i = 1; i <= 7; i++) {
    myQueue.enqueue(i);
}
myQueue.print();
myQueue.dequeue();
myQueue.peek();
myQueue.enqueue(8);
myQueue.print();