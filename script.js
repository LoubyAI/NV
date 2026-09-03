const themeToggle = document.getElementById("themeToggle");

if (localStorage.getItem("darkMode") === "on") {
    document.body.classList.add("dark-mode");
}

themeToggle.onclick = function(event) {
    event.preventDefault();

    document.body.classList.toggle("dark-mode");

    if (document.body.classList.contains("dark-mode")) {
        localStorage.setItem("darkMode", "on");
    } else {
        localStorage.setItem("darkMode", "off");
    }
};

const loginForm = document.getElementById("loginForm");

loginForm.addEventListener("submit", function(event) {
    event.preventDefault();

    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    if (email === "vinkonur@gmail.com" && password === "nyjarvinkonur") {
        window.location.href = "start.html";
    } else {
        document.getElementById("loginMessage").textContent =
            "Rangt netfang eða lykilorð.";
    }
});