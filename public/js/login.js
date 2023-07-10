
// Validates input, logs user in on click
document.querySelector(".submit-btn").addEventListener("click", async () => {
    for (let input of document.querySelectorAll("input")){
        if (!input.value){
            return window.alert("Please enter a value for all fields.");
        }
    }

    const logUser = await fetch("/api/users/login", {
        method: "POST",
        body: JSON.stringify({
            username: document.querySelector("#username").value,
            password: document.querySelector("#password").value
        }),
        headers: {
            "Content-Type": "application/json"
        }
    });

    if (logUser.ok){
        window.location.href = "/home";
    } else {
        window.alert("Oops!")
    }
})

// Validates input, logs user in on "Enter"
document.addEventListener("keypress", async (e) => {
    if (e.key == "Enter"){
        for (let input of document.querySelectorAll("input")){
            if (!input.value){
                return window.alert("Please enter a value for all fields.");
            }
        }
    
        const logUser = await fetch("/api/users/login", {
            method: "POST",
            body: JSON.stringify({
                username: document.querySelector("#username").value,
                password: document.querySelector("#password").value
            }),
            headers: {
                "Content-Type": "application/json"
            }
        });
    
        if (logUser.ok){
            window.location.href = "/home";
        } else {
            window.alert("Oops!")
        }
    }
})