
// Associative arrays are sometimes called maps 
// because a key (string) maps to a value. 
// Given two arrays, create an associative array (map) 
// containing keys of the first, and values of the second. 
// arr1 = ["abc", 3, "yo"] and 
// arr2 = [42, "wassup", true],
//  return {"abc": 42, 3: "wassup", "yo": true}.

// var arr1 = ["abc", 3, "yo"]
// var arr2 = [42, "wassup", true]
// var obj ={};
// arr1.forEach(function(item,index){
// obj[item]=arr2[index]
  
// });
// console.log(obj)


var arr1 = ["abc", 3, "yo"]
var arr2 = [42, "wassup", true]
myObject = {};
for(var i = 0; i < arr1.length; i++) {
myObject[arr1[i]] = arr2[i];
}

console.log(myObject);