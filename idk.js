// **Comment Your Code**
var number = 5; // in-line comment

/* this is a
multi-line comment */

number = 9;

// **Data Types and Variables**
/* Data Types:
undefined, null, boolean, string, symbol, number, and object
*/

var myName = "Brandon";

myName = 8;

// let ourName = "freeCodeCamp";

const pi = 3.14;

// **Storing Values with the Assignment Operator**
var a;
var b = 2;
console.log(a)
a = 7;

b = a;

console.log(a)

// **Initialize Variables with the Assignment Operator**
var a = 9;

// **Uninitialized Variables**
// Initialize these three variables
var a = 5;
var b = 10;
var c = "I am a ";

// Do not change code below this line

a = a + 1;
b = b + 5;
c = c + "String!";

// **Case Sensitivity in Variables**
// Declarations
var studlyCapVar;
var properCamelCase;
var titleCaseOver;

// Assignments
studlyCapVar = 10;
properCamelCase = "A String";
titleCaseOver = 9000;

// **Adding Numbers**
var sum = 10 + 10;
console.log(sum);

// **Subtracting Numbers**
var difference = 45 - 33;

// **Multiplying Numbers**
var product = 8 * 10;

// **Dividing Numbers**
var quotient = 66 / 33;

// **Incrementing Numbers**
var myVar = 87;

//Only change code below this line
myVar++;

// **Decrementing Numbers**
var myVar = 11;

// Only change code below this line
myVar--;

// **Decial Numbers**
var ourDecimal = 5.7;

//Only change code below this line

var myDecimal = 0.009;

// **Multiply Decimals**
var product = 2.0 * 2.5;
console.log(product);

// **Divide Decimals**
var quotient = 4.4 / 2.0;

// **Finding a Remainder**
// Only change code below this line

var remainder;
remainder = 11 % 3;

// **Compound Assignment with Augmented Addition**
var a = 3;
var b = 17;
var c = 12;

// Only modify code below this line

a += 12;
b += 9;
c += 7;

// **Compound Assignment with Augmented Subtraction**
var a = 11;
var b = 9;
var c = 3;

// Only modify code below this line

a -= 6;
b -= 15;
c -= 1;

// **Compound Assignment with Augmented Multiplication**
var a = 5;
var b = 12;
var c = 4.6;

// Only modify code below this line

a *= 5;
b *= 3;
c *= 10;

// **Compound Assignment with Augmented Division**
var a = 48;
var b = 108;
var c = 33;

// Only modify code below this line

a /= 12;
b /= 4;
c /= 11;

// **Declare String Variables**
// Example
var firstName = "Alan";
var lastName = "Turing";

// Only change code below this line

var myFirstName = "Brandon";
var myLastName = "Venosa";

// **Escaping Literal Quotes in Strings**
var myStr = "I am a \"double quoted\" string inside \"double quotes\"";
console.log(myStr);

// **Quoting Strings with Single Quotes**
var myStr = '<a href="http://example.com" target="_blank">Link</a>';

// **Escape Sequences in Strings**
/*****
CODE  OUTPUT
\'    single quote
\"    double quote
\\    backslash
\n    newline
\r    carriage return
\t    tab
\b    backspace
\f    form feed
*****/

var myStr = "FirstLine\n\t\\SecondLine\nThirdLine";

// **Concatenating Strings with Plus Operator**
// Example
var ourStr = "I come first. " + "I come second.";

// Only change code below this line

var myStr = "This is the start. " + "This is the end.";
console.log(myStr);

// **Concatenation Strings with Plus Equals Operator**
// Example
var ourStr = "I come first. ";
ourStr += "I come second.";

// Only change code below this line

var myStr = "This is the first sentence. ";
myStr += "This is the second sentence.";

console.log(myStr);

// **Construction String with Variables

// Example
var ourName = "freeCodeCamp";
var ourStr = "Hello, our name is " + ourName + ", how are you?";

// Only change code below this line
var myName = "Brandon";
var myStr = "My name is " + myName + " and I am well!";
console.log(myStr);

// ** Appending Variables to Strings**
// Example
var anAdjective = "awesome!";
var ourStr = "freeCodeCamp is ";
ourStr += anAdjective;

// Only change code below this line

var someAdjective = "worthwhile";
var myStr = "Learning to code is ";
myStr += someAdjective;

// **Find Length of String**
// Example
var firstNameLength = 0;
var firstName = "Ada";

firstNameLength = firstName.length;

// Setup
var lastNameLength = 0;
var lastName = "Lovelace";

// Only change code below this line.

