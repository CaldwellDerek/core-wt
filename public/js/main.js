if (window.location.href == "https://core-wt-3bc894879624.herokuapp.com/"){
    document.querySelector(".signup-link").style.display = "block";

} else if (window.location.href == "https://core-wt-3bc894879624.herokuapp.com/signup"){
    document.querySelector(".login-link").style.display = "block";

} else {
    document.querySelector(".home-link").style.display = "block";
    document.querySelector(".my-workout-link").style.display = "block";
    document.querySelector(".workout-link").style.display = "block";
    document.querySelector(".logout-link").style.display = "block";
}

document.querySelector(".sign-out").addEventListener("click", async () => {
    window.location.href = "/"
})
