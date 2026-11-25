const form = document.getElementById("leaveForm");

form.addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent page reload

    const startDate = document.getElementById("start-date").value;
    const endDate = document.getElementById("end-date").value;

    if (endDate < startDate) {
        alert("Error: End date cannot be earlier than start date.");
        return;
    }

    alert("Leave Application Submitted Successfully!\n\nYour leave request has been recorded.");
    form.reset();
});
