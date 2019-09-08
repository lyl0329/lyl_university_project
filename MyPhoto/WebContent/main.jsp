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
	height:1000px;
	padding-right:1%;
}
.ll{
	margin-bottom:1%;
	margin-top:1%;
}
.lala{
	margin-bottom:1%;
	margin-top:0.5%;
	margin-right:2%;
}
.xixi{
	margin-left:3%;
	margin-right:3%;
	margin-bottom:1%;
	margin-top:1%;
	height:90%;
	
}
.soso{
	
	border:1px solid #000;
	width:100%;
	height:70px;
	margin-left:1%;
	margin-bottom:2%;
}
.aha{
	float:right;
	padding:1% 1% 0 0;
}
.emm{
	float:left;
	padding:1% 0 0 1%;
}
.bb{
	float:left;
	padding:1% 0 0 1%;
}
body{
	background-size:cover;
}
</style>
<body background="/upload/background.jpg">
 <div class="hh" align="center" style="border:3px solid #000">
  <h2 class="ll">相册首页</h2>
  
   <p class="lala" align="right"><a href="addPicture?albumId=${albums.albumId}">添加照片</a>&nbsp;&nbsp;&nbsp;&nbsp;<a href="toaddAlbum">添加相册</a></p>
     <div class="soso">
       <a class="emm">相册名称</a>
	       <a class="aha">修改相册</a>
	       <br><p><a class="bb">相册介绍</a></p>
	       <a class="aha">删除相册</a>
     </div>  
	  <c:forEach var="albums" items="${albumList}">
	    <div class="soso">
	       <a class="emm" href="showPicture?albumId=${albums.albumId}">${albums.albumName}</a>
	       <a class="aha" href="tomodifyAlbum?albumId=${albums.albumId}">修改相册</a>
	       <br><p><a class="bb">${albums.albumIntroduce}</a></p>
	       <a class="aha" href="deleteAlbum?albumId=${albums.albumId}">删除相册</a>
	    </div>
	  </c:forEach>
 </div>
</body>
</html>