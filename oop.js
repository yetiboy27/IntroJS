var Person = function(firstName, lastName){
    // var this = {};
    this.firstName = firstName
    this.lastName = lastName
    // return this;
}

var steve = new Person('Steve', 'Smith')

steve.greet() // console.log 'Hello, my name is Steve Smith.'