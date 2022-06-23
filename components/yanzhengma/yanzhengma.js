// components/yanzhengma/yanzhengma.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    show:{
      type:Boolean,
      value:false
    },
    number:{
      type:String,
      value:'15633713372'
    },
    // 跳转 路径
    url:{
      type:String,
      value:'url'
    },
    // 的先在下边写其他方式的跳转
    navigate_type:{
      type:String,
      value:'redirectTo'
    }
  },
  observers:{
    'show':function(o,n){
      console.log(o,n);
      // this.setData({isfocus:true})
      // this.shijian()
      
    }
  },
  /**
   * 组件的初始数据
   */
  data: {
    yzm_value:'',
    yzm_arr_value:[],
    isfocus:false,//是否获取焦点
    disabled:true,//是否 禁用按钮
    btn:'', //按钮 的内容
    time:59, // 倒计时 获取验证码
    timer:null, // 计时器
    btn_font_color:'' // 按钮 的 字体颜色 #000 #07C178
  },
  ready(){
    this.setData({isfocus:true})
    // 这个动画 不怎么管用 我使用了 css @keyframes 写的
    // this._fade()
    this._get_yzm()
  },

  /**
   * 组件的方法列表
   */
  methods: {
    // 是否获取验证码
    _get_yzm(){
      // 1.第一次 点 （怎么判断是不是第一次点，看倒计时）
      // input获取焦点；按钮 开始计时，并且不能点击disabled；
      // 1.1 输入了验证码，并且是6位，那么 按钮 可点，并改变颜色，点击按钮执行 验证
      // 1.2 不输入或输入不够6位，继续计时，当倒计时过去后，按钮可重新获取验证码
      // 2.点完关闭在点
      // 1、2相合，直接判断 时间是不是 59秒 不是 就从继续倒计时，是 从59秒开始
      let time = this.data.time;
      let timer = this.data.timer;
      let btn = this.data.btn;
      let disabled = this.data.disabled;
      let btn_font_color = this.data.btn_font_color;
      // 判断 计时器 是否开启
      console.log(timer,time);
      if(timer){
        console.log('开启');
        // 开启 计时器
        // 计时器继续 ；
      }else{
        console.log('未开启');
        // 未开启 计时器 
        // 开启计时器 ；更新 按钮 的文本；按钮不能点击；按钮 文字黑色
        timer = setInterval(() => {
          time--;
          btn = `${time}秒后获取验证码`
          disabled = true;
          btn_font_color = '#000';
          // 判断 是不是 输入验证码，是否 输入 6位
          //  是6位 按钮 文字'验证'；可以点击；文字颜色 蓝色
          let yzm_arr_value = this.data.yzm_arr_value
          let length = yzm_arr_value.length
          if(length==6){
            btn = '验证'
            disabled = false;
            btn_font_color = '#07C178';
          }
          this.setData({btn,disabled,btn_font_color})
        }, 1000);
        // 到时间 关闭计时器 时间重置会59 按钮文字 '重新获取' 验证码;可以点击按钮;按钮 文字 蓝色；
        setTimeout(() => {
          clearInterval(timer)
          timer = null;
          time = 59;
          btn = '重新获取';
          disabled = false;
          btn_font_color = '#07C178';
          // 判断 是不是 输入验证码，是否 输入 6位
          //  是6位 按钮 文字'验证'；可以点击；文字颜色 蓝色
          let yzm_arr_value = this.data.yzm_arr_value
          let length = yzm_arr_value.length
          if(length==6){
            btn = '验证'
            disabled = false;
            btn_font_color = '#07C178';
          }
          this.setData({timer,time,btn,disabled,btn_font_color})
        }, time*1000);
      }
    },
    // 当失去焦点后，点击重新获取焦点
    select_fn(){
      this.setData({isfocus:true})
    },
    // 点击关闭按钮 关闭弹窗
    onClose(){
      this.setData({show:false})
    },
    // 隐藏 输入框，输入验证码时 触发
    input_fn(e){
      let value = e.detail.value;
      console.log(value);
      this.setData({yzm_value:value,yzm_arr_value:value.split('')})
    },
    // 按钮触发，判断是 重新获取，还是验证
    btn_fn(){
      let btn = this.data.btn;
      let yzm_value = this.data.yzm_value
      let yzm_arr_value = this.data.yzm_arr_value;
      let btn_font_color = this.data.btn_font_color;
      let url = this.data.url;
      console.log(url);
      console.log(btn);
      if(btn == '验证'){
        // 输入 的 验证码 和 发过来的验证码 对比 如：123456
        if(yzm_value=='123456'){
          wx.redirectTo({
            url
          })
        }else{
          wx.showToast({
            title: '输入错误',
            icon:'error',
          })
          // 清空 输入框 输入框重新获取焦点 按钮 文字 按钮颜色
          yzm_value = '';
          yzm_arr_value = [];
          btn = '重新获取';
          btn_font_color = '#07C178'
          this.setData({yzm_value,yzm_arr_value,btn,btn_font_color,isfocus:true})          
        }
      }else if(btn == '重新获取'){
        // 重新获取验证码
        this._get_yzm()
        this.setData({isfocus:true})
      }
    },
    // 动画
    _fade(){
      this.animate('.active',[
        {opacity:0.5},
        {opacity:1},
        {opacity:0.5},
      ],2000,function(){
        this.clearAnimation('.active')
        this._fade()
      }.bind(this))
    }
  }
})
