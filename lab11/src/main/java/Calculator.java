import java.io.IOException;
import java.io.PrintWriter;

import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

public class Calculator extends HttpServlet {

	public void doPost(HttpServletRequest req, HttpServletResponse res) throws IOException {

		PrintWriter out = res.getWriter();

		if(!req.getParameter("num1").isBlank() && !req.getParameter("num2").isBlank() &&
				!req.getParameter("num3").isBlank() && !req.getParameter("num4").isBlank()) {
			int num1 = Integer.parseInt(req.getParameter("num1"));
			int num2 = Integer.parseInt(req.getParameter("num2"));
			int num3 = Integer.parseInt(req.getParameter("num3"));
			int num4 = Integer.parseInt(req.getParameter("num4"));
			out.println(num1 + " + " + num2 + " = " + (num1 + num2));
			out.println("\n" + num3 + " * " + num4 + " = " + num3 * num4);
		}
		else if (req.getParameter("num3").isBlank() && req.getParameter("num4").isBlank() &&
				!req.getParameter("num1").isBlank() && !req.getParameter("num2").isBlank()) {
			int num1 = Integer.parseInt(req.getParameter("num1"));
			int num2 = Integer.parseInt(req.getParameter("num2"));
			out.println(num1 + " + " + num2 + " = " + (num1 + num2));
		}
		else if(req.getParameter("num1").isBlank() && req.getParameter("num2").isBlank() &&
				!req.getParameter("num3").isBlank() && !req.getParameter("num4").isBlank()) {
			int num3 = Integer.parseInt(req.getParameter("num3"));
			int num4 = Integer.parseInt(req.getParameter("num4"));
			out.println("\n" + num3 + " * " + num4 + " = " + num3 * num4);
		}
		else {
			out.println("Invalid Input");
		}

	}

}
