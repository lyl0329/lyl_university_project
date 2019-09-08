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
import cn.edu.hbue.myphoto.bean.Pictures;
import cn.edu.hbue.myphoto.dao.AlbumDao;
import cn.edu.hbue.myphoto.dao.PictureDao;

/**
 * Servlet implementation class ShowPictureServlet
 */
@WebServlet("/showPicture")
public class ShowPictureServlet extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    /**
     * @see HttpServlet#HttpServlet()
     */
    public ShowPictureServlet() {
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
		List<Pictures> arrayList = new PictureDao().queryPictures(Integer.parseInt(albumId));
		request.setAttribute("pictureList",arrayList);
		request.setAttribute("albumId",albumId);
		AlbumDao albumDao = new AlbumDao();
		Albums album = albumDao.querynameAlbums(Integer.parseInt(albumId));
		String albumid = album.getAlbumName();
		request.setAttribute("albumid",albumid);
        rd = request.getRequestDispatcher("/showpictures.jsp");
		rd.forward(request, response);
	}

}
