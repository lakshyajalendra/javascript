let button=document.querySelector("#btn")
console.log(button)
btn.onclick=function(){
    let input=document.querySelector("#username")
    let ul=document.querySelector("#list")
    console.log(input.value)
    let l=document.createElement("li")
    l.innerHTML=input.value
    input.value=""
    ul.appendChild(l)
    //remove button
    let btn2=document.createElement("button")
       btn2.innerText="delete"
      l.appendChild(btn2)
      btn2.onclick=function(){
          l.remove()
        
      }
}