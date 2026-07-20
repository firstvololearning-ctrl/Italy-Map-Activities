const musicData = [
  {
    region: "Valle d'Aosta",
    artists: [
      {
        name: "Naïf Hérin",
        location: "Aosta and Quart, Valle d'Aosta",
        role: "Singer-songwriter, composer, and multi-instrumentalist",
        genres: ["Pop", "Funk", "Electronic music"],
        songs: [
          "Io sono il mare",
          "Faites du bruit",
          "Formica d'estate"
        ]
      }
    ]
  },

  {
    region: "Piemonte",
    artists: [
      {
        name: "Paolo Conte",
        location: "Asti, Piemonte",
        role: "Singer-songwriter, pianist, composer, and lyricist",
        genres: ["Jazz", "Chanson", "Italian popular music"],
        songs: [
          "Via con me",
          "Sotto le stelle del jazz",
          "Sparring Partner",
          "Max"
        ]
      },
      {
        name: "Umberto Tozzi",
        location: "Turin, Piemonte",
        role: "Singer-songwriter, musician, and composer",
        genres: ["Pop", "Pop rock"],
        songs: [
          "Ti amo",
          "Gloria",
          "Tu",
          "Gente di mare"
        ]
      },
      {
        name: "Gianmaria Testa",
        location: "Cavallermaggiore, Piemonte",
        role: "Singer-songwriter and guitarist",
        genres: ["Folk", "Jazz-influenced chanson", "Singer-songwriter"],
        songs: [
          "Montgolfières",
          "Dentro la tasca di un qualunque mattino",
          "Ritals",
          "Al mercato di Porta Palazzo"
        ]
      }
    ]
  },

  {
    region: "Liguria",
    artists: [
      {
        name: "Fabrizio De André",
        location: "Genoa, Liguria",
        role: "Singer-songwriter, lyricist, and guitarist",
        genres: ["Folk", "Folk rock", "Singer-songwriter"],
        songs: [
          "Bocca di Rosa",
          "Il pescatore",
          "La guerra di Piero",
          "Via del Campo",
          "La canzone di Marinella"
        ]
      },
      {
        name: "Ivano Fossati",
        location: "Genoa, Liguria",
        role: "Singer-songwriter, composer, producer, and multi-instrumentalist",
        genres: ["Pop rock", "Progressive rock", "Singer-songwriter"],
        songs: [
          "La mia banda suona il rock",
          "La costruzione di un amore",
          "Panama",
          "Mio fratello che guardi il mondo"
        ]
      },
      {
        name: "Cristiano De André",
        location: "Genoa, Liguria",
        role: "Singer-songwriter and multi-instrumentalist",
        genres: ["Pop rock", "Folk rock", "Singer-songwriter"],
        songs: [
          "Dietro la porta",
          "Canzoni con il naso lungo",
          "Il cielo è vuoto"
        ]
      }
    ]
  },

  {
    region: "Lombardia",
    artists: [
      {
        name: "Mina",
        location: "Born in Busto Arsizio; raised in Cremona, Lombardia",
        role: "Singer",
        genres: ["Pop", "Jazz", "Blues", "Swing"],
        songs: [
          "Se telefonando",
          "Grande grande grande",
          "Parole parole",
          "Ancora ancora ancora",
          "Il cielo in una stanza"
        ]
      },
      {
        name: "Adriano Celentano",
        location: "Milan, Lombardia",
        role: "Singer, songwriter, musician, and performer",
        genres: ["Pop", "Rock and roll", "Pop rock"],
        songs: [
          "Azzurro",
          "Il ragazzo della via Gluck",
          "Prisencolinensinainciusol",
          "L'emozione non ha voce"
        ]
      },
      {
        name: "Giorgio Gaber",
        location: "Milan, Lombardia",
        role: "Singer-songwriter, guitarist, actor, and playwright",
        genres: ["Singer-songwriter", "Rock and roll", "Teatro-canzone"],
        songs: [
          "La libertà",
          "Destra-Sinistra",
          "Io non mi sento italiano",
          "Barbera e champagne"
        ]
      },
      {
        name: "Enzo Jannacci",
        location: "Milan, Lombardia",
        role: "Singer-songwriter, pianist, composer, and performer",
        genres: ["Jazz", "Cabaret", "Milanese popular song"],
        songs: [
          "Vengo anch'io. No, tu no",
          "El portava i scarp del tennis",
          "Quelli che...",
          "Ho visto un re"
        ]
      },
      {
        name: "Roberto Vecchioni",
        location: "Born in Carate Brianza; raised in Milan, Lombardia",
        role: "Singer-songwriter, lyricist, writer, and teacher",
        genres: ["Singer-songwriter", "Pop", "Folk-influenced songwriting"],
        songs: [
          "Luci a San Siro",
          "Samarcanda",
          "Chiamami ancora amore",
          "Sogna ragazzo sogna"
        ]
      },
      {
        name: "Mahmood",
        location: "Milan, Lombardia",
        role: "Singer-songwriter",
        genres: ["Pop", "Contemporary R&B", "Urban pop"],
        songs: [
          "Soldi",
          "Brividi",
          "Tuta gold",
          "Rapide"
        ]
      }
    ]
  },

  {
    region: "Trentino-Alto Adige",
    artists: [
      {
        name: "Giorgio Moroder",
        location: "Ortisei, South Tyrol",
        role: "Composer, producer, songwriter, and musician",
        genres: ["Electronic music", "Disco", "Synth-pop", "Film music"],
        songs: [
          "Chase",
          "From Here to Eternity",
          "Together in Electric Dreams",
          "Déjà Vu"
        ]
      }
    ]
  },

  {
    region: "Veneto",
    artists: [
      {
        name: "Patty Pravo",
        location: "Venice, Veneto",
        role: "Singer",
        genres: ["Pop", "Pop rock", "Art pop"],
        songs: [
          "La bambola",
          "Pazza idea",
          "Pensiero stupendo",
          "...E dimmi che non vuoi morire"
        ]
      },
      {
        name: "Ivana Spagna",
        location: "Valeggio sul Mincio, Veneto",
        role: "Singer-songwriter and composer",
        genres: ["Pop", "Dance-pop", "Italo disco"],
        songs: [
          "Easy Lady",
          "Call Me",
          "Gente come noi",
          "Il cerchio della vita"
        ]
      },
      {
        name: "Red Canzian",
        location: "Quinto di Treviso, Veneto",
        role: "Singer-songwriter, bassist, and composer",
        genres: ["Pop rock", "Progressive pop"],
        songs: [
          "Stare senza di te",
          "Ognuno ha il suo racconto"
        ]
      },
      {
        name: "Sangiovanni",
        location: "Vicenza area, Veneto",
        role: "Singer-songwriter",
        genres: ["Pop", "Urban pop"],
        songs: [
          "Malibù",
          "Farfalle",
          "Lady",
          "Finiscimi"
        ]
      }
    ]
  },

  {
    region: "Friuli-Venezia Giulia",
    artists: [
      {
        name: "Elisa",
        location: "Born in Trieste; raised in Monfalcone, Friuli-Venezia Giulia",
        role: "Singer-songwriter, musician, and producer",
        genres: ["Pop", "Alternative rock", "Electronic pop", "Soul"],
        songs: [
          "Luce (Tramonti a nord est)",
          "A modo tuo",
          "Se piovesse il tuo nome",
          "No Hero"
        ]
      },
      {
        name: "Lodovica Comello",
        location: "San Daniele del Friuli, Friuli-Venezia Giulia",
        role: "Singer, songwriter, actress, and presenter",
        genres: ["Pop", "Dance-pop"],
        songs: [
          "Universo",
          "Todo el resto no cuenta",
          "Non cadiamo mai"
        ]
      }
    ]
  },

  {
    region: "Emilia-Romagna",
    artists: [
      {
        name: "Lucio Dalla",
        location: "Bologna, Emilia-Romagna",
        role: "Singer-songwriter, composer, clarinetist, and musician",
        genres: ["Pop", "Jazz", "Pop rock", "Singer-songwriter"],
        songs: [
          "Caruso",
          "L'anno che verrà",
          "Piazza Grande",
          "Futura",
          "Anna e Marco"
        ]
      },
      {
        name: "Francesco Guccini",
        location: "Born in Modena; raised in Emilia-Romagna",
        role: "Singer-songwriter and writer",
        genres: ["Folk", "Protest song", "Singer-songwriter"],
        songs: [
          "La locomotiva",
          "Auschwitz",
          "Dio è morto",
          "Cyrano"
        ]
      },
      {
        name: "Gianni Morandi",
        location: "Monghidoro, Emilia-Romagna",
        role: "Singer and performer",
        genres: ["Pop", "Italian popular music"],
        songs: [
          "In ginocchio da te",
          "C'era un ragazzo che come me amava i Beatles e i Rolling Stones",
          "Uno su mille",
          "Apri tutte le porte"
        ]
      },
      {
        name: "Vasco Rossi",
        location: "Zocca, Emilia-Romagna",
        role: "Singer-songwriter",
        genres: ["Rock", "Pop rock"],
        songs: [
          "Albachiara",
          "Vita spericolata",
          "Sally",
          "Siamo solo noi"
        ]
      },
      {
        name: "Luciano Ligabue",
        location: "Correggio, Emilia-Romagna",
        role: "Singer-songwriter, guitarist, and filmmaker",
        genres: ["Rock", "Pop rock"],
        songs: [
          "Certe notti",
          "Balliamo sul mondo",
          "Urlando contro il cielo",
          "Piccola stella senza cielo"
        ]
      },
      {
        name: "Laura Pausini",
        location: "Born in Faenza; raised in Solarolo, Emilia-Romagna",
        role: "Singer-songwriter and producer",
        genres: ["Pop", "Latin pop", "Adult contemporary"],
        songs: [
          "La solitudine",
          "Strani amori",
          "Tra te e il mare",
          "Io canto"
        ]
      },
      {
        name: "Cesare Cremonini",
        location: "Bologna, Emilia-Romagna",
        role: "Singer-songwriter, pianist, and composer",
        genres: ["Pop", "Pop rock"],
        songs: [
          "50 Special",
          "Marmellata #25",
          "Poetica",
          "La nuova stella di Broadway"
        ]
      }
    ]
  },

  {
    region: "Toscana",
    artists: [
      {
        name: "Gianna Nannini",
        location: "Siena, Toscana",
        role: "Singer-songwriter and musician",
        genres: ["Rock", "Pop rock"],
        songs: [
          "Bello e impossibile",
          "Fotoromanza",
          "America",
          "Meravigliosa creatura"
        ]
      },
      {
        name: "Andrea Bocelli",
        location: "Lajatico, Toscana",
        role: "Tenor, singer, and musician",
        genres: ["Classical crossover", "Opera", "Pop"],
        songs: [
          "Con te partirò",
          "Vivo per lei",
          "Il mare calmo della sera",
          "Canto della terra"
        ]
      },
      {
        name: "Marco Masini",
        location: "Florence, Toscana",
        role: "Singer-songwriter and pianist",
        genres: ["Pop", "Pop rock"],
        songs: [
          "Disperato",
          "T'innamorerai",
          "L'uomo volante",
          "Ci vorrebbe il mare"
        ]
      },
      {
        name: "Irene Grandi",
        location: "Florence, Toscana",
        role: "Singer-songwriter",
        genres: ["Pop", "Rock", "Soul"],
        songs: [
          "Bruci la città",
          "La tua ragazza sempre",
          "In vacanza da una vita",
          "Prima di partire per un lungo viaggio"
        ]
      },
      {
        name: "Piero Pelù",
        location: "Florence, Toscana",
        role: "Singer-songwriter and rock vocalist",
        genres: ["Rock", "Alternative rock"],
        songs: [
          "Gigante",
          "Io ci sarò",
          "El Diablo",
          "Regina di cuori"
        ]
      }
    ]
  },

  {
    region: "Umbria",
    artists: [
      {
        name: "Michele Bravi",
        location: "Città di Castello, Umbria",
        role: "Singer-songwriter",
        genres: ["Pop", "Singer-songwriter"],
        songs: [
          "Il diario degli errori",
          "La vita e la felicità",
          "Mantieni il bacio",
          "Inverno dei fiori"
        ]
      }
    ]
  },

  {
    region: "Marche",
    artists: [
      {
        name: "Raphael Gualazzi",
        location: "Urbino, Marche",
        role: "Singer-songwriter and pianist",
        genres: ["Jazz", "Blues", "Soul", "Pop"],
        songs: [
          "Follia d'amore",
          "Reality and Fantasy",
          "Sai (ci basta un sogno)",
          "L'estate di John Wayne"
        ]
      },
      {
        name: "Giovanni Allevi",
        location: "Ascoli Piceno, Marche",
        role: "Pianist and composer",
        genres: ["Contemporary classical", "Piano music"],
        songs: [
          "Come sei veramente",
          "Go with the Flow",
          "Aria",
          "Back to Life"
        ]
      },
      {
        name: "Dardust",
        location: "Ascoli Piceno, Marche",
        role: "Pianist, composer, songwriter, and producer",
        genres: ["Contemporary classical", "Electronic music", "Pop production"],
        songs: [
          "Sunset on M.",
          "Dune",
          "S.A.D. Storm and Drugs",
          "Nuovo Eden"
        ]
      }
    ]
  },

  {
    region: "Lazio",
    artists: [
      {
        name: "Lucio Battisti",
        location: "Poggio Bustone, Lazio",
        role: "Singer-songwriter, composer, guitarist, and producer",
        genres: ["Pop", "Pop rock", "Progressive pop"],
        songs: [
          "Il mio canto libero",
          "La canzone del sole",
          "Emozioni",
          "I giardini di marzo",
          "Acqua azzurra, acqua chiara"
        ]
      },
      {
        name: "Antonello Venditti",
        location: "Rome, Lazio",
        role: "Singer-songwriter and pianist",
        genres: ["Pop rock", "Singer-songwriter"],
        songs: [
          "Roma capoccia",
          "Notte prima degli esami",
          "Sotto il segno dei pesci",
          "Alta marea"
        ]
      },
      {
        name: "Renato Zero",
        location: "Rome, Lazio",
        role: "Singer-songwriter and performer",
        genres: ["Pop", "Glam rock", "Theatrical pop"],
        songs: [
          "Il cielo",
          "I migliori anni della nostra vita",
          "Cercami",
          "Triangolo"
        ]
      },
      {
        name: "Claudio Baglioni",
        location: "Rome, Lazio",
        role: "Singer-songwriter and musician",
        genres: ["Pop", "Singer-songwriter"],
        songs: [
          "Questo piccolo grande amore",
          "Strada facendo",
          "Avrai",
          "Mille giorni di te e di me"
        ]
      },
      {
        name: "Giorgia",
        location: "Rome, Lazio",
        role: "Singer-songwriter and producer",
        genres: ["Pop", "Soul", "R&B"],
        songs: [
          "Come saprei",
          "Di sole e d'azzurro",
          "Gocce di memoria",
          "Oronero"
        ]
      },
      {
        name: "Niccolò Fabi",
        location: "Rome, Lazio",
        role: "Singer-songwriter and musician",
        genres: ["Pop", "Folk rock", "Singer-songwriter"],
        songs: [
          "Capelli",
          "Costruire",
          "Una buona idea",
          "Facciamo finta"
        ]
      },
      {
        name: "Ultimo",
        location: "Rome, Lazio",
        role: "Singer-songwriter and pianist",
        genres: ["Pop", "Singer-songwriter"],
        songs: [
          "Il ballo delle incertezze",
          "I tuoi particolari",
          "Piccola stella",
          "Alba"
        ]
      }
    ]
  },

  {
    region: "Abruzzo",
    artists: [
      {
        name: "Ivan Graziani",
        location: "Teramo, Abruzzo",
        role: "Singer-songwriter and guitarist",
        genres: ["Rock", "Folk rock", "Singer-songwriter"],
        songs: [
          "Lugano addio",
          "Pigro",
          "Agnese",
          "Firenze (canzone triste)"
        ]
      }
    ]
  },

  {
    region: "Molise",
    artists: [
      {
        name: "Fred Bongusto",
        location: "Campobasso, Molise",
        role: "Singer-songwriter, guitarist, composer, and arranger",
        genres: ["Italian popular music", "Crooner-style pop", "Jazz-influenced pop"],
        songs: [
          "Una rotonda sul mare",
          "Tre settimane da raccontare",
          "Amore fermati",
          "Malaga"
        ]
      }
    ]
  },

  {
    region: "Campania",
    artists: [
      {
        name: "Pino Daniele",
        location: "Naples, Campania",
        role: "Singer-songwriter, guitarist, and composer",
        genres: ["Blues", "Jazz", "Rock", "Neapolitan music"],
        songs: [
          "Napule è",
          "Je so' pazzo",
          "Quando",
          "Terra mia",
          "Yes I Know My Way"
        ],
        moreSongs: [
          "Resta... Resta cu' mme",
          "Dubbi non ho",
          "Io per lei",
          "Che male c'è",
          "Amore senza fine"
        ]
      },
      {
        name: "Edoardo Bennato",
        location: "Naples, Campania",
        role: "Singer-songwriter, guitarist, and harmonica player",
        genres: ["Rock", "Blues rock", "Folk rock"],
        songs: [
          "Il gatto e la volpe",
          "L'isola che non c'è",
          "Sono solo canzonette",
          "Viva la mamma"
        ]
      },
      {
        name: "Massimo Ranieri",
        location: "Naples, Campania",
        role: "Singer and actor",
        genres: ["Italian popular music", "Neapolitan song", "Pop"],
        songs: [
          "Perdere l'amore",
          "Rose rosse",
          "Se bruciasse la città",
          "'O surdato 'nnammurato"
        ]
      },
      {
        name: "James Senese",
        location: "Naples, Campania",
        role: "Saxophonist, singer, composer, and bandleader",
        genres: ["Jazz-rock", "Funk", "Neapolitan music", "Soul"],
        songs: [
          "Campagna",
          "Un giorno un mese un anno",
          "Sanghe"
        ]
      },
      {
        name: "Teresa De Sio",
        location: "Naples, Campania",
        role: "Singer-songwriter and musician",
        genres: ["Folk", "Pop", "Southern Italian music"],
        songs: [
          "Voglio 'o sole",
          "Aumm aumm",
          "Pianoforte e voce",
          "Tutto cambia"
        ]
      },
      {
        name: "Nino D'Angelo",
        location: "Naples, Campania",
        role: "Singer-songwriter, actor, and director",
        genres: ["Neapolitan popular music", "Pop"],
        songs: [
          "Nu jeans e 'na maglietta",
          "Senza giacca e cravatta",
          "Jesce sole",
          "Napoli Napoli"
        ]
      },
      {
        name: "Gigi D'Alessio",
        location: "Naples, Campania",
        role: "Singer-songwriter and pianist",
        genres: ["Pop", "Neapolitan popular music"],
        songs: [
          "Non dirgli mai",
          "Un nuovo bacio",
          "Quanti amori",
          "Como suena el corazón"
        ]
      },
      {
        name: "Geolier",
        location: "Naples, Campania",
        role: "Rapper and songwriter",
        genres: ["Hip-hop", "Neapolitan rap", "Trap"],
        songs: [
          "I p' me, tu p' te",
          "Come vuoi",
          "Chiagne",
          "M' manc"
        ]
      }
    ]
  },

  {
    region: "Puglia",
    artists: [
      {
        name: "Anna Oxa",
        location: "Bari, Puglia",
        role: "Singer",
        genres: ["Pop", "Pop rock", "Art pop"],
        songs: [
          "Un'emozione da poco",
          "Quando nasce un amore",
          "Ti lascerò",
          "Senza pietà"
        ]
      },
      {
        name: "Al Bano",
        location: "Cellino San Marco, Puglia",
        role: "Singer-songwriter and performer",
        genres: ["Pop", "Italian popular music"],
        songs: [
          "Nel sole",
          "Felicità",
          "Ci sarà",
          "Nostalgia canaglia"
        ]
      },
      {
        name: "Caparezza",
        location: "Molfetta, Puglia",
        role: "Rapper, singer-songwriter, and producer",
        genres: ["Alternative hip-hop", "Rap rock", "Experimental rap"],
        songs: [
          "Fuori dal tunnel",
          "Vieni a ballare in Puglia",
          "Non me lo posso permettere",
          "La scelta"
        ]
      },
      {
        name: "Dolcenera",
        location: "Born in Galatina; raised in Scorrano, Puglia",
        role: "Singer-songwriter and pianist",
        genres: ["Pop", "Pop rock", "Soul"],
        songs: [
          "Siamo tutti là fuori",
          "Com'è straordinaria la vita",
          "Il mio amore unico",
          "Niente al mondo"
        ]
      },
      {
        name: "Alessandra Amoroso",
        location: "Galatina and Lecce area, Puglia",
        role: "Singer",
        genres: ["Pop", "Soul-influenced pop"],
        songs: [
          "Immobile",
          "Stupida",
          "Vivere a colori",
          "Comunque andare"
        ]
      }
    ]
  },

  {
    region: "Basilicata",
    artists: [
      {
        name: "Mango",
        location: "Lagonegro, Basilicata",
        role: "Singer-songwriter, composer, and musician",
        genres: ["Pop rock", "Folk", "World music"],
        songs: [
          "Oro",
          "Bella d'estate",
          "La rondine",
          "Mediterraneo",
          "Amore per te"
        ]
      }
    ]
  },

  {
    region: "Calabria",
    artists: [
      {
        name: "Brunori Sas",
        location: "Born in Cosenza; raised in Calabria",
        role: "Singer-songwriter, musician, and producer",
        genres: ["Indie pop", "Folk-pop", "Singer-songwriter"],
        songs: [
          "La verità",
          "Canzone contro la paura",
          "Al di là dell'amore",
          "Per due che come noi",
          "L'albero delle noci"
        ]
      },
      {
        name: "Peppe Voltarelli",
        location: "Cosenza area, Calabria",
        role: "Singer-songwriter, actor, and musician",
        genres: ["Folk", "Southern Italian music", "Singer-songwriter"],
        songs: [
          "Il monumento",
          "Qua si campa d'aria",
          "Marinai",
          "Spartenza"
        ]
      }
    ]
  },

  {
    region: "Sicilia",
    artists: [
      {
        name: "Franco Battiato",
        location: "Riposto area, Sicilia",
        role: "Singer-songwriter, composer, musician, and filmmaker",
        genres: ["Art pop", "Electronic music", "Progressive rock", "Experimental music"],
        songs: [
          "Centro di gravità permanente",
          "La cura",
          "Voglio vederti danzare",
          "Bandiera bianca",
          "Cuccurucucù"
        ]
      },
      {
        name: "Carmen Consoli",
        location: "Catania, Sicilia",
        role: "Singer-songwriter, guitarist, and producer",
        genres: ["Alternative rock", "Pop rock", "Singer-songwriter"],
        songs: [
          "Confusa e felice",
          "Amore di plastica",
          "Parole di burro",
          "L'ultimo bacio"
        ]
      },
      {
        name: "Mario Venuti",
        location: "Born in Syracuse; raised in Catania, Sicilia",
        role: "Singer-songwriter, guitarist, and producer",
        genres: ["Pop", "New wave", "Singer-songwriter"],
        songs: [
          "Veramente",
          "Crudele",
          "Mai come ieri",
          "Un altro posto nel mondo"
        ]
      },
      {
        name: "Colapesce",
        location: "Solarino, Sicilia",
        role: "Singer-songwriter and musician",
        genres: ["Indie pop", "Singer-songwriter"],
        songs: [
          "Musica leggerissima",
          "Splash",
          "Totale",
          "Cocoricò"
        ]
      },
      {
        name: "Dimartino",
        location: "Palermo, Sicilia",
        role: "Singer-songwriter and musician",
        genres: ["Indie pop", "Singer-songwriter"],
        songs: [
          "Musica leggerissima",
          "Splash",
          "Amore sociale",
          "Una storia del mare"
        ]
      },
      {
        name: "Roy Paci",
        location: "Augusta, Sicilia",
        role: "Trumpeter, composer, arranger, and bandleader",
        genres: ["Jazz", "Ska", "Latin music", "Sicilian popular music"],
        songs: [
          "Toda joia toda beleza",
          "Viva la vida",
          "Malarazza",
          "Bonjour Bahia"
        ]
      }
    ]
  },

  {
    region: "Sardegna",
    artists: [
      {
        name: "Paolo Fresu",
        location: "Berchidda, Sardegna",
        role: "Trumpeter, composer, bandleader, and educator",
        genres: ["Jazz", "Mediterranean jazz", "Instrumental music"],
        songs: [
          "Ossi di seppia",
          "Fellini",
          "Geremeas",
          "Sonos 'e memoria"
        ]
      },
      {
        name: "Andrea Parodi",
        location: "Porto Torres, Sardegna",
        role: "Singer-songwriter and musician",
        genres: ["Sardinian folk", "World music", "Folk rock"],
        songs: [
          "No potho reposare",
          "Spunta la luna dal monte",
          "Disamparados",
          "Abacada"
        ]
      },
      {
        name: "Maria Carta",
        location: "Siligo, Sardegna",
        role: "Singer and interpreter of Sardinian traditional music",
        genres: ["Sardinian folk", "Traditional music", "World music"],
        songs: [
          "No potho reposare",
          "Ave Maria sarda",
          "Trallallera",
          "Muttos de amore"
        ]
      },
      {
        name: "Piero Marras",
        location: "Nuoro, Sardegna",
        role: "Singer-songwriter and musician",
        genres: ["Sardinian folk", "Pop", "Singer-songwriter"],
        songs: [
          "Quando Gigi Riva tornerà",
          "Diglielo tu Maria",
          "Osposidda",
          "Mere manna"
        ]
      },
      {
        name: "Salmo",
        location: "Olbia, Sardegna",
        role: "Rapper, songwriter, and producer",
        genres: ["Hip-hop", "Rap rock", "Electronic rap"],
        songs: [
          "90MIN",
          "Il cielo nella stanza",
          "Russell Crowe",
          "Perdonami"
        ]
      }
    ]
  }
];

function getYouTubeSearchUrl(artistName, songTitle) {
  const searchQuery = `${artistName} ${songTitle} official`;
  return `https://www.youtube.com/results?search_query=${encodeURIComponent(
    searchQuery
  )}`;
}