// pakB/pages/dianzihetong/dianzihetong.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
      show:false,//是否展示底部 切换框
      title:'个人套餐',
      hetong_data:[
        {
          id:0,
          title:'个人套餐',
          children:[
            {title:'个人体验套餐',wj_num:'10',time:'1 年',state:'',price:'48'},
            {title:'个人A套餐',wj_num:'20',time:'1 年',state:'',price:'78'},
            {title:'个人B套餐',wj_num:'50',time:'1 年',state:'热卖',price:'148'},
            {title:'个人C套餐',wj_num:'100',time:'1 年',state:'',price:'198'},
            {title:'个人D套餐',wj_num:'500',time:'2 年',state:'热卖',price:'898'},
            {title:'个人E套餐',wj_num:'2000',time:'5 年',state:'',price:'2998'}
          ]
        },
        {
          id:1,
          title:'企业套餐',
          children:[
            {title:'个人体验套餐',wj_num:'10',time:'1 年',state:'',price:'48'},
            {title:'个人A套餐',wj_num:'20',time:'1 年',state:'',price:'78'},
          ]
        }
      ]
    },
    // methods
    // tab 切换
    onClick(e){
      console.log(e);
      let title = e.detail.title
      this.setData({title})
    },
    // 跳转 订单order 页面
    check_fn(e){
      console.log(e);
      let item = e.currentTarget.dataset.item
      let title = this.data.title;
      console.log(title,item);
      // 判断title 是个人套餐还是企业套餐
      if(title == '个人套餐'){
        // 直接跳转到订单页面
        wx.navigateTo({
          url: '/pakB/pages/order/order?'+JSON.stringify(item),
        })
      }else{
        // 弹窗 选择企业账户
        this.setData({show:true})
        
      }
    },
    // 展示底部切换
    bottom_qiehuan(){
      this.setData({show:true})
    },
    // 关闭 底部切换
    close_qiehuan(){
      this.setData({ show: false });
    },
    onClose(){
      this.setData({ show: false });
    },
    // 切换用户
    qiehuan_fn(){
      console.log('切换用户');
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