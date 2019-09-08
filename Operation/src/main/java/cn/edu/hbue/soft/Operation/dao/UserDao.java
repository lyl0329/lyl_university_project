package cn.edu.hbue.soft.Operation.dao;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;

import cn.edu.hbue.soft.Operation.bean.User;

public class UserDao {
	// 查找全部用户
	public List<User> queryallUser() {
		List<User> list = new ArrayList<>();
		Connection connection = DatabaseBean.getConnection();
		PreparedStatement preStmt = null;
		ResultSet rs = null;
		String sql = "select * from user";
		try {
			preStmt = connection.prepareStatement(sql);
			rs = preStmt.executeQuery();
			while (rs.next()) {
				User user = new User();
				user.setUserId(rs.getInt(1));
				user.setUsername(rs.getString(2));
				user.setPassword(rs.getString(3));
				list.add(user);
			}
		} catch (SQLException e) {
			e.printStackTrace();
		} finally {
			DatabaseBean.closeDB(null, preStmt, connection);
		}
		return list;
	}

	// 增加用户
	public int saveUser(User user) {
		int i = 0;
		Connection connection = DatabaseBean.getConnection();
		PreparedStatement preStmt = null;
		String sql = "insert into user(username,password) value(?,?)";
		try {
			preStmt = connection.prepareStatement(sql);
			preStmt.setString(1, user.getUsername());
			preStmt.setString(2, user.getPassword());
			i = preStmt.executeUpdate();
		} catch (SQLException e) {
			e.printStackTrace();
		} finally {
			DatabaseBean.closeDB(null, preStmt, connection);
		}
		return i;
	}

	// 根据用户姓名得到用户所有信息
	public static User getUser(String username) {
		User user = new User();
		Connection connection = DatabaseBean.getConnection();
		PreparedStatement preStmt = null;
		ResultSet rs = null;
		String sql = "select * from user where username = ? limit 1";
		try {
			preStmt = connection.prepareStatement(sql);
			preStmt.setString(1, username);
			rs = preStmt.executeQuery();
			if (rs.next()) {
				user.setUsername(rs.getString(2));
				user.setPassword(rs.getString(3));
				user.setEasyhighsroces(rs.getInt(4));
				user.setDifhighsroces(rs.getInt(5));
				user.setHardsroces(rs.getInt(6));
			}
		} catch (SQLException e) {
			e.printStackTrace();
		} finally {
			DatabaseBean.closeDB(null, preStmt, connection);
		}
		return user;
	}

	// 修改用户分数信息
	public static void saveScores(String username, int easy, int diff, int hard) {
		Connection connection = DatabaseBean.getConnection();
		PreparedStatement preStmt = null;
		String sql = "update user set easyhighsroces = ?,difhighsroces = ?,hardsroces = ? where username = ?";
		try {
			preStmt = connection.prepareStatement(sql);
			preStmt.setInt(1, easy);
			preStmt.setInt(2, diff);
			preStmt.setInt(3, hard);
			preStmt.setString(4, username);
			preStmt.executeUpdate();
		} catch (SQLException e) {
			e.printStackTrace();
		} finally {
			DatabaseBean.closeDB(null, preStmt, connection);
		}
	}
}