lastNameLength = lastName.length;
console.log(lastNameLength);

// **Bracket Notation to Find First Character in String**
// Example
var firstLetterOfFirstName = "";
var firstName = "Ada";

firstLetterOfFirstName = firstName[0];

// Setup
var firstLetterOfLastName = "";
var lastName = "Lovelave";

// Only change code below this line.
firstLetterOfLastName = lastName[0];
console.log(firstLetterOfLastName);

// **String Immutabillty**
// Setup
var myStr = "Jello World";

// Only change code below this line.

myStr= "Hello World";

// **Bracket Notation to Find Nth Character in String**
// Example
var firstName = "Ada";
var secondLetterOfFirstName = firstName[1];

// Setup
var lastName = "Lovelace";

// Only change code below this line.
var thirdLetterOfLastName = lastName[2];

// **Bracket Notation to Find Last Character in String**
// Example
var firstName = "Ada";
var lastLetterOfFirstName = firstName[firstName.length - 1];

// Setup
var lastName = "Lovelace";

// Only change code below this line.
var lastLetterOfLastName = lastName[lastName.length - 1];

// **Bracket Notation to Find Nth-to-Last Character in String**
// Example
var firstName = "Ada";
var thirdToLastLetterOfFirstName = firstName[firstName.length - 3];

// Setup
var lastName = "Lovelace";

// Only change code below this line.
var secondToLastLetterOfLastName = lastName[lastName.length - 2];

// **Word Blanks**
function wordBlanks(myNoun, myAdjective, myVerb, myAdverb) {
    // Your code below this line
    var result = "";
    result += "The " + myAdjective + " " + myNoun + " " + myVerb + " to the store " + myAdverb + "."
    // Your code above this line
    return result;
}

// Change the words here to test your function
console.log(wordBlanks("dog", "big", "ran", "quickly"));
console.log(wordBlanks("bike", "slow", "flew", "slowly"));

// **Store Multiple Values with Arrays**
// Example
var ourArray = ["John", 23];

// Only change code below this line
var myArray = ["Quincy", 1];

// **Nested Arrays**
// Example
var ourArray = [["the universe", 42], ["everything", 101010]];

// Only change code below this line
var myArray = [["Bulls", 23], ["White Sox", 45]];

// **Access Array Data with Indexes**
// Example
var ourArray = [50,60,70];
var ourData = ourArray[0]; // equals 50

// Setup
var myArray = [50,60,70];

// Only change code below this line
var myData = myArray[0]
console.log(myData)

// **Modify Array Data With Indexes**
// Example
var ourArray = [18,64,99];
ourArray[1] = 45; // ourArray now equals [18,45,99].

// Setup
var myArray = [18,64,99];

// Only change code below this line

myArray[0] = 45;
console.log(myArray)

// **Access Multi-Dimensional Arrays With Indexes**
// Setup
var myArray = [[1,2,3], [4,5,6], [7,8,9], [[10,11,12], 13, 14]];

// Only change code below this line
var myData = myArray[2][1];
console.log(myData);

// **Manipulate Arrays with push()**
// Example
var ourArray = ["Stimpson", "J", "cat"];
ourArray.push(["happy", "joy"]);
// ourArray now equals ["Stimpson", "J", "cat", ["happy", "joy"]]

// Setup
var myArray = [["John", 23], ["cat" ,2]];

// Only change code below this line
myArray.push(["dog", 3]);

// **Manipulate Arrays with pop()**
var ourArray = [1,2,3];
var removedFromOurArray = ourArray.pop();
// removedFromOurArray now equals 3, and ourArray now equals [1,2]

// Setup
var myArray = [["John", 23], ["cat", 2]];

// Only change code below this line
var removedFromMyArray = myArray.pop();
console.log(myArray)

// **Manipulate Arrays with shift()**
// Example
var ourArray = ["Stimpson", "J", ["cat"]];
var removedFromOurArray = ourArray.shift();
// removedFromOurArray now equals "Stimpson" and ourArray now equals ["J", ["cat"]]

// Setup
var myArray = [["John", 23], ["dog", 3]];

// Only change code below this line
var removedFromMyArray = myArray.shift();

//  **Manipulate Arrays with unshift()**
// Example
var ourArray = ["Stimpson", "J", "cat"];
ourArray.shift(); // ourArray now equals ["J", "cat"]
ourArray.unshift("Happy");
// ourArray now equals ["Happy", "J", "cat"]

// Setup
var myArray = [["John", 23], ["dog", 3]];
myArray.shift();

// Only change code below this line
myArray.unshift(["Paul", 35]);

