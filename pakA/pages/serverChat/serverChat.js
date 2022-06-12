// pakA/pages/serverChat/serverChat.js
var inputVal = '';
var chatList = [];
var windowWidth = wx.getSystemInfoSync().windowWidth;
var windowHeight = wx.getSystemInfoSync().windowHeight;
var keyHeight = 0;
Page({

  /**
   * 页面的初始数据
   */
  data: {
    inputValue:"",
    chatList:[
      {
        name:"kefu",
        text:"11"
      },
      {
        name:"my",
        text:"22"
      },
      {
        name:"kefu",
        text:"11"
      },
      {
        name:"my",
        text:"hahahhhahahha"
      },
      {
        name:"kefu",
        text:"11"
      },
      {
        name:"my",
        text:"22"
      },
      {
        name:"my",
        tempFilePath:"http://tmp/KYXSsHO9XIRSa04ab3428607b509d767ba87e23c8252.png",
        fileType: "image"
      }
    ]
  },
//双向绑定数据
modelValue(e){
  //console.log(e)
  const {value} = e.detail;
  console.log(value)
  this.setData({
    inputValue : value
  })
},
//点击发送信息
sendMess(){
  const value = this.data.inputValue;
  console.log(value)
  const chatList = [...this.data.chatList,{name:"my",text:value}]
  this.setData({
    chatList
  },()=>{
    this.setData({
      inputValue:""
    })
  })
},
//点击发送图片按钮      
checkImg(e){
  console.log(1)
  let that = this;
  wx.chooseMedia({
    count:9,
    success(res) {
      console.log(res.tempFiles)
      res.tempFiles.forEach((item,index)=>{
          item.name = 'my'
      })
      let chatList = [...that.data.chatList,...res.tempFiles]
      that.setData({
        chatList
      })
    }
  })
},
//获取焦点时（软键盘显示）
  focus: function(e) {
    keyHeight = e.detail.height;
    this.setData({
      scrollHeight: (windowHeight - keyHeight) + 'px'
    });
    this.setData({
      toView: 'msg-' + (chatList.length - 1),
      inputBottom: keyHeight + 'px'
    })
  },
  //失去聚焦(软键盘消失)
  blur: function(e) {
    this.setData({
      scrollHeight: '100vh',
      inputBottom: 0
    })
    this.setData({
      toView: 'msg-' + (chatList.length - 1)
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  }
})