document.querySelectorAll(".accordion-header").forEach((header) => {
  header.addEventListener("click", () => {
    const content = header.nextElementSibling;
    const button = header.querySelector(".toggle-btn");

    content.classList.toggle("open");
    button.textContent = content.classList.contains("open") ? "-" : "+";
  });
});
