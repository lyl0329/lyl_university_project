<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
    <%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>游戏模式选择</title>
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
				background: url("${pageContext.request.contextPath}/img/register1.jpg") no-repeat;
				/*background-attachment: fixed;*/
				background-size: 100% 100%;
			}
			.main .opreation {
				width: 500px;
				margin: 200px auto 0 auto;
				color: #fff;
				letter-spacing: 5px;
				text-align: center; 
			}
			
			.main .opreation .title {
				letter-spacing: 8px;
				font-size: 42px;
				font-weight: normal;
				margin-top:-220px;
				margin-right:300px;
			}
			
			.main .opreation .text-wrap,
			.main .opreation .button {
				margin-top: 35px;
				opacity: 0;
				height: 60px;
				width:200px;
				line-height: 50px;
				color: #000;
				font-size: 15px;
				letter-spacing: 3px;
				background-color: transparent;
				border: 1px solid #fff;
				border-radius: 5px;
				cursor: pointer;
				transition: border-color 0.4s linear;
				background: url("${pageContext.request.contextPath}/img/check.png") no-repeat;
				/*background-attachment: fixed;*/
				background-size: 100% 100%;
				border: none;
				font-size: 1.5rem;
			}
			a.button, a.text-wrap,a.guize,a.tuichu{
				text-decoration: none;
				font-family: 'Yanone Kaffeesatz';
				font-weight: 700;
				display: block;
				text-align: center;
				-webkit-transition: all .1s ease;
				-moz-transition: all .1s ease;
				-ms-transition: all .1s ease;
				-o-transition: all .1s ease;
				transition: all .1s ease;
			}
			a.button:active, a.text-wrap:active,a.guize{
				position: relative;
				top: 6px;
			}
			.main .opreation a:hover {
				border-color: #0093cb;
			}
			
			
			.black_overlay{ 
            display: none; 
            position: absolute; 
            top: 0%; 
            left: 0%; 
            width: 100%; 
            height: 100%; 
            background-color: white; 
            z-index:1001; 
            -moz-opacity: 0.8; 
            opacity:.50; 
            filter: alpha(opacity=88); 
        } 
        .white_content { 
            display: none; 
            position: absolute; 
            margin-left: 80px;
			margin-top: -140px;
			width: 650px;
			height: 450px;
            padding: 20px; 
            z-index:1002; 
            overflow: auto; 
            background: url("${pageContext.request.contextPath}/img/juanzhou.png") no-repeat;
				/*background-attachment: fixed;*/
			background-size: 100% 100%;
			border: none;
        } 
        .guize,.tuichu{
        	margin-top: 5px;
				opacity: 1;
				height:80px;
				width:70px;
				color: #000;
				font-size: 15px;
				letter-spacing: 3px;
				background-color: transparent;
				cursor: pointer;
				transition: border-color 0.4s linear;
				
        }
        .guize img{
        	height:70px;
			width:70px;
        }
        .wenzi{
        	margin-top:-85px;
        	margin-left:5px;
        }
        .tuichu img{
        	height:70px;
			width:70px;
			margin-left: 80px;
			margin-top:-79px;
			float:left;
        }
        .wenzituichu{
        height:70px;
			width:70px;
        	margin-top: -92px;
        	margin-left:82px;
        	float:left;
        }
        .close img{
			opacity: 1;
			height: 45px;
			width: 105px;
			position: fixed;
			bottom: 210px;
			margin-left: 275px;
        }
        #bottom_fade {
			margin-left:20px;
            margin-top:20px;
            width: 600px; 
            height: 300px; 
			z-index: 99;
			position: fixed;
			bottom: 200px;
			overflow: none; 
			background: url("${pageContext.request.contextPath}/img/bottom-fade.png") bottom center no-repeat;
        
        }
        p{
      
        	margin-top:-10px;
        	margin-left:72px;
        	margin-right:60px;
        	text-indent:2em;
        }
        .one{
        	margin-top:50px;
        }
       
</style>
</head>
<body>
<%@include file="../jsp/frame.jsp"%>
<div class="main">

	<a class="guize" href = "JavaScript:void(0)" onclick = "openDialog()" onmousedown="load_sound(url)"><img src="${pageContext.request.contextPath}/img/yuan.png"><div class="wenzi"><br>模式<br>介绍</div></a>
	<a class="tuichu"   onmousedown="load_sound(url)" href="toregister.do"><img src="${pageContext.request.contextPath}/img/yuan.png"><div class="wenzituichu"><br>退出<br>登录</div></a>
	<div id="light" class="white_content">
	<h2 style="text-align:center;margin-top:80px;">模式介绍</h2>
                <p class="none">本游戏分为练习模式和闯关模式。<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;练习模式分为加减法运算，乘除法运算、混合运算，每个模式20题，难度依次递增。玩家可以根据自己的不足进行练习。
<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;闯关模式分为简单、一般、困难三个关卡，每个关卡有时间限制，但没有题量限制。玩家回答每道题时直至选择了正确的答案，系统才会自动进入下一题。答对一题时间加5s，答错一题扣10s，剩余时间不足即为游戏结束。答对一题加一分，答错不扣分。每个关卡分数达到一定量时方可解锁下一个关卡。</p>
      <!--  <div id="bottom_fade"></div>-->
      <a class="close" href = "javascript:void(0)" onclick = "closeDialog()"><img  src="${pageContext.request.contextPath}/img/guizequeding.png"></a>
    </div> 
    <div id="fade" class="black_overlay"></div> 
	<div class="opreation">
		<h1 class="title">模式选择</h1>
		<a class="text-wrap" onmousedown="load_sound(url)" href="practice.do?username=${username}" target="_blank">练习模式</a>
		<br/>
		<a class="button" onmousedown="load_sound(url)"  href="challenge.do?username=${username}" target="_blank">闯关模式</a>
	</div>
	<input type="hidden" name="username" value="${username}">
</div>
</body>
<script src="${pageContext.request.contextPath}/js/jquery-1.8.2.min.js"></script>
		<script>
			$(function() {
				txtBtnFadeIn();
			});

			var txtBtnFadeIn = function() {

				var $txt = $('.main  .opreation .text-wrap');
				var $btn = $('.main  .opreation .button');
				setTimeout(function() {
					var animate_para = {
						'margin-top': 0,
						'opacity': 1
					};
					$txt.animate(animate_para, 1000, 'linear', function() {
						$btn.animate(animate_para, 1000);
					});
				}, 500);

			}
		</script>
		<!--按钮提示音-->
		<script type="text/javascript">
			var url = '${pageContext.request.contextPath}/music/buttonmusic.MP3';
			var con = new AudioContext();

			function load_sound(url_data) {
				var req = new XMLHttpRequest();
				req.open('GET', url_data, true);
				req.responseType = 'arraybuffer';
				req.onload = function() {
					con.decodeAudioData(req.response, function(buffer) {
						var source = con.createBufferSource();
						source.buffer = buffer;
						source.connect(con.destination);
						source.start(0);
					}, function(e) {
						console.info('错误');
					});
				}
				req.send();
			}
		</script>
<!-- 规则层 -->
 <script type="text/javascript">
        $(function(){
        })
        function openDialog(){
            document.getElementById('light').style.display='block';
            document.getElementById('fade').style.display='block'
        }
        function closeDialog(){
            document.getElementById('light').style.display='none';
            document.getElementById('fade').style.display='none'
        }
    </script>
</html>