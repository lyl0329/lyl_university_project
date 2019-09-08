package cn.edu.hbue.myphoto.servlet;

import java.io.IOException;

import javax.servlet.RequestDispatcher;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import cn.edu.hbue.myphoto.bean.Albums;
import cn.edu.hbue.myphoto.dao.AlbumDao;

/**
 * Servlet implementation class AddALbumServlet
 */
@WebServlet("/addAlbum")
public class AddAlbumServlet extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    /**
     * @see HttpServlet#HttpServlet()
     */
    public AddAlbumServlet() {
        super();
        // TODO Auto-generated constructor stub
    }

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		doPost(request,response);
	}

	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		request.setCharacterEncoding("UTF-8");
		response.setContentType("text/html;charset=utf-8");
		String albumName = request.getParameter("albumName");
		String albumIntroduce = request.getParameter("albumIntroduce");
		RequestDispatcher rd = null;
		if(albumName == null || albumName.equals("")){
			rd = request.getRequestDispatcher("/addAlbum.jsp");
			rd.forward(request, response);
		}else{
			Albums album = new Albums(albumName,albumIntroduce);
			AlbumDao albumDao = new AlbumDao();
			int result = albumDao.saveAlbums(album);
			if(result == 1){
				
				rd = request.getRequestDispatcher("/main");
				
			}
			if(result == 0){
				rd = request.getRequestDispatcher("/failure.jsp");
			}
			rd.forward(request, response);
		}
		
	}

}
