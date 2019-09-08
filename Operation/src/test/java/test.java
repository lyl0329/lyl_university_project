
import java.util.List;

import cn.edu.hbue.soft.Operation.bean.Record;
import cn.edu.hbue.soft.Operation.dao.RecordDao;

public class test {
	public static void main(String[] args) {
		RecordDao rd = new RecordDao();
		List<Record> list = rd.queryrecord("lyl");
		for (Record re : list) {
			System.out.println(re.getQuestion());
		}
	}
}
