class Person {
  constructor(name = "Anonymous", age = 0) {
    this.name = name;
    this.age = age;
  }
  getGreeting() {
    return `Hi. I am ${this.name}!`;
  }
  getDescription() {
    return `${this.name} is ${this.age} year${this.age !== 0 ? "s" : ""} old.`;
  }
}

class Student extends Person {
  constructor(name, age, major) {
    super(name, age);
    this.major = major;
  }
  hasMajor() {
    return !!this.major;
  }
  getDescription() {
    return `${super.getDescription()}${
      this.major ? " Their major is " + this.major : ""
    } `;
  }
}

class Traveler extends Person {
  constructor(name, age, homeLocation) {
    super(name, age);
    this.homeLocation = homeLocation;
  }
  getGreeting() {
    return (
      super.getGreeting() +
      `${this.homeLocation ? ` I'm visiting from ${this.homeLocation}.` : ""}`
    );
  }
}

const me = new Traveler("Guillaume Halb", 26, "Eckbolsheim");
console.log(me.getGreeting());

const other = new Traveler(undefined, undefined, "Nowhere");
console.log(other.getGreeting());
