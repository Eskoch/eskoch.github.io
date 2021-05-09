package model;

import java.util.Arrays;
import java.util.Collections;
import java.util.List;

public class Quiz {
	private List<Question> questions;
    private int question;
    private int score;

    public Quiz(){
        this.questions = Arrays.asList(new Question("3, 1, 4, 1, 5", "9"), new Question("1, 1, 2, 3, 5", "8"), 
        		new Question("1, 4, 9, 16, 25", "36"), new Question("2, 3, 5, 7, 11", "13"), new Question("1, 2, 4, 8, 16", "32"));
        Collections.shuffle(this.questions);
    }

    public String getQuestion(){
        if(question >= questions.size()){
            return null;
        } else {
            return this.questions.get(question++).getQ();
        }
    }
    public void checkAnswer(String ans){
        int temp = question - 1;
        boolean result = this.questions.get(temp).checkAnswer(ans);
        if(result) this.score++;
    }

    public int getScore(){
        return score;
    }
    
    public void resetQuestion() {
    	question = 0;
    }
}
