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

const fruits = [
  { id: 6848574, name: "Banana" },
  { id: 5629818, name: "Mangoes" },
  { id: 26950761, name: "Watermelon" },
  { id: 29183610, name: "Avocado" },
  { id: 30636646, name: "Pineapple" },
  { id: 30821253, name: "Orange" },
  { id: 28486832, name: "Apple" },
  { id: 5507722, name: "Papaya" },
  { id: 45209, name: "Grapes" },
  { id: 31508572, name: "Strawberries" },
  { id: 18374144, name: "Peaches" },
  { id: 6956386, name: "Pomegranate" },
];

const houseItems = [
  { id: 35566419, name: "Table" },
  { id: 4177628, name: "Bed" },
  { id: 11154793, name: "Chair" },
  { id: 4202468, name: "Toothbrush" },
  { id: 28576629, name: "Iron" },
  { id: 29579777, name: "Cup" },
  { id: 6962820, name: "Spoon" },
  { id: 6611494, name: "Plate" },
  { id: 32979558, name: "Door" },
  { id: 23940856, name: "Curtain" },
  { id: 10900758, name: "Toilet" },
  { id: 30340418, name: "Shoes" },
];

export default function shuffle(item) {
    let objects = []
    switch(item){
        case 'house_items':
            objects = houseItems.sort(() => Math.random() - 0.5)
            break;
        case 'fruits':
            objects = fruits.sort(() => Math.random() - 0.5)
            break;
        default:
            objects = animals.sort(() => Math.random() - 0.5);
    }

  return objects;
}