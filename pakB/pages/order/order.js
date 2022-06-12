// pakB/pages/order/order.js
import Dialog from '../../../miniprogram_npm/@vant/weapp/dialog/dialog';

Page({

    /**
     * 页面的初始数据
     */
    data: {
      obj:{},
      radio: '微信小程序支付',//支付方式
      rmb:0.000,//账户余额
      show: false,// 对公转账 弹窗
      po_show:false,//线下汇款处理说明
    },
    // methods
    // 支付方式
    onChange(e){
      console.log(e.detail.value);
      let radio = e.detail.value
      this.setData({radio})
    },
    // 支付
    pay_fn(){
      let radio = this.data.radio
      let rmb = this.data.rmb
      let price = this.data.obj.price*1
      console.log(radio,rmb,price);
      switch(radio){
        case '账户余额':
          // 判断余额 是否足够
          if(rmb>=price){
            // 支付
            console.log('可以支付');
          }else{
            wx.showToast({
              title: '您的余额不足',
              icon:'none',
              duration:2000
            })
          }
          break;
        case '微信小程序支付':
          // loading 提交中  弹出 二维码 点击关闭  ‘订单支付失败’ 弹窗
          wx.showLoading({
            title: '提交中',
            mask:true,
            success(){
              // 
              console.log(1);
              setTimeout(function () {
                wx.hideLoading()
              }, 2000)
            },
            fail(){},
            complete(){
              wx.showModal({
                title:'支付提示',
                content:'您的订单已经成功提交，请在新窗口中支付。',
                cancelColor: '#E54D42',
                cancelText:'已完成支付',
                confirmColor:'#8799A3',
                confirmText:'重新支付',
                success(res){
                  if(res.confirm==true){
                    console.log('重新支付');
                  }else{
                    console.log('已完成支付');
                  }
                },
                fail(){

                }
              })
            }
          })
          break;
        default:
          this.setData({show:true})
          break;
      }
    },
    // 对公转账 弹窗
    close_toB_dialog(){
      this.setData({show:false})
    },
    // 复制银行信息
    copy_fn(){
      // 复制银行信息
      wx.showToast({
        title: '复制成功',
        icon:'none',
        duration:2000
      })
    },
    //线下汇款处理说明
    popup_show(){
      this.setData({po_show:true})
    },
    onClose(){
      this.setData({po_show:false})
    },
    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
      let obj = JSON.parse(Object.keys(options)[0])
      console.log(obj);
      this.setData({obj})
      console.log(this.data.radio);
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