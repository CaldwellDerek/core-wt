document.querySelector(".search-btn").addEventListener("click", async () => {
    const muscle = "biceps";
    const response = await fetch(`https://api.api-ninjas.com/v1/exercises?muscle=${muscle}`, {
        method: "GET",
        headers: { "X-Api-Key": "OYm1NRLc0KxJdAn3lj7Lww==xjBzY6JsUpxJri9q" }
    });
    const data = await response.json();
    console.log(data);
})

for (let type of document.querySelectorAll(".type")){
    type.addEventListener("click", event => {
        document.querySelector(".type-toggle").textContent = event.target.textContent;
    })
}

for (let type of document.querySelectorAll(".muscle")){
    type.addEventListener("click", event => {
        document.querySelector(".muscle-toggle").textContent = event.target.textContent;
    })
}

for (let type of document.querySelectorAll(".difficulty")){
    type.addEventListener("click", event => {
        document.querySelector(".difficulty-toggle").textContent = event.target.textContent;
    })
}