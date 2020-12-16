function City(cityName,cityArea,cityPostcode,cityRegions){
    this.cityName = cityName;
    this.cityArea = cityArea;
    this.cityPostcode = cityPostcode;
    cityRegions = [{orgionName:"东湖区",orgionPostcode:"112233",orgionArea:500 },{orgionName:"西湖区",orgionPostcode:"112233",orgionArea:400},{orgionName:"青山湖区",orgionPostcode:"112233",orgionArea:300},{orgionName:"新建区",orgionPostcode:"112233",orgionArea:200}]
    
    
    City.prototype.printName = function(){
        console.log(cityName)
    }
    City.prototype.printArea = function(){
        console.log(cityArea)
    }
    City.prototype.printPostcode = function(){
        console.log(cityPostcode)
    }
    City.prototype.printRegions = function(){
        console.log(cityRegions)
    }
}
var bb =new City("南昌",1400,"112233");
bb.printName();
bb.printArea();
bb.printPostcode();
bb.printRegions();

// cityRegions[0] = {orgionName:"东湖区",orgionPostcode:"112233",orgionArea:500 }
//     cityRegions[1] = {orgionName:"西湖区",orgionPostcode:"112233",orgionArea:400}
//     cityRegions[2] = {orgionName:"青山湖区",orgionPostcode:"112233",orgionArea:300}
//     cityRegions[3] = {orgionName:"新建区",orgionPostcode:"112233",orgionArea:200}