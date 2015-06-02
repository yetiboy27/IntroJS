// var loop = true;
// while ( loop ) {
//     loop = confirm('Should we keep looping?');
// }

// var foo = 7
// for ( var i = 0; i < foo; i++ ){
//     console.log(i)
// }

// var exclaim = '!';
// var foo = function(word, word2){
//    // console.log(word + word2); 
//    var output = word + word2 + exclaim;
//    return output;
//    // console.log('you wont see this!');
// };

// var bar = foo('hello', ' world');

// // console.log(output);

// var whatever = foo('first', ' second');


// this is an example of closure
// var counterConstructor = function(){
//     var x = 0;
//     var counter = function(){
//         console.log(x++)
//     };
//     return counter;
// };

// var myCounter = counterConstructor();

// myCounter();

// var foo = function(bar, baz, options){
//     if ( bar && baz ){
//         if ( options ){
//             // apply options
//         }
//         console.log(bar, baz)
//     }
//     else {
//         console.log("You didn't supply enough arguments!")
//     }
// }

// foo('yup', 'ok');


// var add = function(){
//     console.log(arguments.length);

// };

// add(5) // return 5

// add(10,3) // return 13

// add(1,2,3,10,10,10) // should return 36



// 0: 'a',
// 1: 'b',
// 2: 'c',
// length: number

// 'name' : 'Steve',
// 'age'  : 12

// var addTwo = function(number){
//     return number + 2
// }

// var addFive = function(number){
//     return number + 5
// }

// var makeAddFunction = function(amount){

//     var add = function(number){
//         return number + amount
//     }
//     return add
// }

// var addTwo = makeAddFunction(2)

// var seven = addTwo(5)

// ['a','b','c']

var greet = function(){ console.log('hi!')}
var person = {
    name : 'steve',
    age  : 12,
    sayHi : greet,
    favoriteAnimals : ['badger', 'lion'],
    familyMembers : {
        mom : 'Janet',
        dad : 'Jeff',
    }
};

for ( var key in person ) {
    // console.log(key) // first iteration: key == 'name'
    console.log(person[key]) // person['name']

}