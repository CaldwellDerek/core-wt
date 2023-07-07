// Calculates 1 rep maximum for squat
document.querySelector(".submit-btn").addEventListener("click", () => {
    for (let input of document.querySelectorAll("input")){
        if (!input.value){
            return window.alert("Please enter a value for all fields.");
        }
    }

    console.log(Math.round((100 * document.querySelector("#weight").value) / (101.3 - (2.67123 * document.querySelector("#reps").value))));

})

