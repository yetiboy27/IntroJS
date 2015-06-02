// var things = ['a','b','c']
//              [  0 , 1  , 2  ]

// for (var i = 0; i < things.length; i++ ){
//     console.log(things[i])
// }

// things.forEach(function(element, index, array){
//     console.log(element)
// })

// var newThings = things.map(function(element, index, array){
//     return index;
// })
// newthings : [0, 1, 2]

// console.log('hi')

// var numbers = [1,3,4,7]
// var sum = numbers.reduce(function(total, current){
//     return total + current
// }, 0)

// console.log(sum)

var numbers = [2, 4, -3, -10, 11, 22]

var positive = numbers.filter(function(element){
    if ( element >= 0 ) {
        return true
    }
    else {
        return false
    }
})