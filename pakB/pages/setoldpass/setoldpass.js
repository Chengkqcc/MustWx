// pakB/pages/setoldpass/setoldpass.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
      oldpass:'',
      newpass:'',
      agin_newpass:'',
      oldpass_eyes_flag:false,
      newpass_eyes_flag:false,
      agin_newpass_eyes_flag:false,
    },
    // methods
    pass_fn(event){
      console.log(event);
      let mark = event.mark.pass
      let detail = event.detail
      console.log(mark,detail);
      this.setData({[mark]:detail})
    },
    eyes_fn(event){
      // console.log(event);
      let mark = event.mark.pass
      let oldpass_eyes_flag = this.data.oldpass_eyes_flag
      let newpass_eyes_flag = this.data.newpass_eyes_flag
      let agin_newpass_eyes_flag = this.data.agin_newpass_eyes_flag
      console.log(mark);
      if(mark == 'oldpass'){
        this.setData({oldpass_eyes_flag:!oldpass_eyes_flag})
      }else if(mark == 'newpass'){
        this.setData({newpass_eyes_flag:!newpass_eyes_flag})
      }else{
        this.setData({agin_newpass_eyes_flag:!agin_newpass_eyes_flag})
      }
    },
    setPass_fn(){
      console.log('确定更改密码，需要保存');
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