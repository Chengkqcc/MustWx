let idcardReg = (value) => {
   // 身份证号码为15位或者18位，15位时全为数字，18位前17位为数字，最后一位是校验位，可能为数字或字符X
   var reg = /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/
   if (reg.test(value) === false) {
      console.log("身份证输入不合法或为空");
      return false;
   }
   return true
}

export default idcardReg