import javax.servlet.jsp.JspException;
import javax.servlet.jsp.JspWriter;
import javax.servlet.jsp.tagext.SimpleTagSupport;
import java.io.IOException;
import java.text.SimpleDateFormat;
import java.util.Date;

public class CurrentTimeDate extends SimpleTagSupport {
    String color;
    String size;

    @Override
    public void doTag() throws JspException, IOException {
        Date myDate = new Date();
        SimpleDateFormat ft = new SimpleDateFormat ("Date yyyy.MM.dd 'at' hh:mm:ss");
        String str = ft.format(myDate);


        JspWriter out = getJspContext().getOut();
        if(color != null && size != null) out.write(" <span style=\"color: " + color + "; font-size: " + size + "px;\">" + str + "</span>");
        else if(color != null && size == null) out.write("<span style=\"color:" + color + ";\">" + str + "</span>");
        else if(color == null && size != null) out.write("<span style=\"font-size:" + size + "px;\">" + str + "</span>");
        else out.write("<span>" + str + "</span>");
    }


    public void setColor(String color) {
        this.color = color;
    }

    public void setSize(String size) {
        this.size = size;
    }
}
