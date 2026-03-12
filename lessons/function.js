function summ(a,b){
    //if(a!= undefined && b!=undefined){
    if(a && b){
        return a+b;
    }
    else{return 'не передали слагаемое'}
}
let result = summ(2);
console.log(result);
console.log(summ(2,3));