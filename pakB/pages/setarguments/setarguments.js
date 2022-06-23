// pakB/pages/setarguments/setarguments.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
      issure:false,//是否 认证
      tip_show:false,//弹窗
      name:'',//印章名称
      type:'个人印章',//印章类型
      img:'',//编辑的图片
      color:'#E1E4EB',//选中的颜色 #FF0000 #0000FF #000000
      radio:'1',//选中
      color_arr:['#E1E4EB','#FF0000','#0000FF','#000000']
    },
    // methods
    onChange(event){
      console.log(event.detail);
      let color_arr = this.data.color_arr;
      this.setData({radio:event.detail,color:color_arr[event.detail-1]})
    },
    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
      console.log(options.img);
      let date = new Date()
      console.log(date,date.getFullYear(),date.getMonth(),date.getDate()); 
      let name = `自定义印章${date.getFullYear()}年${date.getMonth()+1}月${date.getDate()}日`
      this.setData({img:options.img,name})      
    },
    storage_fn(){
      console.log('保存,并审核');     
      this.setData({tip_show:true}) 
    },
     // 关闭 弹窗
    close_tip(){
      this.setData({tip_show:false})
    },
    // logout
    logout_close_tip(){
      alert('把reLaunch改为switchTab')
      wx.reLaunch({
        url: '/pakB/pages/mine/mine',
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