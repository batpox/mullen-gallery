const assetFiles = [
  "001-artist-cd1c284b39.jpg",
  "002-olga-76cb0b36c0.jpg",
  "003-valley-house-bfc6e978cf.jpg",
  "004-swimin-hole-e839950b84.jpg",
  "005-dice-1984-8939c0e6b5.jpg",
  "006-row-boat-and-kayak-a41f9659a6.jpg",
  "007-blake-6316d8e7fb.jpg",
  "008-the-ethan-f9c99d07ca.jpg",
  "009-embers-b880aac15f.jpg",
  "010-break-time-77b890bfe9.jpg",
  "011-carl-fishing-5aad8e5272.jpg",
  "012-womb-quest-62e5932c50.jpg",
  "013-green-flame-c8bc687b4a.jpg",
  "014-small-branches-8cc1fb35dc.jpg",
  "015-bonnie-mae-eb68c17fea.jpg",
  "016-sue-79073ad988.jpg",
  "017-old-guy-d5c3369ff0.jpg",
  "018-single-flame-04595c18f2.jpg",
  "019-kitchen-at-d8efbef26e.jpg",
  "020-drums-021de97c7e.jpg",
  "021-old-studio-346f389803.jpg",
  "022-howard-d111a7ce04.jpg",
  "023-moon-3f3a9c25b8.jpg",
  "024-embers-3-37c13ff55f.jpg",
  "025-cigar-b7b77d4916.jpg",
  "026-damn-silly-7eda20e097.jpg",
  "027-shower-f9bc9bbe40.jpg",
  "028-honey-hole-d81f7917f3.jpg",
  "029-ass-holler-33970eb9eb.jpg",
  "030-blackened-trout-328dff0a91.jpg",
  "031-fish-egg-e63cb3578a.jpg",
  "032-self-portrait-3d3d3e5707.jpg",
  "033-self-bbba9996a3.jpg",
  "034-green-shadow-316fc63071.jpg",
  "035-ghost-wrench-7adfa386af.jpg",
  "036-red-fish-0c5a34cfc4.jpg",
  "037-wanda-e10db65156.jpg",
  "038-kathy-7855fe5459.jpg",
  "039-girlfriend-6440177ca4.jpg",
  "040-stone-dust-0f5be6f978.jpg",
  "041-hallway-fb1fc613fe.jpg",
  "042-margie-15f43c4227.jpg",
  "043-linda-55506a55c2.jpg",
  "044-four-oclock-17b4c618f2.jpg",
  "045-self-portrait-ee5019f926.jpg",
  "046-3-falls-b0db77c7fc.jpg",
  "047-sea-foam-097427777b.jpg",
  "048-blind-trout-aa153479a3.jpg",
  "049-leaves-and-trees-de3aa9de92.jpg",
  "050-leaves-and-trees-2-f3a77dccd9.jpg",
  "051-come-here-33f4715502.jpg",
  "052-to-the-east-8706fbec4e.jpg",
  "053-2-blind-04ce89aff7.jpg",
  "054-shepards-creek-420ba8da9e.jpg",
  "055-you-should-4ad99e8930.jpg",
  "056-good-heart-3b039d349d.jpg",
  "057-eleven-8a7185c7aa.jpg",
  "058-merlin-177ec8c479.jpg",
  "059-black-crab-cc1e4557b7.jpg",
  "060-sun-and-boat-5fcd4caa55.jpg",
  "061-emily-and-fork-08c7a0bf9a.jpg",
  "062-tooth-harbor-where-the-earth-rises-above-itself-8ba5dc0a70.jpg",
  "063-paul-and-dog-626b5c0162.jpg",
  "064-glad-i-was-wrong-fbac47fe44.jpg",
  "065-study-in-c790c52fa8.jpg",
  "066-over-the-edge-582e254042.jpg",
  "067-moondog-trippin-ccddc1715a.jpg",
  "068-leaving-the-observatory-81b62f1eff.jpg",
  "069-emily-flying-12fafb7c6d.jpg",
  "070-hitching-to-florida-8b1d34383d.jpg",
  "071-jesus-and-5f10841d71.jpg",
  "072-hanging-on-b2d68e7df9.jpg",
  "073-fiery-snatch-d442e0cde9.jpg",
  "074-madiline-77eaab00e5.jpg",
  "075-molly-6a7c6740f0.jpg",
  "076-mother-earth-fdcb18729a.jpg",
  "077-deaths-door-146310f7b1.jpg",
  "078-tina-06567e4d2d.jpg",
  "079-frank-ahrens-02a93befcf.jpg",
  "080-studio-sign-at-2303acc5cb.jpg",
  "081-lady-midnight-bc12aa9675.jpg",
  "082-hard-to-32f146d53b.jpg",
  "152-in-a-victorian-manor-eff074f3cf.jpg",
  "153-mozambique-ca056f5dd7.jpg",
  "154-molly-at-00474e9fe6.jpg",
  "155-my-key-a6994d701b.jpg",
  "156-fish-or-frog-1eb4463b99.jpg",
  "157-mariam-7085e7c01c.jpg",
  "158-visitor-5effff31be.jpg",
  "159-barb-0210588dce.jpg",
  "160-water-and-rock-024f78efa3.jpg",
  "161-the-kahn-4dcefa7a67.jpg",
  "162-fran-3401ccf42c.jpg",
  "163-witch-8b2a91c32f.jpg",
  "164-sunset-f23a0e7f9d.jpg",
  "165-joann-brushes-fd30aa39ad.jpg",
  "166-happy-time-b74728c163.jpg",
  "167-monument-4527311557.jpg",
  "168-robin-4d3bbb4892.jpg",
  "169-beautiful-e2238b6696.jpg",
  "170-dont-dc12957f9a.jpg",
  "171-mars-3f40af8f2e.jpg",
  "172-cave-of-wonders-f1da9d2375.jpg",
  "173-underground-c3e479c499.jpg",
  "174-snow-e1eddf89d7.jpg",
  "175-closer-to-earth-9b6db3e712.jpg",
  "176-by-the-st-lawrence-24e6ddddc2.jpg",
  "177-african-nightmare-5ee2da37d1.jpg",
  "178-heartbreak-75103b20f5.jpg",
  "179-white-ladder-in-water-f1b952fdd1.jpg",
  "180-breakfast-44afe7728f.jpg",
  "181-cross-50bba313a2.jpg",
  "182-our-39d10c41f4.jpg",
  "183-on-the-edge-bac0fe12f3.jpg",
  "184-otherwise-3e2bd34a8f.jpg",
  "185-cow-and-crows-882ee33f0d.jpg",
  "186-alleyway-f5832dad98.jpg",
  "187-molly-373a4cca51.jpg",
  "188-green-emily-ced651eb42.jpg",
  "189-reverse-time-4207333522.jpg",
  "190-breakfast-in-the-dominican-republic-7b8037c462.jpg",
  "191-valley-house-studio-8fde24627e.jpg",
  "192-brian-beats-paul-9e115bb9c9.jpg",
  "193-hand-and-book-fe41bbfc03.jpg",
  "194-subterranean-disaster-efbed91faa.jpg",
  "195-teresa-and-betty-35ac172053.jpg",
  "196-debbie-6286f65f52.jpg",
  "197-bridgette-88e8d26e62.jpg",
  "198-dark-travel-b207385a1d.jpg",
  "199-cheryl-3d882d5b9f.jpg",
  "200-fishing-d1e91eeec3.jpg",
  "201-two-trees-42752dbfde.jpg",
  "202-the-gift-dcb12631d4.jpg",
  "203-apollo-aaf5e8f9ce.jpg",
  "204-gayle-690627ff8b.jpg",
  "205-frederick-9144f89f0a.jpg",
  "206-crow-sees-log-in-river-21df44be7c.jpg",
  "207-lone-wolf-968e895061.jpg",
  "208-either-or-23f50620b7.jpg",
  "209-penny-92d6bea4e0.jpg",
  "210-dutchs-tent-ab743529a9.jpg",
  "211-mountain-valley-53df202914.jpg",
  "212-creek-ee2f7ba730.jpg",
  "213-art-lesson-c642892f8d.jpg",
  "214-reaching-for-you-231a4f007a.jpg",
  "215-cleavage-bd45fda0a2.jpg",
  "216-the-henrys-1a22bece83.jpg",
  "217-engagement-ebe4da7df7.jpg",
  "218-dirty-call-434abc6191.jpg",
  "219-4-trees-7913988595.jpg",
  "220-prometheus-led-by-she-monkey-272fe69298.jpg",
  "221-carl-281db4fe19.jpg",
  "222-burlington-bombs-0a1f72f105.jpg",
  "223-never-paid-me-5767ac8df4.jpg",
  "224-red-crab-61a68db290.jpg",
  "225-smoochie-e571202014.jpg",
  "226-linda-e762c368cc.jpg",
  "227-have-one-590b39c57c.jpg",
  "228-bad-joe-15b7bbd4a9.jpg",
  "229-blue-mushrooms-364d90a2fb.jpg",
  "230-brian-as-carp-310f9614c9.jpg",
  "231-1895-fd91b7cf61.jpg",
  "232-worm-meets-fish-3eaf1a3fa5.jpg",
  "233-longing-ea2f964706.jpg",
  "234-fish-sign-4907db20e4.jpg",
  "235-way-of-life-3cfd020912.jpg",
  "236-greek-010a0b0de5.jpg",
  "237-flame-of-song-6dd22b0dfe.jpg",
  "238-night-bridge-1e79243d1c.jpg",
  "239-luck-c8c89e7bfb.jpg",
  "240-3-souls-b02975b8c1.jpg",
  "241-moose-and-503642e3e8.jpg",
  "242-bonnie-mae-92d2a3c101.jpg",
  "243-trapped-f9686ae1e7.jpg",
  "244-comrade-9068315ee6.jpg",
  "245-a-womans-18eea71c26.jpg",
  "246-red-embers-289f953287.jpg",
  "247-sue-and-sam-14ba1f72b9.jpg",
  "248-lunch-9043a14816.jpg",
  "249-pillar-d05a93894f.jpg",
  "250-future-table-618848324c.jpg",
  "251-lori-2858ff08b9.jpg",
  "252-mail-girl-70ed26c8fc.jpg",
  "253-stacy-0cf0480a81.jpg",
  "254-salad-f526843d30.jpg",
  "255-my-aunts-bathroom-eecf05fb13.jpg",
  "256-green-glow-2b466d592a.jpg",
  "257-cavern-lake-8767347bd0.jpg",
  "258-money-our-1ea853436a.jpg",
  "259-industrial-3236e1f473.jpg",
  "260-happy-couple-7cf9e9793e.jpg",
  "261-bonnie-in-d88fbfca97.jpg",
  "262-abandoned-in-20d9e951d3.jpg",
  "263-he-is-us-2ade275da2.jpg",
  "264-my-fathers-2c1f22d648.jpg",
  "265-bonnie-in-168a16c5dd.jpg",
  "266-betty-75e496d9b5.jpg",
  "267-one-way-ab1c5725e7.jpg",
  "268-midnight-snack-fb55005229.jpg",
  "269-lion-2b9c2b72e5.jpg",
  "270-housing-project-a8f725a603.jpg",
  "271-melissa-in-993f35db9b.jpg",
  "272-sara-c42b0a82aa.jpg",
  "273-canoe-at-88ada7baa3.jpg",
  "274-country-048f04940f.jpg",
  "275-river-rat-boat-524ccaaf36.jpg",
  "276-the-end-9d3a89e365.jpg",
  "49c67888-a28c-4adb-9633-95e8ae0c16fb.jpg"
];

