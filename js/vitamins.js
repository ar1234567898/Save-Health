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
        
        <div class = "vitamin-container">
          <div class="front">
          <p>${vitamin.id}</p>
          <h3>${vitamin.title}</h3>
          <img src='img/vitamins/${arrayOfPhotos[index]}.png' alt="${vitamin.title}" onerror="this.onerror=null;this.src='img/vitamins/default.png';" />
          <p>${vitamin.description}</p>
          <div> 
            <p>${"💖".repeat(vitamin.rating) + "🤍".repeat(5 - vitamin.rating)}</p>
            <p class = "vitamin-type">${vitamin.type}</p>
          </div>           
          </div>
          <div class="back">
            <h3>More Info</h3>
            <p>Vitamin A is essential for healthy vision, skin, and immune function.</p>
          </div>
        </div>
      `;
    });
  })
  .catch((error) => {
    console.error("Error fetching vitamins data:", error);
  });

  document.querySelectorAll('.vitamin').forEach((vitamin) => {
    vitamin.addEventListener('click', () => {
      vitamin.classList.toggle('flipped');
      console.log("l");
    });
  });


