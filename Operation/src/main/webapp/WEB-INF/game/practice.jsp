<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
    <%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>练习模式</title>
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
				background: url("${pageContext.request.contextPath}/img/heiban2.jpg") no-repeat;
				/*background-attachment: fixed;*/
				background-size: 100% 100%;	
			}
			.main .tixings {
				width: 850x;
				height:95px;
				color: #fff;
				letter-spacing: 5px;
				text-align: center;
				margin:0 auto;
			}
			 .main .tixings .as,
			 .main .tixings .md,
			 .main .tixings .mixture
			 {
				margin-top: 35px;
				opacity: 0;
				height: 90px;
				width:210px;
				line-height: 90px;
				color: #000;
				font-size: 15px;
				letter-spacing: 3px;
				background-color: transparent;
				border-radius: 5px;
				cursor: pointer;
				transition: border-color 0.4s linear;
				background: url("${pageContext.request.contextPath}/img/tixing1.png") no-repeat;
				/*background-attachment: fixed;*/
				background-size: 100% 100%;	
				border: none;
				font-size: 1.5rem;
				float:left;
			}
			.main .tixings .records{
				margin-top: 7px;
				height: 90px;
				width:210px;
				line-height: 105px;
				color: #000;
				font-size: 15px;
				letter-spacing: 3px;
				background-color: transparent;
				border-radius: 5px;
				cursor: pointer;
				transition: border-color 0.4s linear;
				background: url("${pageContext.request.contextPath}/img/record.png") no-repeat;
				/*background-attachment: fixed;*/
				background-size: 100% 100%;	
				border: none;
				font-size: 1.5rem;
				float:left;
			}
			a.as, a.md,a.mixture,a.records{
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
			a:active{
				position: relative;
				top: 6px;
			}
			.question {
			    position: absolute;
			    height: 450px;
			    width: 850px;
			    color: #fff;
			    margin-top: 50px;
			}
			#ti,#ti_,#ti1 {
				font-family: Dunkin, "Segoe", "Segoe UI", sans-serif;
				font-size: 80px;
				font-weight: bold;
				margin-top: 40px;
				text-align: center;
			}
			#input{
			text-align: center;
			margin-top:40px;
			}
			#input input{
				height: 60px;
				width: 75px;
				margin-right: 25px;
				font-size: 21px;
				font-weight:bold;
				background: url("${pageContext.request.contextPath}/img/xuanxiang4.png") no-repeat;
				/*background-attachment: fixed;*/
				background-size: 100% 100%;
				border: none;
			}
			.main img{
			position: absolute;
				/*margin-left:500px;*/
				margin-top: -120px;
				margin-left: -130px;
				width:200px;
				height:300px;
				display:none;
			}
			#nowtinums{
				text-align:center;
				font-size:24px;
				margin-top: 20px;  
				font-weight:bold;
			}
			.modal-body p{
				text-align:center;
				font-size:20px;
			}

</style>
<link rel="stylesheet" href="${pageContext.request.contextPath}/css/bootstrap.min.css" />
</head>
<body>
<%@include file="../jsp/frame.jsp"%>
<div class="main">
	<div id="tixing" class="tixings">  
		<a id="add_sub" class="as" onmousedown="load_sound(url)" onclick="getTime();getadd_sub();clear1();clear2();clear3();dati();">&nbsp;&nbsp;&nbsp;加减法运算</a>
		<a id="mul_div" class="md" onmousedown="load_sound(url)" onclick="getTime_();getmul_div();clear1();clear2();clear3();dati_();">&nbsp;&nbsp;&nbsp;乘除法运算</a>
		<a id="mix" class="mixture" onmousedown="load_sound(url)" onclick="getTime1();getmixture();clear1();clear2();clear3();dati1();">&nbsp;&nbsp;&nbsp;混合运算</a>
		<a id="records" class="records"  onclick="clear1();clear2();clear3();" href="record.do?username=${username}">&nbsp;&nbsp;答题记录</a>
	</div>
	<div id="question" class="question"></div>
	<div id="myEnd" class="modal hide"></div>
	<input id="username" type="hidden" name="username" value="${username}">
	<audio id='success' src="${pageContext.request.contextPath}/music/success.MP3"></audio>
	<audio id='wrong' src="${pageContext.request.contextPath}/music/wrong.MP3"></audio>
	<img class="img" id="img" src="${pageContext.request.contextPath}/img/good.png">
