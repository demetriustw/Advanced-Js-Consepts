// USE STRICT

// Not strict mode..
// function newCode() {
//     "use strict";
//     // Strict mode...
// }

// ahhh = 1;
// console.log(window.ahhh);
// "use strict";

// var theVal = 0;
// // need to declare first
// theVal = 1;
// // can be used to find type-o's
// if (theVal > 0) {
//     console.log("Hello!")
// }

// "use strict";

// var let = 1;
// var foo = 1;
// delete foo;

// function moo(arg){
//     delete arg;
// }

// var eval = 1;
// var a = 2;
// eval("var a = 1");
// console.log(a);

// Reference or Value
// "use strict";

// Pass by value
// var a = true;
// function foo(a) {
//     a = false;
// }
// foo(a);
// console.log(a);

// PASS BY REFERENCE

// var a = {'moo':'too'};
// function foo(a) {
//     a.too = 'moo';
// }
// foo(a);
// console.log(a);

// REST OPERATOR

// function sum(a, b) {
//     console.log(arguments);
//     return a + b;
// }

// function sum() {
//     var total = 0;
//     for (var i = 0; i < arguments.length; i++){
//         total += arguments[i];
//     }
//     return total;
// }

// console.log(sum(1,2));
// console.log(sum(1,2,3,4))
// console.log(sum(1))

// function login(method) {
//     var options = Array.prototype.slice.call(arguments, 1);
//     console.log(method);
//     console.log(options);
// }
/*rest is everything else*/
// function login(method, ...options /*no more after*/) {
//     console.log(method);
//     console.log(options);
// }
// login("facebook", 1, 2, 3, 4);

// SPREAD OPERATOR

// var ar1 = [4,5,6];
// var ar2 = [...ar1];
// ar1[0] = -1;
// console.log(ar1)
// console.log(ar2)

// var method = "twitter";
// var opts = ["key", "callbackUrl"];

// function login(method, ...options) {
//     console.log(method);
//     console.log(options);
// }

// login(method, [...opts])

// TEMLPLATE STRINGS

// var name = 'ahhh';
// var place = "world";
// var msg = `hello
// ${1+2}
// my
// name
// is
// ${2+3}`;
// console.log(msg)

// var isBold = false;
// var msg = `hello world my name is ${isBold ? "<b>ahhh</b>" : "ahhh"}`;
// console.log(msg)

// function h1(strings){
//     return "<h1>" + strings[0] + "</h1>";
// }
// var name = "ahhh";
// var place = "world";
// console.log(h1`hello ${place} my name is ${name}`);

// STRING TAGS
// function h1(strings, ...values) {
//     var body = "";
//     for (var i = 0; i < strings.length; i++) {
//         body += strings[i] + (values[i] || "");
//     }
//     return `<h1>${body}</h1>`;
// }

// var name = "ahhh";
// var place = "world";
// console.log(h1`hello ${place} my name is ${name}`);

// SCOPES
// "use strict";

// var ahhh = 1;
// window.moo = 1;

// function moo() {
//     var foo = 1;
//     console.log(foo);
// };

// moo();

// for (var i = 0; i < 5; i++) {
//     var j = 5;
// }

// console.log(j);

// {/*let doesn't work var does*/
//     const  a = "block";
//     {
//         console.log(a);
//     }/*const can't be changed*/
//     a = "moo";
// }
// console.log(a);

// var is global let is block
// for (var i = 0; i < 5; i += 1) {
//     console.log(i);
// }
// console.log(i);

// VARIABLE HOISTING
// "use strict";

// function foo() {
//     var a;
//     console.log(a);
//     a = 1;
// }

// foo()
// var foo;

// foo();

// foo = function () {
//   var a;
//   console.log(a);
//   a = 1;
// };

// SCOPE CHANINS
// "use strict";

// function foo() {
//     console.log(myvar);
// }

// function goo() {
//     var myvar = 1;
//     foo();
// }

// goo()

// var myvar = 1;
// function goo() {
//     function foo() {
//         console.log(myvar);
//     }
//     foo();
// }

// goo();

// IIFE uses
// "use strict";

// (function() {
//     var thing = { hello: "main" };
//     console.log("main: ", thing);
// })();

