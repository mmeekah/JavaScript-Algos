// Sigma - Implement function sigma(num) that, given a number, returns the sum of all positive integers up to the given number (inclusive).  Ex: sigma(3) = 6 (or 1+2+3); sigma(5) = 15 (or 1+2+3+4+5).
// Factorial - Write a function factorial(num) that, given a number, returns the product (multiplication) of all positive integers from 1 up to the given number (inclusive).  For example, factorial(3) = 6 (or 1*2*3); factorial(5) = 120 (or 1*2*3*4*5).
// Fibonacci - Create a function to generate Fibonacci numbers.  In this famous mathematical sequence, each number is the sum of the previous two, starting with values 0 and 1.  Your function should accept one argument, an index into the sequence (where 0 corresponds to the initial value, 4 corresponds to the value four later, etc).  Examples: fibonacci(0) = 0 (given), fibonacci(1) = 1 (given), fibonacci(2) = 1 (fib(0)+fib(1), or 0+1), fibonacci(3) = 2 (fib(1) + fib(2)3, or 1+1), fibonacci(4) = 3 (1+2), fibonacci(5) = 5 (2+3), fibonacci(6) = 8 (3+5), fibonacci(7) = 13 (5+8).  Do this without using recursion first.  If you don't know what a recursion is yet, don't worry as we'll be introducing this concept in Part 2 of this assignment.
// Array: Second-to-Last: Return the second-to-last element of an array. Given [42, true, 4, "Liam", 7], return "Liam".  If array is too short, return null.
// Array: Nth-to-Last: Return the element that is N-from-array's-end.  Given ([5,2,3,6,4,9,7],3), return 4.  If the array is too short, return null.
// Array: Second-Largest: Return the second-largest element of an array. Given [42,1,4,3.14,7], return 7.  If the array is too short, return null.
// Double Trouble: Create a function that changes a given array to list each existing element twice, retaining original order.  Convert [4, "Ulysses", 42, false] to [4,4, "Ulysses", "Ulysses", 42, 42, false, false].


//Sigma
function sigma(num){
    
    count=0;
    for(var i=1; i<=num; i++){
        count=count+i
    }
    return count;
    

    
}

console.log(sigma(3))

//Factorial

function factorial(num){
    var count=1;
    if(num>0){

        for(var i=1; i<=num; i++){
            count=count*i
        }
        
    } 
    return count
    
}

console.log(factorial(5))


//Fibonacci 
function fibonacci(num){
    var arr=[0,1]
    for(var i=2;i<num; i++ ){
       arr[i]=arr[i-1]+arr[i-2]
       arr.push(arr[i])
        
    }
    return arr[num-1];
}
console.log(fibonacci(7))

// function fibonacci(number) {

// 	var sequence = [1, 1];

// 	for (var i = 2; i < number; i++) {
// 		sequence[i] = sequence[i-1]+ sequence[i-2];
// 	}

// 	return sequence[number-1];
// }

//



//Array: Second-to-Last:

function SecondToLast(arr){
    

    console.log(arr[arr.length-2])
    // return arr[arr.length-2]

    if(arr.lenth=0){
        return null
    }
    
}


console.log(SecondToLast( [42, true, 4, "Liam", 7]))


//Array: Nth-to-Last: 

function arrayNthToLast(arr, num) {
    // Check array length
    if(arr.length < num){
      return null;
    }
  
    console.log(arr[arr.length - num]);
  
}

var arr1 = [5,2,3,6,4,9,7];
var num1 = 3;
arrayNthToLast(arr1, num1);


//

function arraySecondLargest(arr) {
    var max = arr[0];
    var almostMax = arr[0];
  
    //check array length
    if(arr.length < 2){
      return null;
    }
  
    //find max
    for(var i = 0; i < arr.length; i ++){
      if(arr[i] > max){
        max = arr[i]
      }
    }
  
    for(var i = 0; i <arr.length; i ++){
      if(arr[i] > almostMax && arr[i] < max){
        almostMax = arr[i];
      }
    }
  
    console.log(almostMax);
  }
  
  var arr1 = [1,2,3,4,5,6,7,8,9];
  arraySecondLargest(arr1);
  
  var arr1 = [42,1,4,Math.PI,7];
  arraySecondLargest(arr1);
  
  

  //Double Trouble

function doubleTrouble(arr) {
    for (let i = 0; i < arr.length; i += 2) {
        for (let j = arr.length - 1; j > i; j--) {
            arr[j + 1] = arr[j];
        }
        arr[i + 1] = arr[i];
    }
    return arr;
}

let myArr = [4, "Ulysses", 42, false];
console.log(doubleTrouble(myArr));