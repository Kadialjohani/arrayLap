// lap1
console.log("###########Q1###########");

function sum(num1, num2) {
    console.log(num1 + num2);
}
const sub=(num1, num2) => {
    console.log(num1 - num2);
}
function mult(num1, num2) {
    console.log(num1 * num2);
}
const divide=(num1, num2) => {
    console.log(num1 / num2);
}
sum(10,5)
sub(10,5)
mult(10,5)
divide(10,5)

// lap2
console.log("###########Q2###########");

let nums = [1,2,3,4,5,6,7,8,9,10.11,12,13,14,15,16,17,18,19,20]



let evennums = nums.filter(function(i){
    let resulte = i % 2 == 0;
    return resulte
})

let oddnums = nums.filter(function(i){
    let resulte = i % 2 != 0;
    return resulte
})
console.log(evennums)
console.log(oddnums)


// lap3
console.log("###########Q3###########");

nums.forEach(function(x, i){
    nums[i] = x * 2
})
console.log(nums);

// lap4
console.log("###########Q4###########");
characters = [
    {
      name: "Luke Skywalker",
      height: 177,
      gender: "male",
      mass: 77,
      eye_color: "brown",
    },
    {
      name: "Leia Organa",
      height: 160,
      gender: "female",
      mass: 56,
      eye_color: "blue",
    },
    {
      name: "Han Solo",
      height: 180,
      gender: "male",
      mass: 80,
      eye_color: "brown",
    },
    {
      name: "Chewie",
      height: 222,
      gender: "male",
      mass: 190,
      eye_color: "black",
    },
    {
      name: "kevien",
      height: 106,
      gender: "male",
      mass: 32.2,
      eye_color: "red",
    },
  ];


// find
console.log("$$$$$$find$$$$$$$$");
const found = characters.find(function(x){
    return x.eye_color === "blue";
    
})

console.log(`has blue eyes: ${found.name}`);

const found2 = characters.find(function(x){
    return x.mass > 50;
    
})
console.log(`first that has mass over 50: ${found2.name}`);

// filter
console.log("$$$$$$filter$$$$$$$$");


const filtered = characters.filter(function(x){
    return x.height < 200;
    
})
console.log("=======height less than 200========");
console.log(filtered);

const filtered2 = characters.filter(function(x){
    return x.gender === "male";
    
})
console.log("=========males===============");
console.log(filtered2);

// map
console.log("$$$$$$map$$$$$$$$");

const map = characters.map(function(x){
    return x.name
})
console.log("=======names=======");
console.log(map);

const map2 = characters.map(function(x){
    return x.height
})

console.log("=======height=======");
console.log(map2)

// sort
console.log("$$$$$$sort$$$$$$$$");

const sorted = characters.sort(function(a, b){
    return a.mass - b.mass
})
console.log("=======mass from low to high=======");
console.log(sorted);

const sorted2 = characters.sort(function(a, b){
    return b.height - a.height
})
console.log("=======height from high to low=======");
console.log(sorted2);

// every
console.log("$$$$$$every$$$$$$$$");
const every = characters.every(function(x){
    return x.mass > 40
})
console.log("=======Does every character have mass more than 40?=======");
console.log(every);

const every2 = characters.every(function(x){
    return x.height < 200
})
console.log("=======Is every character shorter than 200?=======");
console.log(every2);

// some
console.log("$$$$$$some$$$$$$$$");
const some = characters.some(function(x){
    return x.eye_color === "blue"
})
console.log("=======Is there at least one character with blue eyes?=======");
console.log(some);

const some2 = characters.some(function(x){
    return x.height > 210
})
console.log("=======Is there at least one character taller than 210?=======");
console.log(some2);