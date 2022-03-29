class Person {
  constructor(firstName, lastName, dob) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.dob = new Date(dob);
  }

  getBirthYear() {
    return this.dob.getFullYear();
  }

  getFullName() {
    return `${this.firstName} ${this.lastName}`;
  }

}


const person1 = new Person("Joe", "Manager", "4-9-1990");
const person2 = new Person("Anna", "Banana", "4-9-1998");
console.log(person1.getFullName());
console.log(person1.getBirthYear());


 