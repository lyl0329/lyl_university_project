package cn.edu.hbue.myphoto.dao;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;

public class DatabaseBean {
	public static Connection getConnection(){
		Connection connection = null;
		try{
			Class.forName("com.mysql.jdbc.Driver");
			String url = "jdbc:mysql://localhost:3306/MyPhoto?"
					+"user=root&password=123456&"
					+"useUnicode=true&characterEncoding=utf-8";
			connection = DriverManager.getConnection(url);
		}catch (ClassNotFoundException e){
			System.out.println("Driver not found");
			//e.peintStackTrace();
		}catch(SQLException e){
			e.printStackTrace();
			System.out.println("JDBC connection error");
		}
		return connection;
	}
	public static void closeDB(ResultSet rs, Statement st, Connection conn){
		if(rs != null){
			try{
				rs.close();
			}catch(SQLException e){
				
			}
		}
		if(st != null){
			try{
				st.close();
			}catch(SQLException e){
				
			}
		}
		if(conn != null){
			try{
				conn.close();
			}catch(SQLException e){
				
			}		
		}

	}
}

