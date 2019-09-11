// pages/game/game.js
var app = getApp();
function two_char(n) {
  return n >= 10 ? n : "0" + n;
}
Page({

  /**
   * 页面的初始数据
   */
  data: {
    questions: ['运筹学的基本特点不包括（ ）。', '建立运筹学模型的基本步骤不包括（ ）。', '截集中一切弧的容量之和称为（ ）。', '网络图中，LS用来表示（ ）。', '对策的分类中，按（ ）来分，可以分为零和对策与非零和对策。', '线性规划问题中决策变量应为（ ）。', '线性规划问题的数学模型由目标函数、约束条件和（ ）三个部分组成。', '典型的无概率决策准则，不包括（ ）。', '以下说法中不正确的为（ ）。', '（ ）就是研究对策行为中斗争各方是否存在着最合理的行动方案，以及如何找到这个合理的行动方案的数学理论和方法。', '当某个非基变量检验数为零，则该问题有（ ）。', '假设对于一个动态规划问题，应用顺推法以及逆推解法得出的最优解分别为P和D，则有（ ）。', '下列有关线性规划问题的标准形式的叙述中错误的是（ ）。', '人类进入21世纪，英国广播公司（BBC）在全球范围内进行“千年思想家”网评，名列 榜首的是（    ）', '马克思主义产生于（   ）', '马克思主义公开问世的标志性著作是（ ）', '马克思主义的创始人是（   ）', '马克思主义哲学区别于一切旧哲学的最主要最显著的特征是（  ）', '在平面直角坐标系中，已知点A（0，a），抛物线y＝－a(x－a)2＋b与x轴交于B、C两点（|OB |＜|OC |），顶点为D，且AD//BC，tan∠ABO＝3/2，则满足条件的抛物线有（    ）．', '随着大数据产业的发展，贵阳市逐步进入了全城免费WiFi（无线局域网）时代，市民可在城区内用智能手机与互联网免费连接。手机接收的网络信息是通过( )', '熬制糖水的时间越长，糖水的味道越甜。这是由于熬制过程中，糖水内的水经过下列哪种物态变化所致( )', '在中考期间，为了给考生营造一个良好的考试环境，以下措施属于控制噪声源的是( )'],
    questionsA: ['A.考虑系统的整体优化', 'A.明确目标', 'A.最大流', 'A.一项活动的最晚开始时间', 'A.局中人的数目多少', 'A.连续变量', 'A.非负条件', 'A.乐观准则', 'A.完成各个作业需要的时间最长的路线为关键路线', 'A.博弈论', 'A.无解', 'A.P>D', 'A.目标函数求极大', 'A.马克思 ', 'A.18世纪90年代', 'A．《共产党宣言》', 'A.马克思和亚当·斯密', 'A.阶级性', 'A．1条', 'A．电磁波传递', 'A．凝固', 'A．将教室的窗户玻璃更换为隔音玻璃'],
    questionsB: ['B.多学科交叉与综合', 'B.描述问题', 'B.截量', 'B.一项活动的最晚完成时间', 'B.策略的数目是否有限', 'B.离散变量', 'B.顶点集合', 'B.折中准则', 'B.关键路线上的作业称为关键作业', 'B.运输问题', 'B.无穷多最优解', 'B.P<D', 'B.约束条件全为等式', 'B.爱因斯坦', 'B.19世纪40年代', 'B.《德意志意识形态》', 'B.马克思和戴维·李嘉图', 'B.革命性', 'B．2条', 'B．铜质导线传递', 'B．升华', 'B．停止校园周边工地的施工'],
    questionsC: ['C.模型方法的应用', 'C.运算求解', 'C.最小截量', 'C.一项活动的持续时间', 'C.局中人参与对策时相互之间的关系模型方法的应用', 'C.整数变量', 'C.最优解', 'C.等可能准则', 'C.所有关键作业的总时差为0 ', 'C.最大流问题', 'C.退化解', 'C.P=D', 'C.约束条件右端常数项全为正', 'C.达尔文', ' C.19世纪70年代', ' C.《资本论》', 'C.马克思和恩格斯', 'C.实践性', ' C．3条', 'C．声波传递', 'C．汽化', 'C．在教室内安装噪声监测仪'],
    questionsD: ['D.属于行为科学', 'D.设置假设条件', 'D.最大截量', 'D.一项活动的最早开始时间', 'D.支付函数的特点', 'D.随机变量', 'D.决策变量', 'D.最大后悔值准则', 'D.以上说法均不正确', 'D.最短路问题', 'D.惟一最优解', 'D.不确定', 'D.变量取值全为非负', ' D.牛顿', 'D.19世纪90年代', 'D.《神圣家族》', 'D.马克思和费尔巴哈', ' D.科学性', 'D．4条', 'D．高压线传递', 'D．熔化', 'D．在校园绿化带多植树'],
    answer: ['D', 'D', 'B', 'A', 'D', 'A', 'D', 'D', 'D', 'A', 'B', 'C', 'B', 'A', 'B', 'A', 'C', 'C', 'D', 'A', 'C', 'B'],
    questionbody: '',
    A: '',
    B: '',
    C: '',
    D: '',
    Ans: '',
    show: '',
    countj: true,
    bindcount: 0,
    errorcount: 0,
    rightcount: 0,
    count: 0,
    time: '',
    index: '',
    userInfo:{
      avatarUrl: "",
      nickName: "",
    },
    timer: '', //定时器名字
    countDownNum: '5' //倒计时初始值
  },

  /*设置计数器5分钟*/
  onLoad: function (options) {
    this.app = getApp();
    // var sec = options.sec;
    var that = this;
    // var si = setInterval(function () {
    //   if (sec > 0) {
    //     sec--;
    //     var date = new Date(0, 0)
    //     date.setSeconds(sec);
    //     var h = date.getHours(), m = date.getMinutes(), s = date.getSeconds();
    //     that.setData({
    //       time: two_char(h) + ":" + two_char(m) + ":" + two_char(s)
    //     })
    //   }
    //   else {
    //     var count = that.data.count;
    //     if (that.data.bindcount == 0) {
    //       wx.showModal({
    //         title: '提示：',
    //         showCancel: false,
    //         content: '您还未答题，请重新作答',
    //         success: function () {
    //           wx.switchTab({
    //             url: '../../pages/index/index',
    //           })
    //         }
    //       })
    //       clearInterval(si);
    //     }
    //     else {
    //       clearInterval(si);
    //       app.globalData.bindcount = that.data.bindcount;
    //       app.globalData.errorcount = that.data.errorcount;
    //       app.globalData.rightcount = that.data.rightcount;
    //       wx.redirectTo({
    //         url: '../../pages/game/end?count=' + count,
    //       })
    //     }
    //   }
    // }, 1000);

    
        wx.getUserInfo({
      success: function (res) {
        console.log(res);
        var avatarUrl = 'userInfo.avatarUrl';
        var nickName = 'userInfo.nickName';
        that.setData({
          [avatarUrl]: res.userInfo.avatarUrl,
          [nickName]: res.userInfo.nickName,
        })
      }
    });


    this.countDown();


  },

  start: function () {
    clearInterval(this.data.timer);
    this.data.countDownNum = 6;
    this.countDown();
  },

  countDown: function () {
    let that = this;
    let countDownNum = that.data.countDownNum; //获取倒计时初始值
    //如果将定时器设置在外面，那么用户就看不到countDownNum的数值动态变化，所以要把定时器存进data里面
    that.setData({
      timer: setInterval(function () { //这里把setInterval赋值给变量名为timer的变量
        //每隔一秒countDownNum就减一，实现同步
        countDownNum--;
        //然后把countDownNum存进data，好让用户知道时间在倒计着
        that.setData({
          countDownNum: countDownNum
        })
        //在倒计时还未到0时，这中间可以做其他的事情，按项目需求来
        if (countDownNum == 0) {
          //这里特别要注意，计时器是始终一直在走的，如果你的时间为0，那么就要关掉定时器！不然相当耗性能
          //因为timer是存在data里面的，所以在关掉时，也要在data里取出后再关闭
          clearInterval(that.data.timer);
          //关闭定时器之后，可作其他处理codes go here
          // that.refresh();
        }
        that.data.countDownNum = 6;
      }, 1000)
    });
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    this.refresh();
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
      
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },

  refresh: function () {
    var that = this;
    var questions = that.data.questions;
    var questionsA = that.data.questionsA;
    var questionsB = that.data.questionsB;
    var questionsC = that.data.questionsC;
    var questionsD = that.data.questionsD;
    var answer = that.data.answer;
    var index = Math.floor(Math.random() * (questions.length - 1));
    if (questions.length > 0) {
      this.setData({
        questionbody: questions.splice(index, 1),
        A: questionsA.splice(index, 1),
        B: questionsB.splice(index, 1),
        C: questionsC.splice(index, 1),
        D: questionsD.splice(index, 1),
        Ans: answer.splice(index, 1),
        questions: questions,
        questionsA: questionsA,
        questionsB: questionsB,
        questionsC: questionsC,
        questionsD: questionsD,
        answer: answer,
        index: index,
        show: '',
        countj: true,
      })

    }
    else {
      wx.showModal({
        title: '温馨提示',
        content: '没题了',
      })
    }
    // let animation = wx.createAnimation({
    //   duration: 1000,
    //   timingFunction: 'ease'
    // })

    // animation.translateX(10).step()
    // this.setData({
    //   animationLsi: animation.export()
    // }) 
  },

  
  disp: function (e) {
    var id = e.currentTarget.id;
    var num = e.currentTarget.dataset.num;
    var count = e.currentTarget.dataset.count;
    var bindcount = e.currentTarget.dataset.bindcount;
    var rightcount = e.currentTarget.dataset.rightcount;
    var errorcount = e.currentTarget.dataset.errorcount;
    if (this.data.countj) {
      if (id == num) {
        this.setData({
          show: '正确，恭喜您！',
          count: count + 5,
          countj: false,
          bindcount: bindcount + 1,
          rightcount: rightcount + 1,
        })
      }
      else {
        this.setData({
          show: '错误！' + '答案：' + num,
          count: count - 2,
          countj: false,
          bindcount: bindcount + 1,
          errorcount: errorcount + 1,
        })
      }
    }
  }
})
