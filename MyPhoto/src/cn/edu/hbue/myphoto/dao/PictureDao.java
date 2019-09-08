package cn.edu.hbue.myphoto.dao;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;

import cn.edu.hbue.myphoto.bean.Albums;
import cn.edu.hbue.myphoto.bean.Pictures;

public class PictureDao {
	public int savePictures(Pictures pictures){
		int i = 0;
		Connection connection = DatabaseBean.getConnection();
		PreparedStatement preStmt = null;
		String sql = "insert into picture(picturename,albumid,pictureintroduce,path) value(?,?,?,?)";
		try{
			preStmt = connection.prepareStatement(sql);
			preStmt.setString(1, pictures.getPictureName());
			preStmt.setString(2,pictures.getAlbumId());
			preStmt.setString(3, pictures.getPictureIntroduce());
			preStmt.setString(4, pictures.getPath());
			i = preStmt.executeUpdate();
		}catch(SQLException e){
			e.printStackTrace();
		}finally{
			DatabaseBean.closeDB(null,preStmt,connection);
		}
		return i;
	}
	
	 //根据类别Id查询该类别详细信息
		public List<Pictures> queryPictures(int id){
			List<Pictures> list = new ArrayList<>();
			AlbumDao albumDao = new AlbumDao();
			Albums album = albumDao.querynameAlbums(id);
			String albumid = album.getAlbumName();
			Connection connection = DatabaseBean.getConnection();
			PreparedStatement preStmt = null;
			ResultSet rs = null;
			String sql = "select * from picture where albumid=?";
			try{
				preStmt = connection.prepareStatement(sql);
				preStmt.setString(1,albumid);
				rs = preStmt.executeQuery();
				while(rs.next()){
					Pictures pictures = new Pictures();
					pictures.setPath(rs.getString("path"));
					pictures.setPictureName(rs.getString("picturename"));
					pictures.setPictureIntroduce(rs.getString("pictureintroduce"));
					list.add(pictures);
				}
			}catch(SQLException e){
				e.printStackTrace();
			}finally{
				DatabaseBean.closeDB(null,preStmt,connection);
			}
			return list;
		}
		
	    //查询出所有类别
		public List<Pictures> queryAllPictures(){
			List<Pictures> list = new ArrayList<>();
			Connection connection = DatabaseBean.getConnection();
			PreparedStatement preStmt = null;
			ResultSet rs = null;
			String sql="select * from  picture";
			try{
				preStmt = connection.prepareStatement(sql);
				rs = preStmt.executeQuery();
				while(rs.next()){
					Pictures pictures = new Pictures();
					pictures.setPictureName(rs.getString(1));
					pictures.setPictureIntroduce(rs.getString(2));
					pictures.setPath(rs.getString(3));
					list.add(pictures); 
				}
			}catch(SQLException e){
				e.printStackTrace();
			}finally{
				DatabaseBean.closeDB(null,preStmt,connection);
			}
			return list;
		}
}
