const animals = [
  { id: 5130821, name: "Cow" },
  { id: 5953826, name: "Goat" },
  { id: 16733509, name: "Chicken" },
  { id: 18876483, name: "Dog" },
  { id: 33585483, name: "Cat" },
  { id: 6738246, name: "Sheep" },
  { id: 28849120, name: "Duck" },
  { id: 16956763, name: "Turkey" },
  { id: 326012, name: "Rabitt" },
  { id: 110820, name: "Pig" },
  { id: 13682424, name: "Donkey" },
  { id: 35721244, name: "Camel" },
];

export default function shuffle() {
  return animals.sort(() => Math.random() - 0.5);
}
