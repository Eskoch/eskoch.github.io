function Node(data) {
  this.data = data;
  this.next = -1;
}

function LinkedList(head = null) {
  this.head = null;
}

Node.prototype.add = function(node) {
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
}

Node.prototype.remove = function(val) {
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
}

Node.prototype.print = function() {
  if(this.head == null) return -1;
    let current = this.head;
    while(current.next) {
      console.log(current.data);
      current = current.next;
    }
}

let node0 = new Node(0);
let node1 = new Node(1);
let node2 = new Node(2);
let node3 = new Node(3);
let node4 = new Node(4);

let list = new LinkedList();
list.add(node0);
list.add(node1);
list.add(node2);
list.add(node3);
list.add(node4);
list.print();
list.remove(4);
list.print();
