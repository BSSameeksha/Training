let obj={
    name: "Sameeksha",
    id: 1,
    designation: "Developer"
}
console.log(obj);

let obj1= JSON.stringify(obj)
console.log(obj1);
let obj2= JSON.parse(obj1)
console.log(obj2);

window.fetch("data.json")
// .then((data)=>{ console.log(data);
// })
.then((data)=> data.json())
.then((res)=>{
    console.log(res);

res.map((x)=>{
    console.log(x);
    console.log(x.name);
    console.log(x.designation);
    
    document.body.innerHTML +=`<h1>${x.name}</h1>`
    document.body.innerHTML +=`<h1>${x.id}</h1>`
    document.body.innerHTML +=`<h1>${x.designation}</h1>`
})
})