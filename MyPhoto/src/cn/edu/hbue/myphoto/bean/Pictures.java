package cn.edu.hbue.myphoto.bean;

public class Pictures {
	private int pictureId;
	private String albumId;
	private String pictureName;
	private String pictureIntroduce;
	private String path;
	
	public Pictures(){}
	public int getPictureId(){
		return pictureId;
	}
	public void setPictureId(int id){
		this.pictureId = id;
	}
	public String getAlbumId(){
		return albumId;
	}
	public void setAlbumId(String id){
		this.albumId = id;
	}
	public String getPictureName(){
		return pictureName;
	}
	public void setPictureName(String pictureName){
		this.pictureName = pictureName;
	}
	public String getPictureIntroduce(){
		return pictureIntroduce;
	}
	public void setPictureIntroduce(String pictureIntroduce){
		this.pictureIntroduce = pictureIntroduce;
	}
	public String getPath(){
		return path;
	}
	public void setPath(String path){
		this.path = path;
	}
	public Pictures(String pictureName, String pictureIntroduce){
		this.pictureName = pictureName;
		this.pictureIntroduce = pictureIntroduce;
	}
	public Pictures(int id,String pictureName, String pictureIntroduce){
		this.pictureId = id;
		this.pictureName = pictureName;
		this.pictureIntroduce = pictureIntroduce;
	}
	public Pictures(String pictureName,String album,String pictureIntroduce,String path){
		this.albumId = album;
		this.pictureName = pictureName;
		this.pictureIntroduce = pictureIntroduce;
		this.path = path;
	}
}
