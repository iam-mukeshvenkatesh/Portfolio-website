/* ===== TYPING EFFECT ===== */
const text = "Aspiring Data Scientist | ML Engineer | Full Stack Developer";
let index = 0;

function typingEffect() {
    if (index < text.length) {
        document.getElementById("typingText").innerHTML += text.charAt(index);
        index++;
        setTimeout(typingEffect, 100);
    }
}
typingEffect();

/* ===== PROJECT DETAILS ===== */
function showProjectDetails() {
    alert(
        "Tech Stack:\nHTML, CSS, JavaScript, Python, NLP, AWS\n\n" +
        "Features:\n- PDF ingestion\n- NER using BioBERT\n- JSON structuring\n- Web dashboard"
    );
}

/* ===== CONTACT FORM VALIDATION ===== */
document.getElementById("contactForm").addEventListener("submit", function (e) {
    e.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    if (!name || !email || !message) {
        alert("Please fill all fields.");
        return;
    }

    alert("Thank you! Your message has been sent.");
    this.reset();
});

/* ===== DARK MODE TOGGLE ===== */
document.getElementById("themeToggle").addEventListener("click", function () {
    document.body.classList.toggle("dark-mode");
});