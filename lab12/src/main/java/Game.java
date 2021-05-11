import java.io.IOException;
import java.io.PrintWriter;
import java.util.Random;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

//@WebServlet(name = "Game", urlPatterns={"/play"})
public class Game extends HttpServlet {
	protected void doPost(HttpServletRequest req, HttpServletResponse res) throws IOException, ServletException {
		HttpSession session = req.getSession();
		Quiz quiz;

				if(session.getAttribute("quiz") ==  null){
	            quiz =  new Quiz();
	            session.setAttribute("quiz",quiz);
	      } else {
	            String ans = req.getParameter("result");
	            quiz = (Quiz)session.getAttribute("quiz");
	            quiz.checkAnswer(ans);
	            session.setAttribute("quiz", quiz);
	      }

				res.setContentType("text/html");
        PrintWriter out = res.getWriter();
        String question = quiz.getQuestion();

        if(question == null){
            out.println("<p>Game End! Score: "+quiz.getScore()+ "</p>");
        } else {

			out.println("<h1>Welcome to the Number Quiz</h1>  <form action=\"play\" method=\"post\"> Your current score is " + quiz.getScore() + " .<br> Guess the next number in the sequence. <br>" + question + " Your answer: <input type='text' name='result'> <input type='submit'></form>");
        }

	}

	public void doGet(HttpServletRequest req, HttpServletResponse res) throws IOException, ServletException {
        doPost(req, res);
    }
}
