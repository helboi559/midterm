// Please include the correct number of parameters in each function!
// Make sure every function returns something
// You can console.log() the functions with test input to test your functions in the space provided
// Read each question carefully
// Good luck!

/*
Write a function called sumOfOdds that takes in 2 numbers as parameters and sums the odd numbers between them.
This function is inclusive so please include your two parameters in your calculation.
After summing the numbers, return the sum.
You can assume that the 2nd number passed in will always be greater than the first and that the two numbers will not be the same
Note: This problem should account for negative number input
*/
//input:2 nums
//output:sum odd nums between them(inclusive)
function sumOfOdds(num1,num2){
//convert num to positive if negative
// let isPos = true
if (num1 < 0 ) {
    isPos = false
    num1 = Math.abs(num1)
}
//collect nums in array
// let arr = []
// collect sum total
let sumOdds = 0 ;
//  let sumOfEvens = 0
for(num1 ; num1 <= num2 ; num1++) {
    if(num1 % 2 === 1) {
        sumOdds += num1
    }
}
  return sumOdds  
}




/* console.logs to test */
console.log("sumOfOdds");
console.log("////////////////////////////////////////////////////////////////////////////\n");
//Add console.logs here to test!  Feel free to format this section however you like
console.log(sumOfOdds(3,15)) //63
console.log(sumOfOdds(-3,11)) //37
console.log(sumOfOdds(0,20)) //100
console.log(sumOfOdds(-10,-1)) //-21
console.log("\n////////////////////////////////////////////////////////////////////////////\n");

/*
Write a function arraySubtract that takes in 2 arrays of numbers and subtracts the item in each index at array 1 with its respective item in each index at array 2.
The result of each calculation should be placed in a new array and that array should be returned when the calculations are complete.
For exmaple arraySubtract([7,9],[2,6]) should return [5,3]
You can assume the arrays that are being input are of the same length
*/
//input: 2 arrays
//output: new array with subtraction of each element
function arraySubtract(arr1,arr2){
    //create empt arr
    let newArr = []
    //iterate both arrays
    for(let i = 0 ;i < arr1.length ; i++) {
        //subtract nums at matching index
        newArr.push(arr1[i] - arr2[i])
    }
    return newArr
}

/* console.logs to test */
console.log("arraySubtract");
console.log("////////////////////////////////////////////////////////////////////////////\n");
//Add console.logs here to test!  Feel free to format this section however you like
console.log(arraySubtract([2,5],[1,3])) //[1,2]
console.log(arraySubtract([11,7,20],[8,2,43])) //[3,5,-23]
console.log(arraySubtract([30,24,39,9],[15,6,20,5])) //[15,18,19,4]
console.log("\n////////////////////////////////////////////////////////////////////////////\n");


/*
Write a function that takes in 3 parameters in this order: 1 array, 1 string, and then another string.
Add the first string to the beginning of the array
Add the second string to the end of the array
Return the modified array
*/
//input:arr (2 str)
//output: modified arr with strings added
function surroundArray(arr,str1,str2){
    arr.unshift(str1)
    arr.push(str2)
    return arr
}

/* console.logs to test */
console.log("surroundArray");
console.log("////////////////////////////////////////////////////////////////////////////\n");
//Add console.logs here to test!  Feel free to format this section however you like
console.log(surroundArray([1,2,3,4],'cat', 'dog')) // ['cat',1,2,3,4,'dog']
console.log(surroundArray([false,2,'hello',4],'tiger', 'lion')) //['tiger',false,2,'hello',4,'lion']
console.log("\n////////////////////////////////////////////////////////////////////////////\n");


/*
Write a function longestString that takes in an array of strings as a parameter and returns the longest string in the array.
If there is nothing in the array, return an empty string ('')
You can assume that no two strings will have the same length in the array
*/
//input:arr of string
//longest string in array
function longestString(arr){
    //set var identify longest
    let longest = arr[0];
    //iterate arr and compare length of strings
    for(let i = 0 ;i < arr.length ; i++) {
        //set longest length of str
        if(arr[i].length > longest.length) {
            longest = arr[i]
        }
    }
    //return longest
    return longest
}

