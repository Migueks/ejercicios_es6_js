//2.1
const pointsList = [32, 54, 21, 64, 75, 43];

const copyPointsList = [...pointsList];
console.log(copyPointsList); //Output : [ 32, 54, 21, 64, 75, 43 ]

//2.2
const toy = { name: "Bus laiyiar", date: "20-30-1995", color: "multicolor" };

const copyToy = { ...toy };
console.log(copyToy); //Output : { name: 'Bus laiyiar', date: '20-30-1995', color: 'multicolor' }

//2.3
const pointsList2 = [32, 54, 21, 64, 75, 43];
const pointsLis3 = [54, 87, 99, 65, 32];

const combinedPointList = [...pointsList2, ...pointsLis3];
console.log(combinedPointList); //Output : [ 32, 54, 21, 64, 75, 43, 54, 87, 99, 65, 32 ]

//2.4
const toy2 = { name: "Bus laiyiar", date: "20-30-1995", color: "multicolor" };
const toyUpdate = { lights: "rgb", power: ["Volar like a dragon", "MoonWalk"] };

const combinedToy = { ...toy2, ...toyUpdate };
console.log(combinedToy); //Output : {name: 'Bus laiyiar', date: '20-30-1995', color: 'multicolor', lights: 'rgb', power: [ 'Volar like a dragon', 'MoonWalk' ]}

//2.5
const colors = ["rojo", "azul", "amarillo", "verde", "naranja"];

const newColors = [...colors.slice(0, 2), ...colors.slice(3)];

console.log(newColors); //Output : [ 'rojo', 'azul', 'verde', 'naranja' ]
