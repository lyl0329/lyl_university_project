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
 * Servlet implementation class toModifyAlbumServlet
 */
@WebServlet("/tomodifyAlbum")
public class toModifyAlbumServlet extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    /**
     * @see HttpServlet#HttpServlet()
     */
    public toModifyAlbumServlet() {
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
		request.setCharacterEncoding("UTF-8");
		response.setContentType("text/html;charset=utf-8");
		RequestDispatcher rd = null;
		String albumId = request.getParameter("albumId");
		AlbumDao albumDao = new AlbumDao();
		Albums album = albumDao.queryAlbums(Integer.parseInt(albumId));
		request.setAttribute("album",album);
        rd = request.getRequestDispatcher("/modifyAlbum.jsp");
		rd.forward(request, response);
	}

}
