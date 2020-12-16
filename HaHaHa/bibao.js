//闭包
// function apple() {
//     var number = 0
//     console.log(number++)
// }
// apple()
// apple()
// apple()


// function apple() {
//     var number = 0
//     return function () {
//         console.log(number++)
//     }
// }
// var a = apple()
// a()
// a()
// a()


// for (var i = 0; i < 10; i++) {
//     setTimeout(function () {
//         console.log("this is " + i)
//     }, 2000);
// }

// for (let i = 0; i < 10; i++) {
//     setTimeout(function () {
//         console.log("this is " + i)
//     }, 2000);
// }


// for (var i = 0; i < 10; i++) {
//     (function (i) {
//         setTimeout(function () {
//             console.log("this is " + i)
//         }, 2000);
//     })(i)
// }

//异步
// function orange() {
//     console.log("this is orange 1")
//     setTimeout(function () {
//         console.log("this is orange 2")
//     }, 2000);
//     setTimeout(function () {
//         console.log("this is orange 5")
//     }, 5000);
//     console.log("this is orange 3")
//     console.log("this is orange 4")
// }
// orange()

// var pitaya1 = new Object()
// var pitaya ={}
// console.log(typeof pitaya)
// console.log(typeof pitaya1)
// console.log(pitaya instanceof Object)
// console.log(pitaya1 instanceof Object)

// const pitaya2 = 100;
// pitaya2 = 200;
// console.log(pitaya2)
//错

const pitaya3 = {
    name:"zhangsan"
}
pitaya3.name = "lisi"
console.log(pitaya3)

//引用类型  class 
//普通类型  int char double float