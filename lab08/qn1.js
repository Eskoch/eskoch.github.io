let student = {
  firstName  : firstName,
  lastName : lastName,
  grades : [],
  inputNewGrade(newGrade) {
    this.grades.push(newGrade);
  },
  computeAverageGrade() {
    return this.grades.reduce((accumulator, current, index, array) => accumulator + current/array.length,0);
  };
}

let st1 = Object.create(student);
st1.firstName = 'John';
st1.lastName = 'Snow';
st1.inputNewGrade(98);
st1.inputNewGrade(99);
st1.inputNewGrade(100);
let st2 = Object.create(student);
st2.firstName = 'Alpha';
st2.lastName = 'Bravo';
st2.inputNewGrade(100);
st2.inputNewGrade(100);
st2.inputNewGrade(100);

st1.computeAverageGrade();
st2.computeAverageGrade();
