<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
        <%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>登录/注册</title>
<script type="text/javascript">
/**
 * 刷新验证码
 */
function reloadCode(){
    var time = new Date().getTime();
    document.getElementById("createCheckCode").src="checkCaptchaCode.do?d=" + time;
}
</script>

<link rel="stylesheet" href="${pageContext.request.contextPath}/bootstrap/css/bootstrap.min.css">
<link rel="stylesheet" href="${pageContext.request.contextPath}/css/login.css" />
<script src="${pageContext.request.contextPath}/js/jquery.min.js"></script>
<script src="${pageContext.request.contextPath}/bootstrap/js/bootstrap.min.js"></script>
<!--<script type="text/javascript">
 $('form').submit(function(){
	   var username=$("#login_number").val();
	   var password=$("#login_password").val();
	   if(username==""&&password==""){
	   alert("您输入的用户名或密码为空，请重新输入");
	   }else{
	    $.get("togame", { username: username, password:password },function(data){
	    var hint=$("#hint").val();
	    alert(data);
	    if(hint!=""||hint!=null){
	     if(hint!="success"){
	     alert(hint);
	    }else{
	     window.location.href="user/main.jsp";
	    }
	    }
	  

	});
	   }
	     
	   })
</script>  -->

<script type="text/javascript">
function close()  
{   
	document.getElementById("hint").style.display = "none";
}
</script>
<script>
			$(document).ready(function() {
				//打开会员登录 
				$("#Login_start_").click(function() {
					$("#regist_container").hide();
					$("#_close").show();
					$("#_start").animate({
						left: '350px',
						height: '420px',
						width: '400px'
					}, 500, function() {
						$("#login_container").show(500);
						$("#_close").animate({
							height: '40px ',
							width: '40px'
						}, 500);
					});
				});
				//打开会员注册
				$("#Regist_start_").click(function() {
					$("#login_container").hide();
					$("#_close").show();
					$("#_start").animate({
						left: '350px',
						height: '420px',
						width: '400px'
					}, 500, function() {
						$("#regist_container").show(500);
						$("#_close").animate({
							height: '40px',
							width: '40px'
						}, 500);
					});
				});
				//关闭
				$("#_close").click(function() {

					$("#_close").animate({
						height: '0px',
						width: '0px'
					}, 500, function() {
						$("#_close").hide(500);
						$("#login_container").hide(500);
						$("#regist_container").hide(500);
						$("#_start").animate({
							left: '0px',
							height: '0px',
							width: '0px'
						}, 500);
					});
				});
				//去 注册
				$("#toRegist").click(function() {
					$("#login_container").hide(500);
					$("#regist_container").show(500);
				});
				//去 登录
				$("#toLogin").click(function() {
					$("#regist_container").hide(500);
					$("#login_container").show(500);
				});
			});
		</script>
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
</style>

</head>
<body>
<%@include file="../jsp/frame.jsp"%>
<div class="main">
	<div style="margin-top: 20px;margin-right:200px;">
			<center>
				<a id="Login_start_" class="btn btn-danger" style="width:120px;height:50px;border-radius: 0;" onclick="close();" onmousedown="load_sound(url)">登陆</a>
				<a id="Regist_start_" class="btn btn-success" style="width:120px;height:50px;border-radius: 0;" onmousedown="load_sound(url)">注册</a>
			</center>

			<!-- 玩家登录  -->
			<div id='_start'>
				<div id='_close' style="display: none; width: 30px;">
					<span class="glyphicon glyphicon-remove"></span>
				</div>
				<br />
				<!--登录框-->
				<div id="login_container">
					<div id="lab1">
						<span id="lab_login">玩家登录</span>
						<span id="lab_toRegist">
				&emsp;还没有账号&nbsp;
				<span id='toRegist' style="color: #EB9316;cursor: pointer;">立即注册</span>
						</span>
					</div>
					<form id="main" action="togame.do" method="post"> 
					<div id="form_container1">
						<input type="text" required="required" class="form-control" placeholder="用户名" id="login_number" name="username"/>
						<input type="password" required="required" class="form-control" placeholder="密码" id="login_password" name="password"/>
						<input type="text" required="required" class="form-control" placeholder="输入四位验证码" name="captcha" id="captcha" onkeypress="onInputKeyup();" style="width:150px;" />
                       <img src="checkCaptchaCode.do"  id="createCheckCode" onclick="javascript:reloadCode();" align="middle" />
					</div>
					<input type="submit" value="登录" class="btn btn-success" id="login_btn" />
					</form>
				</div>

				<!-- 玩家注册 -->
				<div id='regist_container' style="display: none;">
					<div id="lab1">
						<span id="lab_login">玩家注册</span>
						<span id="lab_toLogin">
				&emsp;已有账号&nbsp;
				<span id='toLogin' style="color: #EB9316;cursor: pointer;">立即登录</span>
						</span>
					</div>
					<form id="main" action="register.do" method="post">  
					<div id="form_container2" style="padding-top: 25px;">
						<input type="text" required="required" class="form-control" placeholder="用户名" id="regist_account" name="username">
						<input type="password" required="required" class="form-control" placeholder="密码" id="regist_password1" name="password"/>
						<input type="password" required="required" class="form-control" placeholder="确认密码" id="regist_password2" name="passwordonce"/>
					</div>
					<input type="submit" value="注册" class="btn btn-success" id="regist_btn" />
					</form>
				</div>
				 <div id="hint"><p>${hint}</p></div>
			</div>
			 
			<!--<input type="hidden" id="hint" value='${hint}'>-->
			
		</div>
</div>
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
</body>
</html>