
class Stack {
    constructor() {
        this.data = [];
        this.top = 0;
    }
    push(element) {
        this.data[this.top] = element;
        this.top = this.top + 1;
    }
    pop() {
        if (!this.isEmpty()) {
            this.top = this.top - 1;
            const value = this.data[this.top];
            this.data.length = this.data.length - 1;
            return this.data.pop();
        }
    }
    peek() {
        return this.data[this.top - 1];
    }
    length() {
        return this.top - 1;
    }
    isEmpty() {
        return this.top === 0;
    }
    print() {
        let last = this.top - 1;
        while (last >= 0) {
            console.log(this.data[last]);
            last--;
        }
    }
    reversePrint() {
        let first = 0;
        while (first != this.top) {
            console.log(this.data[first]);
            first++;
        }
    }
}

let myStack = new Stack();
myStack.push(0);
myStack.push(1);
myStack.push(2);
myStack.push(3);
myStack.push(4);
myStack.push(5);
myStack.pop();
myStack.peek();
myStack.print();
myStack.reversePrint();