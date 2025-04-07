let arrayOfPhotos = [
  "vitamin-a",
  "vitamin-b",
  "vitamin-c",
  "vitamin-d",
  "vitamin-e",
  "vitamin-omega-3",
];

// Fetch the vitamins data from the JSON file
fetch('js/vitamins.json')
  .then((response) => response.json()) // Fixed parentheses
  .then((data) => {
    data.forEach((vitamin, index) => { // Fixed arrow function syntax
      let vitaminDiv = document.createElement("div");
      vitaminDiv.classList.add("vitamin");

      // Append the vitamin div to the container
      document.getElementById("p-vitamin").appendChild(vitaminDiv);

      // Populate the vitamin div with content
      vitaminDiv.innerHTML = `
        <p>${vitamin.id}</p>
        <h3>${vitamin.title}</h3>
        <img src='img/vitamins/${arrayOfPhotos[index]}.png' alt="${vitamin.title}">
        <p>${vitamin.description}</p>
        <div> 
          <p>${"💖".repeat(vitamin.rating) + "🤍".repeat(5 - vitamin.rating)}</p>
          <p>${vitamin.type}</p> 
        </div>
      `;
    });
  })
  .catch((error) => {
    console.error("Error fetching vitamins data:", error);
  });


