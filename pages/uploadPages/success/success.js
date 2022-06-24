// pages/uploadPages/success/success.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
      _index:null,
      arr:[
        {
          tit:"合同保存成功",
          btn1:"返回合同管理",
          btn2:"签署合同"
        },
        {
          tit:"图片合并成功",
          btn1:"预览文件",
          btn2:"创建合同"
        }
      ]
    },
    //按钮2跳转页面
    gotodetail(){
      let _index = this.data._index
      if(_index == 0 ){
        wx.navigateTo({
          url: '/pages/operateContract/operateContract',
        })
      }else{
        return
      }
    },


    //按钮1跳转页面
    gotopreview(){
      let _index = this.data._index
      if(_index == 0){
        //判断传递过来的index 如果是0则代表会到tabbar
        wx.switchTab({
          url: '/pages/uploading/uploading',
        })
        //如果为1 则代表跳转到pdf文件预览页面
      }else{
        wx.navigateTo({
          url: '/pages/uploadPages/filespreview/filespreview',
        })
      }
        
    },
    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
      this.setData({
        _index:options._index
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