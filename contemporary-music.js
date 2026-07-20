"use strict";


/* ==================================================
   REGION NAMES
================================================== */

const regionNamesEnglish = {
  "Valle d'Aosta": "Aosta Valley",
  Piemonte: "Piedmont",
  Liguria: "Liguria",
  Lombardia: "Lombardy",
  "Trentino-Alto Adige": "Trentino-South Tyrol",
  Veneto: "Veneto",
  "Friuli-Venezia Giulia": "Friuli-Venezia Giulia",
  "Emilia-Romagna": "Emilia-Romagna",
  Toscana: "Tuscany",
  Umbria: "Umbria",
  Marche: "Marche",
  Lazio: "Lazio",
  Abruzzo: "Abruzzo",
  Molise: "Molise",
  Campania: "Campania",
  Puglia: "Apulia",
  Basilicata: "Basilicata",
  Calabria: "Calabria",
  Sicilia: "Sicily",
  Sardegna: "Sardinia"
};


/* ==================================================
   PAGE ELEMENTS
================================================== */

const dropZones = document.querySelector("#dropZones");

const musicModal = document.querySelector("#musicModal");

const musicModalClose =
  document.querySelector("#musicModalClose");

const musicModalRegion =
  document.querySelector("#musicModalRegion");

const musicSongList =
  document.querySelector("#musicSongList");


let lastFocusedRegionButton = null;


/* ==================================================
   DATA HELPERS
================================================== */

function getEnglishRegionName(regionName) {
  return regionNamesEnglish[regionName] || regionName;
}


function getRegionMusic(regionName) {
  return musicData.find((entry) => {
    return entry.region === regionName;
  });
}


function getYouTubeSearchUrl(artistName, songTitle) {
  const searchTerms =
    `${artistName} ${songTitle} official`;

  return (
    "https://www.youtube.com/results?search_query=" +
    encodeURIComponent(searchTerms)
  );
}


/* ==================================================
   CREATE THE MAP CIRCLES
================================================== */

function createRegionCircles() {
  dropZones.innerHTML = "";

  italyData.forEach((region) => {
    const circle = document.createElement("button");

    circle.type = "button";

    /*
      "drop-zone" uses the same basic map-position system
      as the traditional music activity.

      "contemporary-music-zone" adds the visible circle
      and microphone styling.
    */
    circle.className =
      "drop-zone contemporary-music-zone";

    circle.style.left = `${region.x}%`;
    circle.style.top = `${region.y}%`;

    const englishRegionName =
      getEnglishRegionName(region.region);

    circle.title =
      `${region.region} / ${englishRegionName}`;

    circle.setAttribute(
      "aria-label",
      `Scopri la musica contemporanea del ${region.region}. ` +
      `Explore contemporary music from ${englishRegionName}.`
    );

    circle.innerHTML = `
      <span
        class="contemporary-zone-icon"
        aria-hidden="true"
      >
        🎤
      </span>
    `;

    circle.addEventListener("click", () => {
      openMusicModal(region, circle);
    });

    dropZones.appendChild(circle);
  });
}


/* ==================================================
   CREATE ARTIST INFORMATION
================================================== */

function createArtistLocation(locationText) {
  const location = document.createElement("p");

  location.className =
    "contemporary-artist-location";

  location.innerHTML = `
    <span aria-hidden="true">📍</span>
    ${locationText}
  `;

  return location;
}


function createArtistRole(roleText) {
  const role = document.createElement("p");

  role.className =
    "contemporary-artist-role";

  role.textContent = roleText;

  return role;
}


function createGenresSection(genres) {
  const section = document.createElement("div");

  section.className =
    "contemporary-artist-section";

  const heading = document.createElement("h4");

  heading.innerHTML = `
    Generi musicali
    <span>Genres</span>
  `;

  const list = document.createElement("ul");

  list.className =
    "contemporary-genre-list";

  genres.forEach((genre) => {
    const item = document.createElement("li");

    item.textContent = genre;

    list.appendChild(item);
  });

  section.append(
    heading,
    list
  );

  return section;
}


function createSongLink(artistName, songTitle) {
  const item = document.createElement("li");

  const link = document.createElement("a");

  link.href =
    getYouTubeSearchUrl(
      artistName,
      songTitle
    );

  link.target = "_blank";
  link.rel = "noopener noreferrer";

  link.innerHTML = `
    <span aria-hidden="true">▶</span>
    ${songTitle}
  `;

  item.appendChild(link);

  return item;
}


