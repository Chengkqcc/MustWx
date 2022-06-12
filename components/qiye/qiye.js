// components/qiye/qiye.js
Component({
    options:{
        multipleSlots:true, 
    },
    /**
     * 组件的属性列表
     */
    properties: {
        formData:{
            type:Object
        },
        persontype:{
            type:String
        },
        titles:{
            type:String
        }
    },

    /**
     * 组件的初始数据
     */
    data: {
        cont:"请输入正确的姓名或联系方式，如输入错误将导致对方无法签署",
        contractName:"",
        handName:"",
        contractNumber:"",
        title:""
    },
    attached(){
        this.data.title = this.properties.title
    },
    /**
     * 组件的方法列表
     */
    methods: {
        alertExplain(){
            wx.showModal({
                content: this.data.cont,
                showCancel:false,
            })
        },
        //获取总体表单数据
        addQiye(){
            let id = Math.ceil(Math.random()*100)
            let obj = this.properties.formData
            obj.ids = id
            obj.contractName = this.data.contractName
            obj.handName = this.data.handName
            obj.contractNumber = this.data.contractNumber
            obj.persontype = this.properties.persontype
            if(this.properties.persontype =="签署人"){
                let personArr = wx.getStorageSync('personArr') || []
                personArr.push(obj)
                wx.setStorageSync('personArr', personArr)
                wx.navigateBack()
            }else{
                let chaoArr = wx.getStorageSync('chaoArr') || []
                chaoArr.push(obj)
                wx.setStorageSync('chaoArr',chaoArr)
                wx.navigateBack()
            }
        }
    }
})
