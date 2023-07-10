// Loads user's 
window.addEventListener("DOMContentLoaded", async () => {
    const response = await fetch("/api/bench/");
    const userData = await response.json();
    try {
        if (userData){
            document.querySelector(".current-bench").textContent = `${userData[0].benchMax} lbs`;
        }
    } catch (error) {
        console.log(error);
    }
})

// Navigates to bench page
document.querySelector(".bench-btn").addEventListener("click", () => {
    window.location.href = "/bench";
})

// Navigates to squat page
document.querySelector(".squat-btn").addEventListener("click", () => {
    window.location.href = "/squat";
})

// Navigates to deadlift page
document.querySelector(".deadlift-btn").addEventListener("click", () => {
    window.location.href = "/deadlift";
})