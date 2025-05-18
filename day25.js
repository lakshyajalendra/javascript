// let ul= document.querySelector("#list")
// let i=document.createElement("li")
// let j=document.createElement("li")
// let k=document.createElement("li")
// i.innerText="ankit verma"
// j.innerText="priyanshu sharma"
// k.innerText="lakshya jalendra"
// ul.appendChild(i)
// ul.appendChild(k)
// ul.appendChild(j)
// let ol=document.querySelector("#order")
// let lk=document.createElement("li")
// lk.innerText="diufdsh"
// ol.appendChild(lk)
let button=document.querySelector("#btn")
console.log(button)
btn.onclick=function(){
    let input=document.querySelector("#username")
    console.log(input.value)
    let ul=document.querySelector("#list")
    let s=document.createElement("li")
    s.innerText=(input.value)
    ul.appendChild(s)

};
let btn2=document.createElement("button")
btn2.innerText="delete"
l.appendChild(btn2)
btn2.onclick=function(){
   l.remove()
}