// Calculates 1 rep maximum for bench press
document.querySelector(".submit-btn").addEventListener("click", async () => {
    for (let input of document.querySelectorAll("input")){
        if (!input.value){
            return window.alert("Please enter a value for all fields.");
        }
    }

    console.log(Math.round((100 * document.querySelector("#weight").value) / (101.3 - (2.67123 * document.querySelector("#reps").value))));

    const createMax = await fetch("/api/bench/create", {
        method: "POST",
        body: JSON.stringify({
            benchMax: Math.round((100 * document.querySelector("#weight").value) / (101.3 - (2.67123 * document.querySelector("#reps").value)))
        }),
        headers: {
            "Content-Type": "application/json"
        }
    });

    if (createMax.ok){
        window.alert("Bench Max successfully created!");
    } else {
        window.alert("Bench Max not created!");
    }
})

