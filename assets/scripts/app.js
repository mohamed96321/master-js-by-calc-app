/** 
 * @param MDN USE THIS WEBSITE(https://developer.mozilla.org/en-US/)
 * This code not commented try to add some comments to make your code more readable
 * @param Top_to_Bottom how actually code work
 * @param Global_Declare / that variable is declared outside function or class
 * @param Built_in_Functions / such as, alert()
 * @param Back_Ticks / `${}` / @param Template_Literal
 * @param White_Spaces / \n and alot afert back slash
 * @param Parameter_and_Argument that is name inside the function / add(num1, num2)
 * Don't repeat yourself
 * Make code more readable
 * ECMA is an organization that makes criteria for javascript to work with all browsers, and has alot of versions (to write a clean code)
 * Single Comment (//) or Multi Comment (/*)
 * @param Increment_Decrement+= or -=and etc.. or variable++ or var-- or --var or var = var + 1
 * @param Object ex:- let detailsName = {
    name: 'Mohamed', (that is key value)
    age: 31
  }
 * Array :- let names = ['Mohamed', 'Ali']; or empty Array and can use empty array to hosting some data by using object
 * undefined (it's a type) is the default value can't used to assign
 * Null (it's a type) is useful to manage empty data
 * NaN (Not a date type) stands for not a number
 * @param yields a new NaN and it's the result of invaild calculation
 * async execute and load code of js faster and request data and etc in recieve and retrieve data 
 * defer execute the code faster include in script element in html
 * Performance by using browser
 * == equal value
 * != inequal
 * === AND data type
 * !== AND Logic data type inequal
 * >= & <= bigger and smaller than
 * & normal equal (operator precedence)
 * ! NOT Logic
 * && AND Logic
 * >> or >>> or << bitwise
 * || OR Logic
 * Object and Array are special (=== and == don't apply on them)
 * ** Exponentiation e.g. 2**3 = 8
 * Ternary operator, e.g. const userName = nameLoged === isLogin ? 'Max' : null; this is called expression
 * Statement e.g. if statement or loop
 * Tricks in JS {
 * !! e.g. !!"" or !!1 (false or true) --? convert to real boolean --> create true or false 
 * || e.g. const name = someInput || 'Max';
 * && e.g. const logedIn = isLoged && 'Max';
 * }
 * Normal for(), e.g. for (let i = 0; i < 3; i++) or for (let = 0; i > 3;) {i--;}
 * @param for(...of...) loop --> execute for every element in an array [] there we define i first e.g. let i = 0; for() {i++;} 
 * @param for(...in...) loop --> execute for every key name in an object {}
 * Normal while() --> execute code as long as is true, e.g. let j = 0; while (j > 3) {console.log('--------); j++;}
 * @param do...while loop, e.g. let j = 0; do{console.log(j); j++;} while (j > 3);
 * break keyword using with switch, loops --> stop execute any line from this block
 * continue keyword and break keyword are using to control loops
 * labeled statement very rare using in javascript, e.g. outerWhile: do {...} while (); or innerFor: for()
 * try{...} catch(error){...}; // throw and handling errors
 * throw keyword, e.g. throw {message: ":"}; // crashed the script --> can using inside catch
 * finally {...} using after catch for if your code its not cleaned enough 
 * var keyword is global scope (e.g. if, loops and in var can declare the same variable, but let & const can't do that) and function scope not for objects, e.g. var name = 'max'; if (name === 'max') {var hoby = 'Nany'; console.log(hoby);} then you can call hoby to anywhere but let keyword (i.e. block scope) don't work 
 * @param Hoisting is a javascript engine (initial and read value in javascript)
 * When you don't using any declare keyword in javascript by default using var keyword, e.g. userName = 'Max'; console.log(userName); it works, but it's a bad code 
 * Strict mode in javascript, e.g. 'use strict'; var userName = 'Hobs'; console.log(userName); the past of javascript ES5 or older
 * How javascript engine works {
 * Parsing and execution 
 * Interpreter --> Compiler --> Computer
 * }
 * How code gets executed, we have two concepts (Heap --> (long term memory allocation) and Stack --> (kind of short term memory))
 * Event loop that related to browser engine like chrome
 * Primitive vs Reference values {
 * Primitive:- string, number, boolean, null, undefined, symbol (stored on stack), = copy the value, whenyou change the value in others not change in other variables
 * Reference:- all objects, stored in memory(Heap), = copy the pointer reference, when you change the value or add in others it's changed in other one
 * }
 * ... it's called spread operator, e.g. let yetAnother = { ...person }; when using it to object will be primitive
 * Garbage Collection (work with Heap) --? how browser(chrome - V8's) managed memory
 * Memory Leaks --> removed unused objects, objects without reference
 * Method that is the function declare inside objects or the function built-in, e.g. startGame.addEventListener('click', function); or const person = {greet: function greet(){console.log('Hello!');}}; person.greet();
 * Arrow function => if puting after parameters that declare if it exist, you always have to store it in some variable like const & let, e.g. (arg1,,  arg2) => {...}
 * this is the main difference between Arrow and normal function --> const add = (a, b) => a + b; const add2 = function (a, b) {return a + b;}
 * One argument in arrow function write like that, arg => {... if multiple line inside function require return keyword else not require return keyword}
 * Defualt argument --> undifined 
 * Rest parameter (using it instead of arguments keyword) --> const sumUp = (a, b, ...numbers) => {...}
 * (Don't use that) arguments keyword using with function keyword, it's give you an array like object
 * Function inside function it's a local scope, maybe used it, but normaly we used global scope function
 * bind() you can use these method with this app try to use it, other methods call(), apply()
 * Dom {
 * Nodes (e.e. div) and Elements (e.g. h1)
 * Attributes:- e.g. id, class, and aria-hidden, etc. vs Properties:-e.g. the value that stored in html
 * Traversing Dom
 * parent, node or element
 * sibling, previous or next, element or node
 * classList, it's related to css code 
 * clone, child
 * Live Node vs Static Node (Non-live node)
 * Create, insert, remove element or node
 * }
 * Objects
 * Arrays
 * Iterable
 * Class
 * OOP
 * inheritance
 */

