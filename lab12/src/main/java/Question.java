
public class Question {
    private String q;
    private String a;

    public Question(String q, String a) {
        this.q = q;
        this.a = a;
    }

    public String getQues() {
        return q;
    }

    public String getAnswer() {
        return a;
    }

    public boolean checkAnswer(String ans){
        return this.a.equals(ans);
    }
}
