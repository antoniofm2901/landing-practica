const faqButtons = document.querySelectorAll(".faq-question");

faqButtons.forEach(button => {
    button.addEventListener("click", () => {
        const answer = button.nextElementSibling;

        // Cerrar otros abiertos
        document.querySelectorAll(".faq-answer").forEach(item => {
            if (item !== answer) {
                item.style.maxHeight = null;
                item.previousElementSibling.querySelector("span").textContent = "+";
            }
        });

        if (answer.style.maxHeight) {
            answer.style.maxHeight = null;
            button.querySelector("span").textContent = "+";
        } else {
            answer.style.maxHeight = answer.scrollHeight + "px";
            button.querySelector("span").textContent = "−";
        }
    });
});