// pakB/pages/setheaderimg/setheaderimg.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
      number:0,//图片数量
      fileList:[]
    },
    // methods
    // 添加图片
    afterRead(event) {
      const { file } = event.detail;
      console.log(file);
      const { fileList = [] } = this.data;
      console.log(fileList);
      fileList.push({ ...file, url: file.url });
      this.setData({ fileList,number:1 });
    },
    // 删除图片
    delete_img(event){
      console.log(event.detail.index);
      const { fileList = [] } = this.data;
      fileList.pop()
      console.log(fileList);
      this.setData({ fileList,number:0 });
    },
    set_fn(){
      let number = this.data.number;
      const { fileList = [] } = this.data;
      if(number==1){
        console.log('把这个图片设为全局数据',fileList);
      }else{
        wx.showToast({
          title: '请先选取头像',
          icon:'none'
        })
      }
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