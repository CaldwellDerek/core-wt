

// Loads table with previous maxes on page load
window.addEventListener("DOMContentLoaded", async () => {
    document.querySelector(".login-link").style.display = "none";
    document.querySelector(".signup-link").style.display = "none";
    const response = await fetch("/api/bench/");
    const userData = await response.json();
    try {
        let count = 1;
        for (let max of userData){
            const row = document.createElement("tr");
            row.innerHTML = `
                <th scope="row">${count}</th>
                <td>${max.benchMax}</td>
                <td>${dayjs(max.createdAt).format("MM/DD/YYYY - hh:mm A")}</td>
            `
            document.querySelector("tbody").appendChild(row);
            count++;
        }
    } catch (error) {
        console.log(error);
    }
})

// Calculates 1 rep maximum for bench press
document.querySelector(".submit-btn").addEventListener("click", async () => {
    // Alerts if input is left blank
    for (let input of document.querySelectorAll("input")){
        if (!input.value){
            return window.alert("Please enter a value for all fields.");
        }
    }

    document.querySelector(".weight-span").textContent = document.querySelector("#weight").value;
    document.querySelector(".reps-span").textContent = document.querySelector("#reps").value;
    document.querySelector(".new-max").textContent = Math.round((100 * document.querySelector("#weight").value) / (101.3 - (2.67123 * document.querySelector("#reps").value)));

    const modal = new bootstrap.Modal(document.querySelector("#modal"), {});
    modal.show();
})

document.querySelector(".modal-confirm").addEventListener("click", async () => {
    const createMax = await fetch("/api/bench/create", {
        method: "POST",
        body: JSON.stringify({
            benchMax: Math.round((100 * document.querySelector("#weight").value) / (101.3 - (2.67123 * document.querySelector("#reps").value)))
        }),
        headers: {
            "Content-Type": "application/json"
        }
    });

    // for (let input of document.querySelectorAll("input")){
    //     input.value = "";
    // }

    location.reload();
})
