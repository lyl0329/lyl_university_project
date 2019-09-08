var wronganswer = new Array(0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
			
			function create_wrong_answer(ans) {
				if(ans == 0){
					wronganswer[0] = parseInt(ans) + 10;
					wronganswer[1] = parseInt(ans) + 1;
					wronganswer[2] = parseInt(ans) + 2;
					wronganswer[3] = parseInt(ans) + 3;
					wronganswer[4] = parseInt(ans) + 4;
					wronganswer[5] = parseInt(ans) + 5;
					wronganswer[6] = parseInt(ans) + 8;
					wronganswer[7] = parseInt(ans) + 9;
					wronganswer[8] = parseInt(ans) + 6;
					wronganswer[9] = parseInt(ans) + 7;
				}else if(ans > 11) {
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

			//function $(i) {
			//	return document.getElementById(i)
			//}

			function rand(min, max) {
				return Math.round(Math.random() * (max - min) + min)
			}
			var dui = 0,
				cuo = 0,
				fu1 = 0,
				fu2 = 0,
				add = 0,
				pd = 29,
				k = 0,
				num = 0;
			var clkBoolA = false;
			var clkBoolB = false;
			var clkBoolC = false;
			var clkBoolD = false;
			
			var time = null;
			var art = null;
			//调用setInterval控制
			function dati() {
				//var time = 120 * 1000; //计算出毫秒数
				dui = 0;
				cuo = 0;
				document.getElementById("att1").innerHTML = "0"
				document.getElementById("att2").innerHTML = "0"
				window.art = setInterval(function() {
//					var mm = parseInt(time / 60 / 1000 % 60, 10); //剩余的分钟数
//					var ss = parseInt(time / 1000 % 60, 10); //剩余的秒数
//					mm = checkTime(mm);
//					ss = checkTime(ss);
//					$("#timer").html(mm + '分' + ss + '秒');
//					time = time - 1000;
//					if(mm == 0 && ss == 0) {
//						document.getElementById("tip").innerHTML = "时间到！";
//						document.getElementById("tinum").innerHTML = k;
//						$("#myEnd").modal("toggle");
//						clearInterval(art);
//					}
					if(k == 20){
						document.getElementById("tip").innerHTML = "已完成此次练习全部题目！";
						document.getElementById("tinum").innerHTML = k;
						$("#myEnd").modal("toggle");
						clearInterval(art);
					}
				}, 1000)
				tis()
			}
			function clear1(){
				clearInterval(art);
				k == 0;
				dui = 0;
				cuo = 0;
			}

//			function checkTime(i) {
//				if(i < 10) {
//					i = "0" + i;
//				}
//				return i;
//			}
//
//			//显示当前时间
//			setInterval(function() {
//				var now = (new Date()).toLocaleString();
//				$('#current-time').text(now);
//			}, 1000);
			
			function getTime(){   
				var date = new Date(); //创建时间对象  
				var year = date.getFullYear(); //获取年   
				var month = date.getMonth()+1;//获取月
				var day = date.getDate(); //获取当日  
		        var hh = date.getHours();  //时
		        var mm = date.getMinutes(); //分
				time = year+"年"+month+"月"+day+"日"+hh+"时"+mm+"分"; //组合时间  
			}
			function tis() {
				if(k >= 0 && k < 5) {
					fu2 = rand(0, 10);
					add = rand(0, 1);
					if(add == 0) {
						fu1 = rand(1, 10);
					} else {
						fu1 = rand(1, 20);
					}
				} else if(k >= 5 && k < 12) {
					fu1 = rand(10, 20);
					fu2 = rand(10, 20);
					add = rand(0, 1);
				} else {
					fu1 = rand(20, 100);
					fu2 = rand(20, 100);
					add = rand(0, 1);
				}
				if(fu2 > fu1) {
					add = 0
				}
				if(add == 0) {
					pd = fu1 + fu2
				}else if(add == 1) {
					pd = fu1 - fu2
				}
				document.getElementById("ti").innerHTML = fu1 + " " + ["+", "-"][add] + " " + fu2 + " " + "=" + " " + "?";
				ans = pd;
				//alert(ans);
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
				document.getElementById("buttonA").value = wb[0];
				document.getElementById("buttonB").value = wb[1];
				document.getElementById("buttonC").value = wb[2];
				document.getElementById("buttonD").value = wb[3];
//				var x = document.getElementById("buttonD").value
//				alert(x);
			}

			$(document).on('click', '.buttonA', function (){
				clkBoolA = true;
			});

			$(document).on('click', '.buttonB', function (){
				clkBoolB = true;
			});

			$(document).on('click', '.buttonC', function (){
				clkBoolC = true;
			});

			$(document).on('click', '.buttonD', function (){
				clkBoolD = true;
			});
			
			var xa = document.getElementById("success");
			var ya = document.getElementById("wrong");
			$(document).on('click', '.buttonA', function (){
				if((document.getElementById("buttonA").value == pd && clkBoolA)) {
				    xa.play();
				    num++;
				    if(num == 15){
				    	$("#img").fadeIn();
				    	$("#img").delay(1000).fadeOut(1500);
				    }
					dui++;
					document.getElementById("att1").innerHTML = dui;
					document.getElementById("attone1").innerHTML = dui;
				} else {
					
				    ya.play();
					cuo++;
					document.getElementById("att2").innerHTML = cuo;
					document.getElementById("attone2").innerHTML = cuo;
				}
				var records = {};
				//params.XX必须与Spring Mvc controller中的参数名称一致  
				//否则在controller中使用@RequestParam绑定
				records.question = document.getElementById("ti").innerHTML;
				records.rightanswer = pd;
				records.useranswer = document.getElementById("buttonA").value;
				records.responsetime = time;
				records.userid = document.getElementById("username").value;
				records.type = "加减法运算";
				$.ajax({
					async:false,
					type: "POST",
					url: "torecord.do",//注意路径
					data:records,
					dataType:"json",
					success:function(data){
						if(data.result=='SUCCESS'){
							//alert("修改成功");
						}else{
							//alert("修改失败，失败原因【" + data + "】");
						}
					},
					error:function(data){
						//alert(data.result);
					}
				});
				k++;
				document.getElementById("nowtinum").innerHTML = k;
				//$("k").innerHTML = k;
				clkBoolA = false;
				clkBoolB = false;
				clkBoolC = false;
				clkBoolD = false;
				tis()
			})
			
			$(document).on('click', '.buttonB', function (){
				if((document.getElementById("buttonB").value == pd && clkBoolB)) {
				    xa.play();
				    num++;
				    if(num == 15){
				    	$("#img").fadeIn();
				    	$("#img").delay(1000).fadeOut(1500);
				    }
					dui++;
					document.getElementById("att1").innerHTML = dui;
					document.getElementById("attone1").innerHTML = dui;
				} else {
				    ya.play();
					cuo++;
					document.getElementById("att2").innerHTML = cuo;
					document.getElementById("attone2").innerHTML = cuo;
				}
				var records = {};
				records.question = document.getElementById("ti").innerHTML;
				records.rightanswer = pd;
				records.useranswer = document.getElementById("buttonB").value;
				records.responsetime = time;
				records.userid = document.getElementById("username").value;
				records.type = "加减法运算";
				$.ajax({
					async:false,
					type: "POST",
					url: "torecord.do",//注意路径
					data:records,
					dataType:"json",
					success:function(data){
						if(data.result=='SUCCESS'){
							//alert("修改成功");
						}else{
							//alert("修改失败，失败原因【" + data + "】");
						}
					},
					error:function(data){
						//alert(data.result);
					}
				});
				k++;
				document.getElementById("nowtinum").innerHTML = k;
				//$("k").innerHTML = k;
				clkBoolA = false;
				clkBoolB = false;
				clkBoolC = false;
				clkBoolD = false;
				tis()
			})
			$(document).on('click', '.buttonC', function (){
				if((document.getElementById("buttonC").value == pd && clkBoolC)) {
				    xa.play();
				    num++;
				    if(num == 15){
				    	$("#img").fadeIn();
				    	$("#img").delay(1000).fadeOut(1500);
				    }
					dui++;
					document.getElementById("att1").innerHTML = dui;
					document.getElementById("attone1").innerHTML = dui;
				} else {
				    ya.play();
					cuo++;
					document.getElementById("att2").innerHTML = cuo;
					document.getElementById("attone2").innerHTML = cuo;
				}
				var records = {};
				records.question = document.getElementById("ti").innerHTML;
				records.rightanswer = pd;
				records.useranswer = document.getElementById("buttonC").value;
				records.responsetime = time;
				records.userid = document.getElementById("username").value;
				records.type = "加减法运算";
				$.ajax({
					async:false,
					type: "POST",
					url: "torecord.do",//注意路径
					data:records,
					dataType:"json",
					success:function(data){
						if(data.result=='SUCCESS'){
							//alert("修改成功");
						}else{
							//alert("修改失败，失败原因【" + data + "】");
						}
					},
					error:function(data){
						//alert(data.result);
					}
				});
				k++;
				document.getElementById("nowtinum").innerHTML = k;
				//$("k").innerHTML = k;
				clkBoolA = false;
				clkBoolB = false;
				clkBoolC = false;
				clkBoolD = false;
				tis()
			})
			$(document).on('click', '.buttonD', function (){
				if((document.getElementById("buttonD").value == pd && clkBoolD)) {
				    xa.play();
				    num++;
				    if(num == 15){
				    	$("#img").fadeIn();
						$("#img").delay(1000).fadeOut(1500);
				    }
					dui++;
					document.getElementById("att1").innerHTML = dui;
					document.getElementById("attone1").innerHTML = dui;
				} else {
				    ya.play();
					cuo++;
					document.getElementById("att2").innerHTML = cuo;
					document.getElementById("attone2").innerHTML = cuo;
				}
				var records = {};
				records.question = document.getElementById("ti").innerHTML;
				records.rightanswer = pd;
				records.useranswer = document.getElementById("buttonD").value;
				records.responsetime = time;
				records.userid = document.getElementById("username").value;
				records.type = "加减法运算";
				$.ajax({
					async:false,
					type: "POST",
					url: "torecord.do",//注意路径
					data:records,
					dataType:"json",
					success:function(data){
						if(data.result=='SUCCESS'){
							//alert("修改成功");
						}else{
							//alert("修改失败，失败原因【" + data + "】");
						}
					},
					error:function(data){
						//alert(data.result);
					}
				});
				k++;
				document.getElementById("nowtinum").innerHTML = k;
				//$("k").innerHTML = k;
				clkBoolA = false;
				clkBoolB = false;
				clkBoolC = false;
				clkBoolD = false;
				tis()
			})
			
			$(document).on('click', "#a", function (){
				$("#question").empty();
				k = 0;
				dui = 0;
				cuo = 0;
				num = 0;
			})
			
			$(document).on('click', '.modal-backdrop', function (){
				$("#question").empty();
				k = 0;
				dui = 0;
				cuo = 0;
				num = 0;
			})
			
			