"use strict";

/* =========================================================
   SETTINGS
   ========================================================= */

const developerMode = false;

/*
  DEVELOPER CONTROLS

  Click a box          = select it
  Arrow keys           = move it
  Shift + arrow keys   = move it faster
  [ and ]              = decrease/increase width
  - and =              = decrease/increase height
  P                    = print final coordinates in Console
  R                    = reset all coordinates
*/

/* =========================================================
   PEOPLE DATA
   ========================================================= */

const peopleData = [
  {
    name: "Dante Alighieri",
    region: "Toscana",
    field: "Literature",
    category: "Writer and Poet",
    blurb:
      "Poet and writer whose Divine Comedy became one of the most important works of Italian literature."
  },
  {
    name: "Tina Anselmi",
    region: "Veneto",
    field: "Public Service",
    category: "Politician and Public Servant",
    blurb:
      "Politician and resistance member who became the first woman to serve as a minister in the Italian government."
  },
  {
    name: "Paolo Borsellino",
    region: "Sicilia",
    field: "Justice",
    category: "Judge",
    blurb:
      "Judge who fought organized crime and became a symbol of courage and justice."
  },
  {
    name: "Italo Calvino",
    region: "Liguria",
    field: "Literature",
    category: "Writer",
    blurb:
      "Writer known for imaginative novels that are read around the world."
  },
  {
    name: "Enrico Caruso",
    region: "Campania",
    field: "Music",
    category: "Opera Singer",
    blurb:
      "Opera singer whose powerful voice made him one of the first international recording stars."
  },
  {
    name: "Samantha Cristoforetti",
    region: "Born in Lombardia; grew up in Trentino-Alto Adige",
    field: "Space Exploration",
    category: "Astronaut and Engineer",
    blurb:
      "Astronaut, engineer, and the first Italian woman to travel into space."
  },
  {
    name: "Leonardo da Vinci",
    region: "Toscana",
    field: "Art and Science",
    category: "Artist, Inventor, and Scientist",
    blurb:
      "Artist, inventor, scientist, and polymath whose work transformed art, science, and engineering."
  },
  {
    name: "Grazia Deledda",
    region: "Sardegna",
    field: "Literature",
    category: "Novelist",
    blurb:
      "Novelist and Nobel Prize winner whose stories often portrayed life in Sardinia."
  },
  {
    name: "Giovanni Falcone",
    region: "Sicilia",
    field: "Justice",
    category: "Judge",
    blurb:
      "Judge who fought organized crime and became a symbol of courage and justice."
  },
  {
    name: "Federico Fellini",
    region: "Emilia-Romagna",
    field: "Film",
    category: "Film Director and Screenwriter",
    blurb:
      "Film director and screenwriter known for influential films such as La Dolce Vita and 8½."
  },
  {
    name: "Galileo Galilei",
    region: "Toscana",
    field: "Science",
    category: "Astronomer, Physicist, and Mathematician",
    blurb:
      "Astronomer, physicist, and mathematician whose discoveries changed our understanding of the universe."
  },
  {
    name: "Rita Levi-Montalcini",
    region: "Piemonte",
    field: "Science and Medicine",
    category: "Neurologist",
    blurb:
      "Neurologist and Nobel Prize winner whose discoveries advanced the study of the nervous system."
  },
  {
    name: "Alessandro Manzoni",
    region: "Lombardia",
    field: "Literature",
    category: "Writer and Poet",
    blurb:
      "Writer and poet best known for the novel The Betrothed, or I Promessi Sposi."
  },
  {
    name: "Guglielmo Marconi",
    region: "Emilia-Romagna",
    field: "Science and Technology",
    category: "Inventor and Engineer",
    blurb:
      "Inventor and engineer who helped develop long-distance wireless communication."
  },
  {
    name: "Michelangelo",
    region: "Toscana",
    field: "Art",
    category: "Sculptor, Painter, Architect, and Poet",
    blurb:
      "Sculptor, painter, architect, and poet best known for the Sistine Chapel ceiling and the statue of David."
  },
  {
    name: "Maria Montessori",
    region: "Marche",
    field: "Education",
    category: "Physician and Educator",
    blurb:
      "Physician and educator who developed the Montessori method of teaching."
  },
  {
    name: "Raffaello Sanzio",
    region: "Marche",
    field: "Art",
    category: "Painter and Architect",
    blurb:
      "Painter and architect celebrated for his harmonious Renaissance masterpieces."
  },
  {
    name: "Giuseppe Verdi",
    region: "Emilia-Romagna",
    field: "Music",
    category: "Opera Composer",
    blurb:
      "Opera composer whose works, including Aida, La Traviata, and Rigoletto, are still performed around the world."
  },
  {
    name: "Antonio Vivaldi",
    region: "Veneto",
    field: "Music",
    category: "Composer and Violinist",
    blurb:
      "Composer and violinist best known for The Four Seasons."
  },
  {
    name: "Alessandro Volta",
    region: "Lombardia",
    field: "Science",
    category: "Physicist",
    blurb:
      "Physicist who invented the electric battery."
  }
];

