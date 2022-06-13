// pakB/pages/qianmingguanli/qianmingguanli.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
      tip_show:false,//提示 弹窗
      qm_show:false,// 签名弹窗
      show:false,// 切换 账户
      qm_data:[
        {id:0,title:'添加手写签名',page:''},
        {id:1,title:'拍摄签字图片',page:''},
        {id:2,title:'从相册选取签字图片',page:''},
        {id:3,title:'从模板添加印章',page:''},
      ]
    },
    // methods
    // tip 弹窗 动画
    onClose(){
      console.log('动画');
    },
    // 打开 tip
    open_tip(){
      this.setData({tip_show:true})
    },
    // 关闭 tip
    close_tip(){
      this.setData({
        tip_show:false
      })
    },
    // 打开 qm 弹窗
    add_qm(){
      this.setData({qm_show:true})
    },
    // 关闭  qm 
    close_qm(){
      this.setData({qm_show:false})
    },
    // 获取签名
    getQM_fn(event){
      let item = event.currentTarget.dataset.item
      console.log(item);
      wx.navigateTo({
        url: item.page,
      })
    },
    // 添加企业印章
    add_qyyz(){
      this.setData({show:true})
    },
    // 关闭 切换账户 弹窗
    close_qiehuan(){
      this.setData({show:false})
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