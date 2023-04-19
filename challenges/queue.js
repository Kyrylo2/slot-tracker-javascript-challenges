/**
 
A simple Queue class with basic methods.
*/
class Queue {
  /*
Creates a new Queue instance with an empty array of items.
*/
  constructor() {
    this.items = [];
  }
  /**
    
    Returns the number of items in the queue.
    @returns {number} The size of the queue.
    */
  size() {
    return this.items.length;
  }
  /**
    
    Adds an item to the end of the queue.
    @param {*} item - The item to be added.
    */
  add(item) {
    this.items.push(item);
  }
  /**
    
    Removes and returns the oldest item from the queue.
    Returns null if the queue is empty.
    @returns {*} The oldest item from the queue, or null if the queue is empty.
    */
  get() {
    if (this.size() === 0) {
      return null;
    }
    return this.items.shift();
  }
}
module.exports = Queue;
