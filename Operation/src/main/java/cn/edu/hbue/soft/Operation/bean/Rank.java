package cn.edu.hbue.soft.Operation.bean;

public class Rank {
	private int rankId;
	private String username;
	private int sroces;
	private String type;
	
	

	public Rank() {
		super();
	}

	public Rank(int rankId,String username, int sroces, String type) {
		super();
		this.rankId = rankId;
		this.username = username;
		this.sroces = sroces;
		this.type = type;
	}

	public int getRankId() {
		return rankId;
	}

	public void setRankId(int rankId) {
		this.rankId = rankId;
	}

	public String getUsername() {
		return username;
	}

	public void setUsername(String username) {
		this.username = username;
	}

	public int getSroces() {
		return sroces;
	}

	public void setSroces(int sroces) {
		this.sroces = sroces;
	}

	public String getType() {
		return type;
	}

	public void setType(String type) {
		this.type = type;
	}
}
