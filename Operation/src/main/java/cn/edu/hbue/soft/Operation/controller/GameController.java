package cn.edu.hbue.soft.Operation.controller;

import java.awt.image.BufferedImage;
import java.io.OutputStream;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.imageio.ImageIO;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.servlet.ModelAndView;

import cn.edu.hbue.soft.Operation.bean.Rank;
import cn.edu.hbue.soft.Operation.bean.Record;
import cn.edu.hbue.soft.Operation.bean.User;
import cn.edu.hbue.soft.Operation.dao.RankDao;
import cn.edu.hbue.soft.Operation.dao.RecordDao;
import cn.edu.hbue.soft.Operation.dao.UserDao;

@Controller
@RequestMapping("/user")
public class GameController {
	public static String[][] recordarray = new String[20][7];
	public static int i = -1;
	public static int k = 0;
	public static String type_ = null;

	@RequestMapping("/tologin")
	public String tologin() {
		return "user/login";
	}

	@RequestMapping("/toregister")
	public String toregister() {
		return "user/register";
	}

	// 生成验证码图片
	@ResponseBody
	@RequestMapping(value = "/checkCaptchaCode.do", method = RequestMethod.GET)
	public void validateCode(HttpServletRequest request, HttpServletResponse response) throws Exception {
		// 第一个参数是生成的验证码，第二个参数是生成的图片
		Object[] objs = ImageUtil.createImage();
		// 将验证码存入Session
		request.getSession(true).setAttribute("validateCode", objs[0]);
		// 将图片输出给浏览器
		BufferedImage image = (BufferedImage) objs[1];
		// 禁止图像缓存。
		response.setHeader("Pragma", "no-cache");
		response.setHeader("Cache-Control", "no-cache");
		response.setDateHeader("Expires", 0);
		response.setContentType("image/jpeg");
		OutputStream os = response.getOutputStream();
		ImageIO.write(image, "jpeg", os);
		os.flush();
	}

	// 处理登录
	@RequestMapping("/togame")
	public ModelAndView togame(@RequestParam("username") String username, @RequestParam("password") String password,
			HttpServletRequest request, HttpServletResponse response) {
		String hint = null;
		int k = 0;
		int j = 0;
		boolean i = false;
		ModelAndView mv = new ModelAndView();
		// Date lastLoginDatenew = new java.sql.Date(new
		// java.util.Date().getTime());
		// Session中存好的验证码数值
		String validateCode = (String) request.getSession().getAttribute("validateCode");
		// System.out.println("session："+validateCode);
		// 前端用户输入的验证码值
		String captcha = request.getParameter("captcha");
		// System.out.println("前端："+captcha);
		List<User> list = new UserDao().queryallUser();
		for (User user : list) {
			if (user.getUsername().equals(username) && user.getPassword().equals(password)) {
				i = true;
			} else if (!(user.getUsername().equals(username))) {
				k = k + 1;
			} else if (!(user.getPassword().equals(password))) {
				j = j + 1;
			}
		}
		if (i) {
			if (validateCode.equals(captcha)) {
				mv.addObject("username", username);
				mv.setViewName("game/main");
			} else if (captcha.equals("")) {
				hint = "验证码不能为空！请重新输入！";
				request.getSession().removeAttribute("validateCode");
				mv.addObject("hint", hint);
				mv.setViewName("user/register");
			} else {
				hint = "验证码错误！";
				mv.addObject("hint", hint);
				mv.setViewName("user/register");
			}
		} else if (k == list.size()) {
			hint = "该用户名不存在，请先完成注册！";
			mv.addObject("hint", hint);
			mv.setViewName("user/register");
		} else if (j == 1) {
			hint = "密码错误！";
			mv.addObject("hint", hint);
			mv.setViewName("user/register");
		} else {
			mv.setViewName("user/failure");
		}
		return mv;
	}