// **Shopping List**
var myList = [["cereal", 3], ["milk", 2], ["bananas", 3], ["juice", 2], ["eggs", 12]];

// **Write Reusable Code with Functions**
// Example
function ourReusableFunction() {
    console.log("Heyya, World")
}

ourReusableFunction();

// Only change code below this line

function reusableFunction() {
    console.log("Hi World");
}

reusableFunction();

// **Passing Values to Functions with Arguments**
// Example
function ourFunctionWithArgs(a, b) {
    console.log(a - b);
}
ourFunctionWithArgs(10, 5); // Outputs 5

// Only change code below this line

function functionWithArgs(a, b) {
    console.log(a + b);
}

functionWithArgs(10, 5);

// **Global Scope and Functions**
// Declare your variable here
var myGlobal = 10;

function fun1() {
    // Assign 5 to oopsGlobal Here
    oopsGlobal = 5;
}

// Only change code above this line
function fun2() {
    var output = "";
    if (typeof myGlobal != "undefined") {
        output += " myGlobal: " + myGlobal;
    }
    if (typeof oopsGlobal != "undefined") {
        output += " oopsGlobal: " + oopsGlobal;
    }
    console.log(output);
}
fun1();
fun2();

// **Local Scope and Functions**
function myLocalScope() {
    var myVar = 5;
    console.log(myVar);
}
myLocalScope();

// **Global vs. Local Scope in Function**
var outerWear = "T-Shirt";

function myOutfit() {
    var outerWear = "sweater";

    return outerWear;
}

console.log(myOutfit());
console.log(outerWear);

// **Return a Value from a Function with Return**
function minusSeven(num) {
    return num - 7
}
console.log(minusSeven(10));

function timesFive(num) {
    return num * 5;
}

console.log(timesFive(5));

// **Understanding Undefined Value Returned from a Function**
// Example
var sum = 0;
function addThree() {
    sum = sum + 3
}

function addFive() {
    sum += 5;
}

// **Assignment with a Returned Value**
var changed = 0;

function change(num) {
    return (num + 5) / 3;
}

changed = change(10);

var processed = 0;

function processedArg(num) {
    return (num + 3) / 5;
}

processed = processedArg(7);

// **Stand in Line**
function nextInLine(arr, item) {
    // Your code here
    arr.push(item);
    return arr.shift();
}

var testArr = [1,2,3,4,5];

console.log("Before: " + JSON.stringify(testArr));
console.log(nextInLine(testArr, 6));
console.log("After: " + JSON.stringify(testArr));

// **Boolean Values**
function welcomeToBooleans() {
    return true;
}

// **Use Conditional Logic with If Statements**
// Example
function ourTrueOrFalse(isItTrue) {
    if (isItTrue) {
        return "Yes, it's true"
    }
    return "No, it's false"
}

function trueOrFalse(wasThatTrue) {
if (wasThatTrue) {
    return "Yes, that was true";
}
return "No, that was false";

}

console.log(trueOrFalse(true))

// **Comparison with the Equality Operator**
// Setup
function testEqual(val) {
    if (val == 12) { // Change this line
        return "Equal";
    }
    return "Not Equal";
}

// Change this value to test
console.log(testEqual(10));

// **Comparison with the Strict Equality Operator**
// Setup
function testStrict(val) {
    if (val === 7) { // Change this line
        return "Equal";
    }
    return "Not Equal";
}

// Change this value to test
testStrict(10);

/*
3 === 3
3 === '3'
*/

// **Practice Comparing Different Values**
// Setup
function compareEquality(a, b) {
    if (a === b) { // Change this line
        return "Equal";
    }
    return "Not Equal";
}

// Change this value to test
console.log(compareEquality(10, "10"));

// **Comparison with the Inequality Operator**
// Setup
function testNotEqual(val) {
    if (val != 99) { // Change this line
        return "Not Equal";
    }
    return "Equal";
}

// Change this value to test
console.log(testNotEqual(10));

// **Comparison with the Strict Inequality Operator**
// Setup
function testStrictNotEqual(val) {
    // Only Change Code Below this Line

    if (val !== 17) {
        
        // Only Change Code Below this Line
        
        return "Not Equal";
    }
    return "Equal";
}

// Change this value to test
console.log(testStrictNotEqual(10));

// **Comparison with the Logical And Operator**
function testGreaterThan(val) {
    if (val > 100) {
        return "Over 100";
    }

    if (val > 10) {
        return "Over 10";
    }

    return "10 or Under"
}

// Change this value to test
console.log(testGreaterThan(10));

