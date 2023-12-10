var readlineSync = require('readline-sync');
let rows=readlineSync.question("How many rows do you want ? :");
function printPattern(){
    for(i=1;i<=rows;i++){
        console.log("*".repeat(i));
    }
}
printPattern();