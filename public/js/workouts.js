window.addEventListener("DOMContentLoaded", async () => {
    const response = await fetch("/api/workouts/all");
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
                <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse
                plugin adds the appropriate classes that we use to style each element. These classes control the
                overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of
                this with custom CSS or overriding our default variables. It's also worth noting that just about any
                HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
            </div>
        </div>
        `;
    
        div.innerHTML = divContent;
    
        document.querySelector("#accordion").appendChild(div);

        count++;
        show = "accordion-collapse collapse";
        collapse = "accordion-button collapsed";
    }
})

document.querySelector(".show-modal-btn").addEventListener("click", () => {
    const modal = new bootstrap.Modal(document.querySelector(".modal"));
    modal.show();
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