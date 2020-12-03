var apple = 20;
var orange = "橘子";

let lemon = "柠檬";
let banana = 30;
const pear = 40;
//语法糖
// var apple1 = {}
// console.log(typeof apple1)
// //
// var apple2 = Object.create(null);
// console.log(typeof apple2 + " apple2");

// var apple3 = function BigApple(){
//     console.log("this is apple3");
// }
// function smallApple(){
//     console.log("this is smallapple");
// }
// apple3();
// smallApple();

// var apple4 = function(){
//     console.log("this is apple4");
// }
// apple4();
//es6箭头函数
//  var apple5 =()=>{
//      console.log("this is arrow function");
//  }
//  apple5();

//  var apple6 =()=>
//          console.log("this is arrow function");
//  apple6();
// var apple7 =()=>{
//           return()=>{
//               return()=>{
//                 console.log("this is arrow function");
//               }
//           }
// }
// apple7()()();

// var apple8 = (x,y)=>{
//     console.log("this is apple8 == "+(x+y));
//     return(x,y)=>{
//         console.log("this is apple9 ==" +(x+y));
//     }
// }
// apple8(2,3)(5,5);


// console.log("13");
// var apple10 =()=>console.log("10"); 
// apple10();

// function apple11(){
//     var name ="苹果11"
//     function apple11son(){
//         console.log("this is apple11son")
//     }
//     console.log("this is apple11")
//     return{
//         test:apple11son
//     }
// }
// apple11().test();


// var haw =(x,y)=>{
//        return()=>{
//            x(y)
//        }
// }
// function Lichee(li){
//     console.log(li())
// }
// function nut(){
//     console.log("this is nut")
//     return "this is Lichee"
// }
// haw(Lichee,nut)();
//console.log(nut())



//1
// var nut = function(){
//     console.log("this is nut-1")
//     return "this is nut-2"
//     }
//     nut()
//2
// var lichee = function (){
//     console.log("this is lichee-1")
//     return "this is lichee-2"
//     }()
//3
// var watermelon = function(){
//     console.log("this is watermelon-1")
//     return function pear(){
//     console.log("this is pear-1")
//     } 
// }()();

//4
// let banana1 = function banana1() {
//     console.log("this is banana-1")
//     return () => function () {
//         console.log("this is Anonymous function")
//     }()
// }
// banana1()()
//5
// let grape = function redGrape(){
//     return {
//         name: "my name is red grape",
//         printMyName: () => {
//             return ()=> {
//                 return Object.create({
//                     name: "my name is grape nut",
//                     printMyGrapeNut: function () {
//                         console.log("this is MyGrapNut")
//                     }
//                 })
//             }
//         }
//     }
// }
// grape().printMyName()().printMyGrapeNut()

//6
// var redPlum = () => {
//     return 100
// }
// var bluePlum = (blue) => {
//     return 200 * blue()
// }
// var plum = (plum2, plum1) => {
//     let result = plum1(plum2)
//     console.log(result);
// }
// plum(redPlum, bluePlum)
//7
// let red = function readApple() {
//     return () => {
//         return function () {
//             return () => {
//                 return function () {
//                     console.log("this is red apple")
//                     return "this is blue apple"
//                 }
//             }
//         }
//     }
// }
// let apple15 = function redApple() {
//     console.log(red()()()()())
// }()
//8
// (function (x) {
//     x()
//     console.log("this is yellow orange")
//     console.log("this is blue orange")
// })(function () {
//     console.log("this is orange")
//     return "this is red orange"
// })
//9
// var blackOrange =()=> function () {
//     console.log("this is small orange")
//     return function () {
//         console.log("this is big orange")
//     }()
// }()
// blackOrange();
//10
// let blackberry = function () {
//     console.log("this is blackberry")
//     return {
//         smallBlackberry: () => {
//             console.log("this is smallBlackberry")
//             return () => {
//                 console.log("this is smallBlackberry nut ")
//                 return 9999
//             }
//         }
//     }
// }().smallBlackberry()()
// console.log(blackberry)

//11
// function bigNut(func) {
//     let smallNut = function (s) {
//         s()
//         console.log("this is small nut")
//         return 200
//     }
//     let middleNut = function (m) {
//         m()
//         console.log("this is middle nut")
//         return 300
//     }
//     return func(smallNut, middleNut)
// }
// function redNut(x, y) {
//     function blueNut() {
//         console.log("this is blueNut")
//     }
//     function yellowNut() {
//         console.log("this is yellowNut")
//     }
//     return () => {
//         console.log(x(blueNut) + y(yellowNut))
//     }
// }
// bigNut(redNut)()

//12
// var haw = (x, y) => {
//     return () => {
//         x(y)
//     }
// }
// function lichee(li) {
//     console.log(li())
// }
// function nut() {
//     console.log("this is nut");
//     return "this is lichee"
// }
// haw(lichee, nut)()







