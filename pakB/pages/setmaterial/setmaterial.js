// pakB/pages/setmaterial/setmaterial.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
      material:[
        {id:0,title:'姓名',desc:'请输入您的姓名',value:''},
        {id:1,title:'职位',desc:'请输入您的职位',value:''},
        {id:2,title:'公司',desc:'请输入您所在的公司',value:''},
        {id:3,title:'电话',desc:'请输入您的联系电话',value:''},
        {id:4,title:'QQ',desc:'请输入您的QQ',value:''},
        {id:5,title:'网址',desc:'请输入贵司的网址',value:''},
        {id:6,title:'地址',desc:'请输入您的联系地址',value:''},
      ]
    },
    
    // methods
    onChange(e){
      console.log(e);
      let material = this.data.material;
      let id = e.currentTarget.dataset.item;
      let value = e.detail;
      console.log(material,id,value);
      material[id].value = value
      this.setData({material})
    },
    set_fn(){
      console.log('确定更改');
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