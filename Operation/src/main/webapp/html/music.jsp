<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
     <%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>Insert title here</title>
</head>
<body>
<div style="width:36px; height:36px;float:right;position:absolute;z-index:13;top:100px;right:10px;cursor: pointer;">
				<audio id="music" src="${pageContext.request.contextPath}/music/Sing.mp3" autoplay="autoplay" loop="loop">
				<source src="${pageContext.request.contextPath}/music/Sing.mp3" type="audio/mp3">
				</audio>
				<a id="audio_btn"><img src="${pageContext.request.contextPath}/img/laba1.png" width="48" height="50" id="music_btn" border="0"></a>
</div>
<script src="${pageContext.request.contextPath}/js/jquery-1.8.2.min.js"></script>
		<script>
			$("#audio_btn").click(function() {
				var music = document.getElementById("music");
				if(music.paused) {
					music.play();
					$("#music_btn").attr("src", "${pageContext.request.contextPath}/img/laba1.png");
				} else {
					music.pause();
					$("#music_btn").attr("src", "${pageContext.request.contextPath}/img/laba2.png");
				}
			});

			function playPause() {
				var music = document.getElementById('music2');
				var music_btn = document.getElementById('music_btn2');
				if(music.paused) {
					music.play();
					music_btn.src = '${pageContext.request.contextPath}/img/laba1.png';
				} else {
					music.pause();
					music_btn.src = '${pageContext.request.contextPath}/img/laba2.png';
				}
			}
		</script>
</body>
</html>