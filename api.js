let button=document.querySelector("#button")
button.onclick=function(){
    let d2;
    async function data(){
        let input=document.querySelector("#inpu")
        let user;
        let d=await fetch(`https://api.github.com/users/${user}`)
        d2=await d.json()
        console.log(d2)
        user=input.value
        let username=document.querySelector("#username")
        console.log(username)
       username.innerText=d2.login
       let img=document.querySelector("#image")
       img.setAttribute("src",d2.avatar_url)
    }
    data()
}

