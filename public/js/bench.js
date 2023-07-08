window.addEventListener("DOMContentLoaded", async () => {
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
    // for (let input of document.querySelectorAll("input")){
    //     if (!input.value){
    //         return window.alert("Please enter a value for all fields.");
    //     }
    // }

    // API call to create new bench max"
    // const createMax = await fetch("/api/bench/create", {
    //     method: "POST",
    //     body: JSON.stringify({
    //         benchMax: Math.round((100 * document.querySelector("#weight").value) / (101.3 - (2.67123 * document.querySelector("#reps").value)))
    //     }),
    //     headers: {
    //         "Content-Type": "application/json"
    //     }
    // });

    // Alerts whether max was created
    // if (createMax.ok){
    //     window.alert("Bench Max successfully created!");
    // } else {
    //     window.alert("Bench Max not created!");
    // }

    // Clears input field values
    // for (let input of document.querySelectorAll("input")){
    //     input.value = "";
    // }

    location.reload();

})

