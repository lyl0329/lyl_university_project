package cn.edu.hbue.myphoto.dao;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;

import cn.edu.hbue.myphoto.bean.Albums;
import cn.edu.hbue.myphoto.dao.DatabaseBean;

public class AlbumDao {
	public int saveAlbums(Albums albums){
		int i = 0;
		Connection connection = DatabaseBean.getConnection();
		PreparedStatement preStmt = null;
		String sql = "insert into album(albumname,albumintroduce) value(?,?)";
		try{
			preStmt = connection.prepareStatement(sql);
			preStmt.setString(1, albums.getAlbumName());
			preStmt.setString(2,albums.getAlbumIntroduce());
			i = preStmt.executeUpdate();
		}catch(SQLException e){
			e.printStackTrace();
		}finally{
			DatabaseBean.closeDB(null,preStmt,connection);
		}
		return i;
	}
    public int deleteAlbums(int id){
    	int i = 0;
		Connection connection = DatabaseBean.getConnection();
		PreparedStatement preStmt = null;
		String sql = "delete from album where albumid = ?";
		try{
			preStmt = connection.prepareStatement(sql);
			preStmt.setInt(1,id);
			i = preStmt.executeUpdate();
		}catch(SQLException e){
			e.printStackTrace();
		}finally{
			DatabaseBean.closeDB(null,preStmt,connection);
		}
		return i;
	}
	
	public int modifyAlbums(Albums albums){
		int i = 0;
		Connection connection = DatabaseBean.getConnection();
		PreparedStatement preStmt = null;
		String sql = "update album set albumname=?,albumintroduce=? where albumid=?";
		try{
			preStmt = connection.prepareStatement(sql);
			preStmt.setString(1,albums.getAlbumName());
			preStmt.setString(2,albums.getAlbumIntroduce());
			preStmt.setInt(3,albums.getAlbumId());
			i = preStmt.executeUpdate();
		}catch(SQLException e){
			e.printStackTrace();
		}finally{
			DatabaseBean.closeDB(null,preStmt,connection);
		}
		return i;
	}
	
    //根据类别Id查询该类别详细信息
	public Albums queryAlbums(int id){
		Albums albums = new Albums();
		Connection connection = DatabaseBean.getConnection();
		PreparedStatement preStmt = null;
		ResultSet rs = null;
		String sql = "select * from album where albumid=?";
		try{
			preStmt = connection.prepareStatement(sql);
			preStmt.setInt(1,id);
			rs = preStmt.executeQuery();
			if (rs.next()){
				albums.setAlbumId(rs.getInt(1));
				albums.setAlbumName(rs.getString(2));
				albums.setAlbumIntroduce(rs.getString(3));
			}
		}catch(SQLException e){
			e.printStackTrace();
		}finally{
			DatabaseBean.closeDB(null,preStmt,connection);
		}
		return albums;
	}
	
	public Albums querynameAlbums(int id){
		Albums albums = new Albums();
		Connection connection = DatabaseBean.getConnection();
		PreparedStatement preStmt = null;
		ResultSet rs = null;
		String sql = "select albumname from album where albumid=?";
		try{
			preStmt = connection.prepareStatement(sql);
			preStmt.setInt(1,id);
			rs = preStmt.executeQuery();
			if (rs.next()){
			    albums.setAlbumName(rs.getString(1));
			}
		}catch(SQLException e){
			e.printStackTrace();
		}finally{
			DatabaseBean.closeDB(null,preStmt,connection);
		}
		return albums;
	}
	
    //查询出所有类别
	public List<Albums> queryAllAlbums(){
		List<Albums> list = new ArrayList<>();
		Connection connection = DatabaseBean.getConnection();
		PreparedStatement preStmt = null;
		ResultSet rs = null;
		String sql="select * from album";
		try{
			preStmt = connection.prepareStatement(sql);
			rs = preStmt.executeQuery();
			while(rs.next()){
				Albums albums = new Albums();
				albums.setAlbumId(rs.getInt(1));
				albums.setAlbumName(rs.getString(2));
				albums.setAlbumIntroduce(rs.getString(3));
				list.add(albums);
			}
		}catch(SQLException e){
			e.printStackTrace();
		}finally{
			DatabaseBean.closeDB(null,preStmt,connection);
		}
		return list;
	}
}
