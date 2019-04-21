
//instead of
// console.log(Math.pow(7,2));

// console.log(7**2);

// var aray=['madhav','karim','ganesh','nishant','jyoti','pratik','aniraban','shree','akil'];
// for(var i=0;i<aray.length;i++)
// {
//   if(aray[i].length<5)
//   {
//     console.log(aray[i]);
//   }
// }


// const words=['Madhav','kareem','jyoti','akil','ganesh','nishanth','shre'];
// const smallwords=words.filter(word=>word.length<=5);
// // console.log(words);
// console.log(smallwords);
// // var smallwords=aray.filter(word=>word.length<5);
// // console.log(smallwords);
// //2015 untill that var is used to declare a variable
// var a=0
// console.log(a);


// //You can redeclare the variable many times, overriding it:
// var a=1;
// var a=3;
// console.log(a);
// //but now we can use let and const
// //let is a blocked scoped versiion of var
// //let and var are reassig able

// // const a='hero'

// //arrrow  function


// //for let,var and const scoping  
// function f() {
//   var x = 1
//   let y = 2
//   const z = 3
//   {
//     var x = 100
//     let y = 200
//     const z = 300
//     console.log('x in block scope is', x)
//     console.log('y in block scope is', y)
//     console.log('z in block scope is', z)
//   }
//   console.log('x outside of block scope is', x)
//   console.log('y outside of block scope is', y)
//   console.log('z outside of block scope is', z)
// }

// f()


// //array 
// var colors=['red','green','blue']
// function print(val){
//   console.log(val)
// }
// for(let i=0;i<colors.length;i++)
// {
//   print(colors[i])
// }


// var colors=['red','green','blue']
// function print(val){
//   console.log(val)
// }
// colors.forEach(print)

// //arrow function 
// const myfoo=function(){
//     console.log("hii");
// }
// myfoo()

// const myfoo2=()=>
//     console.log("bro");

// myfoo2()


// function init() {
//     var name = 'Mozilla'; // name is a local variable created by init
//     function displayName() { // displayName() is the inner function, a closure
//       console.log(name); // use variable declared in the parent function
//     }
//     displayName();
//   }
//   init();
// //   displayName();


// //closure

// function makeFunc() {
//     var name = 'Mozilla';
//     function displayName() {
//       console.log(name);
//     }
//     return displayName;
//   }
  
//   var myFunc = makeFunc();
//   myFunc();

//   //myFunc is a reference to the instance of the function displayName created when makeFunc is run.


//   function makeAdder(x) {
//     console.log(x);
//     return function(y) {
//       console.log(y);
//       return x + y;
//     };
//   }
  
//   var add5 = makeAdder(5);
//   // var add10 = makeAdder(10);
  
//   console.log(add5(2));  // 7
//   // console.log(add10(2)); // 12

//   //add5 and add10 are both closures. They share the same function body definition,
//   // but store different lexical environments. In add5's lexical environment, x is 5
//   //while in the lexical environment for add10, x is 10.
 

// // spread operator
var array = ['red', 'blue', 'green']
var copyOfArray = [...array]
copyOfArray.push('yellow')
array.push("black")
console.log("----------------------------------");
console.log(array)
console.log(copyOfArray)
console.log("-------------------------");


// //

// var defaultColors = ['red', 'blue', 'green']
// var userDefinedColors = ['yellow', 'orange']

// var mergedColors = [...defaultColors, ...userDefinedColors]

// console.log('Merged colors', mergedColors)
// console.log(defaultColors);
// console.log(userDefinedColors);


// //array destructuring
// var i=0;
// let arr=['Ummadi','Madhava','Reddy']
// let[frstName,MiddleName,LastName]=arr;
// console.log(frstName);
// console.log(MiddleName);
// console.log(LastName);
// console.log(arr);

// //object destructuring
// //earlier

// var person = {name: "Sarah", country: "Nigeria", job: "Developer"};

// var names = person.name;
// var countrys = person.country;
// var jobs = person.job;

// console.log(names);
// console.log(countrys);
// console.log(jobs);

// //now
// var person = {name: "Sarah", country: "Nigeria", job: "Developer"};

//     var {name, country, job} = person;

//     console.log(name);//"Sarah"
//     console.log(country);//"Nigeria"
//     console.log(job);//Developer"
 
 
//     console.log("-------------------------");

    
 
 
// var obj1 = { foo: 'bar', x: 42 };
// var clonedObj = { ...obj1 ,name:'madhav',x:43};
// // var obj1={y:3}
// console.log(clonedObj);
// console.log(obj1);

function myfunc(num){
  return num+1;
}
function myfunc2(num){
  return num*2
}
function myfunc3(num){
  return num/3;
}
module.exports = {
  myfunc,
  myfunc2,
  myfunc3
};

// default parameter
// let foo=function(a){
//   var a=10
//   console.log(a);
// }
// foo();
// foo(a=4);



//observale

// var Subject = function() {
//   this.observers = [];

//   return {
//     subscribeObserver: function(observer) {
//       this.observers.push(observer);
//     },
//     unsubscribeObserver: function(observer) {
//       var index = this.observers.indexOf(observer);
//       if(index > -1) {
//         this.observers.splice(index, 1);
//       }
//     },
//     notifyObserver: function(observer) {
//       var index = this.observers.indexOf(observer);
//       if(index > -1) {
//         this.observers[index].notify(index);
//       }
//     },
//     notifyAllObservers: function() {
//       for(var i = 0; i < this.observers.length; i++){
//         this.observers[i].notify(i);
//       };
//     }
//   };
// };

// var Observer = function() {
//   return {
//     notify: function(index) {
//       console.log("Observer " + index + " is notified!");
//     }
//   }
// }

// var subject = new Subject();

// var observer1 = new Observer();
// var observer2 = new Observer();
// var observer3 = new Observer();
// var observer4 = new Observer();

// subject.subscribeObserver(observer1);
// subject.subscribeObserver(observer2);
// subject.subscribeObserver(observer3);
// subject.subscribeObserver(observer4);
// subject.notifyObserver(observer2); // Observer 2 is notified!

// subject.notifyAllObservers();
// Observer 1 is notified!
// Observer 2 is notified!
// Observer 3 is notified!
// Observer 4 is notified!


//string literal
var str='yug'+
'hjkn'

var srr = `bjcnsknsklvm
"jkdcndjkcn`