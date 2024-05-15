const slider = document.getElementById("myRange");
const sectionsContainer = document.getElementById("sections");

function updateSections() {
  const numSections = parseInt(slider.value);
  sectionsContainer.innerHTML = "";
  for (let i = 0; i < 7; i++) {
    const section = document.createElement("div");
    section.classList.add("section");
    if (i < numSections) {
      section.style.backgroundColor = "green";
    }
    sectionsContainer.appendChild(section);
  }
}

slider.addEventListener("input", updateSections);
updateSections();
