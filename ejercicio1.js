//1.1
const game = {
  title: "The last us 2",
  gender: ["action", "zombie", "survival"],
  year: 2020,
};

const { title, gender, year } = game;

console.log(title);
console.log(gender);
console.log(year);

//1.2
const fruits = ["Banana", "Strawberry", "Orange"];

const [fruit1, fruit2, fruit3] = fruits;

console.log(fruit1);
console.log(fruit2);
console.log(fruit3);

//1.3
const animalFunction = () => {
  return { name: "Bengal Tiger", race: "Tiger" };
};

const { name, race } = animalFunction();

console.log(name);
console.log(race);

//1.4
const car = { name2: "Mazda 6", itv: [2015, 2011, 2020] };

const {
  name2,
  itv: [year1, year2, year3],
} = car;

console.log(name2);
console.log(year1);
console.log(year2);
console.log(year3);
