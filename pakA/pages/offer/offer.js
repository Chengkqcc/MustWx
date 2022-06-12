// pakA/pages/offer/offer.js
import myrequest from "../../../utils/myrequest"
Page({

  /**
   * 页面的初始数据
   */
  data: {
    personalProductList:[],
    enterpriseProductList:[],
    active:0
  },

  async getProductData(){
    const {data} = await myrequest({
      url:"/product",
    })
    let personal = data.data.filter(item=>item.product_type == 1);
    console.log(personal)
    let enterprise = data.data.filter(item=>item.product_type == 2);
    this.setData({
      personalProductList:personal,
      enterpriseProductList:enterprise
    })
    console.log(enterprise)
    console.log(data)
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    this.getProductData()
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