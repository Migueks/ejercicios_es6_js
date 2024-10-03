//4.1
const ages = [22, 14, 24, 55, 65, 21, 12, 13, 90];

const agesFilter = ages.filter((age) => age > 18);

console.log(agesFilter);

//4.2
const ages2 = [22, 14, 24, 55, 65, 21, 12, 13, 90];

const evenAges2 = ages2.filter((age) => age % 2 === 0);

console.log(evenAges2);

//4.3
const streamers = [
  { name: "Rubius", age: 32, gameMorePlayed: "Minecraft" },
  { name: "Ibai", age: 25, gameMorePlayed: "League of Legends" },
  { name: "Reven", age: 43, gameMorePlayed: "League of Legends" },
  { name: "AuronPlay", age: 33, gameMorePlayed: "Among Us" },
];

const lolStreamers = streamers.filter((streamer) => {
  if (streamer.gameMorePlayed === "League of Legends") {
    return streamer;
  }
});

console.log(lolStreamers);

//4.4
const streamers2 = [
  { name: "Rubius", age: 32, gameMorePlayed: "Minecraft" },
  { name: "Ibai", age: 25, gameMorePlayed: "League of Legends" },
  { name: "Reven", age: 43, gameMorePlayed: "League of Legends" },
  { name: "AuronPlay", age: 33, gameMorePlayed: "Among Us" },
];

const streamersWithU = streamers2.filter((streamer2) => {
  return streamer2.name.includes("u");
});

console.log(streamersWithU);

//4.5
const streamers3 = [
  { name: "Rubius", age: 32, gameMorePlayed: "Minecraft" },
  { name: "Ibai", age: 25, gameMorePlayed: "League of Legends" },
  { name: "Reven", age: 43, gameMorePlayed: "League of Legends" },
  { name: "AuronPlay", age: 33, gameMorePlayed: "Among Us" },
];

const lengendAgedStreamers = streamers3.filter((streamer3) => {
  if (streamer3.gameMorePlayed.includes("Legends")) {
    if (streamer3.age > 35) {
      streamer3.gameMorePlayed = streamer3.gameMorePlayed.toUpperCase();
    }
    return true;
  }
  return false;
});

console.log(lengendAgedStreamers);
