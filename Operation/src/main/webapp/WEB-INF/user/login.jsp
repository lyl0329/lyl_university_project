<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
     <%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8;">
<title>加载页面</title>
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
			
			h1 {
				/*font-family: 'American Typewriter', 'Rockwell Extra Bold', 'Book Antiqua', Georgia, serif;*/
				font-size: 5em;
				font-family: Helvetica, 'Hiragino Sans GB', 'Microsoft Yahei', '微软雅黑', Arial, sans-serif;
			}
			/**
* Components
*/
			
			.q {
				position: absolute;
				height: 550px;
				width: 850px;
				
				left: 50%;
				top: 52%;
				margin-left: -425px;
				margin-top: -280px;
				background: url("${pageContext.request.contextPath}/img/jpg.jpg") no-repeat;
				/*background-attachment: fixed;*/
				background-size: 100% 100%;
				
			}
			
			
			
			.counter {
				margin-bottom: 1rem;
				border-bottom: .1875em dashed #d2d6dd;
			}
			
			.splash {
				position: relative;
				max-width: 30em;
				text-align: center;
				box-sizing: border-box;
				max-width: 30em;
				margin: 0 auto;
				margin-top: -50px;
				padding: 1.5em;
				/*				border: 1px solid #000;*/
			}
			/**
* Header animation
*/
			
			.counter {
				position: relative;
				padding-top: 30vh;
			}
			
			.counter h1 {
				position: relative;
				text-align: center;
				margin: 0 auto;
				margin-top:-60px;
				line-height: .625;
				z-index: 2;
				transform-origin: bottom center; 
			}
			
			.dish {
				color: #e89c2b;
				position: absolute;
				width: 1em;
				height: 1em;
				margin-top: -2em;
				margin-left: -.5em;
				font-size: 2rem;
				top: 0;
				transform: translateY(-3em);
				transition-duration: .75s;
				transition-timing-function: ease-in;
				transition-property: transform;
				z-index: 1;
			}
			
			.dish.drop {
				transform: translateY(30vh);
			}
			
			.nommer {
				position: absolute;
				bottom: 2em;
				margin-left: -1em;
				color: rgba(0, 0, 0, .5);
				font-size: 1.5rem;
				transform-origin: bottom center;
			}
			
			.splash .opreation {
				width: 500px;
				margin: 0 auto;
				color: #000;
				letter-spacing: 5px;
				text-align: center;
				margin-top: 100px;
				margin-left: 70px; 
			}
			
			.button {
				/*margin-top: 50px;
				margin-right: -60px;*/
				opacity: 0;
				height: 50px;
				width: 300px;
				line-height: 50px;
				color: #000;
				letter-spacing: 3px;
				background-color: transparent;
				/*border: 1px solid #000;*/
				/*border-radius: 5px;*/
				cursor: pointer;
				transition: border-color 0.4s linear;
				background: url("${pageContext.request.contextPath}/img/qianbi.png") no-repeat;
				/*background-attachment: fixed;*/
				background-size: 100% 100%;
				border: none;
				font-size: 1.5rem;
			}
			
			a.button {
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
			a.button:active {
				position: relative;
				top: 6px;
			}
			/*.content .opreation button:hover {
				border-color: #0093cb;
			}*/
		</style>
</head>
<body>
<%@include file="../jsp/frame.jsp"%>
 <audio id="music2" src="${pageContext.request.contextPath}/music/music.mp3" autoplay="autoplay" loop="true"></audio>
<script type="text/javascript" src="${pageContext.request.contextPath}/js/fitty.min.js"></script>
      <div class="q">
     
			<div class="splash">
				<div class="counter">
					<div>
						<h1>趣算吧</h1>
					</div>
				</div>
				<div class="opreation">
					<a href="toregister.do" class="button" onmousedown="load_sound(url)" >开启游戏</a>
					<!--<button onmousedown="load_sound(url)">开始游戏</button>-->
				</div>
			</div>
		</div>
		<script src="${pageContext.request.contextPath}/js/jquery-1.8.2.min.js"></script>
		
		<!--开始游戏按钮特效-->
		<script>
			$(function() {
				txtBtnFadeIn();
			});

			var txtBtnFadeIn = function() {

				var $btn = $('.splash .opreation .button');

				setTimeout(function() {
					var animate_para = {
						'margin-top': 20,
						'opacity': 1
					};
					$btn.animate(animate_para, 400, 'linear', function() {
						//						$btn.animate(animate_para, 1000);
					});
				}, 3800);

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

		<!--大标题-->
		<script type="text/javascript">
			// let it rain
			(function() {
				var counter = document.querySelector('.counter');
				var diner = document.querySelector('h1');
				var menu = ['*', '-', '÷', '+', '=', '?'];
				var noms = ['加法', '减法', '乘法', '除法', '等于'];
				var finished = 0;

				// animation to play when finished dining
				function jelly(e) {
					diner.removeEventListener('fit', jelly);
					diner.animate(
						[{
							transform: 'scale(' + 1 / e.detail.scaleFactor + ')'
						}, {
							transform: 'scale(1.1)'
						}, {
							transform: 'scale(.9)'
						}, {
							transform: 'scale(1.05)'
						}, {
							transform: 'scale(.98)'
						}, {
							transform: 'scale(1)'
						}], {
							duration: 2000
						}

					);
				}

				// eat animation
				function nom(index) {

					var nommer = document.getElementById('nommer-' + index);
					var rotation = -20 + (Math.random() * 40);
					var scale = .75 + (Math.random() * .5);

					nommer.animate(
						[{
							opacity: 0,
							transform: 'scale(' + .25 * scale + ') rotateZ(' + rotation + 'deg) translateY(0) '
						}, {
							opacity: 1,
							transform: 'scale(' + scale + ') rotateZ(' + rotation + 'deg) translateY(-.5em) '
						}], {
							duration: 600
						}
					);

					diner.animate(
						[{
							transform: 'scaleY(1)'
						}, {
							transform: 'scaleY(' + (.7 + (Math.random() * .2)) + ')'
						}, {
							transform: 'scaleY(1)'
						}], {
							duration: 400
						}
					);
				}

				// only when animation api is supported 
				if('animate' in diner) {
					diner.addEventListener('fit', jelly);
				}

				// create food items
				var dishes = menu
					.concat(menu) // duplicate icons
					.sort(function() {
						return .5 - Math.random();
					})
					.concat(['??']) // unfortunately there's no fly emoji
					.map(function(menuItem, i) {

						var offset = 33.33 + (Math.random() * 33.33);

						var dish = document.createElement('div');
						dish.textContent = menuItem;
						dish.setAttribute('aria-hidden', 'true');
						dish.setAttribute('data-nommer', i);
						dish.className = 'dish';
						dish.style.cssText = 'left:' + offset + '%; transition-delay: ' + ((i * 200) + Math.random() * 100) + 'ms';

						var nommer = document.createElement('div');
						nommer.id = 'nommer-' + i;
						nommer.textContent = noms[Math.floor(Math.random() * noms.length)];
						nommer.setAttribute('aria-hidden', 'true');
						nommer.className = 'nommer';
						nommer.style.cssText = 'left:' + offset + '%; opacity:0;';

						counter.appendChild(dish);
						counter.appendChild(nommer);

						return dish;
					});

				// animate into view
				setTimeout(function() {
					requestAnimationFrame(function() {
						dishes.forEach(function(dish) {
							dish.classList.add('drop');
							dish.addEventListener('transitionend', burb);
						})
					});
				}, 500);

				// burb after eating dish
				function burb(e) {
					e.target.removeEventListener('transitionend', burb);
					e.target.style.opacity = 0;

					finished++;
					if(finished === dishes.length) {
						full();
					} else if('animate' in diner) {
						nom(e.target.getAttribute('data-nommer'));
					}
				}

				// so full!
				function full() {
					fitty(diner, {
						minSize: 80
					});
				}

			}());
		</script>
</body>
</html>