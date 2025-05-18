    let btn=document.querySelector("#btn")    
    console.log(btn)
    btn.onclick=function(){
        let inp=document.querySelector("#user")
        let ul=document.querySelector("ul")
        console.log(inp.value)
          inp.innerText="";
        let l=document.createElement("li")
        l.innerHTML=inp.value
        ul.appendChild(l)
      let btn2=document.createElement("button")
       btn2.innerText="delete"
      l.appendChild(btn2)
      btn2.onclick=function(){
          l.remove()
      }
      


    }
