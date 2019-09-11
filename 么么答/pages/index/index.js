Page({
  data:{
    text:"this is page data.",
    array:[{text:'init data'}],
    object:{
      text:'init data'
    },
    newField:{
      text:"aaa"
    },
    showModal: false  
  },
  clickMe:function() {
    console.log('view tap')
  },

  changeText:function(){
    //this.data.text='changed data'//bad,it can not work
    this.setData({
      'text':'changed data'
    })
  },
  changeItemInArray:function(){
    //
    this.setData({
     'array[0].text':'changed data'
    })
  },
  changeItemInObject:function(){
    this.setData({
      'object.text':'change data'
    })
  },
  addNewField:function(){
    this.setData({
      'newField.text':'new data'
    })
  },
  onShareAppMessage: function (ops) {
    if (ops.from === 'button') {
      // 来自页面内转发按钮
      console.log(ops.target)
    }
    return {
      title: '么么答小程序',
      desc: '我正在答题挑战，一起加入吧！',
      path: 'pages/tiaozhan/tiaozhan',
      success: function (res) {
        // 转发成功
        console.log("转发成功:" + JSON.stringify(res));
      },
      fail: function (res) {
        // 转发失败
        console.log("转发失败:" + JSON.stringify(res));
      }
    }

  },
  onProductsItemTap1:function(){
    wx.navigateTo({
      url: '/pages/ziyoudati/ziyoudati',
    })
  },

  onProductsItemTap3: function () {
    wx.navigateTo({
      url: '/pages/paiweisai/paiweisai',
    })
  },

  onProductsBottomItemTap1: function () {
    wx.navigateTo({
      url: '/pages/index/index',
    })
  },

  onProductsBottomItemTap2: function () {
    wx.navigateTo({
      url: '/pages/information/information',
    })
  },

  onProductsBottomItemTap3: function () {
    wx.navigateTo({
      url: '/pages/rank/rank',
    })
  },
  onRegular:function(){
    wx.navigateTo({
      url: '/pages/guize/guize',
    })
  }, submit: function () {
    this.setData({
      showModal: true
    })
  },

  preventTouchMove: function () {

  },


  go: function () {
    this.setData({
      showModal: false
    })
  },
 

})