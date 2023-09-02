interface carModel {
     origin: string,
     horsepower: number,
     speed: number,
     mileage: number
}

let AMZ: carModel = {
    origin: Japan,
    horsepower: 6500,
    speed: 340,
    mileage: 305
}

type color = string | number | boolean;

interface bikeModel {
    origin: string,
    horsepower: number,
    speed: number,
    mileage: number,
    color: color
}

let H2R: bikeModel = {
    origin: Germany,
    horsepower: 3400,
    speed: 250,
    mileage: 215,
    color: Black
}

