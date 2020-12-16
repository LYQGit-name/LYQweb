//  var City2 =  Function("aa","name","return aa + name")

//3
// ; (function (x) {
//     console.log("this is chestnut")
//     return ((x) => function () {
//         console.log("this is haw")
//         x.printName = function () {
//             console.log("this is x().printName")
//             return this.name
//         }
//         return 200 + x.printName() + x()
//     }())(() => { this.name = 6666; console.log("this is pitaya"); return 3999 })
// })()

//4
// +function $() {
//     -function () {
//         console.log("this is pear")
//         void function () {
//             console.log("this is nut")
//             console.log(this.name)
//         }()
//     }()
//     this.name = "my name is $"
// }()

//5
// function watermelon(name, price, number) {
//     this.name = name,
//         this.price = price,
//         this.number = number
// }
// watermelon.prototype.getSum = function () {
//     console.log(this.price * this.number)
// }
// var aa = new watermelon("xx", 20, 5)
// aa.getSum();

//6
// function $2(x) {
//     //console.log(typeof x)
//     if (typeof x == "string") {
//         let targets = window.document.getElementsByTagName(x)
//         if (targets.length > 0) {
//             let array = targets;
//             for (let index = 0; index < array.length; index++) {
//                 const element = array[index];
//                 element.style.backgroundColor = "red"
//             }
//         }
//     }
// }
// $2("div")


//7
// var lichees = [
//     () => {
//         return function () {
//             console.log("this is number 1")()
//         }
//     },
//     +function () { console.log("this is number 2") }(),
//     {
//         name: "this is lichee 3"
//     },
//     2000,
//     "this is lichee 4",
//     null,
//     new Object({}),
//     Object.create({}),
//     Object.prototype,
//     new Object({}).__proto__,
//     new Date(),
//     function licheeNut() {
//         return {
//             printNut: () => {
//                 console.log("thisis printNut")
//             }
//         }
//     },
//     Object.prototype.tag = "this is tag",
//     Object.tag
// ]

//8
// window.$5 = function () {
//     console.log("this is $5 in window object")
// }
// window.document.$5 = function () {
//     console.log("this is $5 in window document object")
// }
// $5()
// document.$5()
9
// ; (console.log(1000 / function () {
//     console.log("this is anonymous function "); return function() { return 2000 / 2 } ()
// }()))
// ; (console.log(100/20))

//10
function orange() {
    console.log("this is orange")
}
orange.prototype = function () {
    this.name = "张三",
    this.price = 20
    this.getPrice = function () { return this.price }()
}
console.log(new orange().prototype.getPrice)