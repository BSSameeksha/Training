console.log(window);
console.log(window.document);
console.log(typeof document);
console.log(document.URL);
console.log(document.doctype);
console.log(document.head);
console.log(document.title);
document.title= "flipkart"
console.log(document.body);

let link = document.links
console.log(link);
// console.log(link[0]);
// console.log(link[1]);
// console.log(link[2]);


for (let i=0;i<link.length;i++){
    console.log(link[i]);
    link[i].className= "demo"
    link[i].href = "https://www.youtube.com/"
    link[i].target = "_blank"
    
}

let a= document.getElementById("demo")
console.log(a);
console.log(a.textContent);
a.textContent = "batch 6"
console.log(a.textContent);
a.style.backgroundColor="blue"
a.style.textAlign="center"

let b= document.getElementsByClassName("demo1")
console.log(b);
console.log(b[0]);
console.log(b[0].textContent);
b[0].style.backgroundColor = "aquamarine"
console.log(b[1]);
b[1].style.backgroundColor = "pink"

let c= document.getElementsByTagName("p")
console.log(c);
console.log(c[1]);
c[1].style.color= "crimson"
c[1].textContent= "Hello"

let d= document.getElementsByName("demo2")
console.log(d);
console.log(d[1]);
d[1].style.backgroundColor= "violet"

let e= document.querySelector("#demo")
console.log(e);

let e1= document.querySelector(".demo1")
console.log(e1);


let f= document.querySelectorAll("#demo")
console.log(f);

let f1= document.querySelectorAll(".demo")
console.log(f1);
console.log(f1[1]);


