package cn.edu.hbue.myphoto.servlet;

import java.io.IOException;
import java.util.List;

import javax.servlet.RequestDispatcher;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import cn.edu.hbue.myphoto.bean.Albums;
import cn.edu.hbue.myphoto.dao.AlbumDao;

/**
 * Servlet implementation class AddPictureServlet1
 */
@WebServlet("/addPicture1")
public class AddPictureServlet1 extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    /**
     * @see HttpServlet#HttpServlet()
     */
    public AddPictureServlet1() {
        super();
        // TODO Auto-generated constructor stub
    }

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		doPost(request, response);
	}

	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		request.setCharacterEncoding("utf-8");
		RequestDispatcher rd = null;
		String albumId = request.getParameter("albumId");
		AlbumDao albumDao = new AlbumDao();
		Albums album = albumDao.queryAlbums(Integer.parseInt(albumId));
		request.setAttribute("album",album);
		rd = request.getRequestDispatcher("/addpicture1.jsp");
		rd.forward(request, response);
	}

}
