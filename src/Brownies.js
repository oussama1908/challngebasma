const { v4: uuidv4 } = require('uuid'); // Importer la fonction UUID v4

const brownies = [
    {
      id: uuidv4(), // Générer un UUID unique pour le brownie
      title: "Brownie au chocolat noir",
      description: "Un brownie au chocolat noir délicieusement fondant.",
      ingredients: ["chocolat noir", "beurre", "sucre", "œufs", "farine"],
      rating: 3,
      posterURL: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4iAm5QHT_Rqzc0zwppYID3EoqUiXP_bAsrw&usqp=CAU",
    },
    {
      id: uuidv4(),
      title: "Brownie aux noix",
      description: "Un brownie aux noix croquant et moelleux à la fois.",
      ingredients: ["chocolat noir", "beurre", "sucre", "œufs", "farine", "noix"],
      rating: 2,
      posterURL: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4iAm5QHT_Rqzc0zwppYID3EoqUiXP_bAsrw&usqp=CAU",
    },
    {
      id: uuidv4(),
      title: "Brownie au caramel salé",
      description: "Un brownie au caramel salé pour une touche sucrée-salée.",
      ingredients: ["chocolat noir", "beurre", "sucre", "œufs", "farine", "caramel"],
      rating: 4,
      posterURL: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4iAm5QHT_Rqzc0zwppYID3EoqUiXP_bAsrw&usqp=CAU",
    },
];

export default brownies;
