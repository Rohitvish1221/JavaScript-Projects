let random = Math.random()
let a = prompt("Enter First Number : ")
let b = prompt("Enter Second Number : ")
let op = prompt("Enter Operation : ")

let obj ={
    '+' : '-',
    '*' : '+',
    '-' : '/',
    '/' : '**'
}

//Perform Correct Operation
if(random < 0.1){
    console.log(`${a}${op}${b}`)
    alert(`The result is ${eval(`${a} ${op} ${b}`)}`);
}
//Perform Wrong Operation
else{
    op = obj[op];
    console.log(`${a}${op}${b}`)
    alert(`The result is ${eval(`${a} ${op} ${b}`)}`);
}

//Eval used only on String statement like - console.log(eval("2 + 2"));