	// 处理注册
	@RequestMapping("/register")
	public ModelAndView register(@RequestParam("username") String username, @RequestParam("password") String password,
			@RequestParam("passwordonce") String passwordonce) {
		String hint = null;
		boolean k = false;
		boolean j = false;
		int i = 0;
		ModelAndView model = new ModelAndView();
		List<User> list = new UserDao().queryallUser();
		for (User user : list) {
			if (password.equals(passwordonce) && !(user.getUsername().equals(username))) {
				i = i + 1;
			} else if (user.getUsername().equals(username)) {
				k = true;
			} else if (!(password.equals(passwordonce))) {
				j = true;
			}
		}
		// System.out.println("i" + i);
		// System.out.println("size"+list.size());
		if (i == list.size()) {
			// 取当前时间并转换成数据库类型
			System.out.println("ok");
			// Date lastLoginDate = new java.sql.Date(new
			// java.util.Date().getTime());
			User user = new User(username, password);
			UserDao userDao = new UserDao();
			int result = userDao.saveUser(user);
			if (result != 0) {
				hint = "注册成功，请登录";
				// System.out.println("ah");
				model.addObject("hint", hint);
				model.setViewName("user/register");
			} else {
				model.setViewName("user/failure");
			}
		} else if (k) {
			hint = "该用户名已存在！";
			// System.out.println("oj");
			model.addObject("hint", hint);
			model.setViewName("user/register");
		} else if (j) {
			hint = "两次密码输入不同！";
			// System.out.println("oo");
			model.addObject("hint", hint);
			model.setViewName("user/register");
		} else {
			model.setViewName("user/failure");
		}
		return model;
	}

	@RequestMapping("/practice")
	public ModelAndView practice(String username) {
		ModelAndView model = new ModelAndView();
		model.addObject("username", username);
		model.setViewName("game/practice");
		return model;
	}

	@RequestMapping("/challenge")
	public ModelAndView challenge(String username) {
		ModelAndView model = new ModelAndView();
		model.addObject("username", username);
		model.setViewName("game/challenge");
		return model;
	}

	@RequestMapping("/torecord")
	@ResponseBody // 此注解不能省略 否则ajax无法接受返回值
	public void torecord(@RequestParam("question") String question, @RequestParam("rightanswer") String rightanswer,
			@RequestParam("useranswer") String useranswer, @RequestParam("responsetime") String responsetime,
			@RequestParam("userid") String userid, @RequestParam("type") String type) {
		int x, z = 0;
		int result = 0;
		System.out.println("question" + question);
		System.out.println("rightanswer" + rightanswer);
		System.out.println("useranswer" + useranswer);
		System.out.println("time" + responsetime);
		System.out.println("type" + type);
		if (i == -1) {
			type_ = type;
		}
		System.out.println("type_" + type_);
		if (!(type_.equals(type))) {
			i = -1;
			k = 0;
			z = 0;
			type_ = type;
		}
		String torf = "错误";
		if (Integer.parseInt(rightanswer) == Integer.parseInt(useranswer)) {
			torf = "正确";
		}
		i++;
		k++;
		for (int j = 0; j < 7; j++) {
			if (j == 0) {
				recordarray[i][j] = question;
			} else if (j == 1) {
				recordarray[i][j] = rightanswer;
			} else if (j == 2) {
				recordarray[i][j] = useranswer;
			} else if (j == 3) {
				recordarray[i][j] = torf;
			} else if (j == 4) {
				recordarray[i][j] = responsetime;
			} else if (j == 5) {
				recordarray[i][j] = userid;
			} else if (j == 6) {
				recordarray[i][j] = type;
			}
			System.out.println("recordarray[i][j]" + recordarray[i][j]);
		}
		System.out.println("k" + k);
		if (k == 20) {
			for (x = 0; x < 20; x++) {
				Record record = new Record(recordarray[x][0], recordarray[x][1], recordarray[x][2], recordarray[x][3],
						recordarray[x][4], recordarray[x][5], recordarray[x][6]);
				RecordDao userDao = new RecordDao();
				result = userDao.saveRecord(record);
				if (result != 0) {
					z++;// 判断一共插入多少次数据
				}
				System.out.println("z" + z);
			}
			if (z == 20) {
				i = -1;
				k = 0;
				type_ = null;
				z = 0;
				result = 0;
			}
		}
		System.out.println("TorF" + torf);
		System.out.println("userid" + userid);
	}

	// 调出答题记录
	@RequestMapping("/record")
	public ModelAndView record(@RequestParam("username") String username) {
		ModelAndView model = new ModelAndView();
		List<Record> recordlist = new RecordDao().queryrecord(username);
		// Map<String, Object> redord_Map = new HashMap<String, Object>();
		// List<Record> jsonDocumentList = JSONArray.fromObject(recordlist);
		model.addObject("username", username);
		model.addObject("recordlist", recordlist);
		int i = recordlist.size();
		model.addObject("recordlength", i / 20);
		System.out.println(i / 20);
		model.setViewName("game/record");
		return model;
	}

