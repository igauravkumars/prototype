function vehicle(brand,model,speed,fueltype){
    this.brand=brand;
    this.model =model;
    this.speed = speed;
    this.fueltype = fueltype

}

vehicle.prototype.accelerate = function(){
    this.speed +=10
}

vehicle.prototype.brake = function(){
    this.speed -= 5
}

vehicle.prototype.refuel = function(){
    console.log("refuel this vehical")
}


function car(brand,model,speed,fueltype,NoOfwheels){
  
    vehicle.call(this,brand,model,speed,fueltype)
    this.NoOfwheels = NoOfwheels
}

function Airplane(brand,model,speed,fueltype,numberOfEngines,hasLandingGear,NoOfwheels){
     
    vehicle.call(this,brand,model,speed,fueltype)
    this.numberOfEngines =numberOfEngines;
    this.hasLandingGear =hasLandingGear;
    this.NoOfwheels=NoOfwheels;

}


Airplane.prototype.takeoff =function(){
    console.log("take off")
}

Object.setPrototypeOf(car.prototype,vehicle.prototype)

let tiago = new car("tata","2020",0,"petrol",4)

tiago.accelerate()

// console.log(tiago)

let air1 =new Airplane("indigo",2015,0,"petrol",4)

console.log(air1)
