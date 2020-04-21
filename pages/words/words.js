// pages/words/words.js
var totalMicroSec = 0;
var start = 0;

function timer(that){
  if(start == 0){
    return;
  }
  setTimeout(function () {
    totalMicroSec += 10;
    var time = format(totalMicroSec);
    that.updateTime(time);
    timer(that);
  }, 10
  )
}

function format(microSec){
  var hSec = Math.floor(microSec / 10);
  var min = Math.floor(hSec / 6000);
  var sec = Math.floor((hSec - min * 6000) / 100);
  var rhs = Math.floor(hSec - min * 6000 - sec * 100);
  return fill(min) + ":" + fill(sec) + "." + fill(rhs);
}

function fill(num){
  return num < 10 ? "0" + num : num;
}

Page({

  /**
   * 页面的初始数据
   */
  data: {
    timer: "00:00.00"
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log("onload")
    timer(this)
  },

  start: function() {
    start = 1;
    timer(this)
  },

  stop: function() {
    start = 0;
    timer(this)
  },

  updateTime: function(time) {
    this.setData({
      timer: time
    })
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