package page;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;


@Controller
public class PageController {
	
	
	//controller를 사용할 경우 viewresolver 적용이 됨
	@GetMapping("/admin/index")
	public String adminIndex() {
		return "admin/index"; //page폴더의 admin폴더의 index.jsp
	}
	
	@GetMapping("/bookList/bookList")
	public String user() {
		return "bookList/bookList"; //page폴더의 user폴더의 index.jsp
	}
}
