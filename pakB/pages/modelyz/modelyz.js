// pakB/pages/modelyz/modelyz.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
      tip_show:false,//弹窗
      input_value:'',//印章名称
      color:'#FF0000',//选中的颜色 #FF0000 #0000FF #000000
      radio:'1',//选中
      color_arr:['#FF0000','#0000FF','#000000'],
      yz_arr:[
        {id:0,img:'/pakB/imgs/68aab55c61492f637ccf5b9e96e7d080.jpeg'},
        {id:1,img:'/pakB/imgs/68aab55c61492f637ccf5b9e96e7d080.jpeg'},
        {id:2,img:'/pakB/imgs/68aab55c61492f637ccf5b9e96e7d080.jpeg'},
        {id:3,img:'/pakB/imgs/68aab55c61492f637ccf5b9e96e7d080.jpeg'},
        {id:4,img:'/pakB/imgs/68aab55c61492f637ccf5b9e96e7d080.jpeg'},
        {id:5,img:'/pakB/imgs/68aab55c61492f637ccf5b9e96e7d080.jpeg'}
      ],//所有的印章样式
      select_yz:{id:0,img:'/pakB/imgs/68aab55c61492f637ccf5b9e96e7d080.jpeg'},//选中的印章样式
    },
    // methods
    // 输入印章名称
    input_fn(event){
      console.log('输入印章名称',event.detail);
      this.setData({input_value:event.detail})
    },
    // 选择印章颜色
    radio_fn(event){
      console.log('选择印章颜色',event.detail);
      console.log(event.detail);
      let color_arr = this.data.color_arr;
      let issure = this.data.issure;
      // 判断是否认证
      this.setData({radio:event.detail,color:color_arr[event.detail-1]})
      if(!issure){
        this.setData({tip_show:true})
      }
    },
    // 选择印章样式
    select_yz_fn(event){
      // 判断是否认证
      let issure = this.data.issure;
      let item = event.currentTarget.dataset.item
      console.log('选择印章样式',item);
      this.setData({select_yz:item})
      if(!issure){
        this.setData({tip_show:true})
      }
    },
    // 保存 并 打开弹窗
    storage_fn(){
      let input_value = this.data.input_value;
      // 先判断 收入框有值没有
      if(input_value){
        this.setData({tip_show:true})
      }else{
        wx.showToast({
          title: '印章名称不能为空',
          icon:'none'
        })
      }
      
    },
    // 关闭 弹窗
    close_tip(){
      this.setData({tip_show:false})
    },
    // logout
    logout_close_tip(){
      this.setData({tip_show:false})
      wx.navigateTo({
        url: '/pakB/pages/shimingrenzheng/shimingrenzheng',
      })
    },
    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
      console.log('先判断是否完成实名认证');
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