let a= document.createElement("h1")
console.log(a);
a.textContent = "Hello World!"
document.body.appendChild(a)
a.style.backgroundColor= "aquamarine"

let div= document.createElement("div")
console.log(div);

document.body.appendChild(div)
div.style.border= "5px solid"
div.style.backgroundColor="lavender"

let ol=document.createElement("ol")
console.log(ol);

div.appendChild(ol)

let li1= document.createElement("li")
console.log(li1);
li1.textContent= "React"

ol.appendChild(li1)

let li2= document.createElement("li")
console.log(li2);
li2.textContent= "Nodejs"

ol.appendChild(li2)

ol.setAttribute("type", "A")

let table= document.createElement("table")
console.log(table);

document.body.appendChild(table)
table.setAttribute("border","2px solid")

let tr1= document.createElement("tr")
console.log(tr1);
tr1.textContent="Mongodb"
table.appendChild(tr1)

let td1= document.createElement("td")
console.log(td1);
td1.textContent="Database"
tr1.appendChild(td1)

let td2= document.createElement("td")
console.log(td2);
td2.textContent="Unstructured"
tr1.appendChild(td2)

let tr2= document.createElement("tr")
console.log(tr2);
tr2.textContent="Express"
table.appendChild(tr2)

let td3= document.createElement("td")
console.log(td3);
td3.textContent="backend"
tr2.appendChild(td3)

let td4= document.createElement("td")
console.log(td4);
td4.textContent="connection"
tr2.appendChild(td4)

let tr3= document.createElement("tr")
console.log(tr3);
tr3.textContent="React"
table.appendChild(tr3)

let td5= document.createElement("td")
console.log(td5);
td5.textContent="frontend"
tr3.appendChild(td5)

let td6= document.createElement("td")
console.log(td6);
td6.textContent="coding"
tr3.appendChild(td6)

let tr4= document.createElement("tr")
console.log(tr4);
tr4.textContent="Nodejs"
table.appendChild(tr4)

let td7= document.createElement("td")
console.log(td7);
td7.textContent="backend"
tr4.appendChild(td7)

let td8= document.createElement("td")
console.log(td8);
td8.textContent="coding"
tr4.appendChild(td8)