/* console.logs to test */
console.log("longestString");
console.log("////////////////////////////////////////////////////////////////////////////\n");
//Add console.logs here to test!  Feel free to format this section however you like
console.log(longestString(['lets do this', 'cow', 'minute'])) //'lets do this'
console.log(longestString(['hi', 'javscript', 'forever'])) // 'javascript'
console.log("\n////////////////////////////////////////////////////////////////////////////\n");


/*
Write a function sToR that replaces every 's' character in the string with an 'r' AND every 'r' character in the string with an 's'
If the letter in the original string is uppercase the letter in the output string should be as well
Do NOT use replaceAll or similar string methods.  If you are unsure what that means, ask before you use a string method!  (toUpperCase() and toLowerCase() should be all you need if anything)
*/
//input:str
//output:replace every "s" with "r" and "r" with "s"
function sToR(str){
    //create a empt str
    let newStr = ''
    //iterate str
    for(let i = 0 ; i < str.length ; i++) {
        //replace chars as newOnes
        if(str[i] === 's') {
            newStr += 'r'
        } else if (str[i] === 'r'){
            newStr += 's'
        } else if (str[i] === 'R'){
            newStr += 'S'
        } else if (str[i] === 'S'){
            newStr += 'R'
        } else {
            newStr += str[i]
        }
    }
    //return newStr
    return newStr
}

/* console.logs to test */
console.log("sToR");
console.log("////////////////////////////////////////////////////////////////////////////\n");
//Add console.logs here to test!  Feel free to format this section however you like
console.log(sToR('Sears is veRy far')) //"Reasr ir veSy fas"
console.log("\n////////////////////////////////////////////////////////////////////////////\n");


/*
Write a function divisibleBy4And7 that takes in a number and returns true if it is divisble by both 4 and 7.
If it is not, return false.
*/

function divisibleBy4And7(num){
    //use modulo operator and compare remainders
    return num % 4 === 0 && num % 7 === 0 
}

/* console.logs to test */
console.log("divisibleBy4And7");
console.log("////////////////////////////////////////////////////////////////////////////\n");
//Add console.logs here to test!  Feel free to format this section however you like
console.log(divisibleBy4And7(28)) //true
console.log(divisibleBy4And7(-56)) //true
console.log(divisibleBy4And7(40)) //false
console.log("\n////////////////////////////////////////////////////////////////////////////\n");


/*
Write a function exclamationAndQuestion that takes in a string
return true if the string contains both an exclamation point (!) AND a question mark (?)
Return false if otherwise
*/
//input:str
//output:boolean(contains "!" && "?")
function exclamationAndQuestion(str){
    //characters to check
    let exclamation = '!'
    let question = "?"
    let countE = ""
    let countQ = ""
    //loop and check char existence
    for(let char of str) {
        if (exclamation.includes(char)) {
            countE += char
        }
        if (question.includes(char)) {
            countQ += char
        }
    }
    //check if any characters exist in both return true or always false
    if (countQ.length > 0 && countE.length > 0) {
        return true
    } else {
        return false
    }
}

/* console.logs to test */
console.log("exclamationAndQuestion");
console.log("////////////////////////////////////////////////////////////////////////////\n");
//Add console.logs here to test!  Feel free to format this section however you like
console.log(exclamationAndQuestion('there is alot! Is there not?')) //true
console.log(exclamationAndQuestion('hello juan, why not?')) //false
console.log(exclamationAndQuestion('ther!e will be a resurgence'))  //false
console.log("\n////////////////////////////////////////////////////////////////////////////\n");


