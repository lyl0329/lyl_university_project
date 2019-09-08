var wronganswer_ = new Array(0, 0, 0, 0, 0, 0, 0, 0, 0, 0);

			function create_wrong_answer_(ans_) {
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
				}else if(Math.ceil(ans_/10) == ans_/10) {
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
					wronganswer_[6] = ans_ - 1;
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
				add = 0,
				pd = 29,
				p = 0,
				num_ = 0;
			var clkBool_A = false;
			var clkBool_B = false;
			var clkBool_C = false;
			var clkBool_D = false;

			var art_ = null;
//			var se;
			//调用setInterval控制
			function dati_() {
				var time_ = 120 * 1000; //计算出毫秒数
				dui = 0;
				cuo = 0;
				document.getElementById("att_1").innerHTML = "0"
				document.getElementById("att_2").innerHTML = "0"
					window.art_ = setInterval(function() {
//					var mm = parseInt(time_ / 60 / 1000 % 60, 10); //剩余的分钟数
//					var ss = parseInt(time_ / 1000 % 60, 10); //剩余的秒数
//					mm = checkTime(mm);
//					ss = checkTime(ss);
//					$("#timer").html(mm + '分' + ss + '秒');
//					time_ = time_ - 1000;
//					if(mm == 0 && ss == 0) {
//						document.getElementById("tip_").innerHTML = "时间到！";
//						document.getElementById("tinum_").innerHTML = p;
//						$("#myEnd").modal("toggle");
//						clearInterval(art_);
//					}
					if(p == 20){
						document.getElementById("tip_").innerHTML = "已完成此次练习全部题目！";
						document.getElementById("tinum_").innerHTML = p;
						$("#myEnd").modal("toggle");
						clearInterval(art_);
					}
				}, 1000)
				tis_()
			}
			function clear2(){
				clearInterval(art_);
				p = 0;
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
			
			function getTime_(){   
				var date = new Date(); //创建时间对象  
				var year = date.getFullYear(); //获取年   
				var month = date.getMonth()+1;//获取月
				var day = date.getDate(); //获取当日  
		        var hh = date.getHours();  //时
		        var mm = date.getMinutes(); //分
				time = year+"年"+month+"月"+day+"日"+hh+"时"+mm+"分"; //组合时间  
			}
			
			function tis_() {
				add = rand(0,1);//add=1时为除法，=0为乘法
				if(p >= 0 && p < 4) {
					if(add == 1){
						fu1 = rand(1, 5);
						fu2 = fu1 * rand(1, 5);
					}else if(add == 0){
						fu2 = rand(0, 5);
						fu1 = rand(1, 10);
					}
				} else if(p >= 4 && p < 15) {
					if(add == 1){
						fu1 = rand(5, 9);
						fu2 = fu1 * rand(5, 9);
					}else if(add == 0){
						fu2 = rand(6, 10);
						fu1 = rand(6, 10);
					}
				} else {
					if(add == 1){
						x = rand(0,1);
						if(x){
							fu1 = rand(1, 10);
							fu2 = 10 * fu1 * rand(1, 9);
						}else{
							fu1 = 10 * rand(1, 10);
							fu2 = fu1 * rand(1, 9);
						}
					}else if(add == 0){
						fu2 = rand(10, 20);
						fu1 = rand(1, 10);
					}
				}
				if(add == 0) {
					pd = fu2 * fu1;
				}
				if(add == 1) {
					pd = fu2 / fu1;
				}
				document.getElementById("ti_").innerHTML = fu2 + " " + ["×", "÷"][add] + " " + fu1 + " " + "=" + " " + "?";
				ans_ = pd;
				//alert(ans);
				create_wrong_answer_(ans_);
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
				document.getElementById("button_A").value = wb[0];
				document.getElementById("button_B").value = wb[1];
				document.getElementById("button_C").value = wb[2];
				document.getElementById("button_D").value = wb[3];
			}

			$(document).on('click', '.button_A', function (){
				clkBool_A = true;
			});

			$(document).on('click', '.button_B', function (){
				clkBool_B = true;
			});

			$(document).on('click', '.button_C', function (){
				clkBool_C = true;
			});

			$(document).on('click', '.button_D', function (){
				clkBool_D = true;
			});
			
			var x_a = document.getElementById("success");
			var y_a = document.getElementById("wrong");
			$(document).on('click', '.button_A', function (){
				if((document.getElementById("button_A").value == pd && clkBool_A)) {
				    x_a.play();
				    num_++;
				    if(num_ == 15){
				    	$("#img").fadeIn();
				    	$("#img").delay(1000).fadeOut(1500);
				    }
					dui++;
					document.getElementById("att_1").innerHTML = dui;
					document.getElementById("atttwo_1").innerHTML = dui;
				} else {
				    y_a.play();
					cuo++;
					document.getElementById("att_2").innerHTML = cuo;
					document.getElementById("atttwo_2").innerHTML = cuo;
				}
				var records = {};
				records.question = document.getElementById("ti_").innerHTML;
				records.rightanswer = pd;
				records.useranswer = document.getElementById("button_A").value;
				records.responsetime = time;
				records.userid = document.getElementById("username").value;
				records.type = "乘除法运算";
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
				
				p++;
				document.getElementById("nowtinum_").innerHTML = p;
				//$("k").innerHTML = k;
				clkBool_A = false;
				clkBool_B = false;
				clkBool_C = false;
				clkBool_D = false;
				tis_()
			})
			$(document).on('click', '.button_B', function (){
				if((document.getElementById("button_B").value == pd && clkBool_B)) {
				    x_a.play();
				    num_++;
				    if(num_ == 15){
				    	$("#img").fadeIn();
				    	$("#img").delay(1000).fadeOut(1500);
				    }
					dui++;
					document.getElementById("att_1").innerHTML = dui
					document.getElementById("atttwo_1").innerHTML = dui;
				} else {
				    y_a.play();
					cuo++;
					document.getElementById("att_2").innerHTML = cuo;
					document.getElementById("atttwo_2").innerHTML = cuo;
				}
				var records = {};
				records.question = document.getElementById("ti_").innerHTML;
				records.rightanswer = pd;
				records.useranswer = document.getElementById("button_B").value;
				records.responsetime = time;
				records.userid = document.getElementById("username").value;
				records.type = "乘除法运算";
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
				p++;
				document.getElementById("nowtinum_").innerHTML = p;
				//$("k").innerHTML = k;
				clkBool_A = false;
				clkBool_B = false;
				clkBool_C = false;
				clkBool_D = false;
				tis_()
			})
			$(document).on('click', '.button_C', function (){
				if((document.getElementById("button_C").value == pd && clkBool_C)) {
				    x_a.play();
				    num_++;
				    if(num_ == 15){
				    	$("#img").fadeIn();
				    	$("#img").delay(1000).fadeOut(1500);
				    }
					dui++;
					document.getElementById("att_1").innerHTML = dui;
					document.getElementById("atttwo_1").innerHTML = dui;
				} else {
				    y_a.play();
					cuo++;
					document.getElementById("att_2").innerHTML = cuo;
					document.getElementById("atttwo_2").innerHTML = cuo;
				}
				var records = {};
				records.question = document.getElementById("ti_").innerHTML;
				records.rightanswer = pd;
				records.useranswer = document.getElementById("button_C").value;
				records.responsetime = time;
				records.userid = document.getElementById("username").value;
				records.type = "乘除法运算";
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
				p++;
				document.getElementById("nowtinum_").innerHTML = p;
				//$("k").innerHTML = k;
				clkBool_A = false;
				clkBool_B = false;
				clkBool_C = false;
				clkBool_D = false;
				tis_()
			})
			$(document).on('click', '.button_D', function (){
				if((document.getElementById("button_D").value == pd && clkBool_D)) {
				    x_a.play();
				    num_++;
				    if(num_ == 15){
				    	$("#img").fadeIn();
				    	$("#img").delay(1000).fadeOut(1500);
				    }
					dui++;
					document.getElementById("att_1").innerHTML = dui;
					document.getElementById("atttwo_1").innerHTML = dui;
				} else {
				    y_a.play();
					cuo++;
					document.getElementById("att_2").innerHTML = cuo;
					document.getElementById("atttwo_2").innerHTML = cuo;
				}
				var records = {};
				records.question = document.getElementById("ti_").innerHTML;
				records.rightanswer = pd;
				records.useranswer = document.getElementById("button_D").value;
				records.responsetime = time;
				records.userid = document.getElementById("username").value;
				records.type = "乘除法运算";
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
				p++;
				document.getElementById("nowtinum_").innerHTML = p;
				//$("k").innerHTML = k;
				clkBool_A = false;
				clkBool_B = false;
				clkBool_C = false;
				clkBool_D = false;
				tis_()
			})
			
			$(document).on('click', "#a_", function (){
				$("#question").empty();
				p = 0;
				dui = 0;
				cuo = 0;
				num_ = 0;
			})
			$(document).on('click', '.modal-backdrop', function (){
				$("#question").empty();
				p = 0;
				dui = 0;
				cuo = 0;
				num_ = 0;
			})