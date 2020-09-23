function a(){
    return 35;
}
console.log(a())

//output
//35

function a(){
    return 4;
}
console.log(a()+a());

//output: 4
//output: 8

function a(b){
    return b;
}
console.log(a(2)+a(4));

// output:
// undefined
// NaN
// 6

function a(b){
    console.log(b);
    return b*3;
}
console.log(a(3));

// output:
// undefined
// NaN
// undefined
// undefined
// NaN
// 2
// 4
// 18
// 3
// 9


function a(b){
    return b*4;
    console.log(b);
 }
 console.log(a(10));

//  output:
//  NaN
// NaN
// 24
// 12
// 40

function a(b){
    if(b<10) {
        return 2;
    }
    else     {
        return 4;
    }
    console.log(b);
}
console.log(a(15));

// output:
// 4
// 8
// 4
// 2
// 4
// 4

function a(b,c){
    return b*c;
}
console.log(10,3);
console.log( a(3,10) );

// output:
// NaN
// NaN
// NaN
// NaN
// NaN
// NaN
// 10 3
// 30

function a(b){
    for(var i=0; i<10; i++){
        console.log(i);
    }
    return i;
}
console.log(3);
console.log(4);



// output:
// 0
// 1
// 2
// 3
// 4
// 5
// 6
// 7
// 8
// 9
// 10
// 0
// 1
// 2
// 3
// 4
// 5
// 6
// 7
// 8
// 9
// 0
// 1
// 2
// 3
// 4
// 5
// 6
// 7
// 8
// 9
// 20
// 0
// 1
// 2
// 3
// 4
// 5
// 6
// 7
// 8
// 9
// 0
// 1
// 2
// 3
// 4
// 5
// 6
// 7
// 8
// 9
// 20
// 0
// 1
// 2
// 3
// 4
// 5
// 6
// 7
// 8
// 9
// 10
// 0
// 1
// 2
// 3
// 4
// 5
// 6
// 7
// 8
// 9
// 10
// 0
// 1
// 2
// 3
// 4
// 5
// 6
// 7
// 8
// 9
// 10
// 10 3
// 0
// 1
// 2
// 3
// 4
// 5
// 6
// 7
// 8
// 9
// 10
// 3
// 4


function a(){
    for(var i=0; i<10; i++){
        i = i +2;
        console.log(i);
    }
}
a();

//output
// 2
// 5
// 8
// 11
// undefined
// 2
// 5
// 8
// 11
// 2
// 5
// 8
// 11
// NaN
// 2
// 5
// 8
// 11
// 2
// 5
// 8
// 11
// NaN
// 2
// 5
// 8
// 11
// undefined
// 2
// 5
// 8
// 11
// undefined
// 2
// 5
// 8
// 11
// undefined
// 10 3
// 2
// 5
// 8
// 11
// undefined
// 3
// 4
// 2
// 5
// 8
// 11

function a(b,c){
    for(var i=b; i<c; i++) {
       console.log(i);
   }
   return b*c;
}
a(0,10);
console.log(a(0,10));

//output
// NaN
// NaN
// NaN
// NaN
// NaN
// NaN
// 10 3
// 3
// 4
// 5
// 6
// 7
// 8
// 9
// 30
// 3
// 4
// 0
// 1
// 2
// 3
// 4
// 5
// 6
// 7
// 8
// 9
// 0
// 1
// 2
// 3
// 4
// 5
// 6
// 7
// 8
// 9
// 0

function a(){
    for(var i=0; i<10; i++){
       for(var j=0; j<10; j++){
           console.log(j);
       }
       console.log(i);
    }
}

// output:

function a(){
    for(var i=0; i<10; i++){
        for(var j=0; j<10; j++){
            console.log(i,j);
        }
        console.log(j,i);
    }
}

//output
var z = 10;
function a(){
    var z = 15;
    console.log(z);
}
console.log(z);

//output
15
// undefined
// 15
// 15
// NaN
// 15
// 15
// NaN
// 15
// undefined
// 15
// undefined
// 15
// undefined
// 10 3
// 15
// undefined
// 3
// 4
// 15
// 15
// 15
// undefined
// 10

var z = 10;
function a(){
    var z = 15;
    console.log(z);
}
a();
console.log(z);

//output
// 15
// undefined
// 15
// 15
// NaN
// 15
// 15
// NaN
// 15
// undefined
// 15
// undefined
// 15
// undefined
// 10 3
// 15
// undefined
// 3
// 4
// 15
// 15
// 15
// undefined
// 10
// 15
// 10

var z = 10;
function a(){
    var z = 15;
    console.log(z);
    return z;
}
z = a();
console.log(z);

//output
// 15
// 15
// 15
// 15
// 30
// 15
// 15
// 30
// 15
// 15
// 15
// 15
// 15
// 15
// 10 3
// 15
// 15
// 3
// 4
// 15
// 15
// 15
// 15
// 10
// 15
// 10
// 15
// 15