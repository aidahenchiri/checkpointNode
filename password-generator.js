
// pasword
var generator = require('generate-password');

var passwords = generator.generate({
	length: 10,
	uppercase: false
});

var multiplepasswords = generator.generateMultiple(5, {
	length: 10,
	uppercase: false
});
console.log(passwords)
console.log(multiplepasswords);
