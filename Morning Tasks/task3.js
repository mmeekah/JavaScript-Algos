//Ex:1
var arr = [6,3,5,1,2,4]
sum = 0;  
var newArr=[]
for(var i=0; i<arr.length; i++){
    sum = sum + arr[i];  
    newArr.push(sum);
    console.log(newArr);   
}

//Ex:2

var arr_mult=[6,3,5,1,2,4]
prod=1;
var newArr_Prod=[]
for(var i =0; i<arr_mult.length; i++){
    prod = i*arr_mult[i];
    newArr_Prod.push(prod);
    console.log(newArr_Prod);
}
