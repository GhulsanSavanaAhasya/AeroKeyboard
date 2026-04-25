const toggleBtn = document.querySelector("#toggleBtn");
const body = document.body;

toggleBtn.addEventListener("click", () => {
    body.classList.toggle("dark");
});