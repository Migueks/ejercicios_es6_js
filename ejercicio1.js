//1.1
const game = {
  title: "The last us 2",
  gender: ["action", "zombie", "survival"],
  year: 2020,
};

const { title, gender, year } = game;

console.log(title); //Output : "The last us 2"
console.log(gender); //Output : "[ 'action', 'zombie', 'survival' ]"
console.log(year); //Output : 2020

//1.2
const fruits = ["Banana", "Strawberry", "Orange"];

const [fruit1, fruit2, fruit3] = fruits;

console.log(fruit1); //Output : "Banana"
console.log(fruit2); //Output : "Strawberry"
console.log(fruit3); //Output : "Orange"

//1.3
const animalFunction = () => {
  return { name: "Bengal Tiger", race: "Tiger" };
};

const { name, race } = animalFunction();

console.log(name); //Output : "Bengal Tiger"
console.log(race); //Output : "Tiger"

//1.4
const car = { name2: "Mazda 6", itv: [2015, 2011, 2020] };

const {
  name2,
  itv: [year1, year2, year3],
} = car;

console.log(name2); //Output : "Mazda 6"
console.log(year1); //Output : 2015
console.log(year2); //Output : 2011
console.log(year3); //Output : 2020
