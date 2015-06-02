// Write a function called 'getName' which takes a single object argument and returns the value of the 'name' property of the given object.

//     getName({ name: 'Luisa', age: 25 }) should return 'Luisa'

var getName = function (newObject) {
	var newObject = {};
	newObject.name = '';
	newObject.age = '';
	return newObject.name;
}
alert(getName({ name: 'Luisa', age: 25 }));