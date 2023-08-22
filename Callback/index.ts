let users = ["Sam", "Ellie", "Bernie", "Ania"];

function addUser(username: any, callback: any) {
    setTimeout(() => {
        users.push(username);
        callback();
    }, 200);
}

function getUsers() {
    setTimeout(() => {
        console.log(users);
    }, 100);
}
// First, add user to the list 'users'
addUser("Jake", getUsers);
// Second, get updated list of 'users'
getUsers();

// =========================================

const user = "HELLO WORLD";
console.log(`${user} is this`);
user = {};