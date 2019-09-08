<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>Insert title here</title>
</head>
<style>
.hh{
margin-left:30%;
margin-right:30%;
}
body{
	background-size:cover;
}
.mm{
	 background-color:transparent;
}
</style>
<body background="/upload/background.jpg">
 <div class="hh" align="center" style="border:2px solid #000">
  <form action="Upload" enctype="multipart/form-data" method="POST" >
    <h2>新增照片</h2>
    <table>
      <tr>
        <td>照片名字：</td>
        <td><input class="mm" style= "background-color:transparent " type="text" name="pictureName" title="照片名字"></td>
      </tr>
      <tr>
        <td>相册名为：</td>
        <td><input type="hidden" name="albumId" value="${album.albumId}">${album.albumName}</td>
      </tr>
      <tr>
        <td>照片介绍：</td>
        <td><textarea class="mm" rows="5" cols="40" name="pictureIntroduce"></textarea></td>
      </tr>
      <tr>
        <td>上传照片：</td>
        <td><input class="mm" type="file" name="file1"></td>
      </tr>
      <tr align="right">
       <td colspan="2"><input class="mm" type="submit" value="上传"/>
       <input class="mm" type="reset" value="重置"></td> 
      </tr>
    </table>
  </form>
  <p align="right" ><a class="aha" href="main">返回主页</a></p>
 </div>   
</body>
</html>