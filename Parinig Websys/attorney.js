const attorneys = [
  {
    name: "Atty. Juan Dela Cruz",
    title: "Senior Counsel",
    specialty: "Corporate Law & Litigation",
    image: "lawyer.jpg"
  },
  {
    name: "Atty. Maria Santos",
    title: "Legal Advisor",
    specialty: "Family & Civil Law",
    image: "lawyer1.jpg"
  },
  {
    name: "Atty. Charles Kevin Telin",
    title: "Senior Lawyer",
    specialty: "Criminal Defense",
    image: "charles.jpg"
  },
  {
    name: "Atty. Jerron Jesse Vitug",
    title: "Legal Consultant",
    specialty: "Labor & Employment Law",
    image: "jerron.jpg"
  }
];

const container = document.getElementById("attorney-list");
const searchInput = document.getElementById("search-input");

// 🔁 Function to display filtered results
function renderAttorneys(filteredList) {
  container.innerHTML = ""; // Clear current list

  if (filteredList.length === 0) {
    container.innerHTML = `<p style="text-align:center;">No results found :(</p>`;
    return;
  }

  filteredList.forEach(attorney => {
    const card = document.createElement("div");
    card.className = "attorney-card";
    card.innerHTML = `
      <img src="${attorney.image}" alt="${attorney.name}">
      <div class="attorney-name">${attorney.name}</div>
      <div class="attorney-title">${attorney.title}</div>
      <div class="attorney-specialty">${attorney.specialty}</div>
    `;
    container.appendChild(card);
  });
}

// Initial render
renderAttorneys(attorneys);

// 🔍 Add live search
searchInput.addEventListener("input", function () {
  const query = this.value.toLowerCase();

  const filtered = attorneys.filter(attorney =>
    attorney.name.toLowerCase().includes(query)
   
  );

  renderAttorneys(filtered);
});
