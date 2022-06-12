// components/person/person.js
Component({
    options:{
        multipleSlots:true,   //这样就可以设置多个slot插槽
        styleIsolation:  "apply-shared"
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
        contractName:"",    //签署人姓名
        contractNumber:'',   //签署人联系方式邮箱||电话号
        cont:"请输入正确的姓名或联系方式，如输入错误将导致对方无法签署"
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
        addPer(){
            let id = Math.ceil(Math.random()*100)
            let obj = this.properties.formData
            obj.ids = id
            obj.contractName = this.data.contractName
            obj.contractNumber = this.data.contractNumber
            obj.persontype = this.properties.persontype
            obj.id = this.data.id
            if(this.properties.persontype =="签署人"){
                let personArr = wx.getStorageSync('personArr') || []
                personArr.push(obj)
                wx.setStorageSync('personArr', personArr)
                wx.navigateBack()
            }else{
                let chaoArr = wx.getStorageSync('chaoArr') || []
                chaoArr.push(obj)
                wx.setStorageSync('chaoArr', chaoArr)
                wx.navigateBack()
            }
            
        }
    }
})
