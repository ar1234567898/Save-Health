let arrayOfVitamins = [
    {
      id: "0",
      title: "Vitamin A",
      description: "Supports vision, immune function, and skin health.",
      image: "",
      rating: 2,
      type: "Fat-soluble",
    },
    {
      id: "1",
      title: "Vitamin B",
      description: "Boosts energy and supports brain function.",
      image: "",
      rating: 3,
      type: "Water-soluble",
    },
    {
      id: "2",
      title: "Vitamin C",
      description: "Strengthens the immune system.",
      image: "",
      rating: 1,
      type: "Water-soluble",
    },
    {
      id: "3",
      title: "Vitamin D",
      description: "Supports bone health and immune function.",
      image: "",
      rating: 4,
      type: "Fat-soluble",
    },
    {
      id: "4",
      title: "Vitamin E",
      description: "Acts as an antioxidant and supports skin health.",
      image: "",
      rating: 5,
      type: "Fat-soluble",
    },
    {
      id: "5",
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
        <h3>${vitamin.title}</h3>
        <img src="img/vitamins/${vitamin.id}.png" alt="">
        <p>${vitamin.description}</p>
        <span>${'💖'.repeat(vitamin.rating) + '🤍'.repeat(5 - vitamin.rating)}</span>
        <p>${vitamin.type}</p>
        <span>${vitamin.id}</span>
    `;
});
