// Creates new user on click
document.querySelector(".submit-btn").addEventListener("click", async () => {
    // Displays a window alert if an input is left blank.
    for (let input of document.querySelectorAll("input")){
        if (!input.value){
            return window.alert("Please enter a value for all fields.");
        }
    }

    // API call to create new user with input values
    const newUser = await fetch("/api/users/create", {
        method: "POST",
        body: JSON.stringify({
            email: document.querySelector("#email").value,
            firstName: document.querySelector("#first-name").value,
            lastName: document.querySelector("#last-name").value,
            username: document.querySelector("#username").value,
            password: document.querySelector("#password").value
        }),
        headers: {
            "Content-Type": "application/json"
        }
    });

    // Alerts whether user was created
    if (newUser.ok){
        window.alert("User successfully created!");
    } else {
        window.alert("User not created!");
    }

})

// Returns user to login page on click
document.querySelector(".return-btn").addEventListener("click", () => {
    window.location.href = "/";
})