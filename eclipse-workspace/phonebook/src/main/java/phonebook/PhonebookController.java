package phonebook;

import java.io.IOException;
import java.util.List;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

@WebServlet("/phonebook/*") //이게 있어야 동작함
public class PhonebookController extends HttpServlet{
	
	PhonebookDAO dao=new PhonebookDAOOracle(); //부품 갈이하는 것처럼 
	//DAO 뒷부분이 Oracle, H2 등으로 쓰임
	
	@Override
	protected void service(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
		int id=0;
		String name="";
		String hp="";
		String email="";
		String memo="";
		Phonebook pb=null;
		int result=0;
		
		req.setCharacterEncoding("utf-8");//post방식, 한글전송일경우 코드 확인
		//http://localhost:8888/phonebook/insert
		//http://localhost:8888/phonebook/list
		//http://localhost:8888/phonebook/view
		//http://localhost:8888/phonebook/update
		//http://localhost:8888/phonebook/delete
		
		String command = req.getRequestURI();
		System.out.println("command:"+command);
		// /phonebook/insert 문자를 분리한 결과
		String[] commands =command.split("/");
		System.out.println("1번째값:"+commands[0]);//빈값
		System.out.println("2번째값:"+commands[1]);//phonebook
		System.out.println("3번째값:"+commands[2]);//insert
		//uri요청 -> uri 해석 -> 데이터요청(dao) -> 저장(setAttribute)
		//-> 보낸다(jsp)
		switch(commands[2]) {
		case "insert":
			//uri 요청 및 해석 -> 값 전달 확인 -> dao 저장 -> 결과전송
			name=req.getParameter("name");
			hp=req.getParameter("hp");
			email=req.getParameter("email");
			memo=req.getParameter("memo");
			System.out.println(name+hp+email+memo);
			result=dao.insert(new Phonebook(0, name, hp, email, memo));
			if(result>0) {
				req.setAttribute("state", "insert success");
			}else {
				req.setAttribute("state", "insert fail");
			}
			req.getRequestDispatcher("/WEB-INF/result.jsp")
			.forward(req, resp);
			break;
		case "list":
			List<Phonebook> list=dao.findAll();//데이터 가져와서
			req.setAttribute("list", list);//저장하고
			req.getRequestDispatcher("/WEB-INF/list.jsp")
			.forward(req, resp); //list.jsp에 보낸다.
			break;
		case "view":
			id=Integer.parseInt(req.getParameter("id"));
			pb=dao.findById(id);
			req.setAttribute("pb", pb);
			req.getRequestDispatcher("/WEB-INF/view.jsp")
			.forward(req, resp);
			break;
		case "updateform":
			//아이디를 이용하여 수정할 정보를 들고오는 작업
			id=Integer.parseInt(req.getParameter("id"));
			pb=dao.findById(id);
			req.setAttribute("pb", pb);
			req.getRequestDispatcher("/WEB-INF/updateform.jsp")
			.forward(req, resp);
			break;	
		case "update":
			id=Integer.parseInt(req.getParameter("id"));
			name=req.getParameter("name");
			hp=req.getParameter("hp");
			email=req.getParameter("email");
			memo=req.getParameter("memo");
			result=dao.updateById(new Phonebook(id, name, hp, email, memo));
			if(result>0) {
				req.setAttribute("state", "update success");
			}else {
				req.setAttribute("state", "update fail");
			}
			req.getRequestDispatcher("/WEB-INF/result.jsp")
			.forward(req, resp);
			break;
		case "delete":
			id=Integer.parseInt(req.getParameter("id"));
			result=dao.deleteById(id);
			if(result>0) {
				req.setAttribute("state", "delete success");
			}else {
				req.setAttribute("state", "delete fail");
			}
			req.getRequestDispatcher("/WEB-INF/result.jsp")
			.forward(req, resp);
			break;
		default: break;
		}
	}
	
}
