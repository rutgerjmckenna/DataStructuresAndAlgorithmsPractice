// Reference Type

const object1 = {value: 10};
const object2 = object1;
const object3 = {value: 10};

//Object1 is equal to object2, but object3 is not equal to them. Why?

//Object1 gets an address (think of it as a box) and is stored
//Object2 looks at object one, references it, and becomes equal to it

//Object3 on the otherhand is a new object, creating a new space in memory
//and therefore a different reference (or a different box for a visual example)

[] === [];

//This is false as well, since we are creating two seperate data structures here

//----------------------------------------------------------------

// Context
this.alert("hello")//'This' refers to which object its inside of
//This usually means whatever is to the left of the '.'

const object4 = {
    a: function() {
        console.log(this);
    }
}
//'This' is now equal to "{a: f}"

//----------------------------------------------------------------

// Instantiation
class Player {
    constructor(name, type) {
        this.name = name;
        this.type = type;
    }
    introduce() {
        console.log(`Hi I am ${this.name}, I'm a ${this.type}`)
    }
}

class Wizard extends Player {
    constructor(name, type) {
        super(name, type)
    }
    play() {
        console.log(`I'm a ${this.type}`)
    }
}

const wizard1 = new Wizard('Rutger', 'Healer');
const wizard2 = new Wizard('James', 'Dark Magician');