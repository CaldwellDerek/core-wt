// Loads user's current maximum on page load
window.addEventListener("DOMContentLoaded", async () => {
    try {
        const [benchResponse, squatResponse, deadliftResponse, topBenchResponse, topSquatResponse, topDeadliftResponse] = await Promise.all([
            fetch("/api/bench"),
            fetch("/api/squat"),
            fetch("/api/deadlift"),
            fetch("/api/bench/highest"),
            fetch("/api/squat/highest"),
            fetch("/api/deadlift/highest")
        ]);
        const topBenchData = await topBenchResponse.json();
        try {
            document.querySelector(".top-bench-user").textContent = topBenchData.username;
            document.querySelector(".top-bench").textContent = `${topBenchData.weight} lbs`;
        } catch (error) {
            // Ignore
        }

        const topSquatData = await topSquatResponse.json();
        try {
            document.querySelector(".top-squat-user").textContent = topSquatData.username;
            document.querySelector(".top-squat").textContent = `${topSquatData.weight} lbs`;
        } catch (error) {
            // Ignore
        }

        const topDeadliftData = await topDeadliftResponse.json();
        try {
            document.querySelector(".top-deadlift-user").textContent = topDeadliftData.username;
            document.querySelector(".top-deadlift").textContent = `${topDeadliftData.weight} lbs`;
        } catch (error) {
            // Ignore
        }

        const benchData = await benchResponse.json();
        try {
            document.querySelector(".current-bench").textContent = `${benchData[0].benchMax} lbs`;
        } catch (error) {
            // Ignore
        }

        const squatData = await squatResponse.json();
        try {
            document.querySelector(".current-squat").textContent = `${squatData[0].squatMax} lbs`;
        } catch (error) {
            // Ignore
        }

        const deadliftData = await deadliftResponse.json();
        try {
            document.querySelector(".current-deadlift").textContent = `${deadliftData[0].deadliftMax} lbs`;
        } catch (error){
            // Ignore
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