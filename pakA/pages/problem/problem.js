// pakA/pages/problem/problem.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    fileList: [
    ],
    feedbackValue:""
  },
  fn(e){
    console.log(e)
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
    let {url} = e.detail.file
    let obj = {url}
    let imgArr = [...this.data.fileList,obj]
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