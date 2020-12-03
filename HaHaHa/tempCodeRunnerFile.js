let str = "return" + "`我是${name}`";
let func = new Function("name",str)
console.log(func("大桃子"))
