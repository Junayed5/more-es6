const numbers = [2,4,5,7];
// console.log(numbers);
const output2 = []

const doubleIt = num => num*2;

for (const number of numbers) {
    const result = doubleIt(number);
    output2.push(result)
}
// console.log(output2);

//with arrow function name 
const output = numbers.map(doubleIt)
// console.log(output);

//without function name direct call
const output3 = numbers.map(x => x*x);
console.log(output3);

