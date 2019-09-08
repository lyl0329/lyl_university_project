<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
        <%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>

<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<meta name="renderer" content="webkit">
<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1">
<title>显示答题记录</title>
<link href="${pageContext.request.contextPath}/css/layui.css" type="text/css" rel="stylesheet">
<style>
html {

				font-family: Tahoma, Verdana, Segoe, sans-serif;
				line-height: 1.5;
				width: 100%;
				height: 100%
			}
			
			body {
				height: 100%;
				width: 100%;
				margin: 0;
			}
			.main {
				position: absolute;
				height: 550px;
				width: 850px;
				left: 50%;
				top: 52%;
				margin-left: -425px;
				margin-top: -280px;
				background: url("${pageContext.request.contextPath}/img/paihangbang.jpg") no-repeat;
				/*background-attachment: fixed;*/
				background-size: 100% 100%;
			}
			#table{
				border-radius: 15px;
				top: 20px;
				width: 760px;
				padding-bottom:10px;
				float: left;
				margin-left: 35px;
				margin-top: 10px;
				background-color: rgba(255,255,255,0.5);
				margin-bottom:20px;
			}
			p{
				font-size:23px;
				margin-top: -10px;
				margin-left: 10px;
			}
			ul{
				width:700px; 
				height:30px; 
				list-style:none; 
				float:left; 
				
			}
			
			li{
				float:left; 
				text-align:center;
				width:140px; 
				font-size:20px;
			}
			.record{
				width: 700px;
				height: 200px;
				word-wrap: break-word;word-break: break-all;
				margin-top:5px;
			}
			.title{
				margin-top:8px; 
				font-weight:bold;
			}
			.text-wrap{
				margin-top: -40px;
				margin-left:720px;
				opacity: 1;
				height: 45px;
				width:100px;
				line-height: 45px;
				color: #000;
				letter-spacing: 3px;
				background-color: transparent; 
				cursor: pointer;
				transition: border-color 0.4s linear;
				background: url("${pageContext.request.contextPath}/img/back.png") no-repeat;
				/*background-attachment: fixed;*/
				background-size: 100% 100%;
				border: none;
				font-size: 1rem;
			}
			.text-wrap a{
				text-decoration: none;
				font-family: 'Yanone Kaffeesatz';
				font-weight: 700;
				display: block;
				text-align: center;
			}
</style>
</head>
<body>
<%@include file="../jsp/frame.jsp"%>
<div class="main"  style="overflow-y:auto">
<h1 style="text-align:center;margin-top:10px;">答题记录

</h1>
<div class="text-wrap" ><a onmousedown="load_sound(url)" href="practice.do?username=${username}">返回</a></div>

		
		<c:set var="bi" value="0" />
		<c:set var="ei" value="19" />
		
			<c:forEach begin="0" end="${recordlength-1}" step="1">
			<div id="table">
			<br>
				<c:forEach begin="${bi}" end="${bi}" step="1" items="${recordlist}" var="record">
					<p>${record.responsetime}（${record.type}）</p>
					
				</c:forEach>
				<div class="title">
				<ul>
					<li>题目</li>
					<li>正确答案</li>
					<li>选择答案</li>
					<li>答对与否</li>
				</ul>
				</div>
				<div class="record" id="record">
				<c:forEach begin="${bi}" end="${ei}" step="1" items="${recordlist}" var="record">
					
					
				   <c:if test="${record.torf eq '错误'}">
				   		<ul  style="color:red;">
						<li>${record.question}</li>
						<li>${record.rightanswer}</li>
						<li>${record.useranswer}</li>
						<li>${record.torf}</li>
				   </ul>
				   </c:if>
				   <c:if test="${record.torf eq '正确'}">
				   		<ul style="color:green;">
						<li>${record.question}</li>
						<li>${record.rightanswer}</li>
						<li>${record.useranswer}</li>
						<li>${record.torf}</li>
				   </ul>
				   </c:if>
				</c:forEach>
				</div>
				<c:set var="bi" value="${bi + 20}" />
				<c:set var="ei" value="${ei + 20}" />
				</div>
			</c:forEach>
		
</div>
<script  type="text/javascript">
			var x = "${x}";
			function chengecolor() {
				if(x == 1) {
					document.getElementById('record').style.color = 'red';
				} 
			}
		</script>
<script type="text/javascript">
	//标准json格式 目前只支持[{a:b,c:d},{a:b,c:d}]此种格式
	//var json = "${recordlist}";
	//nameList与widthList的数组长度要一致
	//var nameList = ['题号', '题目', '正确答案', '所选答案', '对错', '答题时间', '所属用户','题型'] //table的列名
	//var widthList = [50, 100, 100, 100, 50, 100, 100, 100] //table每列的宽度
	//$(function () {
		//nicePage.setCfg({
			//table: 'table',
			//bar: 'pageBar',
			//limit: 20,
			//color: '#1E9FFF',
			//layout: ['count', 'prev', 'page', 'next', 'limit', 'skip']
		//});
	//});//初始化完成
</script>
</body>
</html>