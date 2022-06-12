// pakA/pages/problem/problem.js
import Toast from '../../../miniprogram_npm/@vant/weapp/toast/toast';
Page({

  /**
   * 页面的初始数据
   */
  data: {
    fileList: [
    ],
    feedbackValue:"",
    show: false,
    actions: [
      {
        name: '界面显示错乱',
      },
      {
        name: '启动缓慢，卡出翔了',
      },
      {
        name: 'UI无法直视',
      },
      {
        name:"偶发性崩溃"
      }
    ],
  },
  //快速键入
  ActionSheet(){
    this.setData({
      show:true
    })
  },
  //点击选中的项目
  selectedItem(e){
    console.log(e.detail)
    const {name} = e.detail;
    this.setData({
      feedbackValue:name
    })
    this.closeSheet()
  },
  //关闭快速键入的弹出框
  closeSheet(){
    this.setData({
      show:false
    })
  },

  //反馈内容双向绑定事件
  feedbackfn(e){
    console.log(e.detail)
    let {value} = e.detail;
    this.setData({
      feedbackValue:value
    })
  },


  addImg(e){
    let arr  = e.detail.file
    console.log(e.detail.file)
    let imgArr = [...this.data.fileList,...arr]
    this.setData({
      fileList:imgArr
    })
  },
 
  deleteImg(e){
    let {index} = e.detail
    console.log(index)
    let fileList = this.data.fileList.filter((item,num)=>num!==index)
    console.log(fileList)
    this.setData({
      fileList
    })
  },
  //底部点击确定按钮方法
  submitfn(){
    if(this.data.feedbackValue == ''){
      Toast('请填写反馈意见');
    }else{
      //发送收集到的信息给后端
      
    }
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