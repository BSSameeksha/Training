let a = function(){
    let num1 = parseInt(prompt("Enter the first number:"));
    let num2 = parseInt(prompt("Enter the second number:"));
    let num3 = parseInt(prompt("Enter the third number:"));
    let result = num1 + num2 + num3;
    console.log(result);
    if (num1> num2 & num3){
        console.log("num1 is highest");
    }
    if (num2> num1 & num3){
        console.log("num2 is highest");
    }
    if (num3> num1 & num2){
        console.log("num3 is highest");
    }
}
a();