const categories = {
  people: new Set([1,2,7,10,15,16,17,20,26,28,29,32,33,37,38,39,40,42,43,45,51,55,56,58,61,63,64,67,69,71,72,73,74,75,77,78,81,152,153,154,157,158,159,161,162,163,165,167,168,169,172,177,178,181,182,183,187,188,190,192,193,195,196,197,198,199,204,205,207,208,209,213,214,215,216,218,220,221,223,226,228,233,239,241,242,244,245,247,251,252,253,260,261,262,265,266,271,272,274,275]),
  places: new Set([3,4,6,8,11,19,21,27,41,46,52,54,60,62,66,68,70,76,79,80,164,171,176,180,191,200,201,210,211,212,217,219,222,238,240,243,257,259,264,267,268,273,276]),
  nature: new Set([22,24,30,31,36,48,49,50,53,59,156,160,175,179,185,206,224,225,230,232,234,235,263,269])
};

const titleOverrides = {
  "004": "Swimming Hole",
  "005": "Dice, 1984",
  "018": "Single Flame",
  "049": "Leaves and Trees",
  "050": "Leaves and Trees 2",
  "054": "Shepard's Creek",
  "062": "Tooth Harbor: Where the Earth Rises Above Itself",
  "170": "Don't",
  "190": "Breakfast in the Dominican Republic",
  "206": "Crow Sees Log in River",
  "210": "Dutch's Tent",
  "245": "A Woman's",
  "255": "My Aunt's Bathroom",
  "264": "My Father's"
};

