/*
 * The flat() method creates a _new array_ with all sub-array elements concatenated into it recursively
 * up to the specified depth. - mozilla
 * 
 * flat() can also be used to clean data. e.g. an array with empty entries, using flat can
 * remove it which cleans up the data. 
 * 
 * flatMap() - .flat() (flattens the result to depth of 1) + .map() feature
 * 
 * .trimStart() and .trimEnd() to trim white spaces
 * 
 * Object.fromEntries() - convert array to object; .entries() does the opposite: converts object to array;
 * and that's where 'from'Entries comes from. 
 * 
 * try {} catch {} - try a piece of code and do something in the catch block if there's any errors. 
 * ES10 does not force the error parameter to be defined
 * 
 */

// Solve the below questions:

// #1 Turn this array into a new array: [1,2,3,[4],[5]]. Bonus if you can do it on one line
const array = [[1], [2], [3], [[[4]]], [[[5]]]]
array.flat(2);

// #2 Turn this array into a new array: [ 'Hello young grasshopper!', 'you are', 'learning fast!' ]
const greeting = [["Hello", "young", "grasshopper!"], ["you", "are"], ["learning", "fast!"]];
// ❎greeting.flat();
greeting.flatMap(x => x.join(''));

//#3 Turn the greeting array above into a string: 'Hello young grasshopper you are learning fast!'
greeting.flatMap(x => x.join(' ')).join(' ');


//#4 Turn the trapped 3 number into: [3]
const trapped = [[[[[[[[[[[[[[[[[[[[[[[[[[3]]]]]]]]]]]]]]]]]]]]]]]]]];
trapped.flat(50);

//#5 Clean up this email to have no whitespaces. Make the answer be in a single line (return a new string):
const userEmail3 = '     cannotfillemailformcorrectly@gmail.com   '
userEmail3.trimStart().trimEnd();


//#6 Turn the below users (value is their ID number) into an array: [ [ 'user1', 18273 ], [ 'user2', 92833 ], [ 'user3', 90315 ] ]
const users = { user1: 18273, user2: 92833, user3: 90315 }
const users2 = Object.entries(users);


//#7 change the output array of the above to have the user's IDs multiplied by 2 -- Should output:[ [ 'user1', 36546 ], [ 'user2', 185666 ], [ 'user3', 180630 ] ]
const users3 = users2.flatMap(user => [[user[0], user[1] * 2]]);

//#8 change the output array of question #7 back into an object with all the users IDs updated to their new version. Should output: { user1: 36546, user2: 185666, user3: 180630 }
Object.fromEntries(users3);