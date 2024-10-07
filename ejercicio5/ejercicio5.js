const streamers = [
  { name: "Rubius", age: 32, gameMorePlayed: "Minecraft" },
  { name: "Ibai", age: 25, gameMorePlayed: "League of Legends" },
  { name: "Reven", age: 43, gameMorePlayed: "League of Legends" },
  { name: "AuronPlay", age: 33, gameMorePlayed: "Among Us" },
];

document
  .querySelector('input[data-function="toFilterStreamers"]')
  .addEventListener("input", (event) => {
    const inputValue = event.target.value.toLowerCase();
    const FilteredStreamers = streamers.filter((streamer) =>
      streamer.name.toLowerCase().includes(inputValue)
    );
    console.log(FilteredStreamers);
  });
