 let arr = [1, 2, 3];

function sum(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
      sum=sum+arr[i];
    }
    return sum; 
}

 console.log(sum(arr)); 

// let arr = [10, 5, 22, 1];

// function max(arr) {
//     let max = arr[0];
//     for (let i = 1; i < arr.length; i++) {
//         if (arr[i] > max) {
//             maxValue = arr[i];
//         }
//     }
//     return maxValue;
// }

// console.log(max(arr)); // Output: 22
// let arr=[4,5,6];
// function target(arr){
//     for (let i = 0; i < arr.length; i++)
// {
//     if(arr[i]==5){
//         return true;
//     }
// }
// }
// console.log(target(arr)); 
// let arr=[2,3,4,5,6];
// function even(arr){
//     let e=o;
//     for (let i = 0; i < arr.length; i++)
// {
//     if(arr[i]%2===0){
//         e=e+1;
//     }
   
// }
// return e;
// }
// console.log(even(arr));


// let arr = [2, 3, 4, 5, 6];

// function even(arr) {
//     let e = 0; // initialize even counter to 0
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] % 2 === 0) {
//             e = e + 1; // increment counter if even
//         }
//     }
//     return e; // return after the loop
// }

// console.log(even(arr)); // Output: 3
// let arr=[1,2,3,4]
// function sorted(arr){
//     for(let i=0;i<arr.length;i++){
//         if(arr[i]>arr[i+1]){
//             return false;
//         }
//     }
//   return true;
// }
// console.log(sorted(arr)); 
// let arr=[1,2,3]
// let arr1=[]
// function reverse(arr){
// let n=arr.length;

// for(let i=0;i<3;i++){
// arr1[i]=arr[n-i-1]


// }return arr1;

// }console.log(reverse(arr));
// let arr=[1,2,3,4];
// function sorted(arr){
//     for(let i=0;i<arr.length;i++){
//         if(arr[i]>arr[i+1])
//         return false;
//     }
//     return true;
// }
// console.log(sorted(arr));
// let arr=[1,2,3,4]
// let arr1=[]
// function rotate(){
//     let n=arr.length;
//     for(let i=0;i<=2;i++){
//         arr1[i]=arr[i+1];
//     }
//     arr1[n-1]=arr[0]
//     return arr1;
// }
// console.log(rotate(arr))

// arr1[n-1]=arr[0]
// arr1[0]=arr[1]
// arr1[1]=arr[2]
// arr1[2]=arr[3]
// console.log(arr1)
// let arr=[1,2,2,3,3,3]
// function duplicate(arr){
// for(let i=0;i<arr.length;i++){
//  for(let j=1;j<arr.length;j++){
//         if(arr[i]==arr[j]){
//           return false
//         }
      
//     }
  
// }

// }
// console.log(duplicate(arr))