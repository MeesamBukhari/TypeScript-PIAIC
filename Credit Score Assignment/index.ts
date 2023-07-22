const promptSync = require('prompt-sync')();
let a = promptSync("Enter your balance: ")
let b = promptSync("Enter your minimum balance: ")
let c = promptSync("Enter your maximum balance: ")

let bal = parseInt(a);
let minbal = parseInt(b);
let maxbal = parseInt(c);

function cScore (bal:number, minbal:number, maxbal:number) {
    const totalBalance = bal + minbal + maxbal;
    let cScore;
    if (totalBalance >= 0 && totalBalance <= 300) {
        if (totalBalance >= 250 && totalBalance <= 300) {
            return "A+";
        }
        else if (totalBalance >=220 && totalBalance < 250) {
            return "B";
        }
        else if (totalBalance >= 180 && totalBalance < 220) {
            return "C"
        }
        else if (totalBalance >= 150 && totalBalance < 180) {
            return "D"
        }
        else {
            return "Low"
        }
    }
    else {
        return "Out of Range";
    }
}

console.log(cScore(a,b,c));


// cScore(x, y, z) // to manually put values in function