function sendEmail() {
    const form = document.getElementById('form');

    let email = {
        firstName: document.getElementById("first-name").value,
        lastName: document.getElementById("last-name").value,
        email: document.getElementById("email").value,
        message: document.getElementById("message").value
    };

    if (!form.checkValidity()) {
        alert("Please fill in all fields.");
        return;
    }

    emailjs.send("service_3flxod6", "template_llmf38h", email).then(alert("Email sent successfully!"));

    // Optional: Log the first name to the console for debugging
    console.log(email['firstName']);
}


function clicked() {
    const el = document.getElementById("circle");
    if (el.classList.contains("circleMove")) {
        el.classList.remove("circleMove");
        el.classList.add("unmoved");
        document.documentElement.style.setProperty('--background-color', 'white');
        document.documentElement.style.setProperty('--color', 'black');

        localStorage.setItem('theme', 'light');
    } else {
        el.classList.remove("unmoved");
        el.classList.add("circleMove");
        document.documentElement.style.setProperty('--background-color', 'black');
        document.documentElement.style.setProperty('--color', 'white');

        localStorage.setItem('theme', 'dark');
    }
}

function loadTheme() {
    const theme = localStorage.getItem('theme');
    const el = document.getElementById('circle');

    if (theme === 'dark') {
        el.classList.remove("unmoved");
        el.classList.add("circleMove");
        document.documentElement.style.setProperty('--background-color', 'black');
        document.documentElement.style.setProperty('--color', 'white');
    } else {
        el.classList.remove("circleMove");
        el.classList.add("unmoved");
        document.documentElement.style.setProperty('--background-color', 'white');
        document.documentElement.style.setProperty('--color', 'black');
    }
}

window.onload = loadTheme();