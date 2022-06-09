import request from '../../utils/myrequest'

Component({
   /**
    * 组件的属性列表
    */
   properties: {
      tip: String,
   },

   /**
    * 组件的初始数据
    */
   data: {
      company: '', // 输入的公司名
      companies: null, // 联想的公司数据
      closed: false, // 关闭联想
   },

   /**
    * 组件的方法列表
    */
   methods: {
      //   点击提示
      tip() {
         wx.showModal({
            title: '提示',
            content: this.data.tip,
            showCancel: false
         })
      },

      // 输入内容时触发
      async changeValue(event) {
         let {
            data
         } = await request({
            url: '/goods/qsearch?query=' + event.detail
         })
         console.log(data)
         this.setData({
            company: event.detail,
            companies: data.message,
            closed: false
         })
      },
      // 关闭联想
      closed() {
         this.setData({
            closed: true
         })
      },
   }
})