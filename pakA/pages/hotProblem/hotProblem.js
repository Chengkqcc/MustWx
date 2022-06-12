// pakA/pages/hotProblem/hotProblem.js
import myrequest from '../../../utils/myrequest'
Page({

  /**
   * 页面的初始数据
   */
  data: {
    title:"",
    detailList:""
  },
  //title传值
  sendTitle(title){
    this.setData({
      title
    })
  },
  //获取详情数据
  async getDetailData(){
    const {data} = await myrequest({
      url:"/detail"
    })
    this.setData({
      detailList:data.data
    })
    console.log(data.data)
  },


  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {

    this.sendTitle(options.title)
    this.getDetailData()
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