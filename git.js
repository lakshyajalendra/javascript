async function data(){
    const d=await fetch("https://api.github.com/users/lakshyajalendra")
    const d2=await d.json()
    console.log(d2)
}
data();
// async function data(){
//     const d=await fetch("https://jsonplaceholder.typicode.com/todos/1")
//     const d2=await d.json()
//     console.log(d2)
// }
data();
