//3.1
const users = [
  { id: 1, name: "Abel" },
  { id: 2, name: "Julia" },
  { id: 3, name: "Pedro" },
  { id: 4, name: "Amanda" },
];

const names = users.map((user) => user.name);

console.log(names); // Output : [ 'Abel', 'Julia', 'Pedro', 'Amanda' ]

//3.2
const users2 = [
  { id: 1, name: "Abel" },
  { id: 2, name: "Julia" },
  { id: 3, name: "Pedro" },
  { id: 4, name: "Amanda" },
];

const newNames = users2.map((user2) => {
  if (user2.name.startsWith("A")) {
    user2.name = "Anacleto";
  }
  return user2.name;
});

console.log(newNames); // Output = [ 'Anacleto', 'Julia', 'Pedro', 'Anacleto' ]

//3.3
const cities = [
  { isVisited: true, name: "Tokyo" },
  { isVisited: false, name: "Madagascar" },
  { isVisited: true, name: "Amsterdam" },
  { isVisited: false, name: "Seul" },
];

const cityNames = cities.map((city) => {
  if (city.isVisited === true) {
    return city.name + " (Visitado)";
  }
  return city.name;
});

console.log(cityNames); //Output : [ 'Tokyo (Visitado)', 'Madagascar', 'Amsterdam (Visitado)', 'Seul' ]
