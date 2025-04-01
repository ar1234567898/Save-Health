

let arrayOfPhotos = [
  "vitamin-a",
  "vitamin-b",
  "vitamin-c",
  "vitamin-d",
  "vitamin-e",
  "vitamin-omega-3",
]

let arrayOfVitamins = [
  {
    rid: 0,
    id: "001",
    title: "Vitamin A",
    description: "Supports vision, immune function, and skin health. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibus.",
    image: "",
    rating: 2,
    type: "Fat-soluble",
  },
  {
    rid: 1,
    id: "002",
    title: "Vitamin B",
    description: "Boosts energy and supports brain function.",
    image: "",
    rating: 3,
    type: "Water-soluble",
  },
  {
    rid: 2,
    id: "003",
    title: "Vitamin C",
    description: "Strengthens the immune system.",
    image: "",
    rating: 1,
    type: "Water-soluble",
  },
  {
    rid: 3,
    id: "004",
    title: "Vitamin D",
    description: "Supports bone health and immune function.",
    image: "",
    rating: 4,
    type: "Fat-soluble",
  },
  {
    rid: 4,
    id: "005",
    title: "Vitamin E",
    description: "Acts as an antioxidant and supports skin health.",
    image: "",
    rating: 5,
    type: "Fat-soluble",
  },
  {
    rid: 5, 
    id: "006",
    title: "Omega 3",
    description: "Promotes heart and brain health.",
    image: "",
    rating: 5,
    type: "Essential fatty acid",
  },
];

console.log(arrayOfVitamins);

arrayOfVitamins.forEach((vitamin) => {
  console.log(vitamin);

  let vitaminDiv = document.createElement("div");
  //   vitaminDiv.innerText = vitamin.title;
  vitaminDiv.classList.add("vitamin");

  document.getElementById("p-vitamin").appendChild(vitaminDiv);

  vitaminDiv.innerHTML = `
        <p>${vitamin.id}</p>
        <h3>${vitamin.title}</h3>
        <img src='img/vitamins/${arrayOfPhotos[vitamin.rid]}.png' alt="">
        <p>${vitamin.description}</p>

        <div> 
               <p>${
                 "💖".repeat(vitamin.rating) + "🤍".repeat(5 - vitamin.rating)
               }</p>
        <p>${vitamin.type}</p> 
        </div>
    `;
});


