if (window.location.href == "http://localhost:3000/"){
    document.querySelector(".signup-link").style.display = "block";

} else if (window.location.href == "http://localhost:3000/signup"){
    document.querySelector(".login-link").style.display = "block";

} else if (window.location.href == "http://localhost:3000/home"){
    document.querySelector(".my-workout-link").style.display = "block";
    document.querySelector(".workout-link").style.display = "block";
    document.querySelector(".logout-link").style.display = "block";

} else if (window.location.href == "http://localhost:3000/my-workout"){
    document.querySelector(".home-link").style.display = "block";
    document.querySelector(".workout-link").style.display = "block";
    document.querySelector(".logout-link").style.display = "block";

} else if (window.location.href == "http://localhost:3000/workout"){
    document.querySelector(".home-link").style.display = "block";
    document.querySelector(".my-workout-link").style.display = "block";
    document.querySelector(".logout-link").style.display = "block";

} else if (window.location.href == "http://localhost:3000/bench"){
    document.querySelector(".home-link").style.display = "block";
    document.querySelector(".my-workout-link").style.display = "block";
    document.querySelector(".workout-link").style.display = "block";
    document.querySelector(".logout-link").style.display = "block";

} else if (window.location.href == "http://localhost:3000/squat"){
    document.querySelector(".home-link").style.display = "block";
    document.querySelector(".my-workout-link").style.display = "block";
    document.querySelector(".workout-link").style.display = "block";
    document.querySelector(".logout-link").style.display = "block";

} else if (window.location.href == "http://localhost:3000/deadlift"){
    document.querySelector(".home-link").style.display = "block";
    document.querySelector(".my-workout-link").style.display = "block";
    document.querySelector(".workout-link").style.display = "block";
    document.querySelector(".logout-link").style.display = "block";
}

document.querySelector(".sign-out").addEventListener("click", async () => {
    window.location.href = "/"
})
