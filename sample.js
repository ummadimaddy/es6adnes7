// The map() method creates a new array with the results of calling
// a provided function on every element in the calling array.
// map provides a shallow copy not a deep copy
// const numbers = [2, 4, 8, 10];
// const halves = numbers.map(x => x / 2);
// console.log(numbers);
// console.log(halves);


const names=['tejas','madhav','pawan'];
var x;
const name=names.map(x=>x+2);
console.log(names);
console.log(name);




//The filter() method creates a new array with all elements that pass the test
// implemented by the provided function.

const words=['Madhav','usha','afthab','rupa','moumitha'];
const bigwords=words.filter(word=>word.length>4);
console.log(words);
console.log(bigwords);

//or

const myarray=[1,2,3,7];
const evenarray=myarray.filter((value,index,array)=>{
    return value%2==0;
});
console.log(myarray);
console.log(evenarray);

// reduce takes an array and reduces it into a single value e.g find an avg

const total = [0, 1, 2, 3].reduce((sum, value) => sum + value, 1);
console.log(total);

//or

const number=[2,5,7];
var sum=number.reduce((acc,currvalue)=>{
    return acc+currvalue;
});
//},4);
console.log(sum);