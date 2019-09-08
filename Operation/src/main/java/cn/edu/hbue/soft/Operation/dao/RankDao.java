package cn.edu.hbue.soft.Operation.dao;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;

import cn.edu.hbue.soft.Operation.bean.Rank;
import cn.edu.hbue.soft.Operation.bean.User;

public class RankDao {
	//获取easy排行榜
	public List<Rank> queryRank_easy() {
		List<Rank> list = new ArrayList<>();
		Connection connection = DatabaseBean.getConnection();
		PreparedStatement preStmt = null;
		ResultSet rs = null;
		String sql = "select * from rank where type = ?";
		try {
			preStmt = connection.prepareStatement(sql);
			preStmt.setString(1, "easy");
			rs = preStmt.executeQuery();
			while (rs.next()) {
				Rank rank = new Rank();
				rank.setRankId(rs.getInt(1));
				rank.setUsername(rs.getString(2));
				rank.setSroces(rs.getInt(3));
				rank.setType(rs.getString(4));
				list.add(rank);
			}
		} catch (SQLException e) {
			e.printStackTrace();
		} finally {
			DatabaseBean.closeDB(null, preStmt, connection);
		}
		return list;
	}
	
	//获取diff排行榜
	public List<Rank> queryRank_diff() {
		List<Rank> list = new ArrayList<>();
		Connection connection = DatabaseBean.getConnection();
		PreparedStatement preStmt = null;
		ResultSet rs = null;
		String sql = "select * from rank where type = ?";
		try {
			preStmt = connection.prepareStatement(sql);
			preStmt.setString(1, "diff");
			rs = preStmt.executeQuery();
			while (rs.next()) {
				Rank rank = new Rank();
				rank.setRankId(rs.getInt(1));
				rank.setUsername(rs.getString(2));
				rank.setSroces(rs.getInt(3));
				rank.setType(rs.getString(4));
				list.add(rank);
			}
		} catch (SQLException e) {
			e.printStackTrace();
		} finally {
			DatabaseBean.closeDB(null, preStmt, connection);
		}
		return list;
	}
		
	//获取hard排行榜
	public List<Rank> queryRank_hard() {
		List<Rank> list = new ArrayList<>();
		Connection connection = DatabaseBean.getConnection();
		PreparedStatement preStmt = null;
		ResultSet rs = null;
		String sql = "select * from rank where type = ?";
		try {
			preStmt = connection.prepareStatement(sql);
			preStmt.setString(1, "hard");
			rs = preStmt.executeQuery();
			while (rs.next()) {
				Rank rank = new Rank();
				rank.setRankId(rs.getInt(1));
				rank.setUsername(rs.getString(2));
				rank.setSroces(rs.getInt(3));
				rank.setType(rs.getString(4));
				list.add(rank);
			}
		} catch (SQLException e) {
			e.printStackTrace();
		} finally {
			DatabaseBean.closeDB(null, preStmt, connection);
		}
		return list;
	}
		
		// 修改用户分数信息
		public static void updateScores(Rank rank_new) {
			Connection connection = DatabaseBean.getConnection();
			PreparedStatement preStmt = null;
			String sql = "update rank set username = ?,sroces = ? where rankId = ?";
			try {
				preStmt = connection.prepareStatement(sql);
				preStmt.setString(1, rank_new.getUsername());
				preStmt.setInt(2, rank_new.getSroces());
				preStmt.setInt(3, rank_new.getRankId());
				preStmt.executeUpdate();
			} catch (SQLException e) {
				e.printStackTrace();
			} finally {
				DatabaseBean.closeDB(null, preStmt, connection);
			}
		}

}
