document.querySelector(".search-btn").addEventListener("click", async () => {
    let name = document.querySelector("#name").value;
    let type = "";
    let muscle = "";
    let difficulty = "";

    if (document.querySelector(".type-toggle").textContent.trim() != "EXERCISE TYPE"){
        type = document.querySelector(".type-toggle").textContent.trim().toLowerCase();
    }

    if (document.querySelector(".muscle-toggle").textContent.trim() != "MUSCLE"){
        muscle = document.querySelector(".muscle-toggle").textContent.trim().toLowerCase();
    }

    if (document.querySelector(".difficulty-toggle").textContent.trim() != "DIFFICULTY"){
        difficulty = document.querySelector(".difficulty-toggle").textContent.trim().toLowerCase();
    }

    const response = await fetch(`https://api.api-ninjas.com/v1/exercises?name=${name}&type=${type}&muscle=${muscle}&difficulty=${difficulty}`, {
        method: "GET",
        headers: { "X-Api-Key": "OYm1NRLc0KxJdAn3lj7Lww==xjBzY6JsUpxJri9q" }    
    });
    const responseData = await response.json();
    console.log(responseData);
    
    for (let exercise of responseData){
        const div = document.createElement("div");

        const divContent = `
            <h2 style="font-weight: bold;">${exercise.name}</h2>
            <ul style="list-style-type: none;">
            <li style="font-size: 1.25rem;"><span style="font-weight: bold;">Type: </span>${exercise.type}</li>
            <li style="font-size: 1.25rem;"><span style="font-weight: bold;">Muscle: </span>${exercise.muscle}</li>
            <li style="font-size: 1.25rem;"><span style="font-weight: bold;">Difficulty: </span>${exercise.difficulty}</li>
            <li style="font-size: 1.25rem;"><span style="font-weight: bold;">Equipment: </span>${exercise.equipment}</li>
            </ul>
            <p style="font-size: 1.25rem;">
                ${exercise.instructions}
            </p>
        `
        div.innerHTML = divContent;

        document.querySelector(".exercise-container").appendChild(div);
    }
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