function titleFromFilename(file) {
  const number = file.match(/^(\d+)/)?.[1];
  if (number && titleOverrides[number]) return titleOverrides[number];

  const slug = file
    .replace(/\.jpe?g$|\.png$/i, "")
    .replace(/^\d+-/, "")
    .replace(/-[a-f0-9]{10}$/i, "")
    .replaceAll("-", " ");

  return slug.replace(/\b\w/g, character => character.toUpperCase());
}

function categoryFor(file) {
  const number = Number.parseInt(file, 10);
  if (categories.people.has(number)) return "people";
  if (categories.places.has(number)) return "places";
  if (categories.nature.has(number)) return "nature";
  return "abstract";
}

const works = assetFiles.map(file => ({
  file,
  title: file.startsWith("49c67888") ? "Untitled" : titleFromFilename(file),
  category: file.startsWith("49c67888") ? "abstract" : categoryFor(file)
}));

const gallery = document.querySelector("#gallery");
const lightbox = document.querySelector("#lightbox");
const lightboxImage = document.querySelector("#lightbox-image");
const caption = document.querySelector("#lightbox-caption");
let visibleWorks = works;
let currentIndex = 0;

for (const work of works) {
  const button = document.createElement("button");
  const image = document.createElement("img");
  const label = document.createElement("span");

  button.type = "button";
  button.className = "artwork";
  button.dataset.category = work.category;
  button.setAttribute("aria-label", `View ${work.title}`);

  image.src = `assets/${work.file}`;
  image.alt = work.title;
  image.loading = "lazy";
  label.textContent = work.title;

  button.append(image, label);
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
lightbox.addEventListener("click", event => {
  if (event.target === lightbox) lightbox.close();
});
document.addEventListener("keydown", event => {
  if (!lightbox.open) return;
  if (event.key === "ArrowLeft") step(-1);
  if (event.key === "ArrowRight") step(1);
});
