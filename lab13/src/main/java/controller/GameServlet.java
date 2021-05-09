package controller;

import java.io.IOException;
import java.io.PrintWriter;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import model.Quiz;

@WebServlet(name = "GameServlet", urlPatterns={"/play"})
public class GameServlet extends HttpServlet {
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
		
        if(quiz.getQuestion() == null){
            req.getRequestDispatcher("gameEnd.jsp").forward(req, res);
        }else {
        	req.getRequestDispatcher("index.jsp").forward(req, res);
        }
			
	}
	
	public void doGet(HttpServletRequest req, HttpServletResponse res) throws IOException, ServletException {
        doPost(req, res);
    }
}
