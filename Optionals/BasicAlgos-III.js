function foo(x,y){
    return 5;
  }
  console.log(foo(5,5))

  //5

  function foo(x,y){
    var z = []
    z.push(x);
    z.push(y);
    z.push(5);
    console.log(z);
    return z;
}
var b = foo(2,2)
console.log(b);
console.log(foo(6,8));

// [ 2, 2, 5 ]
// [ 2, 2, 5 ]
// [ 6, 8, 5 ]
// [ 6, 8, 5 ]

function foo(x){
    var z = [];
    z.push(x);
    z.pop();
    z.push(x);
    z.push(x);
    return z;
 }
 var y = foo(2);
 y.push(5);
 console.log(y);

 //[ 2, 2, 5 ]\

 function foo(x){
    if(x[0] <x [1]) {
       return true;
    }
    else {
       return false;
    }
 }
 var b = foo([2,3,4,5])
 console.log(b);
 //true


 function foo(x){
    for(var i=0; i<x.length; i++){
      if(x[i] > 0){
           x[i] = "Coding"
      }
  }
}
console.log(foo([1,2,3,4]))

//undefined

function foo(x){
    for(var i=0; i<x.length; i++){
      if(x[i] > 5){
           x[i] = "Coding"
      }
      else if(x[i] < 0){
           x[i] = "Dojo"
      }
  }
}
console.log(foo([5,7,-1,4]))
//undefined


function foo(x){
    if(x[0] > x[1]) {
     return x[1];
    }
    return 10;
 }
 var b = foo([5,10])
 console.log(b);

 //10

 function sum(x){
    var sum = 0;
    for(var i=0; i<x.length; i++){
       sum = sum + x[i];
       console.log(sum);
    }
    return sum;
}

//nothing

//1) Analyze an array’s values and return the average of each respective array.
function printAverage(x){
    var sum = 0;
    for(var i = 0; i < x.length; i++){
        sum += x[i];
    }
    var average = sum / x.length;
    return average;
 }
 y = printAverage([1,2,3]);
 console.log(y); // should log 2
   
 y = printAverage([5,2,8]);
 console.log(y); // should log 5

// 2) Create an array with all the odd integers between 1 and 255 (inclusive)
function returnOddArray(){
    var array = [];
    for( var i = 1; i <= 255; i++){
        if(i%2 ===1){
            array.push(i);
        }
    }
    return array;
 }
 y = returnOddArray();
 console.log(y); // should log [1,3,5,...,253,255]

 //3) Square each value in a given array, returning that same array with changed values.
 function squareValue(x){
    for(var i = 0; i < x.length; i++){
        var square = x[i]*x[i];
        x[i] = square;
    }
    return x;
 }
 y = squareValue([1,2,3]);
 console.log(y); // should log [1,4,9]
   
 y = squareValue([2,5,8]);
 console.log(y); // should log [4,25,64]
