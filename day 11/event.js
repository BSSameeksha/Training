function demo(){
    console.log("Hello World");
    
}
demo()

let a= document.getElementById("demo1");
console.log(a);
a.onclick = function(){
    // let res= Math.round(Math.random() * 100000)
    // console.log(res);
    let res= Math.round(Math.random() * 10000).toString(16)
    console.log(res);
    document.body.style.backgroundColor= `#${res}`
}

let demo2= document.getElementById("demo2")
console.log(demo2);

let colour= window.prompt("Enter any colour name:")
console.log(colour);

demo2.innerHTML = colour

demo2.onmouseover = () =>{
    document.body.style.backgroundColor= `${colour}`
    document.body.style.transition= "ease all 3s"
}

let demo3= document.getElementById("demo3")
console.log(demo3);

demo3.addEventListener("click", () =>{
    let demo4= document.getElementById("demo4").value
    console.log(demo4);
    let speech = new SpeechSynthesisUtterance
    console.log(speech);
    speech.text= demo4
    speechSynthesis.speak(speech)
    
    
})
