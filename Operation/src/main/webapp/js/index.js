// Please excuse the mess, I need to do some tidying

var activeScreen = document.querySelector('.screen.is-active');
var menuScreen = document.querySelector('.screen.menu');
var gameScreen = document.querySelector('.screen.game');
var winScreen = document.querySelector('.screen.win');
var settingsScreen = document.querySelector('.screen.settings');
var scoreboardScreen = document.querySelector('.screen.scoreboard');
var scoreBoard = document.querySelector('.js-scoreboard');

var player = document.querySelector('.player');
var tongue = document.querySelector('.tongue');
var eyes = document.querySelectorAll('.eye');
var pupils = document.querySelectorAll('.pupil');
var deadFly = document.querySelector('.tongue .fly');

var paths = document.querySelectorAll('.path');
var targets = document.querySelectorAll('.target');

var scoreEls = document.querySelectorAll('.js-score');
var bestEls = document.querySelectorAll('.js-best');
var bestEls1 = document.querySelectorAll('.js-best1');
var bestEls2 = document.querySelectorAll('.js-best2');
var bestEls_new = document.querySelectorAll('.js-best-new');
var timerEl = document.querySelector('.js-time');
var highscoreEl = document.querySelector('.js-highscore');
var passnewEl= document.querySelector('.js-passnew');
var timerIntervalId;


var todiff = document.querySelector('.btn_diff');
var tohard = document.querySelector('.btn_hard');
// Audio
var musicPlaying = false;
var musicButton = document.querySelector('.js-toggle-music')
var music = document.querySelector('#music');

