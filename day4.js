// let arr=[2,3,4,5];
// arr.unshift(1);
// console.log(arr);
// arr.shift();
// console.log(arr);
// arr.shift();
// console.log(arr);
// let arr=[1,2,3,4,5,6,7];
// let slice=arr.slice(1,4);
// console.log(slice);
// console.log(arr.indexOf(5));
// console.log(arr.indexOf(8));
// console.log(arr.includes(3));
// console.log(arr.includes(9));
// console.log(arr.reverse());
// let obj = {
//     name:'lakshya',
//     age: 17,
//     city:'jhunjhunu-khetri',
//     skils:['html','css','js'],
// }
// console.log(obj);
let arr=[2,9];
let target=11;
let n=arr.length;
for(let i=0;i<n;i++){
    for(let j=1;j<n;j++){
        if(arr[i]+arr[j]==11){
            console.log(i);
            console.log(j);
            break;
        }
    }
}