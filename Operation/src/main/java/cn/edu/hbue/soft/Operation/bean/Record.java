package cn.edu.hbue.soft.Operation.bean;

public class Record {
	private int RecordId;
	private String question;
	private String rightanswer;
	private String useranswer;
	private String torf;
	private String responsetime;
	private String userid;
	private String type;

	public Record() {
	}

	public Record(String question, String rightanswer, String useranswer, String torf, String responsetime,
			String userid, String type) {
		// TODO Auto-generated constructor stub
		this.question = question;
		this.rightanswer = rightanswer;
		this.useranswer = useranswer;
		this.torf = torf;
		this.responsetime = responsetime;
		this.userid = userid;
		this.type = type;
	}

	public int getRecordId() {
		return RecordId;
	}

	public void setRecordId(int recordId) {
		RecordId = recordId;
	}

	public String getQuestion() {
		return question;
	}

	public void setQuestion(String question) {
		this.question = question;
	}

	public String getRightanswer() {
		return rightanswer;
	}

	public void setRightanswer(String rightanswer) {
		this.rightanswer = rightanswer;
	}

	public String getUseranswer() {
		return useranswer;
	}

	public void setUseranswer(String useranswer) {
		this.useranswer = useranswer;
	}

	public String getTorf() {
		return torf;
	}

	public void setTorf(String torf) {
		this.torf = torf;
	}

	public String getResponsetime() {
		return responsetime;
	}

	public void setResponsetime(String responsetime) {
		this.responsetime = responsetime;
	}

	public String getUserid() {
		return userid;
	}

	public void setUserid(String userid) {
		this.userid = userid;
	}

	public String getType() {
		return type;
	}

	public void setType(String type) {
		this.type = type;
	}

}
