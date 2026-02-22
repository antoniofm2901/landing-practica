// ============================
// LOGIN SYSTEM
// ============================

const loginForm = document.getElementById("loginForm");

if (loginForm) {

    loginForm.addEventListener("submit", function (e) {
        e.preventDefault();

        const email = document.getElementById("loginEmail").value.trim();
        const password = document.getElementById("loginPassword").value.trim();
        const message = document.getElementById("loginMessage");

        // Validación básica
        if (email === "" || password === "") {
            message.style.color = "red";
            message.textContent = "Todos los campos son obligatorios";
            return;
        }

        // Usuario simulado
        const fakeUser = {
            email: "admin@gmail.com",
            password: "1234",
            name: "Anthony"
        };

        if (email === fakeUser.email && password === fakeUser.password) {

            // Guardar sesión
            localStorage.setItem("user", JSON.stringify(fakeUser));

            message.style.color = "green";
            message.textContent = "Login exitoso 👋";

            // Redirigir después de 1 segundo
            setTimeout(() => {
                window.location.href = "index.html";
            }, 1000);

        } else {
            message.style.color = "red";
            message.textContent = "Correo o contraseña incorrectos";
        }

    });
}


// ============================
// CHECK SESSION (INDEX)
// ============================

document.addEventListener("DOMContentLoaded", () => {

    const user = JSON.parse(localStorage.getItem("user"));

    if (user) {
        console.log("Usuario activo:", user.name);
    }

});