/* =========================================================
   DEFAULT CLICK-SPACE POSITIONS
   ========================================================= */

const peoplePositions = [
  { left: 2.75, top: 7.5, width: 21, height: 15 },
  { left: 25.75, top: 7.5, width: 21, height: 15 },
  { left: 49, top: 7.5, width: 21, height: 15 },
  { left: 72.5, top: 7.5, width: 21, height: 15 },

  { left: 3.25, top: 25.75, width: 21, height: 15 },
  { left: 26, top: 25.75, width: 21, height: 15 },
  { left: 49, top: 25.75, width: 21, height: 15 },
  { left: 72.75, top: 25.5, width: 21, height: 15 },

  { left: 3, top: 43.5, width: 21, height: 15 },
  { left: 25.5, top: 43.5, width: 21, height: 15 },
  { left: 49, top: 43.5, width: 21, height: 15 },
  { left: 72.5, top: 43.5, width: 21, height: 15 },

  { left: 3, top: 60.5, width: 21, height: 15 },
  { left: 25.5, top: 60.5, width: 21, height: 15 },
  { left: 49, top: 60.75, width: 21, height: 15 },
  { left: 72.25, top: 60.75, width: 21, height: 15 },

  { left: 3.25, top: 78.5, width: 21, height: 17 },
  { left: 25.75, top: 78.5, width: 21, height: 17 },
  { left: 49, top: 78.5, width: 21, height: 17 },
  { left: 72.25, top: 78.75, width: 21, height: 17 }
];

/* =========================================================
   SAVED POSITIONS
   ========================================================= */


/* =========================================================
   PAGE ELEMENTS
   ========================================================= */

const peopleZones = document.getElementById("peopleZones");
const personModal = document.getElementById("personModal");
const personModalCard =
  document.querySelector(".person-modal-card");

const closePersonModalButton =
  document.getElementById("closePersonModal");

const personCategory =
  document.getElementById("personCategory");

const personName =
  document.getElementById("personName");

const personRegion =
  document.getElementById("personRegion");

const personField =
  document.getElementById("personField");

const personBlurb =
  document.getElementById("personBlurb");

/* =========================================================
   STATE
   ========================================================= */

let lastSelectedButton = null;
let selectedZone = null;

/* =========================================================
   CLICK-ZONE FUNCTIONS
   ========================================================= */

function applyZonePosition(button, position) {
  button.style.left = `${position.left}%`;
  button.style.top = `${position.top}%`;
  button.style.width = `${position.width}%`;
  button.style.height = `${position.height}%`;
}

function selectDeveloperZone(button) {
  if (selectedZone) {
    selectedZone.classList.remove("selected-zone");
  }

  selectedZone = button;
  selectedZone.classList.add("selected-zone");
  selectedZone.focus();
}

function createPeopleZones() {
  if (!peopleZones) {
    console.error(
      'The element with id="peopleZones" was not found.'
    );
    return;
  }

  peopleZones.innerHTML = "";

  peopleData.forEach((person, index) => {
    const position = peoplePositions[index];

    if (!position) {
      console.error(
        `No position was found for ${person.name}.`
      );
      return;
    }

    const button = document.createElement("button");

    button.type = "button";
    button.className = "person-click-zone";
    button.dataset.index = String(index);
    button.dataset.label = String(index + 1);
    button.title = person.name;

    button.setAttribute(
      "aria-label",
      `Learn about ${person.name}`
    );

    applyZonePosition(button, position);

    if (developerMode) {
      button.classList.add("dev");

      button.addEventListener("click", event => {
        event.preventDefault();
        event.stopPropagation();
        selectDeveloperZone(button);
      });
    } else {
      button.addEventListener("click", () => {
        lastSelectedButton = button;
        openPersonModal(person);
      });
    }

    peopleZones.appendChild(button);
  });
}

