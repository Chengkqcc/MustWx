function regular(val){
    var reg = new RegExp(/^1[34578]\d{9}$/)
    var EmailReg = new RegExp(/^\w+((-\w+)|(\.\w+))*\@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z0-9]+$/);
    return reg.test(val) || EmailReg.test(val)
}
function regname(name) {
    let reg = /^[\u4E00-\u9FA5]{2,10}(·[\u4E00-\u9FA5]{2,10}){0,2}$/;
    return reg.test(name)
}

export { regular,regname } 