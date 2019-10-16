var nameVar = "Guy";
var nameVar = "test";
console.log("nameVar", nameVar);

let nameLet = "Jef";
nameLet = "Claire";
console.log("nameLet", nameLet);

const nameConbst = "Frank";
console.log("nameConbst", nameConbst);

const fullName = "Pepe Mead";
let firstName;

if (fullName) {
  firstName = fullName.split(" ")[0];
  console.log(firstName);
}

console.log(firstName);
