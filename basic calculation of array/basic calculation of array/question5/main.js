let arr1=[10,20,30,40,50];
let arr2=[60,70,80,90,100];
function myFunction(value1,value2){
   let result=[...value1,...value2];
   return result;
}
console.log(myFunction(arr1,arr2));