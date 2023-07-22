function greeting(){
    // body
    console.log("This is a greeting function");
}

greeting();


// type
// 
function add(){
    let a = 5;
    let b = 10;
    return a+b;
}
let result = add(); // 15
console.log("Here is the return value",result);


// Arrow Functions
// no input and no return
let add3 = () => (console.log("Here is add3 values", 5 + 15))

let add4 = () => (console.log("here is add2 values", 5 + 15));

add3();


let add5 = () => (console.log("Here is add3 values", 5 + 15))

let add6 = () => (5 + 28);

// add3();
console.log(add());



function sum(n1:number, n2:number) {
    return n1 + n2;
}
sum(20,10);


function gateEntry (haveCard:Boolean) {
    if (haveCard == true) {
        return "Allowed"
    }
    else {
        return "Not Allowed"
    }
}
let entry1 = gateEntry(true);
console.log(entry1);


function entry2 (haveCard:String) {
    if (haveCard=="PIAIC Card") {
        console.log("YOu are allowed to enter using PIAIC Card!");
    }
    else if (haveCard=="CNIC") {
        console.log("You are allowed to enter using CNIC!");
    }
    else {
        console.log("Not Allowed");
    }
}
let entry3 = entry2("Passport");



// Array
let students : string[] = ["Ali", "Ahmed", "Qasim", "Haider", "Imran"];
console.log(students);
console.log("Length Of Array Before Pushing: ",students.length)
students.push("Zia");
console.log(students);
console.log("Length Of Array After Pushing: ",students.length)

// Splice
students.splice(2,1,"Hamza","Kamran","Hassan");
console.log("Array After Splicing",students);
console.log("Length Of Array After Splicing",students.length);