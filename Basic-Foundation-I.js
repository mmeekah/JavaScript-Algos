// 1.Get 1 to 255 - Write a function that returns an array with all the numbers from 1 to 255.
// 2.Get even 1000 - Write a function that would get the sum of all the even numbers from 1 to 1000.  You may use a modulus operator for this exercise.
// 3.Sum odd 5000 - Write a function that returns the sum of all the odd numbers from 1 to 5000. (e.g. 1+3+5+...+4997+4999).
// 4.Iterate an array - Write a function that returns the sum of all the values within an array. (e.g. [1,2,5] returns 8. [-5,2,5,12] returns 14).
// 5.Find max - Given an array with multiple values, write a function that returns the maximum number in the array. (e.g. for [-3,3,5,7] max is 7)
// 6.Find average - Given an array with multiple values, write a function that returns the average of the values in the array. (e.g. for [1,3,5,7,20] average is 7.2)
// 7.Array odd - Write a function that would return an array of all the odd numbers between 1 to 50. (ex. [1,3,5, .... , 47,49]). Hint: Use 'push' method.
// 8.Greater than Y - Given value of Y, write a function that takes an array and returns the number of values that are greater than Y. For example if arr = [1, 3, 5, 7] and Y = 3, your function will return 2. (There are two values in the array greater than 3, which are 5, 7).
// 9.Squares - Given an array with multiple values, write a function that replaces each value in the array with the value squared by itself. (e.g. [1,5,10,-2] will become [1,25,100,4])
// 10.Negatives - Given an array with multiple values, write a function that replaces any negative numbers within the array with the value of 0. When the program is done the array should contain no negative values. (e.g. [1,5,10,-2] will become [1,5,10,0])
// 11.Max/Min/Avg - Given an array with multiple values, write a function that returns a new array that only contains the maximum, minimum, and average values of the original array. (e.g. [1,5,10,-2] will return [10,-2,3.5])
// 12.Swap Values - Write a function that will swap the first and last values of any given array. The default minimum length of the array is 2. (e.g. [1,5,10,-2] will become [-2,5,10,1]).
// 13.Number to String - Write a function that takes an array of numbers and replaces any negative values within the array with the string 'Dojo'. For example if array = [-1,-3,2], your function will return ['Dojo','Dojo',2].

//1
function Num(){
var arr=[]
for(var i =1; i<=255; i++){
    arr.push(i);
}
console.log(arr);
}
Num();


//2
function sum_even_numbers(){
sum=0;
for(var i=1; i<=1000; i++){
    if(i%2==0){
        sum=sum+i;
        return sum
    }
    console.log(sum);
}  

}
sum_even_numbers();

//3
function sum_odd_nums(){
sum=0;
for(var i=0; i<=5000; i++){
    if(i%2 !=0 ){
        sum+=i;
    }

    return sum
}
    console.log(sum)
}

sum_odd_nums()

//4

function sumArr(arr){
var arr=[]
sum = 0;  
var newArr=[]
for(var i=0; i<arr.length; i++){
    sum = sum + arr[i];  
    newArr.push(sum);
    console.log(newArr);   
}
}
sumArr([6,3,5,1,2,4]);


//5
function max(arr){
    var max = arr[0];
    for(var i=1; i<arr.length; i++){
      if(arr[i] > max){
        max = arr[i];   
      }
     }
   return max;
}
   
max([4,12,3,8,0,22,56]); //output is 56


//6
function avg(arr){
    var sum =0;
    
    for(var i=0; i<arr.length; i++){
        sum+=arr[i]
        
    }
    return sum/arr.length;
}
avg([4,12,3,8,22]);

//7
function odd(){
    var arr=[];
    for(var i=1; i<=50; i++){
        if(i % 2 != 0){
            arr.push(i);
        }
    }
    console.log(arr);
}

odd();

//8
console.log(Y([2,3,5,7], 3));

function Y(arr, Y) {
    var count=0;
    for(var i=0; i<arr.length; i++){
        if(arr[i]>Y){
            count++;
        }  
    }
    return count; 
}

//9
function squareVal(arr) {
    var newArr=[]; 
    for(var i =0; i<arr.length; i++){
      var newI = arr[i]*arr[i];
        newArr.push(newI);
    }
    return newArr; 
}

//10
function noNeg(arr) {
    for(var i =0; i<arr.length; i++){
    
        if(arr[i]<0){
            arr[i]=0
            // arr.push(arr)
        }
    }
    
    return arr; 
}

//11
function maxMinAvg(arr) {
    //your code here 
    var max=arr[0]
    var min=arr[0]
    var sum=0;
    for(var i=0; i<arr.length; i++){
        if(max<arr[i] ){
            max=arr[i]
        }
        if(min>arr[i]){
            min=arr[i]
        }
        sum=sum+arr[i];
    }
    var avg=sum/arr.length;
    var arrnew=[max, min, avg];
    return arrnew; 
}

//12
function swap(arr) {
    //your code here 
    var temp=arr[0];
    arr[0]=arr[arr.length-1];
    arr[arr.length-1]=temp;
    
    return arr; 
}
//13
function numToStr(arr) {
    //your code here 
    for(var i=0; i<arr.length; i++){
        if(arr[i]<0){
            arr[i]='Dojo'
            
        }
        
    }
    return arr; 
}