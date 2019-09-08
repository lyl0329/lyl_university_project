package cn.edu.hbue.myphoto.servlet;

import java.io.File;
import java.io.IOException;
import java.io.PrintWriter;
import java.util.Iterator;
import java.util.List;

import javax.servlet.RequestDispatcher;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.apache.commons.fileupload.FileItem;
import org.apache.commons.fileupload.FileUploadException;
import org.apache.commons.fileupload.disk.DiskFileItemFactory;
import org.apache.commons.fileupload.servlet.ServletFileUpload;

import cn.edu.hbue.myphoto.bean.Albums;
import cn.edu.hbue.myphoto.bean.Pictures;
import cn.edu.hbue.myphoto.dao.AlbumDao;
import cn.edu.hbue.myphoto.dao.PictureDao;



/**
 * Servlet implementation class UploadServlet
 */
@WebServlet(name = "Upload", urlPatterns = { "/Upload" })
public class UploadServlet extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    /**
     * @see HttpServlet#HttpServlet()
     */
    public UploadServlet() {
        super();
        // TODO Auto-generated constructor stub
    }

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		response.getWriter().append("Served at: ").append(request.getContextPath());
	}

	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		//doGet(request, response);
		response. setContentType("text/html;charset=utf-8");
		request.setCharacterEncoding("utf-8");
		RequestDispatcher rd = null;
		PrintWriter out = response.getWriter();
		//设置保存上传文件的目录
		String uploadDir = "e:\\upload";
		if(uploadDir == null){
			out.println("无法访问存储目录");
			return;
		}
		File fUploadDir = new File(uploadDir);
		if(!fUploadDir.exists()){
			if(!fUploadDir.mkdirs()){
				out.println("无法创建存储目录");
				return;
			}
		}
		DiskFileItemFactory factory = new DiskFileItemFactory();
		factory.setSizeThreshold(2*1024*1024);
		factory.setRepository(new File("c:\\"));
		
		ServletFileUpload upload = new ServletFileUpload(factory);
		upload.setSizeMax(20*1024*1024);
		
		//得到所有表单字段对象的集合
		List fileItems = null;
		try{
			fileItems = upload.parseRequest(request);
		}catch(FileUploadException e){
			out.println("解析数据时出现如下问题:");
			return;
		}
		
		//处理每个表单字段
		Iterator i = fileItems.iterator();
		while(i.hasNext()){
			FileItem fi = (FileItem)i.next();
			if(fi.isFormField()){
				String content = fi.getString("utf-8");
				String fieldName = fi.getFieldName();
				request.setAttribute(fieldName, content);
			}else{
				String pathSrc = fi.getName();
				//如果用户没有在FROM表单的文件字段中选择任何文件，那么忽略对该字段项的处理
				if(pathSrc.trim().equals("")){
					continue;
				}
				int start = pathSrc.lastIndexOf('/');
				String fileName = pathSrc.substring(start + 1);
				File file = new File(uploadDir + "\\" + fileName);
				//File pathDest = new File(uploadDir,fileName);  			
				try{
					fi.write(file);
					String fieldName = fi.getFieldName();
					request.setAttribute(fieldName, fileName);
				}catch(Exception e){
					out.println("存储文件时出现如下问题:");
					return;
				}finally{
					fi.delete();
				}
			}
		}
		
		String pictureName=(String)request.getAttribute("pictureName");
		String pictureIntroduce=(String)request.getAttribute("pictureIntroduce");
		String Id=(String)request.getAttribute("albumId");
		int albumId=Integer.parseInt(Id);
		AlbumDao albumDao = new AlbumDao();
		Albums album = albumDao.querynameAlbums(albumId);
		String albumid = album.getAlbumName();
		//显示结果
		//将上传的文件名组成“file，file2”这种形式显示出来，如果没有上传任何文件
		StringBuffer filelist = new StringBuffer();
		String file1 = (String)request.getAttribute("file1");
		makeUpList(filelist,file1);
		String path = filelist.toString(); 
		Pictures pictures = new Pictures(pictureName,albumid,pictureIntroduce,path);
		PictureDao picturedao = new PictureDao();
	    	int result = picturedao.savePictures(pictures);		    	
	    	if(result==1)
	    	{ 	    				
	    		List<Pictures> arrayList = new  PictureDao().queryPictures(albumId);
	    		request.setAttribute("pictureList",arrayList);
	    		request.setAttribute("albumid",albumid); 
	    		rd = request.getRequestDispatcher("/showpictures.jsp");
	    		rd.forward(request, response);
	    	}
	    	if(result==0) 
	    	{
	    		rd=request.getRequestDispatcher("/failure.jsp");
	    	}
	    	rd.forward(request,response);

	}
	private void makeUpList(StringBuffer result,String fragment){
		if(fragment!=null){
			if(result.length()!=0){
				result.append(",");
			}
			result.append(fragment);
		}
	}
}
