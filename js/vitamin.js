let arrayOfVitamins = [
    {
        id: "0", 
        name: "Vitamin B",
        description: "Vitamin A is a fat-soluble vitamin that is naturally present in many foods. Vitamin A is important for normal vision, the immune system, and reproduction. Vitamin A also helps the heart, lungs, kidneys, and other organs work properly.",
        image: "",
        rating: 5,
        type:""
    },
    {
        id: "1", 
        name: "Vitamin C",
        description: "",
        image: "",
        rating: 5,
        type:""
    },
    {
        id: "2", 
        name: "Vitamin D",
        description: "",
        image: "",
        rating: 5,
        type:""
    },
    {
        id: "3", 
        name: "Vitamin B6",
        description: "",
        image: "",
        rating: 5,
        type:""
    },
    {
        id: "4", 
        name: "Vitamin Omega-3",
        description: "",
        image: "",
        rating: 5,
        type:""
    },
    {
        id: "5", 
        name: "Vitamin E",
        description: "",
        image: "",
        rating: 5,
        type:""
    },
    
]

console.log(arrayOfVitamins);

arrayOfVitamins.forEach((vitamin) => {
    console.log(vitamin);
    
    let vitaminDiv = document.createElement("div");
    vitaminDiv.innerText = vitamin.name;
    vitaminDiv.classList.add("vitamin");

    document.getElementById("p-vitamin").appendChild(vitaminDiv);
}); 