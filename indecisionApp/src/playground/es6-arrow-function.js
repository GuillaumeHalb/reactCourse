const square = function(x) {
  return x * x;
};

console.log(square(3));

const squareArrow = x => x * x;

console.log(squareArrow(4));

const getFirstName = name => {
  return name.split(" ")[0];
};

// const getFirstName = name => name.split(" ")[0];
console.log(getFirstName("Jack Sparrow"));