const defaultResult = 0;
let currentResult = defaultResult;
let entryLog = [];

function getUserNumberInput() {
  return parseInt(usrInput.value);
}

function createAndWriteOutput(operator, resultBeforeCalc, calcNumber) {
  const calcDescription = `${resultBeforeCalc} ${operator} ${calcNumber}`;
  outputOfResult(currentResult, calcDescription)
}

function writeToLog(
  operationIdentifer,
  prevResult,
  operationNumber,
  newResult 
) {
  const Logentries = {
    opertion: operationIdentifer,
    prevResult: prevResult,
    number: operationNumber,
    result: newResult
  };
  entryLog.push(Logentries);
  console.log(entryLog)
}

function calculationResult(calculationType) {
  const enteredNumber = getUserNumberInput();
  const intialResult = currentResult;
  let mathOperation;
  if (isNaN(enteredNumber)) {
    alert('You must enter any number!')
    createAndWriteOutput('A Number', 'Enter', '');
  } else {
    if (calculationType === 'ADD') {
      currentResult += enteredNumber;
      mathOperation = '+';
    } else if (calculationType === 'SUBTRACT') {
      currentResult -= enteredNumber;
      mathOperation = '-';
    } else if (calculationType === 'MULTIPLY') {
      currentResult *= enteredNumber;
      mathOperation = '*';
    } else {
      currentResult /= enteredNumber;
      mathOperation = '/';
    }
    createAndWriteOutput(mathOperation, intialResult, enteredNumber);
    writeToLog(calculationType, intialResult, enteredNumber, currentResult)
  }
}

function add() {
  calculationResult('ADD');
}

function subtract() {
  calculationResult('SUBTRACT');
}

function multiply() {
  calculationResult('MULTIPLY');
}

function divide() {
  calculationResult('DIVIDE');
}

addBtn.addEventListener('click', add);
subtractBtn.addEventListener('click', subtract);
multiplyBtn.addEventListener('click', multiply);
divideBtn.addEventListener('click', divide);
