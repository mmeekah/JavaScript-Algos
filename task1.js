// Print odds 1-20
// Print out all odd numbers from 1 to 20
// The expected output will be 1, 3, 5, 7, 9, 11, 13, 15, 17, 19

// set up a loop that starts at 1
// make sure the loop stops at 20
// make sure we go up by 1 each time
// every loop, check if the current loop number is odd
// if it is odd, print that number to the console

// WRITE THE Code!
for(i=1; i<=20; i++){
   if(i%2 != 0){
       console.log(i);
   }
}

// Sum and Print 1-5
// Sum numbers from 1 to 5, printing out the current number and sum so far at each step of the way
// The expected output will be: Num: 1, Sum: 1, Num: 2, Sum: 3, Num: 3, Sum: 6, Num: 4, Sum: 10, Num: 5, Sum: 15

// I need to add up all numbers from 1 to 5
// so, 1 + 2 + 3 + 4 + 5
// I need to remember the sum somehow (variable)
// Set up a loop starting at 1
// Make sure the loop gets to 5
// Go up by one number each time
// What to do every loop:
// - take the current loop number and add it to sum
// - log the current loop number to the console
// - log the sum to the console

// WRITE THE CODE!
   var sum=0;
for(i=1; i<=5; i++){
    sum+=i;
    console.log('i=', i);
    console.log('sum=', sum);
}