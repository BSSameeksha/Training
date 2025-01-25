// let arr = [10, "hello", false, 1n, undefined]
// console.log(arr);

// let arr1= new Array(10, 20, 30);
// console.log(arr1);

let obj= {
    name : "abc",
    id : 1,
    Boolean : true,
    arr : [10, 20, 30],
    null : null,
    undefined : undefined,
    demo : function(){
        console.log("Hello");
    },
    task : ()=> {
        console.log("hi");
        
    }
}
console.log(obj);
console.log(obj.name);
console.log(obj.id);
console.log(obj.Boolean);
console.log(obj.arr);
console.log(obj.null);
console.log(obj.undefinedn);
console.log(obj.demo);
obj.demo();
obj.task();

function obj1(name,id){
    this.name= name;
    this.id= id;
}

let p1 = new obj1("abc", 1)
console.log(p1);
console.log(p1.name);
console.log(p1.id);