/* =========================================================
   DEVELOPER MODE
   ========================================================= */

function updateSelectedZone() {
  if (!selectedZone) {
    return;
  }

  const index = Number(selectedZone.dataset.index);
  const position = peoplePositions[index];

  if (!position) {
    return;
  }

  applyZonePosition(selectedZone, position);

}

function printPeoplePositions() {
  const output =
    `const peoplePositions = ${JSON.stringify(
      peoplePositions,
      null,
      2
    )};`;

  console.clear();
  console.log(output);
}

function resetPeoplePositions() {
  const shouldReset = window.confirm(
    "Reset all click boxes to their original positions?"
  );

  if (!shouldReset) {
    return;
  }

  localStorage.removeItem(storageKey);
  peoplePositions = copyPositions(defaultPeoplePositions);
  selectedZone = null;
  createPeopleZones();
}

function handleDeveloperKeys(event) {
  if (!developerMode) {
    return;
  }

  if (event.key === "p" || event.key === "P") {
    event.preventDefault();
    printPeoplePositions();
    return;
  }

  if (event.key === "r" || event.key === "R") {
    event.preventDefault();
    resetPeoplePositions();
    return;
  }

  if (!selectedZone) {
    return;
  }

  const index = Number(selectedZone.dataset.index);
  const position = peoplePositions[index];

  if (!position) {
    return;
  }

  const amount = event.shiftKey ? 1 : 0.25;

  switch (event.key) {
    case "ArrowLeft":
      event.preventDefault();
      position.left -= amount;
      break;

    case "ArrowRight":
      event.preventDefault();
      position.left += amount;
      break;

    case "ArrowUp":
      event.preventDefault();
      position.top -= amount;
      break;

    case "ArrowDown":
      event.preventDefault();
      position.top += amount;
      break;

    case "[":
      event.preventDefault();
      position.width = Math.max(
        1,
        position.width - amount
      );
      break;

    case "]":
      event.preventDefault();
      position.width += amount;
      break;

    case "-":
      event.preventDefault();
      position.height = Math.max(
        1,
        position.height - amount
      );
      break;

    case "=":
    case "+":
      event.preventDefault();
      position.height += amount;
      break;

    default:
      return;
  }

  updateSelectedZone();
}

/* =========================================================
   PERSON MODAL
   ========================================================= */

function openPersonModal(person) {
  if (
    !personModal ||
    !personCategory ||
    !personName ||
    !personRegion ||
    !personField ||
    !personBlurb ||
    !closePersonModalButton
  ) {
    console.error(
      "One or more modal elements are missing."
    );
    return;
  }

  personCategory.textContent = person.category;
  personName.textContent = person.name;
  personRegion.textContent = person.region;
  personField.textContent = person.field;
  personBlurb.textContent = person.blurb;

  personModal.hidden = false;
  document.body.classList.add("modal-open");

  closePersonModalButton.focus();
}

function closePersonModal() {
  if (!personModal) {
    return;
  }

  personModal.hidden = true;
  document.body.classList.remove("modal-open");

  if (lastSelectedButton) {
    lastSelectedButton.focus();
  }
}

/* =========================================================
   EVENT LISTENERS
   ========================================================= */

if (closePersonModalButton) {
  closePersonModalButton.addEventListener(
    "click",
    closePersonModal
  );
}

if (personModal) {
  personModal.addEventListener("click", event => {
    if (event.target === personModal) {
      closePersonModal();
    }
  });
}

if (personModalCard) {
  personModalCard.addEventListener("click", event => {
    event.stopPropagation();
  });
}

document.addEventListener("keydown", event => {
  if (developerMode) {
    handleDeveloperKeys(event);
    return;
  }

  if (
    event.key === "Escape" &&
    personModal &&
    !personModal.hidden
  ) {
    closePersonModal();
  }
});

/* =========================================================
   START
   ========================================================= */

createPeopleZones();