class Set {
    constructor() {
        this.items = [];
        
    }

    add(e) {
        if(!this.has(e)) {
            this.items.push(e);
        }
    }
    delete(e) {
        if(!this.has(e)) return 'no such element';
        this.items.splice(this.items.indexOf(e), 1);
    }
    getItem(e) {
        if(!this.has(e)) return 'no such element';
        return this.items.filter(element => element == e);
    }
    has(e) {
        console.log(this.items.includes(e));
        return this.items.includes(e);
    } 
    clear() {
        this.items.splice(0, this.items.length);
    }
    print() {
      for(let i = 0; i < this.items.length; i++) {
        console.log('item ' + this.items[i]);
      }
    }
}

let mySet = new Set();
mySet.add(1);
mySet.add(2);
mySet.add(3);
mySet.add(4);
mySet.add(5);
mySet.print();
mySet.add(3);
console.log(mySet.getItem(2));
console.log(mySet.delete(5));
console.log(mySet.delete(3));
console.log(mySet.delete(1));
mySet.print();
console.log('------------------')
mySet.clear();