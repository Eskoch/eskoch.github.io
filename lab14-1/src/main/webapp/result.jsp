<%@ page import="java.util.*" %>
<%@ taglib prefix="aspx" uri="/WEB-INF/currentTimeDate"%>
<html>
	<body>
		<h1 align="center">Beer Recommendations JSP</h1>
		<p>
		<%-- <%
			List styles = (List)request.getAttribute("styles");
			Iterator it = styles.iterator();
			while(it.hasNext()) {
				out.print("<br>try: " + it.next());
			}
		%> --%>
		<c: forEach var = "beer" items = "styles"> 
			<c: out value = beer> </c: out> <br>
		</c: forEach>
		
	</body>
</html>