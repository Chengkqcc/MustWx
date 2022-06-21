// pakA/pages/moreTutorials/moreTutorials.js
import myrequest from  '../../../utils/myrequest'
Page({

  /**
   * 页面的初始数据
   */
  data: {
    lists:[]
  },

  async getMoreData(id){
    wx.showLoading({
      title: '加载中',
    })
    const {data} = await myrequest({
      url:'/help',
      complete(){
        wx.hideLoading()
      }
    })
    const lists = data.data
    console.log(lists)
    const obj = lists.filter(item=>item.id == id)[0].data
    console.log(obj)
    this.setData({
      lists:[...this.data.lists,...obj]
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    console.log(options)
    this.getMoreData(options.id)
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
  onReachBottom(e) {
    
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  }
})