// pakB/pages/qianmingguanli/qianmingguanli.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
      tip_show:false,//提示 弹窗
      qm_show:false,// 签名弹窗
      show:false,// 切换 账户
      img_show:false,// 拍摄签字图片 就刚进入页面时，首次点击有弹窗，点击“我知道了”后就没有了
      istrue_imgshow:false,//false  没有点击‘我知道了’ true 点击了 ‘我知道了’ 
      files:[],//上传的图片
      qm_data:[
        {id:0,title:'添加手写签名',page:''},
        {id:1,title:'拍摄签字图片',page:''},
        {id:2,title:'从相册选取签字图片',page:''},
        {id:3,title:'从模板添加印章',page:''},
      ]
    },
    // methods
    // tip 弹窗 动画
    onClose(){
      console.log('动画');
    },
    // 打开 tip
    open_tip(){
      this.setData({tip_show:true})
    },
    // 关闭 tip
    close_tip(){
      this.setData({
        tip_show:false
      })
    },
    // 打开 qm 弹窗
    add_qm(){
      this.setData({qm_show:true})
    },
    // 关闭  qm 
    close_qm(){
      this.setData({qm_show:false})
    },
    // 拍摄签字图片 的弹窗 的‘我知道了’ 按钮
    sure_confirm(){
      console.log('点击 我知道了');
      console.log('打开本地文件夹');
      this.setData({istrue_imgshow:true})//当前 页面不会在出现拍摄 签名弹窗，重新进入页面 弹窗又会出现
      this._getfiles()
    },
    // 获取图片
    _getfiles(){
      wx.chooseMedia({
        success:(res)=>{
          console.log(res.tempFiles);
          this.setData({files:res.tempFiles})
          // 选好图片后，就可以 裁切了
          console.log('去图片编辑页面，编辑图片');
          console.log('图片编辑好后，跳转到 设置印章参数 页面');
          wx.navigateTo({
            url: '/pakB/pages/editimg/editimg?img='+res.tempFiles[0].tempFilePath,
          })
        },
        fail:()=>{
          wx.showToast({
            title: '获取图片失败',
            icon:'none'
          })
        }
      })
    },
    // 获取签名
    getQM_fn(event){
      let item = event.currentTarget.dataset.item;
      // 拍摄签字图片 就刚进入页面时，首次点击有弹窗，点击“我知道了”后就没有了
      let img_show = this.data.img_show
      //false 没有点击‘我知道了’ true 点击了 ‘我知道了’ 
      let istrue_imgshow = this.data.istrue_imgshow
      console.log(item);
      switch (item.id) {
        case 0:
          // 添加手写签名
          wx.navigateTo({
            url: '/pakB/pages/writename/writename',
          })
        break;
        case 1:          
        case 2:
          // 拍摄签字图片
          // 弹窗 确定后 获取图片
          if(!istrue_imgshow){
            // false 没有点击‘我知道了’ 有弹窗
            this.setData({img_show:true})
          }else{
            // true 点击了 ‘我知道了’ 无弹窗 直接打开 文件夹
            console.log('点击了 ‘我知道了’ 无弹窗');
            console.log('直接打开 本地文件夹');
            this._getfiles()
          }
          break;
        case 3:
          // 从模板添加印章
          console.log('跳转到 生成模板印章 页面');
          wx.navigateTo({
            url: '/pakB/pages/modelyz/modelyz',
          })
          break;
      }
      this.setData({qm_show:false})
    },
    // 添加企业印章
    add_qyyz(){
      this.setData({show:true})
    },
    // 关闭 切换账户 弹窗
    close_qiehuan(){
      this.setData({show:false})
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
      this.setData({istrue_imgshow:false})
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