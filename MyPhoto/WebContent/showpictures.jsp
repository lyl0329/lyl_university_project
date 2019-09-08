<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>显示照片</title>
</head>
<style>
.a1{
	float:left;
}
body{
	background-size:cover;
}
.mm{
	 background-color:transparent;
}
</style>
<body background="/upload/background.jpg">
   <h2 align="center">${albumid}</h2>
   <p align="right"><a href="addPicture1?albumId=${albumId}">添加照片</a>&nbsp;&nbsp;&nbsp;<a href="main">返回主页</a></p>
   <c:forEach var="Pictures" items="${pictureList}">
     <div class="a1">
        <br>&nbsp;&nbsp;<img alt="" src="/upload/${Pictures.path}">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<br>&nbsp;&nbsp;照片名称：${Pictures.pictureName}<br>
        &nbsp;&nbsp;照片介绍：${Pictures.pictureIntroduce}
     </div>
   </c:forEach>
</body>
</html>