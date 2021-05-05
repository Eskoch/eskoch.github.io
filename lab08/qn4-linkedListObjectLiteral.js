let linkedList = {
  head : null,
  add(node) {
    if(this.head == null) {
      this.head = node;
      this.head.next = -1;
    }
    else {
      let current = this.head;
      while(current.next.data) {
        current = current.next;
      }
      current.next = node;
      node.next = -1;
    }
  },

  remove(val) {
    if(this.head == null) return -1;
    let result = false;
    if(this.head.data == val) {
      this.head = this.head.next;
      result = true;
    }
    let i = -1;
    let current = this.head;
    while(current.next) {
      ++i;
      current = current.next;
      if(current.data == val) {
        result = true;
        let j = -1;
        let toBeRemoved = this.head;
        while(j < i){
          if(j == i-1) {
            var previous = toBeRemoved;
          }
          toBeRemoved = toBeRemoved.next;
          j++;
        }
        previous.next = toBeRemoved.next;
      }
    }
    if(result) console.log('Item ' + val + ' removed successfuly.')
    else console.log('no such element in the list');
  },

  print() {
    if(this.head == null) return -1;
    let current = this.head;
    while(current.next) {
      console.log(current.data);
      current = current.next;
    }
  }
}

let node = {
  data : -1,
  next : -1
}

let link1 = Object.create(linkedList);
let n0 = Object.create(node);
let n1 = Object.create(node);
let n2 = Object.create(node);
let n3 = Object.create(node);
let n4 = Object.create(node);

n0.data = 0;
n1.data = 1;
n2.data = 2;
n3.data = 3;
n4.data = 4;

link1.add(n0);
link1.add(n1);
link1.add(n2);
link1.add(n3);
link1.add(n4);

link1.print();
link1.remove(4);
link1.print();
