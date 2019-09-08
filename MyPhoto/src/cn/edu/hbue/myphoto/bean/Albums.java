package cn.edu.hbue.myphoto.bean;

public class Albums {
	private int albumId;
	private String albumName;
	private String albumIntroduce;
	
	public Albums(){}
	public int getAlbumId(){
		return albumId;
	}
	public void setAlbumId(int id){
		this.albumId = id;
	}
	public String getAlbumName(){
		return albumName;
	}
	public void setAlbumName(String albumName){
		this.albumName = albumName;
	}
	public String getAlbumIntroduce(){
		return albumIntroduce;
	}
	public void setAlbumIntroduce(String albumIntroduce){
		this.albumIntroduce = albumIntroduce;
	}
	public Albums(String albumName, String albumIntroduce){
		this.albumName = albumName;
		this.albumIntroduce = albumIntroduce;
	}
	public Albums(int id,String albumName, String albumIntroduce){
		this.albumId = id;
		this.albumName = albumName;
		this.albumIntroduce = albumIntroduce;
	}
}
