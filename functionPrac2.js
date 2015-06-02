// function getName( [{name: 'Luisa', age: 25}] ) {
// 	function personName() {
// 	return getName.name;
// 	}
// }
// alert(getName());

var getName = [{ name: 'Luisa', age: 25 }];
var obj = getName.reduce(function(name, current) {
	return name[current.name];	
});
alert(obj.name);

	