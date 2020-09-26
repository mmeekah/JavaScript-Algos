// Given an array and a value Y, count and print the number of array values greater than Y.

function valuesGreaterThanY(arr,y){
    var counter = 0;
    for ( var i = 0; i < arr.length; i++){
        if (arr[i] > y){
            counter += 1;
        }
    }
   
    return counter;
}

var x = valuesGreaterThanY([1,4,6,8,3,-1],0);
console.log(x);


// Given an array, print the max, min and average values for that array.

function minMaxAvg(arr){
    var min = arr[0];
    var max = arr[0];
    var sum = arr[0];
    var avg;
    for ( var i = 1; i<arr.length; i++){
        if(arr[i]<min){
            min = arr[i];
        }
        else if(arr[i]>max){
            max=arr[i];
        } 
        
        sum += arr[i];
    }
    console.log("Minimum:",min,"Maximum:",max);
    avg = sum/arr.length;
    return avg;
}
var z = minMaxAvg([1,1,1,1,2,2,2,2,5,5]);
console.log("Average:",z);


// Given an array of numbers, create a function that returns a new array where negative values were replaced with the string ‘Dojo’.   For example, replaceNegatives( [1,2,-3,-5,5]) should return [1,2, "Dojo", "Dojo", 5].

function replaceNegatives(arr){
    for (var i = 0; i < arr.length; i++){
        if (arr[i]<0){
            arr[i] = "Dojo";
        }
    }
    return arr;
}
var x = replaceNegatives([1,2,-3,-5,5]);
console.log(x);

// Given array, and indices start and end, remove vals in that index range, working in-place (hence shortening the array).  For example, removeVals([20,30,40,50,60,70],2,4) should return [20,30,70].

function removeVals(arr,idx1,idx2){
    var offset = idx2 - idx1 + 1;
    for (var i = idx1; i <= arr.length - offset; i++){
        arr[i] = arr[offset + i];
    }
    console.log(arr);
    arr.length = arr.length - offset;
    return arr;
}
var z = removeVals([20,30,40,50,60,70,80,90,100,110,120],2,4);
console.log(z);