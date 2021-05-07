import java.io.IOException;
import java.io.PrintWriter;

import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

public class Calculator2 extends HttpServlet{
	public void doPost(HttpServletRequest req, HttpServletResponse res) throws IOException {
		res.setContentType("text/html");
		PrintWriter out = res.getWriter();

		if(!req.getParameter("num21").isBlank() && !req.getParameter("num22").isBlank() &&
				!req.getParameter("num23").isBlank() && !req.getParameter("num24").isBlank()) {
			int num21 = Integer.parseInt(req.getParameter("num21"));
			int num22 = Integer.parseInt(req.getParameter("num22"));
			int num23 = Integer.parseInt(req.getParameter("num23"));
			int num24 = Integer.parseInt(req.getParameter("num24"));
			int sum = num21 + num22;
			int mult = num23 * num24;
			out.println("<input name=\"num21\" value="+num21+"> + <input name=\"num22\" value="+num22+"> = <input name=\"sum\" value="+sum+" readonly><br>");
			out.println("<input name=\"num23\" value="+num23+"> * <input name=\"num24\" value="+num24+"> = <input name=\"sum\" value="+mult+" readonly>");

		}
		else if (req.getParameter("num23").isBlank() && req.getParameter("num24").isBlank() && 
				!req.getParameter("num21").isBlank() && !req.getParameter("num22").isBlank()) {
			int num21 = Integer.parseInt(req.getParameter("num21"));
			int num22 = Integer.parseInt(req.getParameter("num22"));
			int sum = num21 + num22;
			out.println("<input name=\"num21\" value="+num21+"> + <input name=\"num22\" value="+num22+"> = <input name=\"sum\" value="+sum+" readonly><br>");
		}
		else if(req.getParameter("num21").isBlank() && req.getParameter("num22").isBlank() &&
				!req.getParameter("num23").isBlank() && !req.getParameter("num24").isBlank()) {
			int num23 = Integer.parseInt(req.getParameter("num23"));
			int num24 = Integer.parseInt(req.getParameter("num24"));
			int mult = num23 * num24;
			out.println("<input name=\"num23\" value="+num23+"> * <input name=\"num24\" value="+num24+"> = <input name=\"sum\" value="+mult+" readonly>");
		}
		else {
			out.println("Invalid Input");
		}
	}
}