// **Comparison with the Greater Than Or Equal To Operator**
function testGreaterThanOrEqual(val) {
    if (val >= 20) {
        return "20 or Over";
    }

    if (val >= 10) {
        return "10 or Over";
    }

    return "Less than 10";
}

// Change this value to test
console.log(testGreaterThanOrEqual(10));

// **Comparison with the Less Than Operator**
function testLessThan(val) {
    if (val < 25) {
        return "Under 25";
    }

    if (val < 55) {
        return "Under 55";
    }

    return "55 or Over";
}

// Change this value to test
console.log(testLessThan(10));

// **Comparison with the Less Than Or Equal Operator**
function testLessOrEqual(val) {
    if (val <= 12) {
        return "Smaller THan or Equal to 12";
    }

    if (val <= 24) {
        return "Smaller Than or Equal to 24";
    }

    return "More than 24"
}

// Change this value to test
console.log(testLessOrEqual(10));

// **Comparisons with the Logical And Operator**
function testLogicalAnd(val) {
    // Only Change code below this line

    if (val <= 50 && val >= 25) {
        return "Yes";
    }

    // Only change code above this line
    return "No";
}

// Change this value to test
testLogicalAnd(10);

// **Comparisions with the Logical Or Operator**
function testLogicalOr(val) {
    // Only change code below this line

    if(val < 10 || val > 20) {
        return "Outside";
    }

    // Only change code above this line
    return "Inside";
}

// **Else Statements**
function testElse(val) {
    var result = "";
    // Only change code below this line

    if (val > 6) {
        result = "Bigger than 5";
    } else {
        result = "Bigger than 5";
    }

    // Only change code above this line
    return result;
}

// **Else If Statements**
function testElseIf(val) {
    if (val > 10) {
        return "Greater than 10";
    } else if (val < 5) {
        return "Smaller than 5";
    } else {
        return "Between 5 and 10";
    }

}

// Change this value to test
testElseIf(7);

// **Logical Order in If Else Statements**
function orderMyLogic(val) {
    if (val < 5) {
        return "Less than 5";
    }else if (val < 10) {
        return "Less than 10";
    }else {
        return "Greater than or equal to 10";
    }
}

// Change this value to test
console.log(orderMyLogic(3));

// **Chaining If Else Statements**
function testSize(num) {
    if (num < 5) {
         return "Tiny";
    }else if (num < 10) { 
        return "Small";
    }else if (num < 15) {
        return "Medium"
    }else if (num < 20) {
        return "Large"
    }else {
        return "Huge"
    }
}

console.log(testSize(19));

/*
Write chained if/else if statements to fulfill the following conditions:

num < 5 - return "Tiny"
nym < 10 - return "Small"
num < 15 - return "Medium"
num < 20 - return "Large"
num >= 20 - return "Huge"
*/

// **Golf Code**
var names = ["Hole-in-one!", "Eagle", "Birdie", "Par", "Bogey", "Double Bogey", "Go Home!"];
function golfScore(par, strokes) {
    if (strokes == 1) {
        return names[0];
    }else if (strokes <= par - 2) {
        return names[1];
    }else if (strokes == par - 1) {
        return names[2];
    }else if (strokes == par) {
        return names[3];
    }else if (strokes == par + 1) {
        return names[4];
    }else if (strokes == par + 2) {
        return names[5];
    }else if (strokes >= par + 3) {
        return names[6];
    }

}

// Change these values to test
console.log(golfScore(5, 8));

/*
Strokes     Return
1           "Hole-in-one!"
<= par - 2  "Eagle"
par - 1     "Birdie"
par         "Par"
par + 1     "Bogey"
par + 2     "Double Bogey"
>= par + 3  "Go Home!"
*/

// **Switch Statements**
function caseInSwitch(val) {
    var answer = "";
    switch(val) {
        case 1:
            answer = "alpha";
            break;
        case 2:
            answer = "beta";
            break;
        case 3:
            answer = "gamma"
            break;
        case 4:
            answer = "delta"
            break;
    }

    return answer;
}

// Change this value to test
console.log(caseInSwitch(3));

/*
Write a switch statement which tests val and sets answer for the following conditions:
1 - "alpha"
2 - "beta"
3 - "gamma"
4 - "delta"
*/

// **Default Option in Switch Statements**
function switchOfStuff(val) {
    var answer = "";
    switch (val) {
        case "a":
            answer = "apple";
            break;
        case "b":
            answer = "bird";
            break;
        case "c":
            answer = "cat";
            break;
        default:
            answer = "stuff";
            break;
    }
    return answer;
}

