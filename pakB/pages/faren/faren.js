import idcardReg from "../../../utils/idcardReg"
import Toast from '../../../miniprogram_npm/@vant/weapp/toast/toast';
Page({

   /**
    * 页面的初始数据
    */
   data: {
      name: "", //企业名称
      code: "", //信用代码
      username: "", //法人名称
      userID: "", //法人证件号
      allInfoState: false, // 全部信息状态
   },

   onName(event){
      if(!event.detail.value){
         Toast('企业名称输入不合法或为空');
         this.setData({
            allInfoState: false
         })
         return
      }
      this.setData({name:event.detail.value.trim(),allInfoState: true})
   },
   onCode(event){
      if(!event.detail.value){
         Toast('信用代码输入不合法或为空');
         this.setData({
            allInfoState: false
         })
         return
      }
      this.setData({code:event.detail.value.trim(),allInfoState: true})
   },
   onUsername(event){
      if(!event.detail.value){
         Toast('法人名称输入不合法或为空');
         this.setData({
            allInfoState: false
         })
         return
      }
      this.setData({username:event.detail.value.trim(),allInfoState: true})
   },
   onUserID(event){
      // 身份证正则验证
      let res = idcardReg(event.detail.value)
      if(!res){
         Toast('身份证输入不合法或为空');
         this.setData({userID:null,allInfoState: false})
         return
      }else{
         this.setData({userID:event.detail.value,allInfoState: true})
      }
   },

   // 下一步
   nextBtn(){
      if (!this.data.allInfoState) {
         Toast('信息填写有误');
         this.setData({
            userID: null
         })
         return
      };

      // loading加载
      wx.showLoading({
         title: '加载中...'
      });
      wx.request({
         url: 'https://mock.presstime.cn/mock/6231d826560ad300225857e7/example/auth',
         data: {},
         header: {'content-type':'application/json'},
         method: 'POST',
         dataType: 'json',
         responseType: 'text',
         success: (result)=>{
            console.log(result.data)
            let obj = {
               name:this.data.name,
               code:this.data.code,
               username:this.data.username,
               userID:this.data.userID
            }
            let arr = result.data.faren
            arr.push(obj)
            wx.hideLoading(); //停止loading
            // 将企业认证状态存入本地存储
            wx.setStorageSync('rzState',true);
            let rzState = wx.getStorageSync('rzState');
            wx.showToast({
               title: '企业认证成功',
               icon: 'success',
               duration: 2000,
               success:()=>{
                  wx.navigateTo({
                     url: '/pakB/pages/bm/bm?company='+this.data.name+'&rzState=' + rzState
                  });
               }
            })
         }
      });
   },

   /**
    * 生命周期函数--监听页面加载
    */
   onLoad(options) {
     console.log(options)
      this.setData({
        name:options.company
      })
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