// FUNCTION CLOSURES
// "use strict";

// function sayHello(name) {
//   var text = "Hello " + name;
//   return function() {
//     console.log(text);
//   }

// }

// var sayahhh = sayHello("ahhh");
// sayahhh();

// var foo = [];

// for (var i = 0; i < 10; i++) {
//   (function(y){
//     foo[y] = function() {
//       return y
//     };
//   })(i);
// }

// console.log(foo[0]());
// console.log(foo[1]());
// console.log(foo[2]());

// DISTRUCTURING

// function f(/*set x defalt*/{x=0}) {
//     console.log(x);
// }
// f({x:4});//set new x value

// array distructuring

// const arr = ['a','b'];
// const [x,y] = arr;

// console.log(x);
// console.log(y);

// object destructuring

// const obj = {first: "AAA", last: "HHHHHH", age: 23};

// const {first: f, last: l} = obj;

// console.log(f);
// console.log(l);

// const f = obj.first;
// const l = obj.last;
// console.log(f);
// console.log(l);

// FOR-IN

// var obj = {a:1,b:2};

// for (let prop in obj){
//     console.log(prop);
// }

// FOR-OF

// let array = [10,20,30];

// for (let value of array){
//     console.log(value);
//     console.log(typeof(value));
// }

// FOR LOOP KEYWORDS

// let array = [1,2,3];

// array.forEach(function(value) {
//     // break or continue don't work with forEach
//     console.log(value);
// });

// function doSomething() {
//     array.forEach(function(value) {
//     // break or continue don't work with forEach
//         console.log(value);
//         return;
//         // return was happening anyways
//     });

//     // for (let i = 0; i < array.length; i++) {
//     //     console.log("1st ", array[i]);
//     //     return; // exits after once through
//     // }
// }
// doSomething();

// for (let i = 0; i < array.length; i++) {
//     console.log("1st ", array[i]);
//     // break; // only logs 1
//     continue; // only does above
//     console.log("2nd ", array[i]);
// }

// THE THIS KEYWORD

// console.log(this);

// this.ahhh = 1;

// console.log(this.ahhh);
// console.log(window.ahhh);
// console.log(ahhh);

// function checkThis() {
//     console.log(this);
// }
// checkThis();

// var ahhh = {
//     checkThis: function() {
//         var self = this;
//         console.log(self);

//         function checkOther() {
//             console.log(self);
//             self.moo = 1;
//         }

//         checkOther();

//         console.log(self.moo);
//         // console.log(window.moo);
//     }
// }
// ahhh.checkThis();
// console.log(ahhh);

// var func = ahhh.checkThis;
// func();

// "use strict";

// function ahhh(param1, param2) {
//     console.log(this);
// };

// // ahhh.moo = 1;
// // console.log(asim.name);

// // console.log(ahhh.toString())

// ahhh.call(1);

// var ahhh = {
//     checkThis: function() {
//         // this
//         var checkOther = function() {
//             console.log(this); // ahhh
//         }.bind(this);
//         checkOther();
//     }
// }
// ahhh.checkThis();
// ahhh.checkThis.call();

// call and apply

// function a(b,c,d) {
//     console.log(this);
//     console.log(b);
//     console.log(c);
//     console.log(d);
// }

// // a.call(1,2,3,4);

// a.apply(1,[2,3,4]);

// APPLY USES

// function sum() {
//     var total = 0;
//     for (var i = 0; i < arguments.length; i++) {
//         total += arguments[i];
//     }
//     return total;
// }
// var things = [1,2,3,4,53,2,4,5,6,1];
// var x = sum.apply(null, things);
// console.log(x);

// bind only works with var

// var a = function() {
//     console.log(this);
// }.bind(1);

// var ahhh = {
//     func: a
// }

// ahhh.func();

// let obj = {
//     name: "ahhh",
//     sayLater: function() {
//         // this
//         setTimeout(() => {
//             console.log(`${this.name}`);
//         }, 1000);
//     }
// };
// obj.sayLater();

// var animal = {
//     kind: 'human'
// };

// console.log(animal);

// // var ahhh = {};
// // ahhh.__proto__ = animal;

// var ahhh = Object.create(animal, {food: {value:"mango"}});

