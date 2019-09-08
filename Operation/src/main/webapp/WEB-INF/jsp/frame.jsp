<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>Insert title here</title>
<style>
html {
				background-color: #fff;
				color: #32353a;
				font-family: Tahoma, Verdana, Segoe, sans-serif;
				line-height: 1.5;
				width: 100%;
				height: 100%
			}
			
			body {
				height: 100%;
				width: 100%;
				margin: 0;
				background: url("${pageContext.request.contextPath}/img/jpg1.jpg") no-repeat;
				background-size: 100% 100%;
				position: relative;
				background-attachment: fixed;
			}
			.img {
				position: absolute;
				height: 700px;
				width: 1070px;
				/*border: 1px solid #000;*/
				left: 50%;
				top: 50%;
				margin-left: -537px;
				margin-top: -380px;
			}
</style>
</head>
<body>

	<img src="${pageContext.request.contextPath}/img/biankuang.png" class="img">
	
</body>
</html>