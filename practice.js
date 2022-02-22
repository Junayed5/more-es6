// practice - 1
const name = 'Md Junayed';
// name = 'Hossain'
let myName = 'Md Junayed'
myName = 'Abu Tahir ' + myName;

// console.log(myName);

//practice - 2

const description = `My name is ${myName}.I am a student from sarsina ds kamil madrasah`;
// console.log(description);

// practice - 3

const divide = num => num /5;
// console.log(divide(33));

const doubleParam = (num1,num2) => {
    const add = num1 + 2;
    const add2 = num2 + 2;
    const multiply = add * add2
    return multiply;
}
console.log(doubleParam(10,10));

const triple = (x,y,z) => x*y*z;
console.log(triple(10,10,10));

//practice - 5
const number = [2,4,7,12,45];
const output = number.map(num => num * 5);
console.log(output);

//practice - 6

const number2 = [12,34,23,45,56];
const odd = number2.filter(num => num % 2 == 1)
console.log(odd);