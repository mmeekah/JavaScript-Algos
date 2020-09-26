var users = [{name: "Michael", age:37}, {name: "John", age:30}, {name: "David", age:27}];

function getNameAge(arr){

    for(var i=0; i<arr.length; i++){
        console.log( "name: "+ arr[i].name + "; age: "+ arr[i].age );
        // console.log(arr[i].age);
    }
    
}

getNameAge(users);

// console.log(users[0].name);