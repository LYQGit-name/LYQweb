// +function () {
//     console.log("this is pitaya")
// }()

    console.log((function (x) {
        console.log("this is pitaya2")
        x.printName = function(){
            console.log("this is print name")
            return 223
        }
        return x() + x.printName
    })(() => {
        console.log("this is arrow function");
        return 777
    }))
