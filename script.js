"use strict";

const DEBUG_ZONES = false;
const DEVELOPER_MODE = false;

const regions = italyData;

let gameMode = "regions";
let correctCount = 0;
let selectedZone = null;

const cardContainer = document.querySelector("#regionCards");
const dropZoneContainer = document.querySelector("#dropZones");
const progressText = document.querySelector("#progressText");
const progressFill = document.querySelector("#progressFill");
const completionMessage = document.querySelector("#completionMessage");

const shuffleButton = document.querySelector("#shuffleButton");
const resetButton = document.querySelector("#resetButton");
const playAgainButton = document.querySelector("#playAgainButton");

const modeButtons = document.querySelectorAll(".mode-button");
const panelHeading = document.querySelector("#panelHeading");
const instructions = document.querySelector("#instructions");

function shuffle(array) {
  const copy = [...array];

  for (let i = copy.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));

    [copy[i], copy[j]] = [copy[j], copy[i]];
  }

  return copy;
}

function getCardText(region) {
  switch (gameMode) {
    case "foods":
      return region.food.name;

    case "landmarks":
      return region.landmark.name;

    default:
      return region.region;
  }
}

/* Scroll the page when a dragged card approaches
   the top or bottom of the browser window. */
function handleDragAutoScroll(event) {
  const pointerY = event.clientY;

  if (pointerY <= 0) {
    return;
  }

  const edgeDistance = 180;
  const viewportHeight = window.innerHeight;
  const maximumScroll = 35;

  if (pointerY < edgeDistance) {
    const strength =
      (edgeDistance - pointerY) / edgeDistance;

    const amount =
      Math.max(5, Math.ceil(maximumScroll * strength));

    window.scrollBy(0, -amount);
  } else if (pointerY > viewportHeight - edgeDistance) {
    const strength =
      (pointerY - (viewportHeight - edgeDistance)) /
      edgeDistance;

    const amount =
      Math.max(5, Math.ceil(maximumScroll * strength));

    window.scrollBy(0, amount);
  }
}

function createCards() {
  cardContainer.innerHTML = "";

  shuffle(regions).forEach((region) => {
    const card = document.createElement("div");

    card.className = "region-card";
    card.draggable = true;
    card.dataset.id = String(region.id);

    const visualMode =
      gameMode === "landmarks" || gameMode === "foods";

    if (visualMode) {
      const item =
        gameMode === "landmarks"
          ? region.landmark
          : region.food;

      const image = document.createElement("img");

      image.className = "card-image";
      image.src = item.image;
      image.alt = item.name;
      image.draggable = false;

      const label = document.createElement("span");

      label.className = "card-label";
      label.textContent = item.name;

      card.append(image, label);
    } else {
      card.textContent = region.region;
    }

    card.addEventListener("dragstart", (event) => {
      const draggedId = String(region.id);

      event.dataTransfer.effectAllowed = "move";
      event.dataTransfer.setData("text/plain", draggedId);

      card.classList.add("dragging");
    });

    card.addEventListener("drag", handleDragAutoScroll);

    card.addEventListener("dragend", () => {
      card.classList.remove("dragging");
    });

    cardContainer.appendChild(card);
  });
}

function createZones() {
  dropZoneContainer.innerHTML = "";
  selectedZone = null;

  regions.forEach((region, index) => {
    const zone = document.createElement("div");

    zone.className = "drop-zone";
    zone.dataset.id = String(region.id);
    zone.dataset.debug =
      String(index + 1).padStart(2, "0");

    zone.style.left = `${region.x}%`;
    zone.style.top = `${region.y}%`;

    if (DEBUG_ZONES) {
      zone.classList.add("debug-zone");
    }

    if (DEVELOPER_MODE) {
      zone.classList.add("developer-zone");
      zone.title =
        `${region.region}: click, then use arrow keys`;

      zone.addEventListener("click", (event) => {
        event.stopPropagation();
        selectZone(zone, region);
      });
    }

    zone.addEventListener("dragover", (event) => {
      event.preventDefault();
      event.dataTransfer.dropEffect = "move";
      zone.classList.add("drag-over");
    });

    zone.addEventListener("dragleave", () => {
      zone.classList.remove("drag-over");
    });

    zone.addEventListener("drop", (event) => {
      event.preventDefault();
      zone.classList.remove("drag-over");

      const droppedId =
        event.dataTransfer.getData("text/plain");

      if (droppedId === String(region.id)) {
        placeCorrect(zone, region);
      } else {
        showWrong(zone);
      }
    });

    dropZoneContainer.appendChild(zone);
  });
}

function selectZone(zone, region) {
  if (selectedZone) {
    selectedZone.element.classList.remove(
      "selected-zone"
    );
  }

  selectedZone = {
    element: zone,
    region
  };

  zone.classList.add("selected-zone");

  console.clear();
  console.log(`Selected: ${region.region}`);

  printCoordinates(region);
}

