var readlineSync = require('readline-sync');
let num=parseInt(readlineSync.question("Enter the number : "));
 function printEvenNumbers(){
    for(i=2;i<=num;i++){
        if(i%2===0){
            console.log(i);
        }
    }
}
printEvenNumbers();