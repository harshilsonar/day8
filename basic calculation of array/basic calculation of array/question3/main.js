let array=[
    {
       name:"john",
       age:"20",
    },
    {
        name:"john",
        age:"25",
     },
     {
        name:"john",
        age:"21",
     },
     {
        name:"john",
        age:"28",
     },
]
function myFuction(value){
    let result=value.sort((a,b)=>{
       return a.age-b.age;
    })
    return result;
}
console.log(myFuction(array));