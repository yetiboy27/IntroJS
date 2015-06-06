// this is the execution context of a function

var bar = function(){
    console.log(this)
}

var myObj = {
    foo : bar
}