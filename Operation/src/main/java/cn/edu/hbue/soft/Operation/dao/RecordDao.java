package cn.edu.hbue.soft.Operation.dao;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;

import cn.edu.hbue.soft.Operation.bean.Record;

public class RecordDao {
	// 增加练习记录
	public int saveRecord(Record record) {
		int i = 0;
		Connection connection = DatabaseBean.getConnection();
		PreparedStatement preStmt = null;
		String sql = "insert into record(question,rightanswer,useranswer,torf,responsetime,userid,type) value(?,?,?,?,?,?,?)";
		try {
			preStmt = connection.prepareStatement(sql);
			preStmt.setString(1, record.getQuestion());
			preStmt.setString(2, record.getRightanswer());
			preStmt.setString(3, record.getUseranswer());
			preStmt.setString(4, record.getTorf());
			preStmt.setString(5, record.getResponsetime());
			preStmt.setString(6, record.getUserid());
			preStmt.setString(7, record.getType());
			i = preStmt.executeUpdate();
		} catch (SQLException e) {
			e.printStackTrace();
		} finally {
			DatabaseBean.closeDB(null, preStmt, connection);
		}
		return i;
	}

	// 根据时间显示答题记录
	public List<Record> queryrecord(String userid) {
		List<Record> list = new ArrayList<>();
		Connection connection = DatabaseBean.getConnection();
		PreparedStatement preStmt = null;
		ResultSet rs = null;
		String sql = "select * from record where userid=?";
		try {
			preStmt = connection.prepareStatement(sql);
			preStmt.setString(1, userid);
			rs = preStmt.executeQuery();
			while (rs.next()) {
				Record record = new Record();
				record.setRecordId(rs.getInt("RecordId"));
				record.setQuestion(rs.getString("question"));
				record.setRightanswer(rs.getString("rightanswer"));
				record.setUseranswer(rs.getString("useranswer"));
				record.setTorf(rs.getString("torf"));
				record.setResponsetime(rs.getString("responsetime"));
				record.setUserid(rs.getString("userid"));
				record.setType(rs.getString("type"));
				list.add(record);
			}
		} catch (SQLException e) {
			e.printStackTrace();
		} finally {
			DatabaseBean.closeDB(null, preStmt, connection);
		}
		return list;
	}

}
