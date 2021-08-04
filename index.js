// Variable types
// const let var
// var -> Global scope and it's value can be reassigned
// const -> It is restricted by the scope and it's value can not be reassigned
// let -> It is restricted by the scope and it's value can be reassigned
// Scope is the space between a set of brackets {}

const test = 'hello';
{
    const test2 = 'hello again';
    console.log('@test print 1: ', test);
    console.log('@test2 print 1: ', test2);
}
console.log('@test print 2: ', test);
// console.log('@test2 print 2: ', test2); 
/* -> Should explode in thousand pieces due to the variable
being accessed out of it's scope */


// String interpolation or literal templates
// This is a way to 'concatenate' values stored in variables (const or let) to a string `${}`
const myAge = 27;
const myIntro = 'My name is David and i am ' + myAge + ' years old'; // ES5 and lesser
const myIntroES6 = `My name is David and i am ${myAge} years old`; // ES6 and greater

console.log('@myIntro: ', myIntro);
console.log('@myIntroES6: ', myIntroES6);


// Object interpolation or literal objects
// This is a way to dynamicly access or define proporties of an objects
const webUiDev = {
    basics: ['html', 'css', 'javascript'],
    libOrFrame: 'React'
};

function accesProperty(property) {
    return webUiDev[property];
}
console.log('@accesProperty(basics): ', accesProperty('basics'));
console.log('@accesProperty(libOrFrame): ', accesProperty('libOrFrame'));

function defineDynamicProperty(property, value) {
    return { [property]: value };
}
console.log('@defineDynamicProperty(name, Laura): ', defineDynamicProperty('name', 'Laura'));


// Destructuring
// Destructuring arrays
const array = ['Juan', true, 5, null, undefined];
const [nombre, alive, daysInGlobant, projectName, age] = array;
console.log('@nombre: ', nombre);
console.log('@alive: ', alive);
console.log('@daysInGlobant: ', daysInGlobant);
console.log('@projectName: ', projectName);
console.log('@age: ', age);

const [nombre1, alive1, daysInGlobant1, projectName1] = array;
console.log('@nombre1: ', nombre1);
console.log('@alive1: ', alive1);
console.log('@daysInGlobant1: ', daysInGlobant1);
console.log('@projectName1: ', projectName1);

const [nombre2, , daysInGlobant2, projectName2] = array;
console.log('@nombre2: ', nombre2);
console.log('@daysInGlobant2: ', daysInGlobant2);
console.log('@projectName2: ', projectName2);

const [nombre3, , ...restOfArray] = array;
console.log('@nombre3: ', nombre3);
console.log('@restOfArray: ', restOfArray);

const [...restOfArray1] = array;
console.log('@restOfArray1: ', restOfArray1);

const clonedArray = [...array];
console.log('@clonedArray: ', clonedArray);


// Destructuring JSONs
const myJson = {
    hello: 'world',
    eo: 'eeeooo',
    seven: 'days',
    monday: {
        stamina: 'low',
        money: 'sufering :(',
        areYouSleepy: true
    }
};
const { hello, seven, eo } = myJson;
console.log('@hello: ', hello);
console.log('@eo: ', eo);
console.log('@seven: ', seven);

const { hello: hello1, eo: eo1 } = myJson;
console.log('@hello1: ', hello1);
console.log('@eo1: ', eo1);

const { hell: hello2 = 'Bom dia', eo: eo2 } = myJson;
console.log('@hello2: ', hello2);
console.log('@eo2: ', eo2);

const { hello: hello3, ...restOfJson } = myJson;
console.log('@hello3: ', hello3);
console.log('@restOfJson: ', restOfJson);

const { basics: [templating] } = webUiDev;
// console.log('@basics: ', basics);
console.log('@templating: ', templating);

const { monday: { areYouSleepy } } = myJson;
console.log('@areYouSleepy: ', areYouSleepy);

// Switch value
let a = 5;
let b = 15;
let c;
console.log('@a: ', a);
console.log('@b: ', b);
console.log('@c: ', c);

c = b;
b = a;
a = c;
console.log('@a: ', a);
console.log('@b: ', b);
console.log('@c: ', c);

// ES6 Nice way
let d = 8;
let e = 18;
console.log('@d: ', d);
console.log('@e: ', e);
[d, e] = [e, d]
console.log('@d: ', d);
console.log('@e: ', e);


// ... operator
const array2 = [...array]; // operator as spread (spread operator): divides the array in each element by its own
function add(...params) { // operator as rest (rest operator): compacts free independent values as an array
    return params.reduce((acc, val) => acc + val);
}
console.log('@add(1,2,3,4): ', add(1,2,3,4));


// functions literals and arrow function

const name2 = (params) => { // use this for unnamed functions like the ones in array helpers
    // does not have own context -> this
    // has no arguments object
    // Doesn't use the key word function
    // hoisting does not operate on it
}

function name(params) { // use for the rest of it :)
    // has own context -> this
    // has arguments object
    // Uses the key word function
    // hoisting operates on it
}


// Classes

// javascript is a prototypical based language ES5
function Dog(name) {
    this.name = name;
}

Dog.prototype.roar = () => {
    console.log('@RAWWWWWWWWWWWWWWW!!!');
};

const donJulio = new Dog('Don Julio');
console.log('@donJulio: ', donJulio);
donJulio.roar();

// ES6
class DogClass {
    constructor(name) {
        this.name = name;
    }

    roar() {
        console.log('@RAWWWWWWWWWWWWWWW!!!');
    }
}

const windber = new Dog('Windber');
console.log('@windber: ', windber);
windber.roar();


// Promises
/* 
// Sync
const myPromise = new Promise((resolve, reject) => {
    const randomNumber = Math.random() * 10;
    const roundedNumber = Math.round(randomNumber);
    if (roundedNumber > 5) {
        resolve(true);
        return;
    }
    reject(false);
});

myPromise
    .then(data => console.log('@data: ', data))
    .catch(error => console.log('@error: ', error))
 */


// Async
const myPromise1 = new Promise((resolve, reject) => {
    const timer = setTimeout(() => {
        const randomNumber = Math.random() * 10;
        const roundedNumber = Math.round(randomNumber);
        if (roundedNumber > 5) {
            resolve(true);
            return;
        }
        reject(false);
        clearTimeout(timer);
    }, 6000);
});
const myPromise2 = new Promise((resolve, reject) => {
    const timer = setTimeout(() => {
        const randomNumber = Math.random() * 10;
        const roundedNumber = Math.round(randomNumber);
        if (roundedNumber > 5) {
            resolve(true);
            return;
        }
        reject(false);
        clearTimeout(timer);
    }, 8000);
});


/* myPromise1
    .then(data => console.log('@data: ', data))
    .catch(error => console.log('@error: ', error))
myPromise2
    .then(data => console.log('@data: ', data))
    .catch(error => console.log('@error: ', error)) */

/* 
// Promise.all
const promiseAll = Promise.all([ myPromise1, myPromise2 ]);
promiseAll
    .then(dataAll => console.log('@dataAll: ', dataAll))
    .catch(errorAll => console.log('@errorAll: ', errorAll))
 */

/* 
// Promise.race
const promiseRace = Promise.race([ myPromise1, myPromise2 ]);
promiseRace
    .then(dataRace => console.log('@dataRace: ', dataRace))
    .catch(errorRace => console.log('@errorRace: ', errorRace))
 */


// async/await
async function asyncAwait() {
    try {
        const dataAll = await Promise.all([ myPromise1, myPromise2 ]);
        console.log('@dataAll: ', dataAll)
    } catch (error) {
        console.log('@error: ', error);
    }
}

asyncAwait();
