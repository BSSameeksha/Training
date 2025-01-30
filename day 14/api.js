// let demo= async()=>{
//     let data= await window.fetch("country.json")
//     console.log(data);
//     let res = await data.json()
//     console.log(res);
//     //map
//     let select = document.getElementById("select")
//         console.log(select);
//     res.map((x)=>{
//         console.log(x);
//         console.log(x.country);
        
//         select.innerHTML+= `<option values =${x.country}>${x.country}</option>`

//     let demo1= document.getElementById("demo1")
//     console.log(demo1);
//     demo1.innerHTML += `<option values=${x.country}>${x.country}</option>`
//     })  
// }
// demo()

let btn= document.getElementById("btn")
console.log(btn);

btn.onclick=()=>{
    let search= document.getElementById("search").value
    console.log(search);
    window.fetch(``)
    .then((data) =>{data.json})
}
