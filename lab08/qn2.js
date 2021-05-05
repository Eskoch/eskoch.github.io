function Student(firstName, lastName, grades){
  this.firstName  = firstName,
  this.lastName = lastName,
  this.grades = grades;
}
Student.prototype.inputNewGrade = function(newGrade) {
  this.grades.push(newGrade);
}
Student.prototype.computeAverageGrade = function() {
  return this.grades.reduce((accumulator, current, index, array) => accumulator + current/array.length,0);
}

function selectionSort(A) {
    var len = A.length;
    for (var i = 0; i < len - 1; i = i + 1) {
        var j_min = i;
        for (var j = i + 1; j < len; j = j + 1) {
            if (A[j] < A[j_min]) {
                j_min = j;
            } else {}
        }
        if (j_min !== i) {
            swap(A, i, j_min);
        } else {}
    } 
}

function swap(A, x, y) {
    var temp = A[x];
    A[x] = A[y];
    A[y] = temp;
}

Array.prototype.sort = function(){
    selectionSort(this);
}

let st1 = new Student('John', 'Snow', [98,99,100]);
let st2 = new Student('Alpha', 'Bravo', [100,95,100]);
let st3 = new Student('Charlie', 'Delta', [23,2,3,100,100]);

console.log(st1.computeAverageGrade());
console.log(st2.computeAverageGrade());
console.log(st3.computeAverageGrade());
st3.inputNewGrade(99);
console.log(st3.computeAverageGrade());
console.log(st3.grades);
st3.grades.sort();
console.log(st3.grades);
