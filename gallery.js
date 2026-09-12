const works = [
  ["001-artist-cd1c284b39.jpg", "Artist", "people"],
  ["002-olga-76cb0b36c0.jpg", "Olga", "people"],
  ["003-valley-house-bfc6e978cf.jpg", "Valley House", "places"],
  ["004-swimin-hole-e839950b84.jpg", "Swimming Hole", "places"],
  ["005-dice-1984-8939c0e6b5.jpg", "Dice, 1984", "abstract"],
  ["006-row-boat-and-kayak-a41f9659a6.jpg", "Row Boat and Kayak", "places"],
  ["007-blake-6316d8e7fb.jpg", "Blake", "people"],
  ["008-the-ethan-f9c99d07ca.jpg", "The Ethan", "people"],
  ["009-embers-b880aac15f.jpg", "Embers", "nature"],
  ["010-break-time-77b890bfe9.jpg", "Break Time", "people"],
  ["011-carl-fishing-5aad8e5272.jpg", "Carl Fishing", "people"],
  ["012-womb-quest-62e5932c50.jpg", "Womb Quest", "abstract"],
  ["013-green-flame-c8bc687b4a.jpg", "Green Flame", "abstract"],
  ["014-small-branches-8cc1fb35dc.jpg", "Small Branches", "nature"],
  ["015-bonnie-mae-eb68c17fea.jpg", "Bonnie Mae", "people"],
  ["016-sue-79073ad988.jpg", "Sue", "people"],
  ["017-old-guy-d5c3369ff0.jpg", "Old Guy", "people"],
  ["018-single-flame-04595c18f2.jpg", "Single Flame", "abstract"],
  ["49c67888-a28c-4adb-9633-95e8ae0c16fb.jpg", "Untitled", "abstract"]
].map(([file, title, category]) => ({ file, title, category }));

const gallery = document.querySelector("#gallery");
const lightbox = document.querySelector("#lightbox");
const lightboxImage = document.querySelector("#lightbox-image");
const caption = document.querySelector("#lightbox-caption");
let visibleWorks = works;
let currentIndex = 0;

for (const work of works) {
  const button = document.createElement("button");
  button.type = "button";
  button.className = "artwork";
  button.dataset.category = work.category;
  button.innerHTML = `<img src="assets/${work.file}" alt="${work.title}" loading="lazy"><span>${work.title}</span>`;
  button.addEventListener("click", () => openWork(work));
  gallery.append(button);
}

for (const filter of document.querySelectorAll(".filter")) {
  filter.addEventListener("click", () => {
    const category = filter.dataset.filter;
    document.querySelectorAll(".filter").forEach(button => {
      const active = button === filter;
      button.classList.toggle("active", active);
      button.setAttribute("aria-pressed", active);
    });
    document.querySelectorAll(".artwork").forEach((button, index) => {
      button.hidden = category !== "all" && works[index].category !== category;
    });
    visibleWorks = category === "all" ? works : works.filter(work => work.category === category);
  });
}

function openWork(work) {
  currentIndex = visibleWorks.indexOf(work);
  showCurrent();
  lightbox.showModal();
}

function showCurrent() {
  const work = visibleWorks[currentIndex];
  lightboxImage.src = `assets/${work.file}`;
  lightboxImage.alt = work.title;
  caption.textContent = work.title;
}

function step(amount) {
  currentIndex = (currentIndex + amount + visibleWorks.length) % visibleWorks.length;
  showCurrent();
}

document.querySelector("#close").addEventListener("click", () => lightbox.close());
document.querySelector("#previous").addEventListener("click", () => step(-1));
document.querySelector("#next").addEventListener("click", () => step(1));
lightbox.addEventListener("click", event => { if (event.target === lightbox) lightbox.close(); });
document.addEventListener("keydown", event => {
  if (!lightbox.open) return;
  if (event.key === "ArrowLeft") step(-1);
  if (event.key === "ArrowRight") step(1);
});
