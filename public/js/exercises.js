document.querySelector(".search-btn").addEventListener("click", async () => {
    const modal = new bootstrap.Modal(document.querySelector(".modal"), {});
    document.querySelector(".save-exercise-btn").addEventListener("click", async () => {
        if (document.querySelector("#sets").value == "" || document.querySelector("#reps").value == ""){
            document.querySelector(".message").style.display = "block";
            document.querySelector(".message").style.color = "red";
            document.querySelector(".message").textContent = "Please ensure a value is entered for Sets and Reps before selecting 'SAVE'";
            return;
        }

        let resolved = false;
        for (let radio of document.querySelectorAll(".radio-btn")) {
            if (radio.checked){
                const response = await fetch("/api/exercise/create", {
                    method: "POST",
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        name: document.querySelector(".modal-header").textContent,
                        sets: document.querySelector("#sets").value,
                        reps: document.querySelector("#reps").value,
                        workoutID: radio.getAttribute("data-id")
                    })
                });
                document.querySelector(".message").style.color = "green";
                document.querySelector(".message").textContent = "Successfully added exercise!";
                resolved = true;
                setTimeout(() => {
                    modal.hide();
                    for (let radio of document.querySelectorAll(".radio-remove")){
                        radio.remove();
                    };
                    document.querySelector(".message").style.display = "none";
                }, 1500)
            }
        };
    
        if (!resolved){
            document.querySelector(".message").style.color = "red";
            document.querySelector(".message").textContent = "Unable to save exercise, please ensure a workout is selected!";
        }
    })


    if (document.querySelector(".exercise")){
        for (let exercise of document.querySelectorAll(".exercise")){
            exercise.remove();
        }
    }

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

    let count = 1;
    for (let exercise of responseData){
        const div = document.createElement("div");
        div.setAttribute("style", "padding: 0 0.75rem 2rem 0.75rem;");
        div.classList.add("exercise");

        const divContent = `
            <h2 style="font-weight: bold; font-size: 1.5rem;">${exercise.name}</h2>
            <ul style="list-style-type: none;">
            <li style="font-size: 1.25rem;"><span style="font-weight: bold;">Type: </span>${exercise.type}</li>
            <li style="font-size: 1.25rem;"><span style="font-weight: bold;">Muscle: </span>${exercise.muscle}</li>
            <li style="font-size: 1.25rem;"><span style="font-weight: bold;">Difficulty: </span>${exercise.difficulty}</li>
            <li style="font-size: 1.25rem;"><span style="font-weight: bold;">Equipment: </span>${exercise.equipment}</li>
            </ul>
            <p style="font-size: 1.25rem;">
                ${exercise.instructions}
            </p>
            <button data-name="${exercise.name}" style="font-size: 1rem;" type="button" class="btn btn-secondary show-modal-${count}">ADD TO WORKOUT</button>
        `;
        div.innerHTML = divContent;
        document.querySelector(".results").appendChild(div);

        document.querySelector(`.show-modal-${count}`).addEventListener("click", async () => {
            document.querySelector(".modal-header").textContent = exercise.name;

            const response = await fetch("/api/workouts/all");
            const responseData = await response.json();
            if (responseData.length == 0){
                document.querySelector(".modal-body").innerHTML = `
                <p>You do not currently have any Workouts, navigate to the <a href="/my-workout">My-Workouts</a> page to create one.
                </p>
                `;
            } else {
                for (let workout of responseData){
                    const div = document.createElement("div");
                    div.classList.add("form-check");
                    div.classList.add("radio-remove");
                    div.innerHTML = `
                    <input data-id="${workout.id}" class="form-check-input radio radio-btn radio-remove" type="radio" name="flexRadioDefault" id="workout${workout.id}">
                    <label class="form-check-label radio-remove" for="workout${workout.id}">Workout: ${workout.name}</label>
                `;
                    document.querySelector(".radio-form").prepend(div);
                };
            };
            modal.show();
        });
        count++;
    };
})

document.querySelector(".close-exercise-btn").addEventListener("click", () => {
    setTimeout(()=> {
        for (let radio of document.querySelectorAll(".radio-remove")){
            radio.remove();
        };
        document.querySelector(".message").style.display = "none";
    }, 200);
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