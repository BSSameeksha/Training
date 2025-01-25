// function main(task){
//     console.log(task());
// }
// main(function(){
//     let a = parseInt(prompt("Enter a value:"));
//     let b= parseInt(prompt("Enter b value:"));
//     return a+b;
// })
// main(function(){
//     let c = parseInt(prompt("Enter c value:"));
//     let d= parseInt(prompt("Enter d value:"));
//     return c-d;
// })
// main(function(){
//     let e = parseInt(prompt("Enter e value:"));
//     let f= parseInt(prompt("Enter f value:"));
//     return e*f;
// })

//--> 6 prompts with onlt 2 parameters
let operation = (a,b,task) => {
    console.log(task(a,b));
} 
operation(a = Number(prompt("Enter a for add")),
b= Number(prompt("Enter b for add")),
(a,b)=> {
    return a+b;
})
operation(a = Number(prompt("Enter a for sub")),
b= Number(prompt("Enter b for sub")),
(a,b)=> {
    return a-b;
})
operation(a = Number(prompt("Enter a for multiplication")),
b= Number(prompt("Enter b for multiplication")),
(a,b)=> {
    return a*b;
})

//--> Arrow Function

// let main = (task) => {
//     console.log(task);
//     console.log(task());
// }
// main(()=>{
//     return "I am cbf1";
// })