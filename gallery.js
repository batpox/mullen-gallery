const assetFiles = [
  "Mullen-001-Olga.jpg",
  "Mullen-002-Valley-House-Ladies-Room.jpg",
  "Mullen-003-Swimin-Hole.jpg",
  "Mullen-004-Dice.jpg",
  "Mullen-005-Row-Boat-and-Kayak.jpg",
  "Mullen-006-Blake.jpg",
  "Mullen-007-The-Ethan-Allen.jpg",
  "Mullen-008-Embers.jpg",
  "Mullen-009-Break-Time.jpg",
  "Mullen-010-Carl-Fishing.jpg",
  "Mullen-011-Womb-Quest.jpg",
  "Mullen-012-Green-Flame.jpg",
  "Mullen-013-Small-Branches.jpg",
  "Mullen-014-Bonnie-Mae.jpg",
  "Mullen-015-Sue.jpg",
  "Mullen-016-Old-Guy.jpg",
  "Mullen-017-Single-Flame.jpg",
  "Mullen-018-Kitchen-at-Old-Studio.jpg",
  "Mullen-019-Drums.jpg",
  "Mullen-020-Old-Studio.jpg",
  "Mullen-021-Howard.jpg",
  "Mullen-022-Moon-Freedom.jpg",
  "Mullen-023-Embers-3.jpg",
  "Mullen-024-Cigar.jpg",
  "Mullen-025-Damn-Silly-Fool.jpg",
  "Mullen-026-Shower.jpg",
  "Mullen-027-Honey-Hole.jpg",
  "Mullen-028-Ass-Holler.jpg",
  "Mullen-029-Blackened-Trout.jpg",
  "Mullen-030-Fish-Egg.jpg",
  "Mullen-031-Self-Portrait.jpg",
  "Mullen-032-Self-Portrait.jpg",
  "Mullen-033-Green-Shadow.jpg",
  "Mullen-034-Ghost-Wrench.jpg",
  "Mullen-035-Red-Fish.jpg",
  "Mullen-036-Wanda.jpg",
  "Mullen-037-Kathy-Sullivans-Breasts.jpg",
  "Mullen-038-Girlfriend.jpg",
  "Mullen-039-Stone-Dust.jpg",
  "Mullen-040-Hallway-Mirror.jpg",
  "Mullen-041-Margie.jpg",
  "Mullen-042-Linda.jpg",
  "Mullen-043-Four-OClock.jpg",
  "Mullen-044-Self-Portrait.jpg",
  "Mullen-045-3-Falls-Glen.jpg",
  "Mullen-046-Sea-Foam.jpg",
  "Mullen-047-Blind-Trout.jpg",
  "Mullen-048-Leaves-and-Trees.jpg",
  "Mullen-049-Leaves-and-Trees-2.jpg",
  "Mullen-050-Come-Here.jpg",
  "Mullen-051-To-the-East.jpg",
  "Mullen-052-2-Blind-Trout.jpg",
  "Mullen-053-Shepards-Creek.jpg",
  "Mullen-054-You-Should-See-Her-Sister.jpg",
  "Mullen-055-Good-Heart.jpg",
  "Mullen-056-Eleven-Strokes.jpg",
  "Mullen-057-Merlin.jpg",
  "Mullen-058-Black-Crab.jpg",
  "Mullen-059-Sun-and-Boat.jpg",
  "Mullen-060-Emily-and-Fork.jpg",
  "Mullen-061-Tooth-Harbor-Where-the-Earth-Rises-Above-Itself.jpg",
  "Mullen-062-Paul-and-Dog.jpg",
  "Mullen-063-Glad-I-Was-Wrong.jpg",
  "Mullen-064-Study-in-Brown.jpg",
  "Mullen-065-Over-the-Edge.jpg",
  "Mullen-066-Moondog-Trippin-at-the-Beach.jpg",
  "Mullen-067-Leaving-the-Observatory.jpg",
  "Mullen-068-Emily-Flying.jpg",
  "Mullen-069-Hitching-to-Florida.jpg",
  "Mullen-070-Jesus-and-Mona.jpg",
  "Mullen-071-Hanging-On.jpg",
  "Mullen-072-Fiery-Snatch.jpg",
  "Mullen-073-Madiline.jpg",
  "Mullen-074-Molly.jpg",
  "Mullen-075-Mother-Earth.jpg",
  "Mullen-076-Deaths-Door.jpg",
  "Mullen-077-Tina.jpg",
  "Mullen-078-Frank-Ahrens.jpg",
  "Mullen-079-Studio-Sign-at-Valley-House.jpg",
  "Mullen-080-Lady-Midnight.jpg",
  "Mullen-081-Hard-to-Remember.jpg",
  "Mullen-082-Evelyn.jpg",
  "Mullen-083-Evelyn-2.jpg",
  "Mullen-084-Peggy.jpg",
  "Mullen-085-Janice-Caught.jpg",
  "Mullen-086-Alice.jpg",
  "Mullen-087-Lonely-Girl.jpg",
  "Mullen-088-Yogi.jpg",
  "Mullen-089-Untitled.jpg",
  "Mullen-090-Jesus-at-the-Pillar.jpg",
  "Mullen-091-Ellie.jpg",
  "Mullen-092-Untitled-2.jpg",
  "Mullen-093-Madonna.jpg",
  "Mullen-094-Cow.jpg",
  "Mullen-095-Infant-Emily.jpg",
  "Mullen-096-Emily-Asleep.jpg",
  "Mullen-097-Convincing.jpg",
  "Mullen-098-Study.jpg",
  "Mullen-099-Carrie.jpg",
  "Mullen-100-Fishing-for-Souls.jpg",
  "Mullen-101-Self-Portrait.jpg",
  "Mullen-102-Boxed.jpg",
  "Mullen-103-Girlfriend.jpg",
  "Mullen-104-Bar.jpg",
  "Mullen-105-Peter-Hills-House.jpg",
  "Mullen-106-Salt-Shaker.jpg",
  "Mullen-107-Passed-Out.jpg",
  "Mullen-108-Logo.jpg",
  "Mullen-109-Suzi.jpg",
  "Mullen-110-Drifty.jpg",
  "Mullen-111-Chica.jpg",
  "Mullen-112-Younger-Self.jpg",
  "Mullen-113-Nailed.jpg",
  "Mullen-114-Snake-Charmer.jpg",
  "Mullen-115-Peggy-Model.jpg",
  "Mullen-116-Dion-Levitating.jpg",
  "Mullen-117-Monica.jpg",
  "Mullen-118-Bread.jpg",
  "Mullen-119-Lehigh-Tavern.jpg",
  "Mullen-120-Mark.jpg",
  "Mullen-121-Wonderland.jpg",
  "Mullen-122-Alexandria.jpg",
  "Mullen-123-Tree-Study.jpg",
  "Mullen-124-Peggy-Again.jpg",
  "Mullen-125-Othello.jpg",
  "Mullen-126-Non-Returnables.jpg",
  "Mullen-127-Sculpture-Study.jpg",
  "Mullen-128-Kim.jpg",
  "Mullen-129-Fits.jpg",
  "Mullen-130-Behind.jpg",
  "Mullen-131-Julie.jpg",
  "Mullen-132-Approach.jpg",
  "Mullen-133-Pay-Phone.jpg",
  "Mullen-134-Newark.jpg",
  "Mullen-135-Howl.jpg",
  "Mullen-136-Chad.jpg",
  "Mullen-137-Belle.jpg",
  "Mullen-138-Mary-T.jpg",
  "Mullen-139-She-Devil.jpg",
  "Mullen-140-Kitchen.jpg",
  "Mullen-141-Left-Hand.jpg",
  "Mullen-142-Paris.jpg",
  "Mullen-143-Hate.jpg",
  "Mullen-144-Lovers.jpg",
  "Mullen-145-Joni.jpg",
  "Mullen-146-Tunnel.jpg",
  "Mullen-147-Cubist-Space.jpg",
  "Mullen-148-Indian.jpg",
  "Mullen-149-Lobsters.jpg",
  "Mullen-150-Andrea.jpg",
  "Mullen-151-In-a-Victorian-Manor.jpg",
  "Mullen-152-Mozambique.jpg",
  "Mullen-153-Molly-at-Hornbrook.jpg",
  "Mullen-154-My-Key-West-Home.jpg",
  "Mullen-155-Fish-or-Frog.jpg",
  "Mullen-156-Mariam.jpg",
  "Mullen-157-Visitor.jpg",
  "Mullen-158-Barb.jpg",
  "Mullen-159-Water-and-Rock.jpg",
  "Mullen-160-The-Kahn-Family.jpg",
  "Mullen-161-Fran.jpg",
  "Mullen-162-Witch.jpg",
  "Mullen-163-Sunset.jpg",
  "Mullen-164-Joann-Brushes-Her-Teeth.jpg",
  "Mullen-165-Happy-Time.jpg",
  "Mullen-166-Monument-to-Adam.jpg",
  "Mullen-167-Robin.jpg",
  "Mullen-168-Beautiful-Karen.jpg",
  "Mullen-169-Dont.jpg",
  "Mullen-170-Mars.jpg",
  "Mullen-171-Cave-of-Wonders.jpg",
  "Mullen-172-Underground.jpg",
  "Mullen-173-Snow.jpg",
  "Mullen-174-Closer-to-Earth.jpg",
  "Mullen-175-By-the-St-Lawrence.jpg",
  "Mullen-176-African-Nightmare.jpg",
  "Mullen-177-Heartbreak.jpg",
  "Mullen-178-White-Ladder-in-Water.jpg",
  "Mullen-179-Breakfast.jpg",
  "Mullen-180-Cross-Roads.jpg",
  "Mullen-181-Our-Father.jpg",
  "Mullen-182-On-the-Edge.jpg",
  "Mullen-183-Otherwise.jpg",
  "Mullen-184-Cow-and-Crows.jpg",
  "Mullen-185-Alleyway.jpg",
  "Mullen-186-Molly.jpg",
  "Mullen-187-Green-Emily.jpg",
  "Mullen-188-Reverse-Time.jpg",
  "Mullen-189-Breakfast-in-the-Dominican-Republic.jpg",
  "Mullen-190-Valley-House-Studio.jpg",
  "Mullen-191-Brian-Beats-Paul.jpg",
  "Mullen-192-Hand-and-Book.jpg",
  "Mullen-193-Subterranean-Disaster.jpg",
  "Mullen-194-Teresa-and-Betty.jpg",
  "Mullen-195-Debbie.jpg",
  "Mullen-196-Bridgette.jpg",
  "Mullen-197-Dark-Travel.jpg",
  "Mullen-198-Cheryl.jpg",
  "Mullen-199-Fishing-on-the-Moon.jpg",
  "Mullen-200-Two-Trees.jpg",
  "Mullen-201-The-Gift.jpg",
  "Mullen-202-Apollo.jpg",
  "Mullen-203-Gayle.jpg",
  "Mullen-204-Frederick.jpg",
  "Mullen-205-Crow-Sees-Log-in-River.jpg",
  "Mullen-206-Lone-Wolf.jpg",
  "Mullen-207-Either-Or.jpg",
  "Mullen-208-Penny.jpg",
  "Mullen-209-Dutchs-Tent.jpg",
  "Mullen-210-Mountain-Valley.jpg",
  "Mullen-211-Creek.jpg",
  "Mullen-212-Art-Lesson.jpg",
  "Mullen-213-Reaching-For-You.jpg",
  "Mullen-214-Cleavage.jpg",
  "Mullen-215-The-Henrys.jpg",
  "Mullen-216-Engagement.jpg",
  "Mullen-217-Dirty-Call.jpg",
  "Mullen-218-4-Trees.jpg",
  "Mullen-219-Prometheus-led-by-She-Monkey.jpg",
  "Mullen-220-Carl.jpg",
  "Mullen-221-Burlington-Bombs.jpg",
  "Mullen-222-Never-Paid-Me.jpg",
  "Mullen-223-Red-Crab.jpg",
  "Mullen-224-Smoochie.jpg",
  "Mullen-225-Linda.jpg",
  "Mullen-226-Have-One.jpg",
  "Mullen-227-Bad-Joe.jpg",
  "Mullen-228-Blue-Mushrooms.jpg",
  "Mullen-229-Brian-as-Carp.jpg",
  "Mullen-230-1895.jpg",
  "Mullen-231-Worm-Meets-Fish.jpg",
  "Mullen-232-Longing.jpg",
  "Mullen-233-Fish-Sign.jpg",
  "Mullen-234-Way-of-Life.jpg",
  "Mullen-235-Greek-Spring.jpg",
  "Mullen-236-Flame-of-Song.jpg",
  "Mullen-237-Night-Bridge.jpg",
  "Mullen-238-Luck.jpg",
  "Mullen-239-3-Souls.jpg",
  "Mullen-240-Moose-and-Squirrel.jpg",
  "Mullen-241-Bonnie-Mae-Dunnaway.jpg",
  "Mullen-242-Trapped.jpg",
  "Mullen-243-Comrade.jpg",
  "Mullen-244-A-Womans-Secret.jpg",
  "Mullen-245-Red-Embers.jpg",
  "Mullen-246-Sue-and-Sam.jpg",
  "Mullen-247-Lunch.jpg",
  "Mullen-248-Pillar.jpg",
  "Mullen-249-Future-Table.jpg",
  "Mullen-250-Lori.jpg",
  "Mullen-251-Mail-Girl.jpg",
  "Mullen-252-Stacy.jpg",
  "Mullen-253-Salad.jpg",
  "Mullen-254-My-Aunts-Bathroom.jpg",
  "Mullen-255-Green-Glow.jpg",
  "Mullen-256-Cavern-Lake.jpg",
  "Mullen-257-Money-Our-God.jpg",
  "Mullen-258-Industrial-Sewer.jpg",
  "Mullen-259-Happy-Couple.jpg",
  "Mullen-260-Bonnie-in-Tweed.jpg",
  "Mullen-261-Abandoned-in-the-Sky.jpg",
  "Mullen-262-He-Is-Us.jpg",
  "Mullen-263-My-Fathers-Grave.jpg",
  "Mullen-264-Bonnie-in-a-Bubble.jpg",
  "Mullen-265-Betty.jpg",
  "Mullen-266-One-Way.jpg",
  "Mullen-267-Midnight-Snack.jpg",
  "Mullen-268-Lion.jpg",
  "Mullen-269-Housing-Project.jpg",
  "Mullen-270-Melissa-in-Her-Cups.jpg",
  "Mullen-271-Sara.jpg",
  "Mullen-272-Canoe-at-Night.jpg",
  "Mullen-273-Country-Singer.jpg",
  "Mullen-274-River-Rat-Boat-Club.jpg"
];

