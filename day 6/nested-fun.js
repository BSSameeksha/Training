// function parent() 
// {
//     function child()
//     {
//         console.log("I am child function");
//     }
//     child()
//     //console.log(child);
// }
// parent()

// var a = 10;
// let b = 20;
// function parent1(){
//     var a= "hello";
//     let b= "hi";
//     console.log(a);
//     console.log(b);
//     console.log(this.a);
//     //console.log(this.b);-- output: undefined as it is a local scope 
// }
// parent1();

//lexical-scope/ scope-chain
//console.log("start")
// function main(){
//     let a = 10;
//     function child(){
//         let b = 11;
//         console.log(a);
//         console.log(b);
//     }
//     return child;
// }
// main()()

