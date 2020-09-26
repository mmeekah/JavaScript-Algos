// // Array: Pop Front
// // Given array, remove and return the value at the
// // beginning of the array. Do this without using any
// // built-in array methods except pop().

// arr = [1,2,3,4]

function popFront(arr) {

    var x = arr[0];

    for(var i = 0; i < arr.length - 1; i++) {
        arr[i] = arr[i + 1];
    }
    // arr.pop();
    arr.length = arr.length -1; 
    console.log(arr);
    return x;
}
console.log(popFront([1,2,3,4]));