function createSongsSection(
  artistName,
  songs,
  italianHeading,
  englishHeading
) {
  const section = document.createElement("div");

  section.className =
    "contemporary-artist-section";

  const heading = document.createElement("h4");

  heading.innerHTML = `
    ${italianHeading}
    <span>${englishHeading}</span>
  `;

  const list = document.createElement("ul");

  list.className =
    "contemporary-song-list";

  songs.forEach((song) => {
    list.appendChild(
      createSongLink(
        artistName,
        song
      )
    );
  });

  section.append(
    heading,
    list
  );

  return section;
}


function createArtistCard(artist) {
  const card = document.createElement("article");

  /*
    music-song-card gives it the same rounded-card
    appearance as the traditional music modal.
  */
  card.className =
    "music-song-card contemporary-artist-card";

  const heading = document.createElement("h3");

  heading.innerHTML = `
    <span aria-hidden="true">🎤</span>
    ${artist.name}
  `;

  card.appendChild(heading);


  if (artist.location) {
    card.appendChild(
      createArtistLocation(
        artist.location
      )
    );
  }


  if (artist.role) {
    card.appendChild(
      createArtistRole(
        artist.role
      )
    );
  }


  if (
    Array.isArray(artist.genres) &&
    artist.genres.length > 0
  ) {
    card.appendChild(
      createGenresSection(
        artist.genres
      )
    );
  }


  if (
    Array.isArray(artist.songs) &&
    artist.songs.length > 0
  ) {
    card.appendChild(
      createSongsSection(
        artist.name,
        artist.songs,
        "Canzoni suggerite",
        "Suggested Songs"
      )
    );
  }


  if (
    Array.isArray(artist.moreSongs) &&
    artist.moreSongs.length > 0
  ) {
    card.appendChild(
      createSongsSection(
        artist.name,
        artist.moreSongs,
        "Altre canzoni da esplorare",
        "More to Explore"
      )
    );
  }


  return card;
}


/* ==================================================
   OPEN AND CLOSE MODAL
================================================== */

function openMusicModal(
  region,
  triggerButton
) {
  const regionMusic =
    getRegionMusic(region.region);

  lastFocusedRegionButton =
    triggerButton;

  musicModalRegion.innerHTML = `
    ${region.region}

    <span>
      ${getEnglishRegionName(region.region)}
    </span>
  `;

  musicSongList.innerHTML = "";


  if (
    !regionMusic ||
    !Array.isArray(regionMusic.artists) ||
    regionMusic.artists.length === 0
  ) {
    const emptyCard =
      document.createElement("article");

    emptyCard.className =
      "music-song-card contemporary-artist-card";

    emptyCard.innerHTML = `
      <h3>
        Artisti in arrivo
      </h3>

      <p>
        <strong>
          Gli artisti di questa regione saranno aggiunti presto.
        </strong>

        <span class="contemporary-english-text">
          Artists from this region will be added soon.
        </span>
      </p>
    `;

    musicSongList.appendChild(
      emptyCard
    );
  } else {
    regionMusic.artists.forEach((artist) => {
      musicSongList.appendChild(
        createArtistCard(artist)
      );
    });
  }


  musicModal.hidden = false;

  document.body.classList.add(
    "modal-open"
  );

  musicModalClose.focus();
}


function closeMusicModal() {
  if (musicModal.hidden) {
    return;
  }

  musicModal.hidden = true;

  document.body.classList.remove(
    "modal-open"
  );

  if (lastFocusedRegionButton) {
    lastFocusedRegionButton.focus();
  }

  lastFocusedRegionButton = null;
}


/* ==================================================
   EVENT LISTENERS
================================================== */

musicModalClose.addEventListener(
  "click",
  closeMusicModal
);


musicModal.addEventListener(
  "click",
  (event) => {
    if (event.target === musicModal) {
      closeMusicModal();
    }
  }
);


document.addEventListener(
  "keydown",
  (event) => {
    if (
      event.key === "Escape" &&
      !musicModal.hidden
    ) {
      closeMusicModal();
    }
  }
);


/* ==================================================
   START PAGE
================================================== */

if (
  typeof italyData === "undefined" ||
  !Array.isArray(italyData)
) {
  console.error(
    "italyData was not found. Check data/italy-data.js."
  );
} else if (
  typeof musicData === "undefined" ||
  !Array.isArray(musicData)
) {
  console.error(
    "musicData was not found. Check data/music-data.js."
  );
} else {
  createRegionCircles();
}