</div>
</body>
<script src="${pageContext.request.contextPath}/js/jquery-1.8.2.min.js"></script>
<script src="https://cdn.staticfile.org/jquery/1.10.2/jquery.min.js"></script>
<script src="${pageContext.request.contextPath}/js/jquery.min.js"></script>
<script src="${pageContext.request.contextPath}/js/bootstrap.min.js"></script>
		<script>
			$(function() {
				txtBtnFadeIn();
			});

			var txtBtnFadeIn = function() {

				var $addsub = $('.main  .tixings .as');
				var $muldiv = $('.main  .tixings .md');
				var $mix = $('.main  .tixings .mixture');
				var $record = $('.main  .tixings .records');
				setTimeout(function() {
					var animate_para = {
						'margin-top': 15,
						'opacity': 1
					};
					$addsub.animate(animate_para, 500, 'linear', function() {
						$muldiv.animate(animate_para, 500, 'linear', function(){
							$mix.animate(animate_para, 500);
						});
					});
				}, 200);

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
		
		<!--题型分类-->
		<script type="text/javascript">
			function getadd_sub(){
				$('#question').empty();
				$('#myEnd').empty();
				var detail ="<p id='ti'>17+12</p><br>" +
				"<div id='input'>"+
				"<input class='buttonA' type='button' id='buttonA' value=''>"+
				"<input class='buttonB' type='button' id='buttonB' value=''>"+
				"<input class='buttonC' type='button' id='buttonC' value=''>"+
				"<input class='buttonD' type='button' id='buttonD' value=''>"+
				"</div>"+
				"<div id='nowtinums'>"+
				"<p><br>每组20题&nbsp;&nbsp;&nbsp;已答题数：<span id='nowtinum'>0</span></p>"+
			      "<p><br>答对<span id='att1'>0</span>题&nbsp;&nbsp;&nbsp;"+
					"答错<span id='att2'>0</span>题</p>"+
					"</div>";
				var result = "<div class='modal-header'>"+
				"<h3 id='tip'></h3>"+
			    "</div>"+
			       "<div class='modal-body'>"+
			       "<p><br>共答<span id='tinum'>0</span>题</p>"+
				      "<p><br>答对<span id='attone1'>0</span>题&nbsp;&nbsp;&nbsp;"+
						"答错<span id='attone2'>0</span>题</p>"+
			       "</div>"+
			       "<div class='modal-footer'>"+
				       "<a data-dismiss='modal' class='btn btn-success' id='a'>确定</a>"+
			    "</div>";
			    var details = $(detail);
				var results = $(result);
				$("#question").append(details);
				$('#myEnd').append(results);
			}
			function getmul_div(){
				$('#question').empty();
				$('#myEnd').empty();
				var detail = "<p id='ti_'>17+12</p><br>" +
				"<div id='input'>"+
				"<input class='button_A' type='button' id='button_A' value=''>"+
				"<input class='button_B' type='button' id='button_B' value=''>"+
				"<input class='button_C' type='button' id='button_C' value=''>"+
				"<input class='button_D' type='button' id='button_D' value=''>"+
				"</div>"+
				"<div id='nowtinums'>"+
				"<p><br>每组20题&nbsp;&nbsp;&nbsp;已答题数：<span id='nowtinum_'>0</span></p>"+
			      "<p><br>答对<span id='att_1'>0</span>题&nbsp;&nbsp;&nbsp;"+
					"答错<span id='att_2'>0</span>题</p>"+
					"</div>";
				var result = "<div class='modal-header'>"+
			
				"<h3 id='tip_'></h3>"+
			    "</div>"+
			       "<div class='modal-body'>"+
			       "<p><br>共答<span id='tinum_'>0</span>题</p>"+
				      "<p><br>答对<span id='atttwo_1'>0</span>题&nbsp;&nbsp;&nbsp;"+
						"答错<span id='atttwo_2'>0</span>题</p>"+
			       "</div>"+
			       "<div class='modal-footer'>"+
				       "<a data-dismiss='modal' class='btn btn-success' id='a_'>确定</a>"+
			    "</div>";
			    var details = $(detail);
				var results = $(result);
				$("#question").append(details);
				$('#myEnd').append(results);
			}
			function getmixture(){
				$('#question').empty();
				$('#myEnd').empty();
				var detail = "<p id='ti1'>17+12</p><br>" +
				"<div id='input'>"+
				"<input class='button_a' type='button' id='button_a' value=''>"+
				"<input class='button_b' type='button' id='button_b' value=''>"+
				"<input class='button_c' type='button' id='button_c' value=''>"+
				"<input class='button_d' type='button' id='button_d' value=''>"+
				"</div>"+
				"<div id='nowtinums'>"+
				"<p><br>每组20题&nbsp;&nbsp;&nbsp;已答题数：<span id='nowtinum1'>0</span></p>"+		
			      "<p><br>答对<span id='_att_1'>0</span>题&nbsp;&nbsp;&nbsp;"+
					"答错<span id='_att_2'>0</span>题</p>"+
					"</div>";
				var result = "<div class='modal-header'>"+
				
				"<h3 id='tip1'></h3>"+
			    "</div>"+
			       "<div class='modal-body'>"+
			       "<p><br>共答<span id='tinum1'>0</span>题</p>"+
				      "<p><br>答对<span id='_attthree_1'>0</span>题&nbsp;&nbsp;&nbsp;"+      
						"答错<span id='_attthree_2'>0</span>题</p>"+
			       "</div>"+
			       "<div class='modal-footer'>"+
				       "<a data-dismiss='modal' class='btn btn-success' id='a1'>确定</a>"+
			    "</div>";
			    var details = $(detail);
				var results = $(result);
				$("#question").append(details);
				$('#myEnd').append(results);
			}
			
		</script>
<script type="text/javascript" src="${pageContext.request.contextPath}/js/operation.js">	</script>
<script type="text/javascript" src="${pageContext.request.contextPath}/js/operation_.js">	</script>
<script type="text/javascript" src="${pageContext.request.contextPath}/js/operation1.js">	</script>
</html>