/*
Write a function called countAB that takes in a single string and returns an array of length two.  The first item in the array should be the count of every A character in the array.  The 2nd item should be the count of every B character in the array.  
No need to add the count of A and B together.  Again, we want an array with the separate counts of each
Your function should account for both cases (upper and lower) of each letter.
*/
//input:str chars
//output: count(a,b) case insensitive in an array
function countAB(str){
    //set count of chars
    let aCount = 0
    let bCount = 0
    //iterate chars
    for(let i = 0 ; i < str.length ; i++) {
        //if char exist
        if(str[i] === 'a' || str[i] === 'A' ) {
            //increase respective count
            aCount ++
        } else if (str[i] === 'b' || str[i] === 'B' ) {
            bCount ++
        }
        // totals.push(aCount,bCount)
    }
    //set empt array to collect totals
    //return newArr
    let totals = [aCount,bCount];
    return totals
}

/* console.logs to test */
console.log("countAB");
console.log("////////////////////////////////////////////////////////////////////////////\n");
//Add console.logs here to test!  Feel free to format this section however you like
console.log(countAB('As always Be bold , Be better bob')) //[3,6]
console.log("\n////////////////////////////////////////////////////////////////////////////\n");


/* 
Write a function called addStringIfLastS() that takes in two parameters.  First, an array of strings and second a single string.  
Go through each string in the array.  If the string ends in the letter 's' (either case), append your string input to that string in the array.
Finally, return your modified array.
Example: addStringIfLastS(['test', 'testing', 'testings'], 'TEST') => ['test', 'testing', 'testingsTEST']
*/
//input:arr(strs) && str
//output: modified arr 
function addStringIfLastS(arr,str){
    //check each char in array and see if it ends with s
    for(let i = 0 ; i < arr.length ; i++) {
        let lastChar = arr[i][arr[i].length-1]
        // console.log(arr[i][arr[i].length-1])
        if(lastChar === 's' || lastChar === "S") {
            //curr word will be edited to add the str
            arr[i] = arr[i] + str
        }
    }
    return arr
    
}

/* console.logs to test */
console.log("addStringIfLastS");
console.log("////////////////////////////////////////////////////////////////////////////\n");
//Add console.logs here to test!  Feel free to format this section however you like
console.log(addStringIfLastS(['hello','my World', 'girraffes'], 'climbs')) // ['hello','my World', 'girraffesclimbs']
console.log(addStringIfLastS(['hellos','my World', 'girraffes'], 'climbs')) //['hellosclimbs','my World', 'girraffesclimbs']
console.log("\n////////////////////////////////////////////////////////////////////////////\n");


/* 
Write a function called twoSmallest that takes in a single array of numbers as a parameter and returns the smallest two numbers in the following array format where the smallest number always comes before the 2nd smallest number (ie, the bigger number should come second): 
[smallestNumber, secondSmallestNumber]
If the array is shorter than length 2, return undefined to the user
You can assume that every number in the array will be unique
*/
//input: arr nums
//output: arr of 2 smallest nums
function twoSmallest(arr){
    //handle edge case
    if(arr.length < 2) {
        return undefined
    }
    //smallest num var && second smallest var
    let smallest = arr[0]
    let secondSmallest = arr[1]
    
    //iterate nums
    for(let i = 0 ; i < arr.length ; i++) {
        //find two smallest nums
        //get the smallest first
        if(arr[i] < smallest) {
            smallest = arr[i];
        }
        //get second smallest
        if(arr[i] > smallest && arr[i] < secondSmallest) {
            secondSmallest = arr[i]
        }
    }
    // console.log(smallest)
    // console.log(secondSmallest)
    //set arr to identify smallest/second smallest
    let newArr = [smallest,secondSmallest]
    return newArr;
}

/* console.logs to test */
console.log("twoSmallest");
console.log("////////////////////////////////////////////////////////////////////////////\n");
//Add console.logs here to test!  Feel free to format this section however you like
console.log(twoSmallest([12,5,444,-10])) //[-10,5]
console.log(twoSmallest([55,1000,23,54])) //[23,54]
console.log(twoSmallest([55]))  //undefined
console.log("\n////////////////////////////////////////////////////////////////////////////\n");

