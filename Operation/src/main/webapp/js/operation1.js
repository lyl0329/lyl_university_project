var wronganswer_ = new Array(0, 0, 0, 0, 0, 0, 0, 0, 0, 0);

			function create_wrong_answer1(ans_) {
				if(ans_ == 0){
					wronganswer_[0] = parseInt(ans_) + 10;
					wronganswer_[1] = parseInt(ans_) + 1;
					wronganswer_[2] = parseInt(ans_) + 2;
					wronganswer_[3] = parseInt(ans_) + 3;
					wronganswer_[4] = parseInt(ans_) + 4;
					wronganswer_[5] = parseInt(ans_) + 5;
					wronganswer_[6] = parseInt(ans_) + 8;
					wronganswer_[7] = parseInt(ans_) + 9;
					wronganswer_[8] = parseInt(ans_) + 6;
					wronganswer_[9] = parseInt(ans_) + 7;
				}else if(Math.ceil(ans_ / 10) == ans_ / 10) {
					wronganswer_[0] = parseInt(ans_) + 5;
					wronganswer_[1] = parseInt(ans_) - 5;
					wronganswer_[2] = parseInt(ans_) + 10;
					wronganswer_[3] = parseInt(ans_) - 10;
					wronganswer_[4] = parseInt(ans_) + 20;
					wronganswer_[5] = parseInt(ans_) + 15;
					wronganswer_[6] = ans_ + 30;
					wronganswer_[7] = ans_ * 0.8;
					wronganswer_[8] = parseInt(ans_) * 1.5;
					wronganswer_[9] = parseInt(ans_) * 0.5;
				} else if(ans_ > 11) {
					wronganswer_[0] = ans_ - 9;
					wronganswer_[1] = ans_ - 10;
					wronganswer_[2] = ans_ - 11;
					wronganswer_[3] = parseInt(ans_) + 9;
					wronganswer_[4] = parseInt(ans_) + 10;
					wronganswer_[5] = parseInt(ans_) + 11;
					wronganswer_[6] = ans_ - 1;
					wronganswer_[7] = ans_ - 2;
					wronganswer_[8] = parseInt(ans_) + 1;
					wronganswer_[9] = parseInt(ans_) + 2;							
				} else if(ans_ > 2){
					wronganswer_[0] = parseInt(ans_) + 3;
					wronganswer_[1] = parseInt(ans_) + 4;
					wronganswer_[2] = parseInt(ans_) + 5;
					wronganswer_[3] = parseInt(ans_) + 9;
					wronganswer_[4] = parseInt(ans_) + 10;
					wronganswer_[5] = parseInt(ans_) + 11;
					wronganswer_[6] = ans_ - 1;
					wronganswer_[7] = ans_ - 2;
					wronganswer_[8] = parseInt(ans_) + 1;
					wronganswer_[9] = parseInt(ans_) + 2;
				}else {
					wronganswer_[0] = parseInt(ans_) + 3;
					wronganswer_[1] = parseInt(ans_) + 4;
					wronganswer_[2] = parseInt(ans_) + 5;
					wronganswer_[3] = parseInt(ans_) + 6;
					wronganswer_[4] = parseInt(ans_) + 7;
					wronganswer_[5] = parseInt(ans_) + 8;
					wronganswer_[6] = parseInt(ans_) - 1;
					wronganswer_[7] = parseInt(ans_) + 9;
					wronganswer_[8] = parseInt(ans_) + 1;
					wronganswer_[9] = parseInt(ans_) + 2;
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
				add1 = 0,
				pd = 29,
				pz = 0,
				num1 = 0,
				x = null;
			var clkBool_A = false;
			var clkBool_B = false;
			var clkBool_C = false;
			var clkBool_D = false;

			var art1 = null;
			 
//			var se;
			//调用setInterval控制
			function dati1() {
				//计算出毫秒数
				//var time1 = 120 * 1000;
				dui = 0;
				cuo = 0;
				document.getElementById("_att_1").innerHTML = "0"
				document.getElementById("_att_2").innerHTML = "0"
					window.art1 = setInterval(function() {
//					var mm = parseInt(time1 / 60 / 1000 % 60, 10); //剩余的分钟数
//					var ss = parseInt(time1 / 1000 % 60, 10); //剩余的秒数
//					mm = checkTime_(mm);
//					ss = checkTime_(ss);
//					$("#timer").html(mm + '分' + ss + '秒');
//					time1 = time1 - 1000;
//					if(mm == 0 && ss == 0) {
//						document.getElementById("tip1").innerHTML = "时间到！";
//						document.getElementById("tinum1").innerHTML = pz;
//						$("#myEnd").modal("toggle");
//						clearInterval(art1);
//					}
					if(pz == 20){
						document.getElementById("tip1").innerHTML = "已完成此次练习全部题目！";
						document.getElementById("tinum1").innerHTML = pz;
						$("#myEnd").modal("toggle");
						clearInterval(art1);
					}
				}, 1000)
				tis1()
			}
			function clear3(){
				clearInterval(art1);
				pz = 0;
				dui = 0;
				cuo = 0;
			}

//			function checkTime_(i) {
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
			
			function getTime1(){   
				var date = new Date(); //创建时间对象  
				var year = date.getFullYear(); //获取年   
				var month = date.getMonth()+1;//获取月
				var day = date.getDate(); //获取当日  
		        var hh = date.getHours();  //时
		        var mm = date.getMinutes(); //分
				time = year+"年"+month+"月"+day+"日"+hh+"时"+mm+"分"; //组合时间  
			}
			function tis1() {
				add1 = rand(0,3);//add1=1时为除法，=0为乘法,=2为加法，=3为减法
				//alert(add1);
				if(pz >= 0 && pz < 4) {
					if(add1 == 1){
						fu1 = rand(1, 5);
						fu2 = fu1 * rand(0, 5);
					}else if(add1 == 0){
						fu2 = rand(0, 5);
						fu1 = rand(0, 10);
					}else if(add1 == 2){
						fu2 = rand(0, 10);
						fu1 = rand(1, 10);
					}else{
						fu1 = rand(0, 10);
						fu2 = rand(fu1, 20);
					}
				} else if(pz >= 4 && pz < 15) {
					if(add1 == 1){
						fu1 = rand(5, 9);
						fu2 = fu1 * rand(5, 9);
					}else if(add1 == 0){
						fu2 = rand(6, 10);
						fu1 = rand(6, 10);
					}else{
						fu1 = rand(10, 20);
						if(add1 == 3){
							fu2 = rand(fu1, 20);
						}else{
							fu2 = rand(20, 100);
						}	
					}
				} else {
					if(add1 == 1){
						x = rand(0,1);
						if(x){
							fu1 = rand(1, 10);
							fu2 = 10 * fu1 * rand(1, 9);
						}else{
							fu1 = 10 * rand(1, 10);
							fu2 = fu1 * rand(1, 9);
						}
					}else if(add1 == 0){
						fu2 = rand(10, 20);
						fu1 = rand(0, 10);
					}else{
						fu1 = rand(20, 100);
						if(add1 == 3){
							fu2 = rand(fu1, 100);
						}else{
							fu2 = rand(20, 100);
						}
					}
				}
				if(add1 == 0) {
					pd = fu2 * fu1;
					document.getElementById("ti1").innerHTML = fu2 + " " + "×" + " " + fu1 + " " + "=" + " " + "?";
					x = document.getElementById("ti1").innerHTML;
				}else if(add1 == 1) {
					pd = fu2 / fu1;
					document.getElementById("ti1").innerHTML = fu2 + " " + "÷" + " " + fu1 + " " + "=" + " " + "?";
					x = document.getElementById("ti1").innerHTML;
				}else if(add1 == 2){
					pd = fu2 + fu1;
					document.getElementById("ti1").innerHTML = fu2 + " " + "+" + " " + fu1 + " " + "=" + " " + "?";
					x = document.getElementById("ti1").innerHTML;
				}else{
					pd = fu2 - fu1;
					document.getElementById("ti1").innerHTML = fu2 + " " + "-" + " " + fu1 + " " + "=" + " " + "?";
					x = document.getElementById("ti1").innerHTML;
				}
				ans_ = pd;
				//alert(ans);
				create_wrong_answer1(ans_);
				var wa = new Array(4);
				var wb = new Array(4);
				wa[3] = ans_;
				for(var i = 0; i < 3;) {
					var ra = Math.floor(Math.random() * 10);
					if(wronganswer_[ra] != -100) {
						wa[i] = wronganswer_[ra];
						wronganswer_[ra] = -100;
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
				document.getElementById("button_a").value = wb[0];
				document.getElementById("button_b").value = wb[1];
				document.getElementById("button_c").value = wb[2];
				document.getElementById("button_d").value = wb[3];
			}

			$(document).on('click', '.button_a', function (){
				clkBool_A = true;
			});

			$(document).on('click', '.button_b', function (){
				clkBool_B = true;
			});

			$(document).on('click', '.button_c', function (){
				clkBool_C = true;
			});

			$(document).on('click', '.button_d', function (){
				clkBool_D = true;
			});
			
			var xa1 = document.getElementById("success");
			var ya1 = document.getElementById("wrong");
			$(document).on('click', '.button_a', function (){
				if((document.getElementById("button_a").value == pd && clkBool_A)) {
				    xa1.play();
				    num1++;
				    if(num1 == 15){
				    	$("#img").fadeIn();
				    	$("#img").delay(1000).fadeOut(1500);
				    }
					dui++;
					document.getElementById("_att_1").innerHTML = dui;
					document.getElementById("_attthree_1").innerHTML = dui;
				} else if((document.getElementById("button_a").value != pd && clkBool_A)){
				    ya1.play();
					cuo++;
					document.getElementById("_att_2").innerHTML = cuo;
					document.getElementById("_attthree_2").innerHTML = cuo;
				}
				var records = {};
				records.question = x;
				records.rightanswer = pd;
				records.useranswer = document.getElementById("button_a").value;
				records.responsetime = time;
				records.userid = document.getElementById("username").value;
				records.type = "混合运算";
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
				pz++;
				document.getElementById("nowtinum1").innerHTML = pz;
				//$("k").innerHTML = k;
				clkBool_A = false;
				clkBool_B = false;
				clkBool_C = false;
				clkBool_D = false;
				tis1()
			})
			$(document).on('click', '.button_b', function (){
				if((document.getElementById("button_b").value == pd && clkBool_B)) {
				    xa1.play();
				    num1++;
				    if(num1 == 15){
				    	$("#img").fadeIn();
				    	$("#img").delay(1000).fadeOut(1500);
				    }
					dui++;
					document.getElementById("_att_1").innerHTML = dui;
					document.getElementById("_attthree_1").innerHTML = dui;
				} else if((document.getElementById("button_b").value != pd && clkBool_B)){
				    ya1.play();
					cuo++;
					document.getElementById("_att_2").innerHTML = cuo;
					document.getElementById("_attthree_2").innerHTML = cuo;
				}
				var records = {};
				records.question = x;
				records.rightanswer = pd;
				records.useranswer = document.getElementById("button_b").value;
				records.responsetime = time;
				records.userid = document.getElementById("username").value;
				records.type = "混合运算";
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
				pz++;
				document.getElementById("nowtinum1").innerHTML = pz;
				//$("k").innerHTML = k;
				clkBool_A = false;
				clkBool_B = false;
				clkBool_C = false;
				clkBool_D = false;
				tis1()
			})
			$(document).on('click', '.button_c', function (){
				if((document.getElementById("button_c").value == pd && clkBool_C)) {
				    xa1.play();
				    num1++;
				    if(num1 == 15){
				    	$("#img").fadeIn();
				    	$("#img").delay(1000).fadeOut(1500);
				    }
					dui++;
					document.getElementById("_att_1").innerHTML = dui;
					document.getElementById("_attthree_1").innerHTML = dui;
				} else if((document.getElementById("button_c").value != pd && clkBool_C)){
				    ya1.play();
					cuo++;
					document.getElementById("_att_2").innerHTML = cuo;
					document.getElementById("_attthree_2").innerHTML = cuo;
				}
				var records = {};
				records.question = x;
				records.rightanswer = pd;
				records.useranswer = document.getElementById("button_c").value;
				records.responsetime = time;
				records.userid = document.getElementById("username").value;
				records.type = "混合运算";
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
				pz++;
				document.getElementById("nowtinum1").innerHTML = pz;
				//$("k").innerHTML = k;
				clkBool_A = false;
				clkBool_B = false;
				clkBool_C = false;
				clkBool_D = false;
				tis1()
			})
			$(document).on('click', '.button_d', function (){
				if((document.getElementById("button_d").value == pd && clkBool_D)) {
				    xa1.play();
				    num1++;
				    if(num1 == 15){
				    	$("#img").fadeIn();
				    	$("#img").delay(1000).fadeOut(1500);
				    }
					dui++;
					document.getElementById("_att_1").innerHTML = dui;
					document.getElementById("_attthree_1").innerHTML = dui;
				} else if((document.getElementById("button_d").value != pd && clkBool_D)){;
				    ya1.play();
					cuo++;
					document.getElementById("_att_2").innerHTML = cuo;
					document.getElementById("_attthree_2").innerHTML = cuo;
				}
				var records = {};
				records.question = x;
				records.rightanswer = pd;
				records.useranswer = document.getElementById("button_d").value;
				records.responsetime = time;
				records.userid = document.getElementById("username").value;
				records.type = "混合运算";
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
				pz++;
				document.getElementById("nowtinum1").innerHTML = pz;
				//$("k").innerHTML = k;
				clkBool_A = false;
				clkBool_B = false;
				clkBool_C = false;
				clkBool_D = false;
				tis1()
			})
			
			$(document).on('click', "#a1", function (){
				$("#question").empty();
				pz = 0;
				dui = 0;
				cuo = 0;
				num1 = 0;
			})
			$(document).on('click', '.modal-backdrop', function (){
				$("#question").empty();
				pz = 0;
				dui = 0;
				cuo = 0;
				num1 = 0;
			})