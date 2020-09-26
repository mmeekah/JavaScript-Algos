function multiply(x,y){
    console.log(x);
    console.log(y);
}
var b = multiply(2,3);
console.log(b);

// 2
// 3
// undefined

function multiply(x,y){
    return x*y;
}
var b = multiply(2,3);
console.log(b);
console.log(multiply(5,2));
// 6
// 10


var x = [1,2,3,4,5,10];
for(var i=0; i<5; i++)
{
   i = i + 3; 
   console.log(i);
}

//3
//7

var x=15;
console.log(x);
function foo(){
    var x=10;
    console.log(x);
}
console.log(x);
foo();
console.log(x);

// 15
// 15
// 10
// 15

for(var i=0; i<15; i+=2){
    console.log(i);
 }

//  0
// 2
// 4
// 6
// 8
// 10
// 12
// 14


for(var i=0; i<3; i++){
    for(var j=0; j<2; j++){       
        console.log(i*j);
    }
 }

//  0
// 0
// 0
// 1
// 0
// 2

function foo(x,y){
    for(var i=0; i<x; i++){
       for(var j=0; j<x; j++){         
           console.log(i*j);
       } 
    }
 }
 var z = foo(3,3);
 console.log(z);

 //0
// 0
// 0
// 0
// 1
// 2
// 0
// 2
// 4
// undefined


function foo(x,y){
    for(var i=0; i<x; i++){
       for(var j=0; j<y; j++){         
          console.log(i*j);
       } 
    }
    return x*y;
 }
 var z = foo(3,5);
 console.log(z);


//  0
// 0
// 0
// 0
// 0
// 0
// 1
// 2
// 3
// 4
// 0
// 2
// 4
// 6
// 8
// 15
 


//print 1 to X. Have the function print all the integers from 1 to x.  If x is negative, have it print/log "negative number' and have the function return false.
function printUpTo(x){
    if (x >= 0){
        for (var i = 1; i <= x; i++){
        console.log(i);
        }
    }
    else {
    console.log('negative number');
    return false;
    }
}

printUpTo(100);// should print all the integers from 1 to 1000000
var y = printUpTo(-10);//should return false
console.log(y);//should print false

//printSum. Have the function print integers from 0 to 255 and with each integer print the sum so far.  Have the function return the final sum

function printSum(x){
    var sum = 0;
    for( var i = 0; i <= 255; i++){
        sum += i;
        console.log ('i:',i,'sum:',sum);
    }
    return sum;
  }
  var y = printSum(255) // should print all the integers from 0 to 255 and with each integer print the sum so far.
  console.log(y) // should print 32640

// PrintSumArray
// Please complete the code below to have the function return the sum of all the values in a given array

function printSumArray(x){
    var sum = 0;
    for(var i=0; i<x.length; i++) {
      sum += x[i];
    }
    return sum;
  }
  console.log( printSumArray([1,2,3]) ); // should log 6

 //Create a function that returns the largest element in a given array.  For example largestElement( [1,30,5,7] ) should return 30

 function largestElement(arr){
    var max = arr[0]; 
    for (var i = 1; i < arr.length; i++){
        if (max < arr[i]){
            max = arr[i]
        }
        return max;
     }
 }
 var x = largestElement( [1,30,5,7]);
 console.log( "The largest element in the array is", x);
