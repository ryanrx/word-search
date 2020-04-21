// pages/me/me.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    diabled: true,
    btnstate: 'default',
    account: '',
    password: '',
    pwd: false
  },

  //账号失去焦点事件
  accountInput: function(e){
    var content = e.detail.value; //获取帐号input的值
    console.log("账号： " + content);
    if(content != ''){
      this.setData({
        disabled: false,
        btnstate: 'primary',
        account: content
      });
    }else{
      this.setData({
        disabled: true,
        btnstate: 'default'
      });
    }
  },

  //密码失去焦点事件
  pwdBlur: function(e){
    var pswd = e.detail.value;
    if(pswd != ''){
      this.setData({password: pswd});
    }
  },

  //改变密码input的password属性
  changePwd: function(){
    this.setData({
      pwd: !this.data.pwd
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

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

  }
})