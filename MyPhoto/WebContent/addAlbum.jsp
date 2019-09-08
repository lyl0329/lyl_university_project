<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
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
 <div class="hh" align="center" style="border:1px solid #000">
  <form action="addAlbum" method="post">
    <h2>增加相册</h2>
    <table>
      <tr>
        <td>相册名：</td>
        <td><input class="mm" type="text" name="albumName" title="相册名字"></td>
      </tr>
      <tr>
        <td>相册简介：</td>
        <td><textarea class="mm" rows="5" cols="40" name="albumIntroduce"></textarea></td>
      </tr>
      <tr align="center">
       <td colspan="3"><input style= "background-color:transparent " type="submit" value="添加" />
       <input style= "background-color:transparent " type="reset" value="重置"></td>
      </tr>
    </table>
  </form>
  <p align="right" ><a class="aha" href="main">返回主页</a></p>
 </div>
</body>
</html>