const numbers = [10,7,35,14,52,6,17,85,91];
let sum = numbers.filter(elm => elm > 20).reduce((accum, elm, index, array) =>  accum + elm, 0);
console.log('Q1. Sum of elements which are greater than 20: ' + sum);

const strings = ['Dodge', 'Toyota', 'Chevrolet', 'Nissan', 'Ferrari', 'Bugati'];
let longStrings = strings.filter(elm => elm.length >= 5).filter(elm => elm.includes('a'));
console.log('Q2. List of strings whose length is greater than 5 and that contains character a: ' + longStrings);


function Employee(firstName, lastName, birthDate) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.birthDate = birthDate;

  this.getFullName = function(){
    return this.firstName + ' ' + this.lastName;
  }
  this.getAge = function(){
      let date = new Date();
      let agems = date.getTime() - this.birthDate.getTime();
      let ageDate = new Date(agems);
      return Math.abs(ageDate.getFullYear()-1970);
  }
}

const employees = [new Employee('John', 'Snow', new Date('1972-2-14')),
                   new Employee('Edword', 'Snowden', new Date('1982-05-23')),
                   new Employee('Kevin', 'Mitnik', new Date('2002-05-23'))];

const olderEmployees = employees.filter(elm => elm.getAge() > 20).map(elm => elm.getAge());
const youngerEmployees = employees.filter(elm => elm.birthDate.getFullYear() > 2000).map(elm => elm.getFullName());

console.log('Q3.1. Employees age which are above 20 years old: ' + olderEmployees);
console.log('Q3.2. Employees full name born after 2000: ' + youngerEmployees);