// Change this value to test
console.log(switchOfStuff("c"));

// **Multiple Identical Options in Switch Statements**
function sequentialSizes(val) {
    var answer = "";
    switch(val) {
        case 1:
        case 2:
        case 3:
            answer = "Low";
            break;
        case 4:
        case 5:
        case 6:
            answer = "Mid";
            break;
        case 7:
        case 8:
        case 9:
            answer = "High";
             break;
    }
    return answer;
}

// Change this value to test
console.log(sequentialSizes(9));

// **Replacing If Else Chains with Switch**
function chainToSwitch(val) {
    var answer = "";
    // Only change code below this line

    switch(val) {
        case "bob":
            answer = "Marley";
            break;
        case 42:
            answer = "The Answer";
            break;
        case 1:
            answer = "There is no #1";
            break;
        case 99:
            answer = "Missed by this much!";
            break;
        case 7:
            answer = "Ate Nine";
            break;
    }

    // Only change code above this line
    return answer;
}

// **Returning Boolean Values from Functions**
function isLess(a, b) {
    // Fix this code
    return a < b;
}

// Change these values to test
console.log(isLess(20, 15));

// **Returning Early Pattern from Functions**
// Setup
function abTest(a, b) {
    // Only change code below this line

    if (a < 0 || b < 0) {
        return undefined;
    }


    // Only change code above this line

    return Math.round(Math.pow(Math.sqrt(a) + Math.sqrt(b), 2));
}

// Change values below to test your code
console.log(abTest(-2,2));

// **Counting Cards**
var count = 0;


function cc(card) {
    switch(card) {
        case 2:
        case 3:
        case 4:
        case 5:
        case 6:
            count++;
            break;
        case 10:
        case 'K':
        case 'Q':
        case 'K':
        case 'A':
            count--;
            break;
    }

    var holdbet = 'Hold'
    if (count > 0) {
        holdbet = 'Bet';
    }

    return count + " " + holdbet;

}

cc(2); cc('K'); cc('10'); cc('K'); cc('A');
console.log(cc(4));

// Build JavaScript Objects
// Example
var ourDog = {
    "name": "Camper",
    "legs": 4,
    "tails": 1,
    "friends": ["everything!"]
};

// Only change code below this line.

var myDog = {
    "name": "Quincy",
    "legs": 3,
    "tails": 2,
    "friends": []
};

// **Accessing Object Properties with Dot Notation**
// Setup
var testObj = {
    "hat": "ballcap",
    "shirt": "jersey",
    "shoes": "cleats"
};

// Only change code below this line

var hatValue = testObj.hat;
var shirtValue = testObj.shirt;

// **Accesing Object Properties with Breaket Notation**
// Setup
var testObj = {
    "an entree": "hamburger",
    "my side": "veggies",
    "the drink": "water"
};

// Only change code below this line

var entreeValue = testObj["an entree"];
var drinkValue = testObj["the drink"];

// **Accessing Object Properties with Variables**
// Setup
var testObj = {
    12: "Namath",
    16: "Montana",
    19: "Unitas"
};

// Only change code below this line

var playerNumber = 16;
var player = testObj[playerNumber];

// **Updating Object Properties**
// Example
var ourDog = {
    "name": "Camper",
    "legs": 4,
    "tails": 1,
    "friends": ["everything!"]
};

ourDog.name = "Happy Camper";

// Setup
var myDog = {
    "name": "Coder",
    "legs": 4,
    "tails": 1,
    "friends": ["freeCodeCamp Campers"]
};

// Only change code below this line.

myDog.name = "Happy Coder";

// **Add New Properties to an Object**
// Example
var ourDog = {
    "name": "Camper",
    "legs": 4,
    "tails": 1,
    "friends": ["everything!"]
};

ourDog.bark = "bow-wow";

// Setup
var myDog = {
    "name": "Happy Coder",
    "legs": 4,
    "tails": 1,
    "friends": ["freeCodeCamp Campers"]
};

// Only change code below this line.

myDog['bark'] = "woof!"

// **Delete Properties From an Object**
// Example
var ourDog = {
    "name": "Camper",
    "legs": 4,
    "tails": 1,
    "friends": ["everything!"],
    "bark": "bow-wow"
};

delete ourDog.bark;

// Setup
var myDog = {
    "name": "Happy Coder",
    "legs": 4,
    "tails": 1,
    "friends": ["freeCodeCamp Campers"],
    "bark": "woof!"
};

// Only change code below this line.

delete myDog.tails;

// **Using Objects for Lookups**
// Setup