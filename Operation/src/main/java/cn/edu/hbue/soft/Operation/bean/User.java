package cn.edu.hbue.soft.Operation.bean;

public class User {
	private int UserId;
	private String username;
	private String password;
	private int easyhighsroces;
	private int difhighsroces;
	private int hardsroces;

	public int getUserId() {
		return UserId;
	}

	public void setUserId(int userId) {
		UserId = userId;
	}

	public String getUsername() {
		return username;
	}

	public void setUsername(String username) {
		this.username = username;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	

	public int getEasyhighsroces() {
		return easyhighsroces;
	}

	public void setEasyhighsroces(int easyhighsroces) {
		this.easyhighsroces = easyhighsroces;
	}

	public int getDifhighsroces() {
		return difhighsroces;
	}

	public void setDifhighsroces(int difhighsroces) {
		this.difhighsroces = difhighsroces;
	}

	public int getHardsroces() {
		return hardsroces;
	}

	public void setHardsroces(int hardsroces) {
		this.hardsroces = hardsroces;
	}

	public User(String username, String password) {
		this.username = username;
		this.password = password;
	}

	

	public User(String username, String password, int easyhighsroces, int difhighsroces, int hardsroces) {
		super();
		this.username = username;
		this.password = password;
		this.easyhighsroces = easyhighsroces;
		this.difhighsroces = difhighsroces;
		this.hardsroces = hardsroces;
	}

	public User() {
	}
}
