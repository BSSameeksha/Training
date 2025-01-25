//console.log(a()); -->reference error
//let a= function(){
//    return "hello world"
//}
//console.log(a);
//
//console.log(a());

//let b= function(a){
//    console.log(a);
   // console.log(arguments[1]);
 //   console.log(arguments[2]);
//}
//b(10,20,30);

function main(a){
    console.log(a);
    console.log(a());
}
main(function(){
    return "I am cbf1";
})

main(function(){
    return "I am cbf2";
})