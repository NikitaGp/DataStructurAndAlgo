// An animal shelter, which holds only dogs and cats, 
// operates on a strictly"first in, first out"basis. 
// People must adopt either the"oldest"(based on arrival time)of all animalsattheshelter, 
// or they can select whether they would prefer a dog or a cat 
// (and will receive the oldest animal of that type). 
// They cannot select which specific animal they would like. 
// Create the data structures to maintain this system and implement operations such as enqueue, 
// dequeueAny, dequeueDog, and dequeueCat. 
// You may use the built-in Linkedlist data structure.
const [LinkedList] = require('./linked-list');
function Animal( name = '' ) {
    this.order = 0;
    this.name = name;
    
}
Animal.prototype.isOlderThan = function(a) {
    return this.order < a.order;
}
AnimalQueue = (function () {
    var dogQueue = new LinkedList();
    var catQueue = new LinkedList();
    var order = 0;
    function increaseOrderNo() {
        order += 1;
        return order;
    }
    return {
        dogs: dogQueue,
        cats: catQueue,
        addAnimal: function(animal) {
            animal.order = increaseOrderNo();
            if(animal instanceof Dog) {
                dogQueue.insert(animal);
            } else {
                catQueue.insert(animal);
            }
        },
        dequeueDog: function() {
          return  dogQueue.poll();
        },
        dequeueCat: function() {
          return  catQueue.poll();
        },
        dequeueAny: function() {
            if (dogQueue.peek().isOlderThan(catQueue.peek())) {
                return dogQueue.poll();
            }
            return catQueue.poll();
        }
     }
  
})()



function Dog() {
    Animal.call(this, 'Dog');
}
Dog.prototype = Object.create(Animal.prototype);
function Cat() {
    Animal.call(this, 'Cat');
}
Cat.prototype = Object.create(Animal.prototype);


AnimalQueue.addAnimal(new Dog());
AnimalQueue.addAnimal(new Cat());
AnimalQueue.addAnimal(new Cat());
AnimalQueue.addAnimal(new Dog());
AnimalQueue.addAnimal(new Dog());
AnimalQueue.addAnimal(new Cat());
AnimalQueue.addAnimal(new Dog());
console.log('DequeueAny', AnimalQueue.dequeueAny()); //Dog
console.log('DequeueAny', AnimalQueue.dequeueAny()); // Cat
console.log('DequeueCat', AnimalQueue.dequeueCat()); // Cat
console.log('DequeueAny', AnimalQueue.dequeueDog()); //Dog
console.log('Dogs ' + JSON.stringify(AnimalQueue.dogs)); //dog -> dog -> null
console.log('Cats ' + JSON.stringify(AnimalQueue.cats)); //cat -> null
