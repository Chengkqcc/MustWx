// pakB/pages/writename/writename.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    radio:'1',//选中单选按钮的 name值 #000 #f00
    show:false,//画笔的 粗细 弹窗
    flagMove: false, //默认未签名
    context: null,//canvas 文本对象
    lineColor:'#000',// 字体样式 默认 #000  还有 #f00
    radius:4,//字体粗细
    flagMove:false,//是否 在画布上移动
    tempFilePath:null,//签名保存的图片
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let context = wx.createCanvasContext('canvasId')
    this.setData({
      context: context
    })
    context.draw();
  },
  // methods
  //  画笔的 粗细 弹窗
  canvas_size_popup(){
    console.log('弹窗');
    let show = this.data.show
    this.setData({show:!show})
  },
  // 修改 画笔的 粗细
  canvas_number_fn(event){
    let number = event.currentTarget.dataset.number;
    console.log(number);
    this.setData({radius:number})
  },
  // 修改 画笔的 颜色
  canvas_color(event){
    console.log(event.detail,'改变颜色');
    let lineColor = this.data.lineColor;
    if(event.detail==1){
      lineColor = '#000'
    }else{
      lineColor = '#f00';
    }
    this.setData({
      radio: event.detail,
      lineColor
    });
  },
  bindtouchstart(e) {
    console.log("bindtouchstart", e);
    this.data.context.moveTo(e.changedTouches[0].x, e.changedTouches[0].y)
  },
  // 触摸移动
  bindtouchmove(e) {
    console.log("bindtouchstart", e);
    this.setData({
      flagMove: true,
    })
    this.data.context.strokeStyle = this.data.lineColor;
    this.data.context.lineWidth = this.data.radius;//这里乘2是因为线条的粗细要和圆的直径相等
    this.data.context.lineTo(e.changedTouches[0].x, e.changedTouches[0].y);
    this.data.context.stroke();
    this.data.context.draw(true);
    this.data.context.moveTo(e.changedTouches[0].x, e.changedTouches[0].y);
  },
  /**清空画布 */
  clear() {
    this.data.context.clearRect(0, 0, 600, 700); //清空画布
    this.data.context.draw();
    this.setData({
      flagMove: false
    })
  },
  /**导出图片 */
  export () {
    const that = this;
    if (!that.data.flagMove) {
      console.log('签名获取失败，请稍后重试');
      wx.showToast({
        title: '请先绘制签名',
        icon:'none'
      })
      return;
    }
    that.data.context.draw(true, wx.canvasToTempFilePath({
      x: 0,
      y: 0,
      fileType: 'jpg',
      canvasId: 'canvasId',
      success(res) {
        const {
          tempFilePath
        } = res;
        console.log('手写签名，签字图片', tempFilePath)
        that.setData({tempFilePath})
      },
      fail() {
        showToast('签名提交失败');
      }
    }))
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