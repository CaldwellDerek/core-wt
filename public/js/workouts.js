window.addEventListener("DOMContentLoaded", async () => {
    const response = await fetch("/api/workouts/all/exercises");
    const responseData = await response.json();

    let count = 1;
    let show = "accordion-collapse collapse show";
    let collapse = "accordion-button"
    for (let workout of responseData){
        const div = document.createElement("div");
        div.classList.add("accordion-item");
        const divContent = 
        `
        <h2 class="accordion-header">
        <button class="${collapse}" type="button" data-bs-toggle="collapse" data-bs-target="#collapse${count}" aria-expanded="false" aria-controls="collapse${count}">
            ${workout.name} - ${dayjs(workout.createdAt).format("MM/DD/YYYY")}
        </button>
        </h2>
        <div id="collapse${count}" class="${show}"  data-bs-parent="#accordion">
            <div class="accordion-body">
                <table class="table table-hover">
                    <thead >
                        <tr>
                            <th scope="col">Name</th>
                            <th scope="col">Sets</th>
                            <th scope="col">Repetitions</th>
                            <th scope="col"></th>
                        </tr>
                    </thead>
                    <tbody id="${workout.id}"></tbody>
                </table>
                <div style="display: flex; justify-content: flex-end; align-items: center; margin-top: 6rem;">
                    <button data-id="${workout.id}" data-name="${workout.name}" style="font-size: 1.25rem;" type="button" class="btn btn-secondary delete-btn">DELETE WORKOUT</button>
                </div>
            </div>
        </div>
        `;
        div.innerHTML = divContent;
        document.querySelector("#accordion").appendChild(div);

        for (let exercise of workout.Exercises){
            const tr = document.createElement("tr");
            const row = 
            `
            <td>${exercise.name}</td>
            <td>${exercise.sets}</td>
            <td>${exercise.reps}</td>
            <td style="width: 8rem;">
                <button data-id="${exercise.id}" style="font-size: 0.75rem;" type="button" class="btn btn-secondary delete-exercise-btn">
                    DELETE
                </button>
            </td>
            `

            tr.innerHTML = row;
            document.getElementById(workout.id).appendChild(tr);

            document.querySelector(".delete-exercise-btn").addEventListener("click", async () => {
                const response = await fetch(`/api/exercise/${document.querySelector(".delete-exercise-btn").getAttribute("data-id")}`, {
                    method: "DELETE"
                });
                location.reload();
            })
        }
        count++;
        show = "accordion-collapse collapse";
        collapse = "accordion-button collapsed";
    }

    for (let btn of document.querySelectorAll(".delete-btn")){
        btn.addEventListener("click", (event) => {
            const modal = new bootstrap.Modal(document.querySelector(".delete-workout-modal"));
            document.querySelector(".delete-name").textContent = event.target.getAttribute("data-name");
            document.querySelector(".confirm-delete-btn").setAttribute("data-id", event.target.getAttribute("data-id"));
            modal.show();
        });
    }
    
})

document.querySelector(".show-modal-btn").addEventListener("click", () => {
    const modal = new bootstrap.Modal(document.querySelector(".create-workout-modal"));
    modal.show();
})

document.querySelector(".confirm-delete-btn").addEventListener("click", async () => {
    const response = await fetch(`/api/workouts/delete/${document.querySelector(".confirm-delete-btn").getAttribute("data-id")}`, {
        method: "DELETE"
    });
    location.reload();
})

document.querySelector(".create-btn").addEventListener("click", async () => {

    const response = await fetch("/api/workouts/create", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            name: document.querySelector("#name").value
        })
    });

    location.reload();
})