function printCoordinates(region) {
  console.log(
    `${region.region}: x: ${Number(region.x).toFixed(1)}, ` +
    `y: ${Number(region.y).toFixed(1)}`
  );

  console.log(`
Paste these values into italy-data.js:

x: ${Number(region.x).toFixed(1)},
y: ${Number(region.y).toFixed(1)}
  `);
}

function moveSelectedZone(event) {
  if (!DEVELOPER_MODE || !selectedZone) {
    return;
  }

  const arrowKeys = [
    "ArrowLeft",
    "ArrowRight",
    "ArrowUp",
    "ArrowDown"
  ];

  if (!arrowKeys.includes(event.key)) {
    return;
  }

  event.preventDefault();

  const amount = event.shiftKey ? 1 : 0.2;
  const { element, region } = selectedZone;

  switch (event.key) {
    case "ArrowLeft":
      region.x -= amount;
      break;

    case "ArrowRight":
      region.x += amount;
      break;

    case "ArrowUp":
      region.y -= amount;
      break;

    case "ArrowDown":
      region.y += amount;
      break;

    default:
      return;
  }

  region.x = Number(region.x.toFixed(1));
  region.y = Number(region.y.toFixed(1));

  element.style.left = `${region.x}%`;
  element.style.top = `${region.y}%`;

  printCoordinates(region);
}

function placeCorrect(zone, region) {
  if (zone.classList.contains("correct")) {
    return;
  }

  zone.classList.add("correct");
  zone.classList.remove("debug-zone");
  zone.classList.remove("selected-zone");

  if (gameMode === "landmarks" || gameMode === "foods") {
    const item =
      gameMode === "landmarks"
        ? region.landmark
        : region.food;

    zone.innerHTML = `
      <img
        class="placed-landmark"
        src="${item.image}"
        alt="${item.name}"
      >
    `;
  } else {
    zone.innerHTML = `
      <span class="placed-label">
        ${region.region}
      </span>
    `;
  }

  const matchingCard = cardContainer.querySelector(
    `.region-card[data-id="${region.id}"]`
  );

  matchingCard?.remove();

correctCount += 1;
updateProgress();

showRegionalSpotlight(region);

if (correctCount === regions.length) {
  window.setTimeout(() => {
    completionMessage.hidden = false;
    launchConfetti();
  }, 400);
}

}   // <-- THIS closes placeCorrect()
function showRegionalSpotlight(region) {

  const cultureBox =
    document.getElementById("cultureBox");

  const cultureRegion =
    document.getElementById("cultureRegion");

  const cultureHighlight =
    document.getElementById("cultureHighlight");

  const cultureLanguage =
    document.getElementById("cultureLanguage");

  const cultureLanguageSection =
    document.getElementById("cultureLanguageSection");

  cultureRegion.textContent = region.region;

  cultureHighlight.textContent =
    region.highlight || "";

  if (region.language) {
    cultureLanguage.textContent = region.language;
    cultureLanguageSection.hidden = false;
  } else {
    cultureLanguageSection.hidden = true;
  }

  cultureBox.hidden = false;

}
function showWrong(zone) {
  zone.classList.remove("wrong-shake");

  void zone.offsetWidth;

  zone.classList.add("wrong-shake");

  window.setTimeout(() => {
    zone.classList.remove("wrong-shake");
  }, 400);
}

function updateProgress() {
  progressText.textContent =
    `${correctCount} of ${regions.length} correct`;

  const percentage =
    (correctCount / regions.length) * 100;

  progressFill.style.width = `${percentage}%`;
}

function setGameMode(mode) {
  gameMode = mode;

  modeButtons.forEach((button) => {
    const isActive = button.dataset.mode === mode;
    button.classList.toggle("active", isActive);
  });

  switch (mode) {
    case "landmarks":
      panelHeading.textContent = "Italian Landmarks";
      instructions.textContent =
        "Drag each landmark onto its correct region.";
      break;

    case "foods":
      panelHeading.textContent = "Regional Specialties";
      instructions.textContent =
        "Drag each regional specialty onto its correct region.";
      break;

    default:
      panelHeading.textContent = "Region Names";
      instructions.textContent =
        "Drag a name onto the correct region.";
  }

  resetGame();
}

function resetGame() {
  correctCount = 0;
  selectedZone = null;
  completionMessage.hidden = true;

  document.querySelector("#cultureBox").hidden = true;

  createCards();
  createZones();
  updateProgress();
}

function shuffleUnmatchedCards() {
  const cards = Array.from(
    cardContainer.querySelectorAll(".region-card")
  );

  shuffle(cards).forEach((card) => {
    cardContainer.appendChild(card);
  });
}

document.addEventListener(
  "keydown",
  moveSelectedZone
);

document.addEventListener("click", () => {
  if (selectedZone) {
    selectedZone.element.classList.remove(
      "selected-zone"
    );

    selectedZone = null;
  }
});

modeButtons.forEach((button) => {
  button.addEventListener("click", () => {
    setGameMode(button.dataset.mode);
  });
});

shuffleButton.addEventListener(
  "click",
  shuffleUnmatchedCards
);

resetButton.addEventListener(
  "click",
  resetGame
);

playAgainButton.addEventListener(
  "click",
  resetGame
);

resetGame();