var state = {};
var hidden = [];
var theme;
var scores = [];
var scores1 = [];
var scores2 = [];
var shooting = false;
var playing = false;
var transitioning = false;
var lastPath = false;
var difficulty;//游戏难度
var peep_num;
var wronganswer = new Array(0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
var true_answer;//保存正确答案
var highsroce_easy = 0;
var highsroce_diff = 0;
var highsroce_hard = 0;
var lowsroce_easy = 0;
var lowsroce_diff = 0;
var lowsroce_hard = 0;
var passEasy = false;
var passDiff = false;
var passScores = 1;
var pathName = window.document.location.pathname;
var projectName = pathName.substring(0,pathName.substr(1).indexOf('/')+1);

var storage = window.localStorage;

var clickOrTap = ((window.document.documentElement.ontouchstart !== null) ? 'click' : 'touchstart');

init();

function init() {
	passLock2();
	prepPaths();
	loadStorage();
	renderBest();
	toggleScreen(menuScreen);
	fillPhb();
	passLock();
	getRank();
}

function setState() {
	state = {
		time: 30,
		score: 0,
	}
}

function setPass(){
	if(window.passEasy){
		todiff.classList.remove('is-open');
	}else{
		todiff.classList.add('is-open');
	}
	if(window.passEasy){
		tohard.classList.remove('is-open');
	}else{
		tohard.classList.add('is-open');
	}
}

function passLock(){
	if(scores[0] > passScores){
		todiff.classList.remove('is-open');			
	}
	if(scores1[0] > passScores){
		tohard.classList.remove('is-open');		
	}
}

function passLock2(){
	getUser();
	if(window.highsroce_easy > passScores){
		todiff.classList.remove('is-open');
		passEasy = true;
	}
	if(window.highsroce_diff > passScores){
		tohard.classList.remove('is-open');
		passDiff = true;
	}
	scores[0] = window.highsroce_easy;
	scores1[0] = window.highsroce_diff;
	scores2[0] = window.highsroce_hard;
}

//填充排行榜
function fillPhb(){
//	var html = "<span>简单模式</span><br />"
//	for(var i = 0;i < scores.length;){
//		i++;
//		html += "<li>";
//		html += "第" + i+ "名"+ "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;";
//		html += scores[i - 1] + "分";
//		html += "</li>";
//	}
//	document.getElementById("phb_easy").innerHTML= html;
//	
//	var html1 = "<span>一般模式</span><br />"
//	for(var i = 0;i < scores1.length;){
//		i++;
//		html1 += "<li>";
//		html1 += "第" + i+ "名"+"    ";
//		html1 += scores1[i - 1] + "分";
//		html1 += "</li>";
//	}
//	document.getElementById("phb_diff").innerHTML= html1;
//	
//	var html2 = "<span>困难模式</span><br />"
//	for(var i = 0;i < scores2.length;i++){
//		i++;
//		html2 += "<li>";
//		html2 += "第" + i + "名"+"    ";
//		html2 += scores2[i - 1] + "分";
//		html2 += "</li>";
//	}
//	document.getElementById("phb_hard").innerHTML= html2;
}

function prepPaths() {
	for (var i = 0; i < paths.length; i++) {
		paths[i].setAttribute('data-id', i);
	}
}

function loadStorage() {
	theme = storage.getItem('theme');

	if (!theme) {
		theme = 'light';
	}
//
//	scores = storage.getItem('scores');
//	scores1 = storage.getItem('scores1');
//	scores2 = storage.getItem('scores2');
//
//	if (!scores) {
//		scores = [];
//	} else {
//		scores = JSON.parse(scores);
//	}
//	
//	if (!scores1) {
//		scores1 = [];
//	} else {
//		scores1 = JSON.parse(scores1);
//	}
//	
//	if (!scores2) {
//		scores2 = [];
//	} else {
//		scores2 = JSON.parse(scores2);
//	}
//
	toggleTheme(theme);
	renderScoreBoard();
}

function renderScoreBoard() {
	var html = '';

	for (var i = 0; i < 10; i++) {
		html += "<li>";
		html += scores[i] || '-';
		html += "</li>";
	}

	scoreBoard.innerHTML = html;

}


function toggleMusic() { //原版音乐控件开关
	musicPlaying = !musicPlaying;
	if (musicPlaying) {
		music.play();
		musicButton.textContent = "Stop Music";
	} else {
		music.pause();
		music.currentTime = 0;
		musicButton.textContent = "Play Music";
	}

}

function playPause() {//自制音乐控件开关
    var music = document.getElementById('music2');
    var music_btn = document.getElementById('music_btn2');
    if (music.paused){
        music.play();
        music_btn.src = '../img/play.gif';
    }
    else{
        music.pause();
        music_btn.src =  '../img/pause.gif'; 
    }
}

//难度选择器
function setDiff(diff){
	window.difficulty = diff;
	if(diff == "3"){
		window.peep_num = 6;
	}else{
		window.peep_num = 4;
	}
}

//游戏开始
function play(diff) {
	playing = true;
	setDiff(diff);
	setState();
	renderScore();
	toggleScreen(gameScreen);
	peep(window.peep_num);//产生蚊子
	startTimer();
	if(diff == 1){
		tis_easy();
	}else if(diff == 2){
		tis_diff();
	}else{
		tis_hard();
	}
	
	//alert(window.difficulty);
}

//游戏开始
function playAgain() {
	playing = true;
	setState();
	renderScore();
	toggleScreen(gameScreen);
	peep(window.peep_num);//产生蚊子
	if(window.difficulty == 1){
		tis_easy();
	}else if(window.difficulty == 2){
		tis_diff();
	}else{
		tis_hard();
	}
	startTimer();
	//alert(window.difficulty);
}

//游戏开始
function playContinue() {
	playing = true;
	renderScore();
	toggleScreen(gameScreen);
	peep(window.peep_num);//产生蚊子
	if(window.difficulty == 1){
		tis_easy();
	}else if(window.difficulty == 2){
		tis_diff();
	}else{
		tis_hard();
	}
	//alert(window.difficulty);
}

//游戏结算
function win() {
	playing = false;
	var prevBest;
	var best;
	if(window.difficulty == "1"){
		prevBest = scores[0] || 0;
		scores.push(state.score);
		scores.sort(function(a, b) {
			return b - a;
		});
		if (scores.length > 10) {
			scores.pop();
		}
		saveScores();
		best = scores[0] || 0;
		
		if(state.score > passScores && !passEasy){
			passEasy = true;
			passnewEl.classList.remove('is-hidden');
		}else{
			passnewEl.classList.add('is-hidden');
		}

	}else if(window.difficulty == "2"){
		prevBest = scores1[0] || 0;
		scores1.push(state.score);
		scores1.sort(function(a, b) {
			return b - a;
		});
		if (scores1.length > 10) {
			scores1.pop();
		}
		saveScores1();
		best = scores1[0] || 0;
		
		if(state.score > passScores && !passDiff){
			passDiff = true;
			passnewEl.classList.remove('is-hidden');
		}else{
			passnewEl.classList.add('is-hidden');
		}
		
	}else{
		passnewEl.classList.add('is-hidden');
		prevBest = scores2[0] || 0;
		scores2.push(state.score);
		scores2.sort(function(a, b) {
			return b - a;
		});
		if (scores2.length > 10) {
			scores2.pop();
		}
		saveScores2();
		best = scores2[0] || 0;
	}
	if (state.score > prevBest) {
		best = state.score;
		highscoreEl.classList.remove('is-hidden');
		saveScores();
	} else {
		highscoreEl.classList.add('is-hidden');
	}
	if(state.score > lowsroce_easy || state.score > lowsroce_diff || state.score > lowsroce_hard){
		toRank();
	}
	renderBest_(best);
	renderScoreBoard();
	toggleScreen(winScreen);
	passLock();
}

function renderBest() {
	for (var i = 0; i < bestEls.length; i++) {
		bestEls[i].textContent = scores[0];
	}
	for (var i = 0; i < bestEls1.length; i++) {
		bestEls1[i].textContent = scores1[0];
	}
	for (var i = 0; i < bestEls2.length; i++) {

		bestEls2[i].textContent = scores2[0];
	}
}
//用来显示 对应男难度的最高分
function renderBest_() {
	if(window.difficulty == "1"){
		for (var i = 0; i < bestEls.length; i++) {
			bestEls_new[i].textContent = scores[0];
		}
	}else if(window.difficulty == "2"){
		for (var i = 0; i < bestEls.length; i++) {
			bestEls_new[i].textContent = scores1[0];
		}
	}else{
		for (var i = 0; i < bestEls.length; i++) {
			bestEls_new[i].textContent = scores2[0];
		}
	}
	renderBest();
}

function saveScores() {
	storage.setItem('scores', JSON.stringify(scores));
}

function saveScores1() {
	storage.setItem('scores1', JSON.stringify(scores1));
}

function saveScores2() {
	storage.setItem('scores2', JSON.stringify(scores2));
}

function menu() {
	toggleScreen(menuScreen);
	passLock();
	fillPhb();
}

function settings() {
	toggleScreen(settingsScreen);
	getRank();
}

function scoreboard() {
	toggleScreen(scoreboardScreen);
}

//页面计时器
function startTimer() {
	// Set the time before starting timer
	timerEl.textContent = state.time;

	timerIntervalId = setInterval(function(e) {
		state.time -= 1;
		timerEl.textContent = state.time;

		if (state.time <= 0) {
			clearInterval(timerIntervalId);
			win();
		}
	}, 1000);
}

function score(value) {
	state.score += value || 1;

	renderScore();
}
//记录分数
function renderScore() {
	for (var i = 0; i < scoreEls.length; i++) {
		scoreEls[i].textContent = state.score;
	}
}
//修改状态
function toggleScreen(screen) {
	if (activeScreen) {
		activeScreen.classList.remove('is-active');
	}

	screen.classList.add('is-active');
	activeScreen = screen;
}

function toggleTheme(value) {
	document.body.classList.remove(theme);
	document.body.classList.add(value);
	theme = value;

	storage.setItem('theme', value);
}

// Game Logic
// Events       吃蚊子
window.onmousemove = eyesFollow;
window.document.addEventListener(clickOrTap, shoot);
for (var i = 0; i < targets.length; i++) {
	targets[i].addEventListener(clickOrTap, hit);
}

//舌头动画
function shoot(e) {
	eyesFollow(e);
	// deadFly.classList.remove('is-active');

	player.classList.remove('is-active');
	tongue.style.height = 0 + "px";
	tongue.style.transform = "rotate(" + 0 + "deg)";

	var tongueX = tongue.getBoundingClientRect().left + (tongue.offsetWidth);
	var tongueY = tongue.getBoundingClientRect().bottom;
	var touch = getTouch(e);
	var clickX = touch.x + (tongue.offsetWidth / 2);
	var clickY = touch.y;

	shooting = true;
	transitioning = true;

	var angle = getAngle(tongueX, tongueY, clickX, clickY);
	var height = getHeight(tongueX, tongueY, clickX, clickY);

	if (angle > 0 && angle < 180) {
		player.classList.add('is-shooting-down');
	} else {
		player.classList.remove('is-shooting-down');
	}

	player.classList.add('is-active');
	tongue.style.height = height + "px";
	tongue.style.transform = "rotate(" + (angle + 90) + "deg)";
}

//吃蚊子 分数控制
function hit(e) {
	var path = this.parentNode;
	//var answer = this.parentNode;
	var id = path.getAttribute('data-id');
	
	if (!e.isTrusted || hidden.includes(id)) {
		return;
	}
	if (state.score % 2 == 0) {
		deadFly.classList.add('is-active2');
		deadFly.classList.remove('is-active');
	} else {
		deadFly.classList.add('is-active');
		deadFly.classList.remove('is-active2');
	}
	path.classList.remove('is-active');
	path.classList.add('is-hidden');
	hidden.push(id);
	
	
	var answer = path.childNodes[1].childNodes[1].textContent;
	// Show dead fly on tongue
	//deadFly.classList.add('is-active');
	// console.log('show dead fly');

//分数获取时间
	var id = hidden.shift();
	paths[id].classList.remove('is-hidden');
	
	if(checkAnswer(answer)){
		score();
		playContinue();
	}
	
}

//答案的判断
function checkAnswer(answer){
	var message = true;
	if(answer == window.true_answer){
		state.time += 5;		
	}
	else{
		state.time -= 10;
		message = false;
	}
	return message;
}

function eyesFollow(e) {
	var touch = getTouch(e);
	moveEye({
		x: touch.x,
		y: touch.y
	}, eyes[0], pupils[0]);
	moveEye({
		x: touch.x,
		y: touch.y
	}, eyes[1], pupils[1]);
}

function moveEye(mouse, eye, pupil) {
	var left = 0;
	var top = 0;
	var eyeRadius = eye.offsetWidth / 2;
	var pupilRadius = pupil.offsetWidth / 2;

	var leftOffset = eye.getBoundingClientRect().left;
	var topOffset = eye.getBoundingClientRect().top;

	var center = [eye.getBoundingClientRect().left + eyeRadius, eye.getBoundingClientRect().top + eyeRadius];

	var dist = getDistance([mouse.x, mouse.y], center);

	if (dist <= eyeRadius) {
		left = mouse.x - leftOffset - eyeRadius;
		top = mouse.y - topOffset - eyeRadius;
	} else {
		var x = mouse.x - center[0];
		var y = mouse.y - center[1];
		var radians = Math.atan2(y, x);
		left = (Math.cos(radians) * (eyeRadius - pupilRadius));
		top = (Math.sin(radians) * (eyeRadius - pupilRadius));
	}

	// if (top > 0) {
	//   eye.classList.add('down');
	//   eye.classList.remove('up');
	//   console.log('down');
	// } else {
	//   eye.classList.add('up');
	//   eye.classList.remove('down');
	//   console.log('up');
	// }

	pupil.style.transform = "translate(" + left + "px, " + top + "px)";
}
//第一次随机出现的蚊子数
function getRandomPath(lanes) {
	const idx = Math.floor(Math.random() * paths.length);
	//const idx = paths.length;
	const path = paths[idx];
	if (path === lastPath || paths[idx].classList.contains('is-hidden')) {
		// console.log('Ah nah thats the same one bud');
		return getRandomPath(paths);
	}
	lastPath = path;
	return path;
}

//蚊子出现
function peep(num) {
//	const time = 1000;
//	const time = getRandomTime(600, 1200);
	//const path = getRandomPath(paths);
//	const path = paths;
	//path.classList.add('is-active');//为添加活动
//	setTimeout(function() {
//		path.classList.remove('is-active');
//		if (playing) {
//			peep();
//		}
//	}, time);
	for(var i = 0;i < num;i++){
		path = paths[i];
		path.classList.add('is-active');
	}
	if(num == 4){
		paths[4].classList.remove('is-active');
		paths[5].classList.remove('is-active');
	}
	
}

// Utility
function getRandomTime(min, max) {
	return Math.round(Math.random() * (max - min) + min);
}

function getDistance(dot1, dot2) {
	var x1 = dot1[0],
		y1 = dot1[1],
		x2 = dot2[0],
		y2 = dot2[1];

	return Math.sqrt(Math.pow(x1 - x2, 2) + Math.pow(y1 - y2, 2));
}

function getAngle(cx, cy, ex, ey) {
	var dy = ey - cy;
	var dx = ex - cx;
	var theta = (Math.atan2(dy, dx)) * 180 / Math.PI;

	return theta;
}

function getHeight(x1, y1, x2, y2) {
	var a = x1 - x2;
	var b = y1 - y2;

	return Math.sqrt(a * a + b * b);
}

function getTouch(e) {
	if (e.touches) {
		return {
			x: e.touches[0].clientX,
			y: e.touches[0].clientY
		}
	} else {
		return {
			x: e.clientX,
			y: e.clientY
		}
	}
}

//产生错误答案
function create_wrong_answer(ans) {
	if(ans > 11) {
		wronganswer[0] = ans - 9;
		wronganswer[1] = ans - 10;
		wronganswer[2] = ans - 11;
		wronganswer[3] = parseInt(ans) + 9;
		wronganswer[4] = parseInt(ans) + 10;
		wronganswer[5] = parseInt(ans) + 11;
		wronganswer[6] = ans - 1;
		wronganswer[7] = ans - 2;
		wronganswer[8] = parseInt(ans) + 1;
		wronganswer[9] = parseInt(ans) + 2;
	} else if(ans > 2) {
		wronganswer[0] = parseInt(ans) + 3;
		wronganswer[1] = parseInt(ans) + 4;
		wronganswer[2] = parseInt(ans) + 5;
		wronganswer[3] = parseInt(ans) + 9;
		wronganswer[4] = parseInt(ans) + 10;
		wronganswer[5] = parseInt(ans) + 11;
		wronganswer[6] = ans - 1;
		wronganswer[7] = ans - 2;
		wronganswer[8] = parseInt(ans) + 1;
		wronganswer[9] = parseInt(ans) + 2;
	} else {
		wronganswer[0] = parseInt(ans) + 3;
		wronganswer[1] = parseInt(ans) + 4;
		wronganswer[2] = parseInt(ans) + 5;
		wronganswer[3] = parseInt(ans) + 6;
		wronganswer[4] = parseInt(ans) + 7;
		wronganswer[5] = parseInt(ans) + 8;
		wronganswer[6] = ans - 1;
		wronganswer[7] = parseInt(ans) + 9;
		wronganswer[8] = parseInt(ans) + 1;
		wronganswer[9] = parseInt(ans) + 2;
	}
}

function rand(min, max) {
	return Math.round(Math.random() * (max - min) + min)
}

//添加题目
function tis_easy() {
	var add = rand(0, 3);
	var pd;
	if(add == 0) {
		var fu1 = rand(1,50);
		var fu2 = rand(1,50);
		pd = fu1 + fu2
	}else if(add == 1) {
		var fu1 = rand(1,19);
		var fu2 = rand(1,9);
		pd = fu1 * fu2
	}else if(add == 2){
		var fu1 = rand(10,99);
		var fu2 = rand(1,fu1);
		pd = fu1 - fu2;
	}else{
		var fu1 = rand(1,10);
		var fu2 = rand(10,20);
		pd = fu1 * fu2;
		var temp;
		temp = pd;
		pd = fu1;		
		fu1 = temp;
	}
	document.getElementById("ti").innerHTML = fu1 + " " + ["+", "x","-","÷"][add] + " " + fu2;
	ans = pd;
	window.true_answer = pd;
	create_wrong_answer(ans);
	var wa = new Array(4);
	var wb = new Array(4);
	wa[3] = ans;
	for(var i = 0; i < 3;) {
		var ra = Math.floor(Math.random() * 10);
		if(wronganswer[ra] != -100) {
			wa[i] = wronganswer[ra];
			wronganswer[ra] = -100;
			i++;
		}
	}
	for(var i = 0; i < 4;) {
		var ra = Math.floor(Math.random() * 4);
		if(wa[ra] != -100) {
			wb[i] = wa[ra];
			wa[ra] = -100;
			i++;
		}
	}
	document.getElementById("answer1").textContent = wb[0];
	document.getElementById("answer2").textContent = wb[1];
	document.getElementById("answer3").textContent = wb[2];
	document.getElementById("answer4").textContent = wb[3];
}

function tis_diff() {
	var add1 = rand(0,1);//add1= 0加法  1减法 2乘法 3除法
	var add2 = rand(2,3);
	var fu1;
	var fu2;
	var fu3;
	var pd;
	if(add1 == 0 && add2 == 2) {
		fu1 = rand(1,10);
		fu2 = rand(1,10);
		fu3 = rand(1,10);
		pd = fu1 + fu2 * fu3;
		document.getElementById("ti").innerHTML = fu1 + " " + "+" + " " + fu2 + " " + "x" + " " + fu3;		
	}else if(add1 == 0 && add2 == 3) {
		fu1 = rand(1,10);
		fu2 = rand(1,10);
		fu3 = rand(1,10);
		var temp = fu2 * fu3;
		fu2 = temp;
		pd = fu1 + fu2 / fu3;
		document.getElementById("ti").innerHTML = fu1 + " " + "+" + " " + fu2 + " " + "÷" + " " + fu3;
	}else if(add1 == 1 && add2 == 2){
		fu2 = rand(1,9);
		fu3 = rand(1,10);
		var te = fu2 * fu3;
		var tep = tep + 20;
		fu1 = rand(te,tep);
		pd = fu1 - fu2 * fu3;
		document.getElementById("ti").innerHTML = fu1 + " " + "-" + " " + fu2 + " " + "x" + " " + fu3;
	}else{
		fu2 = rand(1,9);
		fu3 = rand(1,10);
		var temp = fu2 * fu3;
		fu2 = temp;
		fu1 = rand(temp,99);
		pd = fu1 - fu2 / fu3;
		document.getElementById("ti").innerHTML = fu1 + " " + "-" + " " + fu2 + " " + "÷" + " " + fu3;
	}
	
	ans_ = pd;
	window.true_answer = pd;
	create_wrong_answer(ans_);
	var wa = new Array(4);
	var wb = new Array(4);
	wa[3] = ans_;
	for(var i = 0; i < 3;) {
		var ra = Math.floor(Math.random() * 10);
		if(wronganswer[ra] != -100) {
			wa[i] = wronganswer[ra];
			wronganswer[ra] = -100;
			i++;
		}
	}
	for(var i = 0; i < 4;) {
		var ra = Math.floor(Math.random() * 4);
		if(wa[ra] != -100) {
			wb[i] = wa[ra];
			wa[ra] = -100;
			i++;
		}
	}
	document.getElementById("answer1").textContent = wb[0];
	document.getElementById("answer2").textContent = wb[1];
	document.getElementById("answer3").textContent = wb[2];
	document.getElementById("answer4").textContent = wb[3];
}

function tis_hard() {
	var add1 = rand(0,1);//add1= 0加法  1减法 2乘法 3除法
	var add2 = rand(2,3);
	var fu1;
	var fu2;
	var fu3;
	var pd;
	if(add1 == 0 && add2 == 2) {
		fu1 = rand(10,20);
		fu2 = rand(1,10);
		fu3 = rand(1,10);
		pd = fu1 + fu2 * fu3;
		document.getElementById("ti").innerHTML = fu1 + " " + "+" + " " + fu2 + " " + "x" + " " + fu3;		
	}else if(add1 == 0 && add2 == 3) {
		fu1 = rand(10,20);
		fu2 = rand(1,10);
		fu3 = rand(2,10);
		var temp = fu2 * fu3;
		fu2 = temp;
		pd = fu1 + fu2 / fu3;
		document.getElementById("ti").innerHTML = fu1 + " " + "+" + " " + fu2 + " " + "÷" + " " + fu3;
	}else if(add1 == 1 && add2 == 2){
		fu2 = rand(1,9);
		fu3 = rand(1,10);
		fu1 = rand(fu2 * fu3,99);
		pd = fu1 - fu2 * fu3;
		document.getElementById("ti").innerHTML = fu1 + " " + "-" + " " + fu2 + " " + "x" + " " + fu3;
	}else{
		fu2 = rand(1,9);
		fu3 = rand(1,10);
		var temp = fu2 * fu3;
		fu2 = temp;
		fu1 = rand(temp,99);
		pd = fu1 - fu2 / fu3;
		document.getElementById("ti").innerHTML = fu1 + " " + "-" + " " + fu2 + " " + "÷" + " " + fu3;
	}
	
	ans_ = pd;
	window.true_answer = pd;
	create_wrong_answer(ans_);
	var wa = new Array(6);
	var wb = new Array(6);
	wa[5] = ans_;
	for(var i = 0; i < 5;) {
		var ra = Math.floor(Math.random() * 10);
		if(wronganswer[ra] != -100) {
			wa[i] = wronganswer[ra];
			wronganswer[ra] = -100;
			i++;
		}
	}
	for(var i = 0; i < 6;) {
		var ra = Math.floor(Math.random() * 6);
		if(wa[ra] != -100) {
			wb[i] = wa[ra];
			wa[ra] = -100;
			i++;
		}
	}
	document.getElementById("answer1").textContent = wb[0];
	document.getElementById("answer2").textContent = wb[1];
	document.getElementById("answer3").textContent = wb[2];
	document.getElementById("answer4").textContent = wb[3];
	document.getElementById("answer5").textContent = wb[4];
	document.getElementById("answer6").textContent = wb[5];
}

//获取用户的分数信息
function getUser(){
	var username = $("#username").val();
	$.ajax(
			{type:'POST',
			 dataType:'text',//不写这个会提示下载或者改为json也是
			 url:'getUser.do',
			 async:false,
			 data:{
				 username : username},
			success:function(data){
				var data = eval("("+data+")"); 
				window.highsroce_easy = data.easyhighsroces;
				window.highsroce_diff = data.difhighsroces;
				window.highsroce_hard = data.hardsroces;
			}
			})
}

//用户冲破自己最高分之后就保存
function saveScores(){
	var username = $("#username").val();
	var easy = scores[0];
	var diff = scores1[0];
	var hard = scores2[0];
	$.ajax(
			{type:'POST',
			 dataType:'text',//不写这个会提示下载或者改为json也是
			 url:'saveScores.do',
			 async:false,
			 data:{
				 username : username,
				 easy : easy,
				 diff : diff,
				 hard : hard},
			success:function(data){
			}
			})
}

//得到排行榜信息
function getRank(){
	$.ajax(
			{type:'POST',
			 dataType:'text',//不写这个会提示下载或者改为json也是
			 url:'getRank.do',
			 data:{},
			success:function(data){
				var data = eval("("+data+")"); 
				if (data!= null) { 
					var easyRank = data.easyRank;
					var html = "<span>简单模式</span><br />"
					for(var i = 0;i < easyRank.length;){
						i++;
						html += "<li>";
						html += "第" + i+ "名"+ "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;";
						if(easyRank[i - 1].username){
							html += easyRank[i - 1].username +"&nbsp;&nbsp;&nbsp;";
							html += easyRank[i - 1].sroces + "分";
						}else{
							html += "暂无！欢迎冲榜";
						}
						
						document.getElementById("phb_easy").innerHTML= html;
					}
					lowsroce_easy = easyRank[easyRank.length - 1].sroces;
					
					var diffRank = data.diffRank;
					var html1 = "<span>一般模式</span><br />"
					for(var i = 0;i < diffRank.length;){
						i++;
						html1 += "<li>";
						html1 += "第" + i+ "名"+ "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;";
						if(diffRank[i - 1].username){
							html1 += diffRank[i - 1].username +"&nbsp;&nbsp;&nbsp;";
							html1 += diffRank[i - 1].sroces + "分";
						}else{
							html1 += "暂无！欢迎冲榜";
						}
						document.getElementById("phb_diff").innerHTML= html1;
					}
					lowsroce_diff = diffRank[diffRank.length - 1].sroces;
					
					var hardRank = data.hardRank;
					var html2 = "<span>困难模式</span><br />"
					for(var i = 0;i < hardRank.length;){
						i++;
						html2 += "<li>";
						html2 += "第" + i+ "名"+ "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;";
						if(hardRank[i - 1].username){
							html2 += hardRank[i - 1].username +"&nbsp;&nbsp;&nbsp;";
							html2 += hardRank[i - 1].sroces + "分";
						}else{
							html2 += "暂无！欢迎冲榜";
						}
						document.getElementById("phb_hard").innerHTML= html2;
					}
					lowsroce_hard = hardRank[hardRank.length - 1].sroces;	
				}
			}
			})
}

//用户冲上排行榜
function toRank(){
	var username = $("#username").val();
	if(window.difficulty == "1"){
		var easy = scores[0];
		$.ajax(
				{type:'POST',
				 dataType:'text',//不写这个会提示下载或者改为json也是
				 url:'toRank_easy.do',				 
				 data:{
					 username : username,
					 easy : easy},
				success:function(data){
				}
				})
	}else if(window.difficulty == "2"){
		var diff = scores1[0];
		$.ajax(
				{type:'POST',
				 dataType:'text',//不写这个会提示下载或者改为json也是
				 url:'toRank_diff.do',				
				 data:{
					 username : username,
					 diff : diff},
				success:function(data){
				}
				})
	}else{
		var hard = scores2[0];
		$.ajax(
				{type:'POST',
				 dataType:'text',//不写这个会提示下载或者改为json也是
				 url:'toRank_hard.do',
				 data:{
					 username : username,
					 hard : hard},
				success:function(data){
					
				}
				})
	}
	
}

//关闭页面执行
//window.onbeforeunload = function() {
//	   
//    var n = window.event.screenX - window.screenLeft;
//
//    var b = n > document.documentElement.scrollWidth - 20;
//
//    if (!(b && window.event.clientY < 0 || window.event.altKey)) {
//        //window.event.returnValue = "真的要刷新页面么？"; 
//         
//         //这里放置我想执行缓存的代码
//         cacheFunction(); 
//         
//    }
//}
