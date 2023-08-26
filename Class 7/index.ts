interface carModel {
    model: number,
    mileage: number
}

let BMW: carModel = {
    model: 2023,
    mileage: 120
}

function CarEfficiency(car: carModel){
    let calculation = car.model = car.mileage
    return calculation;
}
CarEfficiency(BMW);

interface MotorBike{
    model: number,
    mileage: number,
    speed: number
}

let H2R: MotorBike = {
    model: 2025,
    mileage: 200,
    speed: 250
}
CarEfficiency(H2R);

// BMW = {model: 2025, car_mileage: 250}
BMW = H2R
H2R = {model: 2025, mileage: 200, speed: 250}
// BMW = {model: 2025, mileage: 200, speed: 250}        // speed isn't the property of interface of BMW

interface duck {
    canSwim: boolean,
    canFly: boolean
}

interface dog {
    canSwim: boolean,
    canFly: boolean
}

function MyPet(pet:duck){
    if(pet.canSwim == true && pet.canFly == true){
        console.log("This is what you are looking for");
    }
    else{
        console.log("This is not a Duck");
    }
    console.log("My pet can swim",pet.canSwim);
    console.log("My pet can fly",pet.canFly);
}

let myDuck: duck = {
    canFly: true,
    canSwim: true

}

let germanShep: dog = {
    canFly: false,
    canSwim: true
}

myDuck : {

}