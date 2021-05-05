class Student {
    constructor(sid, answers = []) {
        this.sid = sid; 
        this.answers = answers; 
    }
    // add student's question(qid, answer) to answers array
    addAnswer(question) {
        this.answers.push(question);
    }
}

class Question {
    constructor(qid, answer) {
        this.qid = qid; 
        this.answer = answer; 
    }
    // check if the student answer is correct 
    checkAnswer(ans) {
        return this.answer === ans;
    }
}

class Quiz {
    constructor(questionsAndAnswers = [], students = []) {
        this.questions = new Map();  
        questionsAndAnswers.forEach(q => this.questions.set(q.qid, q.answer));
        this.students = students;
    }
    scoreStudentBySid(sid) {
        const std = this.students.filter(std => std.sid === sid)[0];
        return std.answers.reduce((score, q) => {
            if(q.checkAnswer(this.questions.get(q.qid))) {
                score++;
            }
            return score;
        }, 0);
    }
    getAverageScore() {
        return this.students
        .reduce((accumulator, student, index, array) => accumulator + this.scoreStudentBySid(student.sid)/students.length, 0);
    }
}

const student1 = new Student(10);
student1.addAnswer(new Question(2, 'a'));
student1.addAnswer(new Question(3, 'b'));
student1.addAnswer(new Question(1, 'b'));

const student2 = new Student(11);
student2.addAnswer(new Question(3, 'b'));
student2.addAnswer(new Question(2, 'a'));
student2.addAnswer(new Question(1, 'd'));

const students = [student1, student2];
const questions =[new Question(1, 'b'), new Question(2, 'a'), new Question(3, 'b')];
const quiz = new Quiz(questions, students);

let scoreforStudent10 = quiz.scoreStudentBySid(10);
console.log(scoreforStudent10); //Expected Result: 3
let scoreforStudent11 = quiz.scoreStudentBySid(11);
console.log(scoreforStudent11); //Expected Result: 2
let average = quiz.getAverageScore();
console.log(average); //Expected Reuslt: 2.5
