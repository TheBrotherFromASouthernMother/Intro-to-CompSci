//implement a singly linked list

function LinkedList(){
  this.head = null;
  this.length = 0;
}


LinkedList.prototype.add = function(val){
  //create memory reference to next node
    var node = {
       value: val,
       next: null
    }

    let current;
    // If there are no nodes in the linked list, set the given value as the list's head
    if(!this.head){
      this.head = node;
    }
    else {
      //Starting from the head of the list finds the end of the list and places the current node at it
      current = this.head;
      while(current.next !== null){
        current = current.next;
      }
      current.next = node;
    }
    this.length ++;
  }

LinkedList.prototype.remove = function(val) {
  let currentNode = this.head;
  if (!currentNode) {
    return -1;
  }

  while(currentNode.next) {
    if (currentNode.value == val) {
      console.log("breara")
      previousNode.next = currentNode.next;
      this.length --;
      break;
    }
    previousNode = currentNode;
    currentNode = currentNode.next;
  }

  if (currentNode.val == val) {
    previousNode.next = currentNode.next;
  }

  return this.length;

}

const list = new LinkedList();

list.add(1)
list.add(2)
// list.add(3)

console.log(list.head)
console.log(list.head.next)
console.log(list.length)

list.remove(2);

console.log(list)