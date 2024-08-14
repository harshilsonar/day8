let arr=[1,2,3,4,5,7,6,8,9,10];
function even(value){
    let even=value.filter((Element)=>{
        return Element%2==0;
    })
    return even;
}
console.log(even(arr));