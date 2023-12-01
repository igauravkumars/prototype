// You have been appointed as senior developer in Tata’s R&D department. 
// The engineers there are lazy, they don’t want to do everything from scratch whenever they create a new model.
//  They expect you to help them create an inheritance model for the automobiles.

// Description :-
// Implement an inheritance model for four wheeler automobiles.
// Implement using both object.create() and constructor functions().
// Think of properties of what can be inherited.
// Submission File


function  Carmodel(name,model,color,price,speed,fueltype){
    this.name = name,
    this.model = model,
    this.color = color,
    this.price = price,
    this.speed = speed,
    this.fueltype = fueltype

}

Carmodel.prototype.accelerate = function(){
         this.speed +=10
         console.log(`your vechical start runing by ${this.speed}`)
}

Carmodel.prototype.brake = function(){
    this.speed -= 8
    console.log(`speed slow by${this.speed}`)
}

Carmodel.prototype.refuel = function(){
    console.log("refuel this vechical")
}

function FourWheeler(name,model,color,price,speed,fueltype,wheel){
       Carmodel.call(this,name,model,color,price,speed,fueltype),
       this.wheel =wheel;
}

FourWheeler.prototype =Object.create(Carmodel.prototype)

FourWheeler.prototype.displaywheel =function(){
    console.log(`it has${this.wheel}`)
}
let car1 = new FourWheeler('Toyota', 'Camry', "red",550000,0,"petrol",4);
let car2 = new FourWheeler('Honda', 'Accord',"green",547896,0,"petrol",4);

car1.accelerate()
car2.brake()
console.log(car1)