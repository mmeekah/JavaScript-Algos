// Array: Concat
// Replicate JavaScript’s concat(). Create a standalone function that accepts two arrays. Return a new
// array containing the first array’s elements, followed by the second array’s elements. Do not alter the
// original arrays. Ex.: arrConcat( ['a','b'], [1,2] ) should return new array ['a','b',1,2].

// Extra challenge: Can you make a function that does something similar, but alternates the items? So:
// [2,4,6] and [1,2,3] would be:
// [2,1,4,2,6,3] 


function arrConcat(arr1, arr2){
    
    const arr3 = arr1.concat(arr2);
    
    console.log(arr3);
    

}

arrConcat( ['a','b'],[1,2]);


//Extra Chanllenge


function alterARR(arr1,arr2){
    
    if(arr1.length=arr2.length){
        var c =[]
        for(var i=0; i<arr1.length; i++){
            c.push(arr1[i], arr2[i])
        }
        return c
    }
   return null
    
}

console.log(alterARR([1, 2, 3, 4, 5],['a', 'b', 'c', 'd', 'e']));
// function merge(array1, array2) {
//     if (array1.length == array2.length) {
//       var c = [];
//       for (var i = 0; i < array1.length; i++) {
//         c.push([array1[i], array2[i]]);
//       }
//       return c;
//     }
//     return null;
//   }


// var array1 = [1, 2, 3, 4, 5];
// var array2 = ['a', 'b', 'c', 'd', 'e'];

// var arrayCombined = $.map(array1, function(v, i) {
//   return [v, array2[i]];
// });

// console.log(arrayCombined);