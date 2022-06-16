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
      fileList1: [{ //图片存放的数组
         url: "https://oss2.1dq.com/static/h5/rz/yyzz.jpg",
         name: '营业执照',
         deletable: false,
      }],
      morenImg1: "https://oss2.1dq.com/static/h5/rz/yyzz.jpg",
      name1:"营业执照",

      fileList2: [{ //图片存放的数组
         url: "https://oss2.1dq.com/static/h5/rz/idcard1_1.png",
         name: '经办人身份证照片（正面）',
         deletable: false,
      }],
      morenImg2: "https://oss2.1dq.com/static/h5/rz/idcard1_1.png",
      name2:"经办人身份证照片（正面）",

      fileList3: [{ //图片存放的数组
         url: "https://oss2.1dq.com/static/h5/rz/idcard2_1.png",
         name: '经办人身份证照片（背面）',
         deletable: false,
      }],
      morenImg3: "https://oss2.1dq.com/static/h5/rz/idcard2_1.png",
      name3:"经办人身份证照片（背面）",

      fileList4: [{ //图片存放的数组
         url: "https://oss2.1dq.com/static/h5/rz/rzsqs.jpg",
         name: '企业授权书',
         deletable: false,
      }],
      morenImg4: "https://oss2.1dq.com/static/h5/rz/rzsqs.jpg",
      name4:"企业授权书",
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

   // 提交审核
   submitBtn(){
      // console.log(this.data)
      if(!this.data.name||!this.data.code||!this.data.username||!this.data.userID){
         Toast('信息填写有误');
         this.setData({userID:null})
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
            let arr = result.data.rengong
            arr.push(obj)
            wx.hideLoading(); //停止loading
         }
      });
   },

   /**
    * 生命周期函数--监听页面加载
    */
   onLoad(options) {
      this.setData({
        name:options.name
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