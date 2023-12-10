var readlineSync = require("readline-sync");
let num=parseInt(readlineSync.question("Enter a number :"));
function sumofSquares(n){
    let sum=0;
    for(let i=1;i<=num;i++){
        let Squre=i*i;
         sum=sum+Squre;
       
    }
    console.log("The sum of squares of the numbers=",sum);
}
sumofSquares();