var jsonData = "{\n    \"name\" : \"sakthi\",\n    \"age\" : 20\n}";
var user = JSON.parse(jsonData);
console.log("Name : ".concat(user.name, ", Age : ").concat(user.age));
