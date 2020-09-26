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
 


function printUpTo(x){
    for(var i=1; i<x.length;i++){
        if(i>0){
            return false
        }

        console.log(i)
    }
   
  }
  printUpTo(1000000); // should print all the integers from 1 to 1000000
  var y = printUpTo(-10); // should return false
  console.log(y); // should print false