// console.log(ahhh.kind);

// console.log(animal.isPrototypeOf(ahhh));

// ahhh.kind = 'igloo';
// console.log(ahhh.kind);
// console.log(animal.kind);
// console.log();

// CONSTRUCTOR OO PATTERN
// "use strict";

// function Person(first_name, last_name) {
//     this.first_name = first_name;
//     this.last_name = last_name;
//     // this.full_name = function() {
//     //     return first_name + ' ' + last_name;
//     // };
// };

// Person.prototype.full_name = function() {
//     return this.first_name + ' ' + this.last_name;
// };

// function Professional(honorific, first_name, last_name) {
//     Person.call(this, first_name, last_name);
//     this.honorific = honorific;
// };

// // var dude = new Person("aa", "hhh");
// // console.log(dude.full_name());

// // var dude = {};
// // Person.call(dude, "aa", "hhh");
// // console.log(dude);

// Professional.prototype =  Object.create(Person.prototype);

// Professional.prototype.professional_name = function() {
//     return this.honorific + ' ' + this.first_name + ' ' + this.last_name;
// }

// var prof = new Professional("Dr.", "Aaa", "hhhh");
// console.log(prof.professional_name());
// console.log(prof.full_name());

// PROTOTYPE OO PATTERN
// var Person = {
//     // init: function(first_name, last_name) {
//     //     this.first_name = first_name;
//     //     this.last_name = last_name;
//     //     return this;
//     // },
//     full_name: function() {
//         return this.first_name + " " + this.last_name;
//     }
// }

// // var ahhh = Object.create(Person, {
// //     first_name: {
// //         value: 'aaa'
// //     },
// //     last_name: {
// //         value: 'hhhh'
// //     }
// // });
// // ahhh.init("Aaa","hhhh");

// var Professional = Object.create(Person, {
//     init: {
//         value: function(honorific ,first_name, last_name) {
//             this.honorific = honorific;
//             this.first_name = first_name;
//             this.last_name = last_name;
//         }
//     },
//     professional_name: {
//         value: function() {
//             return this.honorific + " " + this.first_name + " " + this.last_name;
//         }
//     }
// });

// var ahhh = Object.create(Professional);
// ahhh.init("mr.", "aaa", "hhhh");

// console.log(ahhh.full_name());
// console.log(ahhh.professional_name());

// function ProfessionalFactory(honorific, first_name, last_name) {
//     var human = Object.create(Professional);
//     human.honorific = honorific;
//     human.first_name = first_name;
//     human.last_name = last_name;
//     return human;
// }
// var ahhh = ProfessionalFactory("mr.", "aaa", "hhhh")

// function PersonFactory(first_name, last_name) {
//     var person = Object.create(Person);
//     person.first_name = first_name;
//     person.last_name = last_name;
//     return person;
// }

// var ahhh = PersonFactory("aaa", "hhhh")

// console.log(ahhh.full_name());

// CLASS AND EXTENDS KEYWORDS

// class Person {
//     /* always in use strict*/
//     _firstName = "";
//     _lastName = "";

//     constructor(firstName, lastName) {
//         this._firstName = firstName;
//         this._lastName = lastName;
//     }

//     get firstName() {
//         return this._firstName;
//     }

//     get lastName() {
//         return this._lastName;
//     }

//     set firstName(name) {
//         if (name === "") {
//             console.error("firstName cannot be blank");
//         } else {
//             this._firstName = name;
//         }
//     }

//     fullName() {
//         return `${this.firstName} ${this.lastName}`;
//     }
//     whoAreYou() {
//         return `Hi i'm ${this.fullName()}`;
//     }
// }
// let ahhh = new Person("aaa", "hhhh");

// function ES5Person (firstname, lastname){
//     this.firstname = firstname;
//     this.lastname = lastname;
// }

// ES5Person.prototype.fullName = function() {
//     return this.firstname + ' ' + this.lastname;
// };

// ES5Person.prototype.whoAreYou = function() {
//     return `Hi i'm ${this.fullName()}`;
// };

// class Student extends ES5Person {

//     constructor(firstName, lastName, course) {
//         super(firstName, lastName);
//         this.course = course;
//     }