const categories = {
  people: new Set([1,6,9,14,15,16,19,25,27,28,31,32,36,37,38,39,41,42,44,50,54,55,57,60,62,63,66,68,70,71,72,73,74,76,77,80,82,83,84,85,86,87,88,89,90,91,92,93,95,96,97,98,99,101,103,104,107,108,109,110,111,112,114,115,116,117,120,124,125,127,128,129,130,131,132,133,134,136,137,138,139,141,143,144,145,148,150,151,152,153,156,157,158,160,161,162,164,166,167,168,171,176,177,180,181,182,186,187,189,191,192,194,195,196,197,198,203,204,206,207,208,212,213,214,215,217,219,220,222,225,227,232,238,240,241,243,244,246,250,251,252,259,260,261,264,265,270,271,273,274]),
  places: new Set([2,3,5,7,10,18,20,26,40,45,51,53,59,61,65,67,69,75,78,79,100,105,119,121,122,140,142,146,147,163,170,175,179,190,199,200,209,210,211,216,218,221,237,239,242,256,258,263,266,267,272]),
  nature: new Set([21,23,29,30,35,47,48,49,52,58,94,123,135,149,155,159,174,178,184,205,223,224,229,231,233,234,262,268])
};

const titleOverrides = {
  "003": "Swimming Hole",
  "043": "Four O'Clock",
  "053": "Shepard's Creek",
  "061": "Tooth Harbor: Where the Earth Rises Above Itself",
  "076": "Death's Door",
  "105": "Peter Hill's House",
  "169": "Don't",
  "175": "By the St. Lawrence",
  "209": "Dutch's Tent",
  "244": "A Woman's Secret",
  "254": "My Aunt's Bathroom",
  "263": "My Father's Grave"
};

function titleFromFilename(file) {
  const number = file.match(/^(?:Mullen-)?(\d+)/)?.[1];
  if (number && titleOverrides[number]) return titleOverrides[number];

  const slug = file
    .replace(/\.jpe?g$|\.png$/i, "")
    .replace(/^(?:Mullen-)?\d+-/, "")
    .replace(/-[a-f0-9]{10}$/i, "")
    .replaceAll("-", " ");

  return slug.replace(/\b\w/g, character => character.toUpperCase());
}

function categoryFor(file) {
  const number = Number.parseInt(file.match(/^(?:Mullen-)?(\d+)/)?.[1], 10);
  if (categories.people.has(number)) return "people";
  if (categories.places.has(number)) return "places";
  if (categories.nature.has(number)) return "nature";
  return "abstract";
}

const works = assetFiles.map(file => ({
  file,
  title: titleFromFilename(file),
  category: categoryFor(file)
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