	// 得到用户各关卡最高分
	@RequestMapping("/getUser")
	@ResponseBody // 此注解不能省略 否则ajax无法接受返回值
	public User getUser(String username) {
		User user = new User();
		user = UserDao.getUser(username);
		return user;
	}

	// 得到用户各关卡最高分
	@RequestMapping("/saveScores")
	@ResponseBody // 此注解不能省略 否则ajax无法接受返回值
	public String saveScores(String username, int easy, int diff, int hard) {
		UserDao.saveScores(username, easy, diff, hard);
		return "成功";
	}

	// 得到排行榜
	@RequestMapping("/getRank")
	@ResponseBody // 此注解不能省略 否则ajax无法接受返回值
	public Map<String, Object> getRank() {
		Map<String, Object> jsonMap = new HashMap<String, Object>();
		RankDao rd = new RankDao();
		List<Rank> list_easy = rd.queryRank_easy();
		List<Rank> list_diff = rd.queryRank_diff();
		List<Rank> list_hard = rd.queryRank_hard();
		// List list = new ArrayList();
		jsonMap.put("easyRank", list_easy);
		jsonMap.put("diffRank", list_diff);
		jsonMap.put("hardRank", list_hard);
		return jsonMap;
	}

	// 冲榜easy难度
	@RequestMapping("/toRank_easy")
	@ResponseBody // 此注解不能省略 否则ajax无法接受返回值
	public String toRank_easy(String username, int easy) {
		RankDao rd = new RankDao();
		List<Rank> list_easy = rd.queryRank_easy();
		int i = 1;
		boolean biaoji = true;
		for (Rank r : list_easy) {
			if (r.getSroces() >= easy && biaoji) {
				i++;
			} else {
				biaoji = false;
			}
		}
		if (i < 10) {
			Rank rank = new Rank(i, username, easy, "easy");
			List<Rank> list_easy_new = new ArrayList();
			list_easy_new.add(rank);
			for (int k = i - 1; k < list_easy.size() - 1; k++) {
				Rank ranknew = list_easy.get(k);
				ranknew.setRankId(ranknew.getRankId() + 1);
				list_easy_new.add(ranknew);
			}

			for (Rank r : list_easy_new) {
				rd.updateScores(r);
				// System.out.println(r.getRankId());
			}
		}

		return "成功";
	}

	// 冲榜diff难度
	@RequestMapping("/toRank_diff")
	@ResponseBody // 此注解不能省略 否则ajax无法接受返回值
	public String toRank_diff(String username, int diff) {
		RankDao rd = new RankDao();
		List<Rank> list_diff = rd.queryRank_diff();
		int i = 1;
		boolean biaoji = true;
		for (Rank r : list_diff) {
			if (r.getSroces() >= diff && biaoji) {
				i++;
			} else {
				biaoji = false;
			}
		}
		if (i < 10) {
			Rank rank = new Rank(i + 9, username, diff, "diff");
			List<Rank> list_diff_new = new ArrayList();
			list_diff_new.add(rank);
			for (int k = i - 1; k < list_diff.size() - 1; k++) {
				Rank ranknew = list_diff.get(k);
				ranknew.setRankId(ranknew.getRankId() + 1);
				list_diff_new.add(ranknew);
			}

			for (Rank r : list_diff_new) {
				rd.updateScores(r);
				// System.out.println(r.getRankId());
			}
		}

		return "成功";
	}

	// 冲榜hard难度
	@RequestMapping("/toRank_hard")
	@ResponseBody // 此注解不能省略 否则ajax无法接受返回值
	public String toRank_hard(String username, int hard) {
		RankDao rd = new RankDao();
		List<Rank> list_hard = rd.queryRank_hard();
		int i = 1;
		boolean biaoji = true;
		for (Rank r : list_hard) {
			if (r.getSroces() >= hard && biaoji) {
				i++;
			} else {
				biaoji = false;
			}
		}
		if (i < 10) {
			Rank rank = new Rank(i + 18, username, hard, "hard");
			List<Rank> list_easy_new = new ArrayList();
			list_easy_new.add(rank);
			for (int k = i - 1; k < list_hard.size() - 1; k++) {
				Rank ranknew = list_hard.get(k);
				ranknew.setRankId(ranknew.getRankId() + 1);
				list_easy_new.add(ranknew);
			}

			for (Rank r : list_easy_new) {
				rd.updateScores(r);
				// System.out.println(r.getRankId());
			}
		}

		return "成功";
	}

}
