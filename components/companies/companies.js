import request from '../../utils/myrequest'
import Toast from '../../miniprogram_npm/@vant/weapp/toast/toast';

Component({
   /**
    * 组件的属性列表
    */
   properties: {
      tip: String,
      hasSwitch: Boolean,
      btnText: String,
   },

   /**
    * 组件的初始数据
    */
   data: {
      company: '', // 输入的公司名
      companies: null, // 联想的公司数据
      closed: false, // 关闭联想
      checked: true, // 开关开启
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

      onChange(event) {
         // 需要手动对 checked 状态进行更新
         this.setData({
            checked: event.detail
         });
         if (!event.detail) {
            Toast('您关闭后，客服将不会主动联系您，第一次使用建议开启；');
            return
         }
      },

      // 点击当前项赋值给输入框
      itemfn(event) {
         this.setData({
            company: event.target.dataset.company
         })
      },
      // 下一步按钮
      addBtn() {
         if (!this.data.company) {
            Toast('企业名称不正确');
            return
         }
         let arr = wx.getStorageSync('companiesList') || [];
         arr.push(this.data.company)
         wx.setStorageSync('companiesList', arr)

         wx.nextTick(() => {
            wx.showLoading({
               title: '加载中',
               success: () => {
                  wx.showToast({
                     title: '企业添加成功',
                     icon: 'success',
                     duration: 2000
                  })
               }
            })
         });

         setTimeout(() => {
            wx.hideLoading()
            wx.navigateTo({
               url: '/pakB/pages/Auth/Auth?name=' + this.data.company
            });
         }, 1500)
      },
   }
})