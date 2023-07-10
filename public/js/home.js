

// Loads user's current maximum on page load
window.addEventListener("DOMContentLoaded", async () => {
    try {
        const [benchResponse, squatResponse, deadliftResponse] = await Promise.all([
            fetch("/api/bench"),
            fetch("/api/squat"),
            fetch("/api/deadlift")
        ]);

        const benchData = await benchResponse.json();
        document.querySelector(".current-bench").textContent = `${benchData[0].benchMax} lbs`;

        const squatData = await squatResponse.json();
        document.querySelector(".current-squat").textContent = `${squatData[0].squatMax} lbs`;

        const deadliftData = await deadliftResponse.json();
        document.querySelector(".current-deadlift").textContent = `${deadliftData[0].deadliftMax} lbs`;    

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