//     whoAreYou() {
//         return `${super.whoAreYou()} and i'm studying ${this.course}`;
//     }
// }

// let ahhh = new Student("aaa", "hhhh", "javascript");
// console.log(ahhh)

// ASYNCHRONOUS PROGRAMMING
// CALLBACK

// function doAsyncTask(cb) {
//     setTimeout(() => {
//         cb(null, "The correct data")
//     }, 0)
// }
// doAsyncTask((err, data) =>{
//     if (err) {
//         throw err
//     } else {
//         console.log("Data ", data)
//     }
// });
// let message = "Callback Called";

// CALLBACK HELL

// function doAsyncTask(cb) {
//     setTimeout(() => {
//         console.log("Async Tack Calling Callback");
//         cb();
//     }
//     , 0)
// }

// doAsyncTask(()=>{
//     doAsyncTask(()=>{
//         doAsyncTask(()=>{
//             doAsyncTask(()=>{
//                 doAsyncTask(()=>{
//                     doAsyncTask(()=>{
//                         doAsyncTask(()=>{})
//                     })
//                 })
//             })
//         })
//     })
// })

// PROMISES

// function doAsyncTask() {
//     const promise = new Promise((resolve, reject) => {
//         console.log("Async Work Complete");
//         if (true){
//             resolve({x:1})
//         }else {
//             reject("Error")
//         }

//     });
//     return promise;
// }
// doAsyncTask().then(
//     (val) => console.log(val),
//     (err) => console.log(err)
// );

// let promise = Promise.resolve("done");
// promise.then(val => console.log(val));

// function doAsyncTask() {
//     return Promise.resolve();
// }

// doAsyncTask().then(_ => console.log(message));
// let message = "Promise Resolved";

// PROMISE-CHAINS

// Promise.resolve("done")
//     .then(val => {
//         console.log(val);
//         return new Promise(resolve => {
//             setTimeout(() => resolve("done2"), 1000)
//         });
//     })
//     .then( val => console.log(val))

// Promise.reject("fail")
//     .then(val => console.log(val)) // <--- No error handler
//     .then(val => console.log(val), err => console.error(err));

// new Promise((resolve,reject) => {
//     throw "fail";
// })
//     .then(val => {
//         console.log(val);
//     })
//     .then(val => console.log(val), err => console.error(err));

// Promise.resolve("done")
//     .then(val => {
//         return "done2"
//     })
//     .then( val => console.log(val))
//     .catch(err => console.error(err))
//     .finally(_ => console.log("Cleaning Up"))

// PROMISE-ALL

// const doAsyncTask = (delay) => {
//     return new Promise(resolve => setTimeout(() => resolve(delay), delay))
// }

// let promises = [doAsyncTask(1000), doAsyncTask(2000), doAsyncTask(500)]

// Promise.all(promises).then((values) => console.log(values))

// ASYNC/AWAIT

// const doAsyncTask = () => Promise.resolve("done");

// async function ahhh() {
//     let value = await doAsyncTask()
//     console.log(value)
// }
// ahhh();

// (async function() {
//     doAsyncTask().then((val) => console.log(val))
//     console.log("done2")
// })();

// let asyncFunction = async function() {
//     let value = await doAsyncTask();
//     console.log(value);
//     console.log("2");
//     return "3"; // return like a resolve
// };

// asyncFunction().then(v => console.log(v));

// const doAsyncTask = () => Promise.reject("error");

// const asyncFunction = async function() {
//     try {
//         const value = await doAsyncTask();
//     } catch (e) {
//         console.error("Moo: ", e);
//         return;
//     }
// };
// asyncFunction();

// PROMISE-ALL WITH ASYNC

// const doAsyncTask = (delay) => {
//     return () => new Promise(resolve => setTimeout(() => resolve(delay), delay))
// }

// let tasks = [doAsyncTask(1000), doAsyncTask(2000), doAsyncTask(500)];

// // Promise.all(promises).then((values) => console.log(values))

// (async () => {
//     for (let task of tasks){
//         console.log(await task())
//     }
// })();

// async function printLine1() {
//   console.log("1");
// }

// async function printLine2() {
//   console.log("2");
// }

// async function main() {
//   printLine1();
//   printLine2();
// }
// main();
// console.log("Finished");
