let array=[1000,2000,3000,4000,5000];
function average(value){
    let total=value.reduce((prev,curra)=>{
        return prev+curra;
    })
    return(total/array.length);
}
console.log(average(array));