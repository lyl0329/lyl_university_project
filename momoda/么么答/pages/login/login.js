Page({
  data: {
    loadingHidden: true,
    userInfo: {
      avatarUrl: "",
      nickName: "",
    },
  },
  loadingTap: function () {
    this.setData({
      loadingHidden: false
    });
    var that = this;
    setTimeout(function () {
      that.setData({
        loadingHidden: true
      });
      that.update();
    }, 3000);
    wx.navigateTo({
      url: '/pages/index/index',
    })
  },


  onLoad: function (options) {
    var that = this;
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





  },
  onReady: function () {
  }
})