<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>青蛙吃蚊子</title>
		<meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=1.0, minimum-scale=1.0, maximum-scale=1.0">	
		
		<link rel="stylesheet" type="text/css" href="${pageContext.request.contextPath}/css/challenge.css"/>
		<script src="${pageContext.request.contextPath}/js/prefixfree.min.js"></script>
		<script src="${pageContext.request.contextPath}/js/jquery-1.8.2.min.js"></script>

	</head>

	<body>

		<div class="environment">
			<div class="sky"></div>
			<div class="stars"></div>
			<div class="sun"></div>
			<div class="moon"></div>
			<div class="mountains">
				<div class="mountain">
					<div class="trees">
						<div class="tree"></div>
						<div class="tree tree--2"></div>
						<div class="tree tree--3"></div>
						<div class="tree tree--4"></div>
					</div>
				</div>
				<div class="mountain mountain--2"></div>
			</div>
			<div class="water"></div>
			<div class="lily lilly-1"></div>
		</div>
		
		<!--青蛙身体-->
		<div class="player">

			<div class="legs">
				<div class="leg leg--left">
				</div>
				<div class="leg leg--right">
				</div>
			</div>

			<div class="body">
				<div class="crown"></div>
				<div class="belly"></div>
				<div class="arms">
					<div class="arm arm--left">
						<div class="hand">
							<div class="toe"></div>
							<div class="toe"></div>
							<div class="toe"></div>
						</div>
					</div>
					<div class="arm arm--right">
						<div class="hand">
							<div class="toe"></div>
							<div class="toe"></div>
							<div class="toe"></div>
						</div>
					</div>
				</div>
				<div class="mouth">
					<div class="top-lip"></div>
					<div class="bottom-lip"></div>
					<div class="tongue">
						<div class="tongue-inner">
							<div class="fly is-dead"></div>
						</div>
					</div>
				</div>
				<div class="eyes">
					<div class="eye eye--left">
						<div class="pupil"></div>
					</div>
					<div class="eye eye--right">
						<div class="pupil"></div>
					</div>
				</div>
			</div>
		</div>
		
		<!--音乐控件-->
			<div id='bgmusic'>
					<a href="javascript:playPause();"><img src="${pageContext.request.contextPath}/img/play.gif" width="48" height="50" id="music_btn2" border="0"></a>
			</div>

		<!--菜单-->
		<div class="screen menu">
			<h1>喂青蛙</h1>
			<a href="#" class="btn play" onClick="play(1)">
				<span class="text">简单</span>
				<br>
				<span>最好: <span class="js-best">0</span></span>
			</a>
			<a href="#" class="btn play btn_diff is-open" onClick="play(2)">
				<span class="text">一般</span>
				<br>
				<span>最好: <span class="js-best1">0</span></span>
			</a>
			<a href="#" class="btn play btn_hard is-open"onClick="play(3)">
				<span class="text">困难</span>
				<br>
				<span>最好: <span class="js-best2">0</span></span>
			</a>
			<!--<a href="#" class="btn play" onClick="onClick="settings()"">
				<span class="text">排行榜</span>
			</a>-->
			<a href="#" class="btn" onClick="settings()">排行榜</a>
		</div>

		<!--游戏界面-->
		<div class="screen game">
			<div class="hud">
				<div class="time">
					<span class="label">时间</span>
					<span class="value js-time">30</span>
				</div>
				
				<div class="question">
					<span id="ti">此处显示题目</span>
				</div>
				
				<div class="score">
					<span class="label">分数</span>
					<span class="value js-score">0</span>
				</div>				
			</div>

			<div class="flies">
				<div class="path">
					<div class="target">
						<div class="fly"><label id="answer1" style="color: #FFFFFF;">答案一</label></div>
					</div>
				</div>
				<div class="path">
					<div class="target">
						<div class="fly"><label id="answer2" style="color: #FFFFFF;">答案二</label></div>
					</div>
				</div>
				<div class="path">
					<div class="target">
						<div class="fly"><label id="answer3" style="color: #FFFFFF;">答案三</label></div>
					</div>
				</div>
				<div class="path">
					<div class="target">
						<div class="fly"><label id="answer4" style="color: #FFFFFF;">答案四</label></div>
					</div>
				</div>
				<div class="path">
					<div class="target">
						<div class="fly"><label id="answer5" style="color: #FFFFFF;">答案五</label></div>
					</div>
				</div>
				<div class="path">
					<div class="target">
						<div class="fly"><label id="answer6" style="color: #FFFFFF;">答案六</label></div>
					</div>
				</div>
			</div>
		</div>
		
		<!--结算界面-->
		<div class="screen win">
			<h1>完成</h1>
			<div class="card">
				<h3 class="highscore js-highscore is-hidden">新高分！</h3>
				<h3 class="highscore js-passnew is-hidden">解锁下一关！</h3>
				<!--<h3 class="highscore js-passnew is-hidden2">解锁下一关！</h3>-->

				<div class="score">
					<span class="label">分数</span>
					<span class="value js-score">30</span>
				</div>

				<div class="best">
					<span class="label">最好</span>
					<span class="value js-best-new">0</span>
				</div>

			</div>
			<a href="#" class="btn" onClick="playAgain()">再玩一次</a>
			<a href="#" class="btn btn--clear" onClick="menu()">返回菜单</a>
		</div>

		<div class="screen settings">
			<h1>排行榜</h1>		
			<div class="card" style="max-width: 60em;">
				<div class="paihangbang">
					<label class="checkbox" id="phb_easy">			      
				    </label>
				</div>	
				<div class="paihangbang">
					<label class="checkbox" id="phb_diff">
				    </label>
			    </div>	
			    <div class="paihangbang">
				    <label class="checkbox" id="phb_hard">
				    </label>
			    </div>	
			</div>
		
			<a href="#" class="btn" onClick="menu()">返回</a>
		</div>
		
		<div class="screen scoreboard">
			<h1>记分牌</h1>
			<div class="card">
				<ol class="scoreboard-list js-scoreboard"></ol>
			</div>
		
			<a href="#" class="btn" onClick="menu()">返回</a>
		</div>
		
		<audio id="music2" src="${pageContext.request.contextPath}/music/wawa.mp3" autoplay="autoplay" loop="true">
		
		<input type="hidden" id="username" value="${username}">

		<script src="${pageContext.request.contextPath}/js/index.js"></script>

	</body>

</html>