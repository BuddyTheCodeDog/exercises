//2. Write a function that takes a minimum number and a maximum number,
// and using a for loop, log out all odd numbers between the min and the max,
//  NOT including the min or max themselves.

const a = 7;
const b = 57;
console.log(`I have chosen ${a} and ${b}`);
console.log("---------------------------");

function logOddNum(input1,input2){
    for(i = input1 + 1; i < input2; i++){
        const number = i;
        if(number % 2 === 0){

        }
        else{
            console.log(number);
        }
    }
    
}

logOddNum(a,b);