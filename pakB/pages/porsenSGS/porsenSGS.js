// pakB/pages/porsenSGS/porsenSGS.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
      card_type:[
        {
          id:0,
          id_card:'身份证',
          files:[
            {name:'身份证照片(正面)',picture:'',model:'/pakB/imgs/sfz1_model.png'},
            {name:'身份证照片(背面)',picture:'',model:'/pakB/imgs/sfz2_model.png'},
            {name:'手持身份证照片',picture:'',model:'/pakB/imgs/hand_sfz_model.png'}
          ]
        },
        {
          id:1,
          id_card:'港澳通行证',
          files:[
            {name:'港澳通行证',picture:'',model:'/pakB/imgs/gatxz1_model.png'},
            {name:'入境证明',picture:'',model:'/pakB/imgs/gatxz2_model.png'},
            {name:'手持港澳通行证照片',picture:'',model:'/pakB/imgs/hand_gatxz_model.png'}
          ]
        },
        {
          id:2,
          id_card:'台胞证',
          files:[
            {name:'台胞证',picture:'',model:'/pakB/imgs/tbz1_model.png'},
            {name:'入境证明',picture:'',model:'/pakB/imgs/tbz2_model.png'},
            {name:'手持台胞证照片',picture:'',model:'/pakB/imgs/hand_tbz_model.png'}
          ]
        },
        {
          id:3,
          id_card:'护照',
          files:[
            {name:'护照第一页',picture:'',model:'/pakB/imgs/hz1_model.png'},
            {name:'入境证明',picture:'',model:'/pakB/imgs/hz2_model.png'},
            {name:'手持护照第一页照片',picture:'',model:'/pakB/imgs/hand_hz_model.png'}
          ]
        },
      ],//证件类型数据
      select_card_type:null,//选择的证件类型数据
      card:['请选择证件类型','身份证','港澳通行证','台胞证','护照'],//证件类型
      select_card:'',//选择的证件类型
      area:['请选择国家和地区','中国大陆','中国香港澳门','中国台湾','其他'],//地区
      select_area:'',//选择的地区
      name:'',//姓名
      card_number:'',//证件号
      show:false,//弹窗
      columns: null,
      picker_value:'',//picker 选择的值
    },
    // methods
    // 选择 地区的方法
    select_area_fn(){
      console.log('选择 地区的方法');
      let show = this.data.show;
      let area = this.data.area;//地区
      if(!show){
        this.setData({show:true,columns:area})
      }
    },
    // 选择 证件类型的方法
    select_card_fn(){      
      console.log('选择 证件类型的方法');
      let show = this.data.show;
      let card = this.data.card;//证件类型
      if(!show){
        this.setData({show:true,columns:card})
      }
    },
    // picker 选择时
    select_fn(event){
      let value = event.detail.value
      console.log("选择",value);
      this.setData({picker_value:value})
    },
    // 确认 选择 地区或证件类型
    confirm_fn(){
      console.log('确认');
      // 当前 picker 选中的值
      let value = this.data.picker_value;
      // 所有的证件类型
      let card_type = this.data.card_type;
      // 当前的证件类型
      let select_card_type = this.data.select_card_type;
      //证件类型
      let card = this.data.card
      //地区
      let area = this.data.area;
      // 如果值 value 在card 里 就是 证件类型的选择 給 select_card 赋值 否者 select_area 赋值 确定 之后 渲染到页面
      if(card.includes(value)){
        // 证件类型   select_card_type 也要发生变化， 对应的是 其他证件 的 照片
        let index = card.findIndex(item=>item==value)
        switch (index) {
          case 0:
          case 1:
            select_card_type = card_type[0]
            break;
          case 2:
            select_card_type = card_type[1]
            break;
          case 3:
            select_card_type = card_type[2]
            break;
          case 4:
            select_card_type = card_type[3]
            break;
        
        }
        this.setData({select_card:value,show:false,select_card_type})
      }else{
        this.setData({select_area:value,show:false})
      }
    },
    // 取消 选择 地区或证件类型
    cancel_fn(){
      console.log('取消');
      // 关闭弹窗
      this.setData({show:false})
    },
    // 输入姓名
    input_name(event){
      console.log('姓名',event.detail);
      this.setData({name:event.detail})
    },
    // 输入证件号
    input_card_number(event){
      console.log('证件号',event.detail);
      this.setData({card_number:event.detail})
    },
    // 添加照片
    addimg_fn(event){
      let file = event.detail.file;
      let index = event.currentTarget.dataset.index
      console.log(file,index);
      console.log('要记得上传图片');
      //当前 选择的证件类型 数据 把file 添加到 里边
      let select_card_type = this.data.select_card_type;
      // 判断是 正面 背面 还是手持照片
      select_card_type.files[index].picture = file.url;
      this.setData({select_card_type})
    },
    // 删除 图片
    deleteimg_fn(event){
      let index = event.currentTarget.dataset.index
      console.log('删除',index);
      //当前 选择的证件类型 数据 把file 添加到 里边
      let select_card_type = this.data.select_card_type;
      // 判断是 删除 正面 背面 还是手持照片
      select_card_type.files[index].picture = '';
      this.setData({select_card_type})
    },
    // 递交审核
    submit_fn(){
      console.log('提交审核');
      let {select_card_type,card,select_card,area,select_area,name,card_number} = this.data
      console.log(select_card_type,card,select_card,area,select_area,name,card_number);
      // ["中国大陆", "中国香港澳门", "中国台湾", "其他"]
      area = area.slice(1)
      console.log(area);
      // ["请选择证件类型", "身份证"]
      card = card.slice(0,2)
      console.log(card);
      // 1.判断 地区 wx.showToast({title:'请选择国家和地区',icon:'none'})
      // 2.判断 名字 wx.showToast({title:'名字不正确',icon:'none'})
      // 3.
      // 3.1 身份证  wx.showToast({title:'身份证号不正确',icon:'none'})
        // 3.1.1 判断 是否上传照片
      // 3.2 不是身份证  wx.showToast({title:'请上传港澳通行证/ /',icon:'none'})   
      //select_card 在不在 ['身份证','港澳通行证','台胞证','护照']  
      if(!area.includes(select_area)) return wx.showToast({title:'请选择国家和地区',icon:'none'})
      // 名字
      if(!name) return wx.showToast({title:'名字不正确',icon:'none'})
      // 是身份证 类型 
      if(card.includes(select_card)){
        // "请选择证件类型", "身份证"
        console.log('正则验证');
        let reg = /[\dx]{14}/g
        let flag = reg.test(card_number)
        console.log(flag);
        if(!card_number||!flag) return wx.showToast({title:'身份证号不正确',icon:'none'})
      }else{
        // 其他证件
      }      
      // 验证 图片
      select_card_type.files.forEach(element => {
        console.log(element);
        if(element.picture=='') return wx.showToast({title:`请上传${element.name}`,icon:'none'})
      });
      console.log('可以提交审核');
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
      //证件类型数据
      let card_type = this.data.card_type;
      //证件类型
      let card = this.data.card;
      //地区
      let area = this.data.area;
      this.setData({select_card_type:card_type[0],select_card:card[0],select_area:area[0]})
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