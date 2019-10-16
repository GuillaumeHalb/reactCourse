const user = {
  name: "Guillaume",
  cities: ["Eckbolsheim", "Grenoble", "Paris"],
  printPlacesLived() {
    this.cities
      .map(city => this.name + " has lived in " + city)
      .forEach(cityMessage => console.log(cityMessage));
  }
};
user.printPlacesLived();

const multiplier = {
  numbers: [10, 20, 30],
  multiplyBy: 3,
  multiply() {
    return this.numbers.map(number => number * this.multiplyBy);
  }
};

console.log(multiplier.multiply());
