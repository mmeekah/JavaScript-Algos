// var num = 5.67;
// var floor = Math.floor(num);
// console.log(floor);
// var ceil = Math.ceil(num);
// console.log(ceil);
// var trunc = Math.trunc(num);
// console.log(trunc);

// Math.random() produces a random number between 0 and 1
// It never actually gets to 1
// Math.ceil( Math.random() ) will round UP whatever number random produces
// Math.ceil( Math.random() * 6 ) will make numbers from 1 to 6
// Basically, multiply random by the number you want

// 1) Create function rollOne() to return a randomly selected integer between 1 and 6 (inclusive).
function rollOne() {
    var rand = Math.ceil( Math.random() * 6 )
    console.log(rand)
    return rand
}

// Create a new function named playStatistics(), which should call rollOne() eight
// times (but not print anything after each call). After the last of these eight calls, it should print out
// the lowest and highest values that it received from rollOne, among those eight calls.

// Roll 8 dice
// Write down the result of each roll
// Compare all the numbers together and find the smallest and largest
var roll_arr = []
for (var i = 1 ; i <= 8 ; i++) {
    roll_arr.push( rollOne() )
}
console.log(roll_arr)

var min = 7
var max = 0
for(var i = 0 ; i < roll_arr.length ; i++) {
    if ( roll_arr[i] > max ) {
        max = roll_arr[i]
    }
    // ADD MIN CODE HERE
}
console.log(max)

// Make a copy of playStatistics and add code to make playStatistics2(), so
// that at the end (in addition to printing high/low rolls), it also prints the total sum of all eight rolls.




// Copy playStatistics2 and add code to it to make playStatistics3(num), so that
// it will roll as many times as you want, instead of always doing this eight times.





// Make a copy of playStatistics3 and change it to create playStatistics4(num),
// so that at the end instead of the total sum, it prints the average roll.






//  Statistics Until Doubles
// Here’s another game for our New Year’s Eve party. Implement a ’20-sided die’ that randomly returns
// integers between 1 and 20 inclusive. Roll these, tracking statistics until you get a value twice in a row.
// Display number of rolls, min, max, and average






function playStatistics() {
    var roll_arr = []
    for (var i = 1; i <= 8; i++) {
        roll_arr.push(rollOne())
    }
    console.log(roll_arr)

    var min = 7
    var max = 0
    for (var i = 0; i < roll_arr.length; i++) {
        if (roll_arr[i] > max) {
            max = roll_arr[i]
        }
        if(roll_arr[i] < min){
            min = roll_arr[i]
        }

    }
    console.log(max)
    console.log(min)
}
playStatistics();

// Make a copy of playStatistics and add code to make playStatistics2(), so
// that at the end (in addition to printing high/low rolls), it also prints the total sum of all eight rolls.


function playStatistics2() {
    var roll_arr = []
    var sum = 0;

    for (var i = 1; i <= 8; i++) {
        roll_arr.push(rollOne())
    }
    console.log(roll_arr)

    var min = 7
    var max = 0
    for (var i = 0; i < roll_arr.length; i++) {
        if (roll_arr[i] > max) {
            max = roll_arr[i]
        }
        if(roll_arr[i] < min){
            min = roll_arr[i]
        }
        sum = sum + roll_arr[i]

    }
    console.log(max)
    console.log(min)
    console.log(sum)
}
playStatistics2();



// Copy playStatistics2 and add code to it to make playStatistics3(num), so that
// it will roll as many times as you want, instead of always doing this eight times.

function playStatistics3(num) {
    var roll_arr = []
    var sum = 0;

    for (var i = 1; i <= num; i++) {
        roll_arr.push(rollOne())
    }
    console.log(roll_arr)

    var min = 7
    var max = 0
    for (var i = 0; i < roll_arr.length; i++) {
        if (roll_arr[i] > max) {
            max = roll_arr[i]
        }
        if(roll_arr[i] < min){
            min = roll_arr[i]
        }
        sum = sum + roll_arr[i]

    }
    console.log("max: " + max)
    console.log("min: " + min)
    console.log("sum: " + sum)
}
playStatistics3(10);



// Make a copy of playStatistics3 and change it to create playStatistics4(num),
// so that at the end instead of the total sum, it prints the average roll.


function playStatistics4(num) {
    var roll_arr = []
    var sum = 0;


    for (var i = 1; i <= num; i++) {
        roll_arr.push(rollOne())
    }
    console.log(roll_arr)

    var min = 7
    var max = 0
    for (var i = 0; i < roll_arr.length; i++) {
        if (roll_arr[i] > max) {
            max = roll_arr[i]
        }
        if(roll_arr[i] < min){
            min = roll_arr[i]
        }
        sum = sum + roll_arr[i]
    }

    var ave = sum/ roll_arr.length
    console.log("num: " + num)
    console.log("max: " + max)
    console.log("min: " + min)
    console.log("average: " + ave)
}
playStatistics4(10);




//  Statistics Until Doubles
// Here’s another game for our New Year’s Eve party. Implement a ’20-sided die’ that randomly returns
// integers between 1 and 20 inclusive. Roll these, tracking statistics until you get a value twice in a row.
// Display number of rolls, min, max, and average


// Not quite finished...

function d20() {
    var rand = Math.ceil(Math.random() * 20)
    console.log(rand)
    return rand
}
d20()

function trackStat(num) {
    var sum = 0
    var min = 21
    var max = 0
    var roll = []
    var ave = 0

    for(var i = 0; i < roll.length; i++)
    {
        //add one roll to the array
        roll.push(d20())
        //calculate statistics
        if (roll[i] > max) {
            max = roll[i]
        }
        if(roll[i] < min){
            min = roll[i]
        }
        sum = sum + roll[i]

        //log statistics at current roll
        ave = sum / roll.length
        console.log("num: " + num)
        console.log("max: " + max)
        console.log("min: " + min)
        console.log("average: " + ave)
    }

}