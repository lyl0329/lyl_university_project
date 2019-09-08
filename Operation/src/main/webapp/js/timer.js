var time = 120 * 1000; //计算出毫秒数
			var se;
			//调用setInterval控制

			se = setInterval('t_time()', 1000);

			function t_time() {
				//倒计时
				var mm = parseInt(time / 60 / 1000 % 60, 10); //剩余的分钟数
				var ss = parseInt(time / 1000 % 60, 10); //剩余的秒数
				mm = checkTime(mm);
				ss = checkTime(ss);
				$("#timer").html(mm + '分' + ss + '秒');
				time = time - 1000;
				if(mm == 0 && ss == 0) {
					$("#myEnd").modal("toggle");
					clearInterval(se);
				}
			}

			function checkTime(i) {
				if(i < 10) {
					i = "0" + i;
				}
				return i;
			}

			//显示当前时间
			setInterval(function() {
				var now = (new Date()).toLocaleString();
				$('#current-time').text(now);
			}, 1000);