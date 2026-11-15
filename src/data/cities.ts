// Cities for the time zone tool.
// One entry per city. Cities in the same time zone share a `tz` (Brno and Prague are both "Europe/Prague").
// `tz` is an IANA time zone name. The time, offset ("+6 h") and code ("CET") are always calculated live,
// never stored, because they change with daylight saving.
// `aliases` are other names people might type in the search (local spellings, old names, abbreviations).
// Accents don't need aliases: the search should ignore them, so "Medellin" finds "Medellín".

export type City = {
  name: string;
  country: string;
  tz: string;
  aliases?: string[];
};

export const cities: City[] = [

  // ---------- Europe ----------

  // Czechia
  { name: "Prague", country: "Czechia", tz: "Europe/Prague", aliases: ["Praha"] },
  { name: "Brno", country: "Czechia", tz: "Europe/Prague" },
  { name: "Ostrava", country: "Czechia", tz: "Europe/Prague" },
  { name: "Plzeň", country: "Czechia", tz: "Europe/Prague", aliases: ["Pilsen"] },
  { name: "Olomouc", country: "Czechia", tz: "Europe/Prague" },
  { name: "Liberec", country: "Czechia", tz: "Europe/Prague" },
  { name: "České Budějovice", country: "Czechia", tz: "Europe/Prague" },
  { name: "Hradec Králové", country: "Czechia", tz: "Europe/Prague" },
  { name: "Pardubice", country: "Czechia", tz: "Europe/Prague" },
  { name: "Zlín", country: "Czechia", tz: "Europe/Prague" },

  // Slovakia
  { name: "Bratislava", country: "Slovakia", tz: "Europe/Bratislava" },
  { name: "Košice", country: "Slovakia", tz: "Europe/Bratislava" },

  // Austria
  { name: "Vienna", country: "Austria", tz: "Europe/Vienna", aliases: ["Wien"] },
  { name: "Graz", country: "Austria", tz: "Europe/Vienna" },
  { name: "Linz", country: "Austria", tz: "Europe/Vienna" },
  { name: "Salzburg", country: "Austria", tz: "Europe/Vienna" },
  { name: "Innsbruck", country: "Austria", tz: "Europe/Vienna" },

  // Germany
  { name: "Berlin", country: "Germany", tz: "Europe/Berlin" },
  { name: "Hamburg", country: "Germany", tz: "Europe/Berlin" },
  { name: "Munich", country: "Germany", tz: "Europe/Berlin", aliases: ["München"] },
  { name: "Cologne", country: "Germany", tz: "Europe/Berlin", aliases: ["Köln"] },
  { name: "Frankfurt", country: "Germany", tz: "Europe/Berlin" },
  { name: "Stuttgart", country: "Germany", tz: "Europe/Berlin" },
  { name: "Düsseldorf", country: "Germany", tz: "Europe/Berlin" },
  { name: "Leipzig", country: "Germany", tz: "Europe/Berlin" },
  { name: "Dresden", country: "Germany", tz: "Europe/Berlin" },
  { name: "Hanover", country: "Germany", tz: "Europe/Berlin", aliases: ["Hannover"] },
  { name: "Nuremberg", country: "Germany", tz: "Europe/Berlin", aliases: ["Nürnberg"] },
  { name: "Bremen", country: "Germany", tz: "Europe/Berlin" },
  { name: "Dortmund", country: "Germany", tz: "Europe/Berlin" },
  { name: "Essen", country: "Germany", tz: "Europe/Berlin" },

  // Switzerland
  { name: "Zurich", country: "Switzerland", tz: "Europe/Zurich", aliases: ["Zürich"] },
  { name: "Geneva", country: "Switzerland", tz: "Europe/Zurich", aliases: ["Genève", "Genf"] },
  { name: "Basel", country: "Switzerland", tz: "Europe/Zurich" },
  { name: "Bern", country: "Switzerland", tz: "Europe/Zurich" },
  { name: "Lausanne", country: "Switzerland", tz: "Europe/Zurich" },

  // Poland
  { name: "Warsaw", country: "Poland", tz: "Europe/Warsaw", aliases: ["Warszawa"] },
  { name: "Kraków", country: "Poland", tz: "Europe/Warsaw", aliases: ["Krakow", "Cracow"] },
  { name: "Wrocław", country: "Poland", tz: "Europe/Warsaw" },
  { name: "Gdańsk", country: "Poland", tz: "Europe/Warsaw" },
  { name: "Poznań", country: "Poland", tz: "Europe/Warsaw" },
  { name: "Łódź", country: "Poland", tz: "Europe/Warsaw" },

  // Hungary
  { name: "Budapest", country: "Hungary", tz: "Europe/Budapest" },

  // Slovenia
  { name: "Ljubljana", country: "Slovenia", tz: "Europe/Ljubljana" },

  // Croatia
  { name: "Zagreb", country: "Croatia", tz: "Europe/Zagreb" },
  { name: "Split", country: "Croatia", tz: "Europe/Zagreb" },
  { name: "Dubrovnik", country: "Croatia", tz: "Europe/Zagreb" },

  // Serbia
  { name: "Belgrade", country: "Serbia", tz: "Europe/Belgrade", aliases: ["Beograd"] },
  { name: "Novi Sad", country: "Serbia", tz: "Europe/Belgrade" },

  // Bosnia and Herzegovina
  { name: "Sarajevo", country: "Bosnia and Herzegovina", tz: "Europe/Sarajevo" },

  // Montenegro
  { name: "Podgorica", country: "Montenegro", tz: "Europe/Podgorica" },

  // North Macedonia
  { name: "Skopje", country: "North Macedonia", tz: "Europe/Skopje" },

  // Albania
  { name: "Tirana", country: "Albania", tz: "Europe/Tirane" },

  // Romania
  { name: "Bucharest", country: "Romania", tz: "Europe/Bucharest", aliases: ["București"] },
  { name: "Cluj-Napoca", country: "Romania", tz: "Europe/Bucharest" },
  { name: "Timișoara", country: "Romania", tz: "Europe/Bucharest" },
  { name: "Iași", country: "Romania", tz: "Europe/Bucharest" },

  // Bulgaria
  { name: "Sofia", country: "Bulgaria", tz: "Europe/Sofia" },
  { name: "Plovdiv", country: "Bulgaria", tz: "Europe/Sofia" },
  { name: "Varna", country: "Bulgaria", tz: "Europe/Sofia" },

  // Greece
  { name: "Athens", country: "Greece", tz: "Europe/Athens", aliases: ["Athina"] },
  { name: "Thessaloniki", country: "Greece", tz: "Europe/Athens" },

  // Cyprus
  { name: "Nicosia", country: "Cyprus", tz: "Asia/Nicosia" },
  { name: "Limassol", country: "Cyprus", tz: "Asia/Nicosia" },

  // Malta
  { name: "Valletta", country: "Malta", tz: "Europe/Malta" },

  // Italy
  { name: "Rome", country: "Italy", tz: "Europe/Rome", aliases: ["Roma"] },
  { name: "Milan", country: "Italy", tz: "Europe/Rome", aliases: ["Milano"] },
  { name: "Naples", country: "Italy", tz: "Europe/Rome", aliases: ["Napoli"] },
  { name: "Turin", country: "Italy", tz: "Europe/Rome", aliases: ["Torino"] },
  { name: "Florence", country: "Italy", tz: "Europe/Rome", aliases: ["Firenze"] },
  { name: "Bologna", country: "Italy", tz: "Europe/Rome" },
  { name: "Venice", country: "Italy", tz: "Europe/Rome", aliases: ["Venezia"] },
  { name: "Palermo", country: "Italy", tz: "Europe/Rome" },
  { name: "Genoa", country: "Italy", tz: "Europe/Rome", aliases: ["Genova"] },
  { name: "Verona", country: "Italy", tz: "Europe/Rome" },

  // Spain
  { name: "Madrid", country: "Spain", tz: "Europe/Madrid" },
  { name: "Barcelona", country: "Spain", tz: "Europe/Madrid" },
  { name: "Valencia", country: "Spain", tz: "Europe/Madrid" },
  { name: "Seville", country: "Spain", tz: "Europe/Madrid", aliases: ["Sevilla"] },
  { name: "Málaga", country: "Spain", tz: "Europe/Madrid" },
  { name: "Bilbao", country: "Spain", tz: "Europe/Madrid" },
  { name: "Zaragoza", country: "Spain", tz: "Europe/Madrid" },
  { name: "Palma de Mallorca", country: "Spain", tz: "Europe/Madrid", aliases: ["Palma", "Mallorca"] },
  { name: "Alicante", country: "Spain", tz: "Europe/Madrid" },
  { name: "Granada", country: "Spain", tz: "Europe/Madrid" },
  { name: "Las Palmas", country: "Spain", tz: "Atlantic/Canary", aliases: ["Gran Canaria"] },
  { name: "Santa Cruz de Tenerife", country: "Spain", tz: "Atlantic/Canary", aliases: ["Tenerife"] },
  { name: "Ceuta", country: "Spain", tz: "Africa/Ceuta" },
  { name: "Melilla", country: "Spain", tz: "Africa/Ceuta" },

  // Portugal
  { name: "Lisbon", country: "Portugal", tz: "Europe/Lisbon", aliases: ["Lisboa"] },
  { name: "Porto", country: "Portugal", tz: "Europe/Lisbon", aliases: ["Oporto"] },
  { name: "Faro", country: "Portugal", tz: "Europe/Lisbon" },
  { name: "Funchal", country: "Portugal", tz: "Atlantic/Madeira", aliases: ["Madeira"] },
  { name: "Ponta Delgada", country: "Portugal", tz: "Atlantic/Azores", aliases: ["Azores"] },

  // France
  { name: "Paris", country: "France", tz: "Europe/Paris" },
  { name: "Marseille", country: "France", tz: "Europe/Paris" },
  { name: "Lyon", country: "France", tz: "Europe/Paris" },
  { name: "Toulouse", country: "France", tz: "Europe/Paris" },
  { name: "Nice", country: "France", tz: "Europe/Paris" },
  { name: "Bordeaux", country: "France", tz: "Europe/Paris" },
  { name: "Lille", country: "France", tz: "Europe/Paris" },
  { name: "Nantes", country: "France", tz: "Europe/Paris" },
  { name: "Strasbourg", country: "France", tz: "Europe/Paris" },
  { name: "Montpellier", country: "France", tz: "Europe/Paris" },

  // Monaco
  { name: "Monaco", country: "Monaco", tz: "Europe/Monaco" },

  // Belgium
  { name: "Brussels", country: "Belgium", tz: "Europe/Brussels", aliases: ["Bruxelles", "Brussel"] },
  { name: "Antwerp", country: "Belgium", tz: "Europe/Brussels", aliases: ["Antwerpen"] },
  { name: "Ghent", country: "Belgium", tz: "Europe/Brussels", aliases: ["Gent"] },

  // Netherlands
  { name: "Amsterdam", country: "Netherlands", tz: "Europe/Amsterdam" },
  { name: "Rotterdam", country: "Netherlands", tz: "Europe/Amsterdam" },
  { name: "The Hague", country: "Netherlands", tz: "Europe/Amsterdam", aliases: ["Den Haag"] },
  { name: "Utrecht", country: "Netherlands", tz: "Europe/Amsterdam" },
  { name: "Eindhoven", country: "Netherlands", tz: "Europe/Amsterdam" },

  // Luxembourg
  { name: "Luxembourg", country: "Luxembourg", tz: "Europe/Luxembourg" },

  // United Kingdom
  { name: "London", country: "United Kingdom", tz: "Europe/London" },
  { name: "Manchester", country: "United Kingdom", tz: "Europe/London" },
  { name: "Birmingham", country: "United Kingdom", tz: "Europe/London" },
  { name: "Liverpool", country: "United Kingdom", tz: "Europe/London" },
  { name: "Leeds", country: "United Kingdom", tz: "Europe/London" },
  { name: "Bristol", country: "United Kingdom", tz: "Europe/London" },
  { name: "Edinburgh", country: "United Kingdom", tz: "Europe/London" },
  { name: "Glasgow", country: "United Kingdom", tz: "Europe/London" },
  { name: "Cardiff", country: "United Kingdom", tz: "Europe/London" },
  { name: "Belfast", country: "United Kingdom", tz: "Europe/London" },

  // Ireland
  { name: "Dublin", country: "Ireland", tz: "Europe/Dublin" },
  { name: "Cork", country: "Ireland", tz: "Europe/Dublin" },
  { name: "Galway", country: "Ireland", tz: "Europe/Dublin" },

  // Denmark
  { name: "Copenhagen", country: "Denmark", tz: "Europe/Copenhagen", aliases: ["København"] },
  { name: "Aarhus", country: "Denmark", tz: "Europe/Copenhagen" },

  // Sweden
  { name: "Stockholm", country: "Sweden", tz: "Europe/Stockholm" },
  { name: "Gothenburg", country: "Sweden", tz: "Europe/Stockholm", aliases: ["Göteborg"] },
  { name: "Malmö", country: "Sweden", tz: "Europe/Stockholm" },

  // Norway
  { name: "Oslo", country: "Norway", tz: "Europe/Oslo" },
  { name: "Bergen", country: "Norway", tz: "Europe/Oslo" },

  // Finland
  { name: "Helsinki", country: "Finland", tz: "Europe/Helsinki" },
  { name: "Tampere", country: "Finland", tz: "Europe/Helsinki" },

  // Estonia
  { name: "Tallinn", country: "Estonia", tz: "Europe/Tallinn" },

  // Latvia
  { name: "Riga", country: "Latvia", tz: "Europe/Riga" },

  // Lithuania
  { name: "Vilnius", country: "Lithuania", tz: "Europe/Vilnius" },

  // Iceland
  { name: "Reykjavík", country: "Iceland", tz: "Atlantic/Reykjavik", aliases: ["Reykjavik"] },

  // Ukraine
  { name: "Kyiv", country: "Ukraine", tz: "Europe/Kiev", aliases: ["Kiev"] },
  { name: "Lviv", country: "Ukraine", tz: "Europe/Kiev" },
  { name: "Odesa", country: "Ukraine", tz: "Europe/Kiev", aliases: ["Odessa"] },
  { name: "Kharkiv", country: "Ukraine", tz: "Europe/Kiev" },

  // Moldova
  { name: "Chișinău", country: "Moldova", tz: "Europe/Chisinau", aliases: ["Chisinau"] },

  // Belarus
  { name: "Minsk", country: "Belarus", tz: "Europe/Minsk" },

  // Turkey
  { name: "Istanbul", country: "Turkey", tz: "Europe/Istanbul" },
  { name: "Ankara", country: "Turkey", tz: "Europe/Istanbul" },
  { name: "İzmir", country: "Turkey", tz: "Europe/Istanbul", aliases: ["Izmir"] },
  { name: "Antalya", country: "Turkey", tz: "Europe/Istanbul" },

  // Russia
  { name: "Moscow", country: "Russia", tz: "Europe/Moscow" },
  { name: "Saint Petersburg", country: "Russia", tz: "Europe/Moscow", aliases: ["St Petersburg"] },
  { name: "Kazan", country: "Russia", tz: "Europe/Moscow" },
  { name: "Yekaterinburg", country: "Russia", tz: "Asia/Yekaterinburg" },
  { name: "Novosibirsk", country: "Russia", tz: "Asia/Novosibirsk" },
  { name: "Vladivostok", country: "Russia", tz: "Asia/Vladivostok" },
  { name: "Kaliningrad", country: "Russia", tz: "Europe/Kaliningrad" },
  { name: "Samara", country: "Russia", tz: "Europe/Samara" },
  { name: "Omsk", country: "Russia", tz: "Asia/Omsk" },
  { name: "Krasnoyarsk", country: "Russia", tz: "Asia/Krasnoyarsk" },
  { name: "Irkutsk", country: "Russia", tz: "Asia/Irkutsk" },
  { name: "Yakutsk", country: "Russia", tz: "Asia/Yakutsk" },
  { name: "Magadan", country: "Russia", tz: "Asia/Magadan" },
  { name: "Petropavlovsk-Kamchatsky", country: "Russia", tz: "Asia/Kamchatka", aliases: ["Kamchatka"] },

  // Georgia
  { name: "Tbilisi", country: "Georgia", tz: "Asia/Tbilisi" },

  // Armenia
  { name: "Yerevan", country: "Armenia", tz: "Asia/Yerevan" },

  // Azerbaijan
  { name: "Baku", country: "Azerbaijan", tz: "Asia/Baku" },

  // Andorra
  { name: "Andorra la Vella", country: "Andorra", tz: "Europe/Andorra" },

  // Liechtenstein
  { name: "Vaduz", country: "Liechtenstein", tz: "Europe/Vaduz" },

  // San Marino
  { name: "San Marino", country: "San Marino", tz: "Europe/San_Marino" },

  // Vatican City
  { name: "Vatican City", country: "Vatican City", tz: "Europe/Vatican", aliases: ["Vatican"] },

  // Kosovo
  { name: "Pristina", country: "Kosovo", tz: "Europe/Belgrade", aliases: ["Prishtina"] },

  // Gibraltar
  { name: "Gibraltar", country: "Gibraltar", tz: "Europe/Gibraltar" },

  // Jersey
  { name: "St Helier", country: "Jersey", tz: "Europe/Jersey", aliases: ["Saint Helier"] },

  // Guernsey
  { name: "St Peter Port", country: "Guernsey", tz: "Europe/Guernsey", aliases: ["Saint Peter Port"] },

  // Isle of Man
  { name: "Douglas", country: "Isle of Man", tz: "Europe/Isle_of_Man" },

  // Åland Islands
  { name: "Mariehamn", country: "\u00c5land Islands", tz: "Europe/Mariehamn" },

  // Faroe Islands
  { name: "Tórshavn", country: "Faroe Islands", tz: "Atlantic/Faroe", aliases: ["Torshavn"] },

  // Svalbard
  { name: "Longyearbyen", country: "Svalbard", tz: "Arctic/Longyearbyen" },

  // ---------- North America ----------

  // USA
  { name: "New York", country: "USA", tz: "America/New_York", aliases: ["NYC", "New York City"] },
  { name: "Boston", country: "USA", tz: "America/New_York" },
  { name: "Philadelphia", country: "USA", tz: "America/New_York" },
  { name: "Washington, D.C.", country: "USA", tz: "America/New_York", aliases: ["Washington", "DC"] },
  { name: "Baltimore", country: "USA", tz: "America/New_York" },
  { name: "Atlanta", country: "USA", tz: "America/New_York" },
  { name: "Miami", country: "USA", tz: "America/New_York" },
  { name: "Orlando", country: "USA", tz: "America/New_York" },
  { name: "Tampa", country: "USA", tz: "America/New_York" },
  { name: "Charlotte", country: "USA", tz: "America/New_York" },
  { name: "Pittsburgh", country: "USA", tz: "America/New_York" },
  { name: "Raleigh", country: "USA", tz: "America/New_York" },
  { name: "Detroit", country: "USA", tz: "America/Detroit" },
  { name: "Indianapolis", country: "USA", tz: "America/Indiana/Indianapolis" },
  { name: "Louisville", country: "USA", tz: "America/Kentucky/Louisville" },
  { name: "Chicago", country: "USA", tz: "America/Chicago" },
  { name: "Houston", country: "USA", tz: "America/Chicago" },
  { name: "Dallas", country: "USA", tz: "America/Chicago" },
  { name: "Austin", country: "USA", tz: "America/Chicago" },
  { name: "San Antonio", country: "USA", tz: "America/Chicago" },
  { name: "Nashville", country: "USA", tz: "America/Chicago" },
  { name: "New Orleans", country: "USA", tz: "America/Chicago" },
  { name: "Minneapolis", country: "USA", tz: "America/Chicago" },
  { name: "St. Louis", country: "USA", tz: "America/Chicago", aliases: ["Saint Louis"] },
  { name: "Kansas City", country: "USA", tz: "America/Chicago" },
  { name: "Memphis", country: "USA", tz: "America/Chicago" },
  { name: "Denver", country: "USA", tz: "America/Denver" },
  { name: "Salt Lake City", country: "USA", tz: "America/Denver" },
  { name: "Albuquerque", country: "USA", tz: "America/Denver" },
  { name: "El Paso", country: "USA", tz: "America/Denver" },
  { name: "Boise", country: "USA", tz: "America/Boise" },
  { name: "Phoenix", country: "USA", tz: "America/Phoenix" },
  { name: "Tucson", country: "USA", tz: "America/Phoenix" },
  { name: "Los Angeles", country: "USA", tz: "America/Los_Angeles", aliases: ["LA"] },
  { name: "San Francisco", country: "USA", tz: "America/Los_Angeles", aliases: ["SF"] },
  { name: "San Diego", country: "USA", tz: "America/Los_Angeles" },
  { name: "San Jose", country: "USA", tz: "America/Los_Angeles" },
  { name: "Sacramento", country: "USA", tz: "America/Los_Angeles" },
  { name: "Seattle", country: "USA", tz: "America/Los_Angeles" },
  { name: "Portland", country: "USA", tz: "America/Los_Angeles" },
  { name: "Las Vegas", country: "USA", tz: "America/Los_Angeles", aliases: ["Vegas"] },
  { name: "Anchorage", country: "USA", tz: "America/Anchorage" },
  { name: "Honolulu", country: "USA", tz: "Pacific/Honolulu", aliases: ["Hawaii"] },
  { name: "Juneau", country: "USA", tz: "America/Juneau" },
  { name: "Adak", country: "USA", tz: "America/Adak", aliases: ["Aleutian Islands"] },

  // Canada
  { name: "Toronto", country: "Canada", tz: "America/Toronto" },
  { name: "Ottawa", country: "Canada", tz: "America/Toronto" },
  { name: "Montreal", country: "Canada", tz: "America/Toronto", aliases: ["Montréal"] },
  { name: "Quebec City", country: "Canada", tz: "America/Toronto", aliases: ["Québec"] },
  { name: "Vancouver", country: "Canada", tz: "America/Vancouver" },
  { name: "Victoria", country: "Canada", tz: "America/Vancouver" },
  { name: "Calgary", country: "Canada", tz: "America/Edmonton" },
  { name: "Edmonton", country: "Canada", tz: "America/Edmonton" },
  { name: "Winnipeg", country: "Canada", tz: "America/Winnipeg" },
  { name: "Regina", country: "Canada", tz: "America/Regina" },
  { name: "Saskatoon", country: "Canada", tz: "America/Regina" },
  { name: "Halifax", country: "Canada", tz: "America/Halifax" },
  { name: "St. John's", country: "Canada", tz: "America/St_Johns", aliases: ["Saint John's", "Newfoundland"] },
  { name: "Whitehorse", country: "Canada", tz: "America/Whitehorse", aliases: ["Yukon"] },
  { name: "Yellowknife", country: "Canada", tz: "America/Edmonton" },
  { name: "Iqaluit", country: "Canada", tz: "America/Iqaluit", aliases: ["Nunavut"] },

  // Mexico
  { name: "Mexico City", country: "Mexico", tz: "America/Mexico_City", aliases: ["CDMX", "Ciudad de México"] },
  { name: "Guadalajara", country: "Mexico", tz: "America/Mexico_City" },
  { name: "Puebla", country: "Mexico", tz: "America/Mexico_City" },
  { name: "Querétaro", country: "Mexico", tz: "America/Mexico_City" },
  { name: "León", country: "Mexico", tz: "America/Mexico_City" },
  { name: "Oaxaca", country: "Mexico", tz: "America/Mexico_City" },
  { name: "San Miguel de Allende", country: "Mexico", tz: "America/Mexico_City" },
  { name: "Aguascalientes", country: "Mexico", tz: "America/Mexico_City" },
  { name: "Morelia", country: "Mexico", tz: "America/Mexico_City" },
  { name: "Veracruz", country: "Mexico", tz: "America/Mexico_City" },
  { name: "Acapulco", country: "Mexico", tz: "America/Mexico_City" },
  { name: "Monterrey", country: "Mexico", tz: "America/Monterrey" },
  { name: "Saltillo", country: "Mexico", tz: "America/Monterrey" },
  { name: "Matamoros", country: "Mexico", tz: "America/Matamoros" },
  { name: "Mérida", country: "Mexico", tz: "America/Merida" },
  { name: "Cancún", country: "Mexico", tz: "America/Cancun", aliases: ["Cancun"] },
  { name: "Playa del Carmen", country: "Mexico", tz: "America/Cancun" },
  { name: "Tulum", country: "Mexico", tz: "America/Cancun" },
  { name: "Puerto Vallarta", country: "Mexico", tz: "America/Bahia_Banderas" },
  { name: "Chihuahua", country: "Mexico", tz: "America/Chihuahua" },
  { name: "Mazatlán", country: "Mexico", tz: "America/Mazatlan" },
  { name: "La Paz", country: "Mexico", tz: "America/Mazatlan" },
  { name: "Los Cabos", country: "Mexico", tz: "America/Mazatlan", aliases: ["Cabo San Lucas", "Cabo"] },
  { name: "Hermosillo", country: "Mexico", tz: "America/Hermosillo" },
  { name: "Tijuana", country: "Mexico", tz: "America/Tijuana" },
  { name: "Mexicali", country: "Mexico", tz: "America/Tijuana" },

  // Greenland
  { name: "Nuuk", country: "Greenland", tz: "America/Godthab", aliases: ["Godthåb"] },
  { name: "Ilulissat", country: "Greenland", tz: "America/Godthab" },
  { name: "Ittoqqortoormiit", country: "Greenland", tz: "America/Scoresbysund", aliases: ["Scoresbysund"] },
  { name: "Pituffik", country: "Greenland", tz: "America/Thule", aliases: ["Thule"] },

  // Bermuda
  { name: "Hamilton", country: "Bermuda", tz: "Atlantic/Bermuda" },

  // Saint Pierre and Miquelon
  { name: "Saint-Pierre", country: "Saint Pierre and Miquelon", tz: "America/Miquelon" },

  // ---------- Central America & Caribbean ----------

  // Guatemala
  { name: "Guatemala City", country: "Guatemala", tz: "America/Guatemala" },
  { name: "Antigua Guatemala", country: "Guatemala", tz: "America/Guatemala" },

  // Belize
  { name: "Belize City", country: "Belize", tz: "America/Belize" },

  // El Salvador
  { name: "San Salvador", country: "El Salvador", tz: "America/El_Salvador" },

  // Honduras
  { name: "Tegucigalpa", country: "Honduras", tz: "America/Tegucigalpa" },
  { name: "San Pedro Sula", country: "Honduras", tz: "America/Tegucigalpa" },

  // Nicaragua
  { name: "Managua", country: "Nicaragua", tz: "America/Managua" },

  // Costa Rica
  { name: "San José", country: "Costa Rica", tz: "America/Costa_Rica" },

  // Panama
  { name: "Panama City", country: "Panama", tz: "America/Panama" },

  // Cuba
  { name: "Havana", country: "Cuba", tz: "America/Havana", aliases: ["La Habana"] },

  // Dominican Republic
  { name: "Santo Domingo", country: "Dominican Republic", tz: "America/Santo_Domingo" },
  { name: "Punta Cana", country: "Dominican Republic", tz: "America/Santo_Domingo" },

  // Puerto Rico
  { name: "San Juan", country: "Puerto Rico", tz: "America/Puerto_Rico" },

  // Jamaica
  { name: "Kingston", country: "Jamaica", tz: "America/Jamaica" },

  // Trinidad and Tobago
  { name: "Port of Spain", country: "Trinidad and Tobago", tz: "America/Port_of_Spain" },

  // Bahamas
  { name: "Nassau", country: "Bahamas", tz: "America/Nassau" },

  // Barbados
  { name: "Bridgetown", country: "Barbados", tz: "America/Barbados" },

  // Haiti
  { name: "Port-au-Prince", country: "Haiti", tz: "America/Port-au-Prince" },

  // Antigua and Barbuda
  { name: "St. John's", country: "Antigua and Barbuda", tz: "America/Antigua", aliases: ["Saint John's"] },

  // Dominica
  { name: "Roseau", country: "Dominica", tz: "America/Dominica" },

  // Grenada
  { name: "St. George's", country: "Grenada", tz: "America/Grenada", aliases: ["Saint George's"] },

  // Saint Lucia
  { name: "Castries", country: "Saint Lucia", tz: "America/St_Lucia" },

  // Saint Kitts and Nevis
  { name: "Basseterre", country: "Saint Kitts and Nevis", tz: "America/St_Kitts" },

  // Saint Vincent and the Grenadines
  { name: "Kingstown", country: "Saint Vincent and the Grenadines", tz: "America/St_Vincent" },

  // Aruba
  { name: "Oranjestad", country: "Aruba", tz: "America/Aruba" },

  // Curaçao
  { name: "Willemstad", country: "Cura\u00e7ao", tz: "America/Curacao" },

  // Caribbean Netherlands
  { name: "Kralendijk", country: "Caribbean Netherlands", tz: "America/Kralendijk", aliases: ["Bonaire"] },

  // Sint Maarten
  { name: "Philipsburg", country: "Sint Maarten", tz: "America/Lower_Princes" },

  // Saint Martin
  { name: "Marigot", country: "Saint Martin", tz: "America/Marigot" },

  // Saint Barthélemy
  { name: "Gustavia", country: "Saint Barth\u00e9lemy", tz: "America/St_Barthelemy", aliases: ["St Barts", "St Barths"] },

  // Anguilla
  { name: "The Valley", country: "Anguilla", tz: "America/Anguilla" },

  // Montserrat
  { name: "Brades", country: "Montserrat", tz: "America/Montserrat" },

  // British Virgin Islands
  { name: "Road Town", country: "British Virgin Islands", tz: "America/Tortola", aliases: ["Tortola"] },

  // U.S. Virgin Islands
  { name: "Charlotte Amalie", country: "U.S. Virgin Islands", tz: "America/St_Thomas", aliases: ["St Thomas"] },

  // Cayman Islands
  { name: "George Town", country: "Cayman Islands", tz: "America/Cayman", aliases: ["Grand Cayman"] },

  // Turks and Caicos Islands
  { name: "Cockburn Town", country: "Turks and Caicos Islands", tz: "America/Grand_Turk" },
  { name: "Providenciales", country: "Turks and Caicos Islands", tz: "America/Grand_Turk" },

  // Guadeloupe
  { name: "Pointe-à-Pitre", country: "Guadeloupe", tz: "America/Guadeloupe" },
  { name: "Basse-Terre", country: "Guadeloupe", tz: "America/Guadeloupe" },

  // Martinique
  { name: "Fort-de-France", country: "Martinique", tz: "America/Martinique" },

  // ---------- South America ----------

  // Colombia
  { name: "Bogotá", country: "Colombia", tz: "America/Bogota" },
  { name: "Medellín", country: "Colombia", tz: "America/Bogota" },
  { name: "Cali", country: "Colombia", tz: "America/Bogota" },
  { name: "Barranquilla", country: "Colombia", tz: "America/Bogota" },
  { name: "Cartagena", country: "Colombia", tz: "America/Bogota" },
  { name: "Bucaramanga", country: "Colombia", tz: "America/Bogota" },
  { name: "Santa Marta", country: "Colombia", tz: "America/Bogota" },
  { name: "Pereira", country: "Colombia", tz: "America/Bogota" },

  // Venezuela
  { name: "Caracas", country: "Venezuela", tz: "America/Caracas" },
  { name: "Maracaibo", country: "Venezuela", tz: "America/Caracas" },
  { name: "Valencia", country: "Venezuela", tz: "America/Caracas" },

  // Ecuador
  { name: "Quito", country: "Ecuador", tz: "America/Guayaquil" },
  { name: "Guayaquil", country: "Ecuador", tz: "America/Guayaquil" },
  { name: "Cuenca", country: "Ecuador", tz: "America/Guayaquil" },
  { name: "Galápagos", country: "Ecuador", tz: "Pacific/Galapagos" },

  // Peru
  { name: "Lima", country: "Peru", tz: "America/Lima" },
  { name: "Cusco", country: "Peru", tz: "America/Lima", aliases: ["Cuzco"] },
  { name: "Arequipa", country: "Peru", tz: "America/Lima" },

  // Bolivia
  { name: "La Paz", country: "Bolivia", tz: "America/La_Paz" },
  { name: "Santa Cruz de la Sierra", country: "Bolivia", tz: "America/La_Paz", aliases: ["Santa Cruz"] },
  { name: "Sucre", country: "Bolivia", tz: "America/La_Paz" },

  // Chile
  { name: "Santiago", country: "Chile", tz: "America/Santiago" },
  { name: "Valparaíso", country: "Chile", tz: "America/Santiago" },
  { name: "Concepción", country: "Chile", tz: "America/Santiago" },
  { name: "Punta Arenas", country: "Chile", tz: "America/Punta_Arenas" },
  { name: "Easter Island", country: "Chile", tz: "Pacific/Easter", aliases: ["Rapa Nui"] },

  // Argentina
  { name: "Buenos Aires", country: "Argentina", tz: "America/Argentina/Buenos_Aires" },
  { name: "Mar del Plata", country: "Argentina", tz: "America/Argentina/Buenos_Aires" },
  { name: "La Plata", country: "Argentina", tz: "America/Argentina/Buenos_Aires" },
  { name: "Córdoba", country: "Argentina", tz: "America/Argentina/Cordoba" },
  { name: "Rosario", country: "Argentina", tz: "America/Argentina/Cordoba" },
  { name: "Mendoza", country: "Argentina", tz: "America/Argentina/Mendoza" },
  { name: "Ushuaia", country: "Argentina", tz: "America/Argentina/Ushuaia" },

  // Uruguay
  { name: "Montevideo", country: "Uruguay", tz: "America/Montevideo" },
  { name: "Punta del Este", country: "Uruguay", tz: "America/Montevideo" },

  // Paraguay
  { name: "Asunción", country: "Paraguay", tz: "America/Asuncion" },

  // Brazil
  { name: "São Paulo", country: "Brazil", tz: "America/Sao_Paulo" },
  { name: "Rio de Janeiro", country: "Brazil", tz: "America/Sao_Paulo", aliases: ["Rio"] },
  { name: "Brasília", country: "Brazil", tz: "America/Sao_Paulo" },
  { name: "Belo Horizonte", country: "Brazil", tz: "America/Sao_Paulo" },
  { name: "Curitiba", country: "Brazil", tz: "America/Sao_Paulo" },
  { name: "Porto Alegre", country: "Brazil", tz: "America/Sao_Paulo" },
  { name: "Florianópolis", country: "Brazil", tz: "America/Sao_Paulo" },
  { name: "Salvador", country: "Brazil", tz: "America/Bahia" },
  { name: "Recife", country: "Brazil", tz: "America/Recife" },
  { name: "Fortaleza", country: "Brazil", tz: "America/Fortaleza" },
  { name: "Belém", country: "Brazil", tz: "America/Belem" },
  { name: "Manaus", country: "Brazil", tz: "America/Manaus" },
  { name: "Campo Grande", country: "Brazil", tz: "America/Campo_Grande" },
  { name: "Cuiabá", country: "Brazil", tz: "America/Cuiaba" },
  { name: "Rio Branco", country: "Brazil", tz: "America/Rio_Branco" },
  { name: "Fernando de Noronha", country: "Brazil", tz: "America/Noronha", aliases: ["Noronha"] },

  // Guyana
  { name: "Georgetown", country: "Guyana", tz: "America/Guyana" },

  // Suriname
  { name: "Paramaribo", country: "Suriname", tz: "America/Paramaribo" },

  // French Guiana
  { name: "Cayenne", country: "French Guiana", tz: "America/Cayenne" },

  // Falkland Islands
  { name: "Stanley", country: "Falkland Islands", tz: "Atlantic/Stanley" },

  // South Georgia
  { name: "Grytviken", country: "South Georgia", tz: "Atlantic/South_Georgia", aliases: ["King Edward Point"] },

  // ---------- Middle East ----------

  // United Arab Emirates
  { name: "Dubai", country: "United Arab Emirates", tz: "Asia/Dubai" },
  { name: "Abu Dhabi", country: "United Arab Emirates", tz: "Asia/Dubai" },

  // Qatar
  { name: "Doha", country: "Qatar", tz: "Asia/Qatar" },

  // Saudi Arabia
  { name: "Riyadh", country: "Saudi Arabia", tz: "Asia/Riyadh" },
  { name: "Jeddah", country: "Saudi Arabia", tz: "Asia/Riyadh" },

  // Kuwait
  { name: "Kuwait City", country: "Kuwait", tz: "Asia/Kuwait" },

  // Bahrain
  { name: "Manama", country: "Bahrain", tz: "Asia/Bahrain" },

  // Oman
  { name: "Muscat", country: "Oman", tz: "Asia/Muscat" },

  // Israel
  { name: "Tel Aviv", country: "Israel", tz: "Asia/Jerusalem" },
  { name: "Jerusalem", country: "Israel", tz: "Asia/Jerusalem" },
  { name: "Haifa", country: "Israel", tz: "Asia/Jerusalem" },

  // Jordan
  { name: "Amman", country: "Jordan", tz: "Asia/Amman" },

  // Lebanon
  { name: "Beirut", country: "Lebanon", tz: "Asia/Beirut" },

  // Iraq
  { name: "Baghdad", country: "Iraq", tz: "Asia/Baghdad" },

  // Iran
  { name: "Tehran", country: "Iran", tz: "Asia/Tehran" },

  // Syria
  { name: "Damascus", country: "Syria", tz: "Asia/Damascus" },
  { name: "Aleppo", country: "Syria", tz: "Asia/Damascus" },

  // Yemen
  { name: "Sanaa", country: "Yemen", tz: "Asia/Aden", aliases: ["Sana'a"] },
  { name: "Aden", country: "Yemen", tz: "Asia/Aden" },

  // Palestine
  { name: "Ramallah", country: "Palestine", tz: "Asia/Hebron" },
  { name: "Bethlehem", country: "Palestine", tz: "Asia/Hebron" },
  { name: "Hebron", country: "Palestine", tz: "Asia/Hebron" },
  { name: "Gaza", country: "Palestine", tz: "Asia/Gaza" },

  // ---------- Africa ----------

  // Egypt
  { name: "Cairo", country: "Egypt", tz: "Africa/Cairo" },
  { name: "Alexandria", country: "Egypt", tz: "Africa/Cairo" },

  // Morocco
  { name: "Casablanca", country: "Morocco", tz: "Africa/Casablanca" },
  { name: "Marrakesh", country: "Morocco", tz: "Africa/Casablanca", aliases: ["Marrakech"] },
  { name: "Rabat", country: "Morocco", tz: "Africa/Casablanca" },
  { name: "Tangier", country: "Morocco", tz: "Africa/Casablanca" },

  // Tunisia
  { name: "Tunis", country: "Tunisia", tz: "Africa/Tunis" },

  // Algeria
  { name: "Algiers", country: "Algeria", tz: "Africa/Algiers" },

  // Senegal
  { name: "Dakar", country: "Senegal", tz: "Africa/Dakar" },

  // Ivory Coast
  { name: "Abidjan", country: "Ivory Coast", tz: "Africa/Abidjan" },

  // Ghana
  { name: "Accra", country: "Ghana", tz: "Africa/Accra" },

  // Nigeria
  { name: "Lagos", country: "Nigeria", tz: "Africa/Lagos" },
  { name: "Abuja", country: "Nigeria", tz: "Africa/Lagos" },

  // Kenya
  { name: "Nairobi", country: "Kenya", tz: "Africa/Nairobi" },
  { name: "Mombasa", country: "Kenya", tz: "Africa/Nairobi" },

  // Ethiopia
  { name: "Addis Ababa", country: "Ethiopia", tz: "Africa/Addis_Ababa" },

  // Tanzania
  { name: "Dar es Salaam", country: "Tanzania", tz: "Africa/Dar_es_Salaam" },
  { name: "Zanzibar", country: "Tanzania", tz: "Africa/Dar_es_Salaam" },

  // Uganda
  { name: "Kampala", country: "Uganda", tz: "Africa/Kampala" },

  // Rwanda
  { name: "Kigali", country: "Rwanda", tz: "Africa/Kigali" },

  // DR Congo
  { name: "Kinshasa", country: "DR Congo", tz: "Africa/Kinshasa" },
  { name: "Lubumbashi", country: "DR Congo", tz: "Africa/Lubumbashi" },

  // Angola
  { name: "Luanda", country: "Angola", tz: "Africa/Luanda" },

  // Zambia
  { name: "Lusaka", country: "Zambia", tz: "Africa/Lusaka" },

  // Zimbabwe
  { name: "Harare", country: "Zimbabwe", tz: "Africa/Harare" },

  // Mozambique
  { name: "Maputo", country: "Mozambique", tz: "Africa/Maputo" },

  // Namibia
  { name: "Windhoek", country: "Namibia", tz: "Africa/Windhoek" },

  // South Africa
  { name: "Johannesburg", country: "South Africa", tz: "Africa/Johannesburg", aliases: ["Joburg"] },
  { name: "Cape Town", country: "South Africa", tz: "Africa/Johannesburg" },
  { name: "Durban", country: "South Africa", tz: "Africa/Johannesburg" },
  { name: "Pretoria", country: "South Africa", tz: "Africa/Johannesburg" },

  // Mauritius
  { name: "Port Louis", country: "Mauritius", tz: "Indian/Mauritius" },

  // Libya
  { name: "Tripoli", country: "Libya", tz: "Africa/Tripoli" },
  { name: "Benghazi", country: "Libya", tz: "Africa/Tripoli" },

  // Sudan
  { name: "Khartoum", country: "Sudan", tz: "Africa/Khartoum" },

  // South Sudan
  { name: "Juba", country: "South Sudan", tz: "Africa/Juba" },

  // Somalia
  { name: "Mogadishu", country: "Somalia", tz: "Africa/Mogadishu" },

  // Djibouti
  { name: "Djibouti", country: "Djibouti", tz: "Africa/Djibouti" },

  // Eritrea
  { name: "Asmara", country: "Eritrea", tz: "Africa/Asmara" },

  // Western Sahara
  { name: "Laayoune", country: "Western Sahara", tz: "Africa/El_Aaiun", aliases: ["El Aaiún"] },

  // Mauritania
  { name: "Nouakchott", country: "Mauritania", tz: "Africa/Nouakchott" },

  // Mali
  { name: "Bamako", country: "Mali", tz: "Africa/Bamako" },

  // Burkina Faso
  { name: "Ouagadougou", country: "Burkina Faso", tz: "Africa/Ouagadougou" },

  // Niger
  { name: "Niamey", country: "Niger", tz: "Africa/Niamey" },

  // Chad
  { name: "N'Djamena", country: "Chad", tz: "Africa/Ndjamena" },

  // Gambia
  { name: "Banjul", country: "Gambia", tz: "Africa/Banjul" },

  // Guinea-Bissau
  { name: "Bissau", country: "Guinea-Bissau", tz: "Africa/Bissau" },

  // Guinea
  { name: "Conakry", country: "Guinea", tz: "Africa/Conakry" },

  // Sierra Leone
  { name: "Freetown", country: "Sierra Leone", tz: "Africa/Freetown" },

  // Liberia
  { name: "Monrovia", country: "Liberia", tz: "Africa/Monrovia" },

  // Togo
  { name: "Lomé", country: "Togo", tz: "Africa/Lome" },

  // Benin
  { name: "Porto-Novo", country: "Benin", tz: "Africa/Porto-Novo" },
  { name: "Cotonou", country: "Benin", tz: "Africa/Porto-Novo" },

  // Cape Verde
  { name: "Praia", country: "Cape Verde", tz: "Atlantic/Cape_Verde" },

  // Cameroon
  { name: "Yaoundé", country: "Cameroon", tz: "Africa/Douala" },
  { name: "Douala", country: "Cameroon", tz: "Africa/Douala" },

  // Central African Republic
  { name: "Bangui", country: "Central African Republic", tz: "Africa/Bangui" },

  // Equatorial Guinea
  { name: "Malabo", country: "Equatorial Guinea", tz: "Africa/Malabo" },

  // São Tomé and Príncipe
  { name: "São Tomé", country: "S\u00e3o Tom\u00e9 and Pr\u00edncipe", tz: "Africa/Sao_Tome" },

  // Gabon
  { name: "Libreville", country: "Gabon", tz: "Africa/Libreville" },

  // Republic of the Congo
  { name: "Brazzaville", country: "Republic of the Congo", tz: "Africa/Brazzaville" },
  { name: "Pointe-Noire", country: "Republic of the Congo", tz: "Africa/Brazzaville" },

  // Burundi
  { name: "Gitega", country: "Burundi", tz: "Africa/Bujumbura" },
  { name: "Bujumbura", country: "Burundi", tz: "Africa/Bujumbura" },

  // Malawi
  { name: "Lilongwe", country: "Malawi", tz: "Africa/Blantyre" },
  { name: "Blantyre", country: "Malawi", tz: "Africa/Blantyre" },

  // Botswana
  { name: "Gaborone", country: "Botswana", tz: "Africa/Gaborone" },

  // Lesotho
  { name: "Maseru", country: "Lesotho", tz: "Africa/Maseru" },

  // Eswatini
  { name: "Mbabane", country: "Eswatini", tz: "Africa/Mbabane", aliases: ["Swaziland"] },

  // Madagascar
  { name: "Antananarivo", country: "Madagascar", tz: "Indian/Antananarivo" },

  // Comoros
  { name: "Moroni", country: "Comoros", tz: "Indian/Comoro" },

  // Seychelles
  { name: "Victoria", country: "Seychelles", tz: "Indian/Mahe", aliases: ["Mahé"] },

  // Réunion
  { name: "Saint-Denis", country: "R\u00e9union", tz: "Indian/Reunion", aliases: ["Reunion"] },

  // Mayotte
  { name: "Mamoudzou", country: "Mayotte", tz: "Indian/Mayotte" },

  // Saint Helena
  { name: "Jamestown", country: "Saint Helena", tz: "Atlantic/St_Helena" },
  { name: "Georgetown", country: "Saint Helena", tz: "Atlantic/St_Helena", aliases: ["Ascension Island"] },
  { name: "Edinburgh of the Seven Seas", country: "Saint Helena", tz: "Atlantic/St_Helena", aliases: ["Tristan da Cunha"] },

  // ---------- Asia ----------

  // India
  { name: "Mumbai", country: "India", tz: "Asia/Kolkata", aliases: ["Bombay"] },
  { name: "Delhi", country: "India", tz: "Asia/Kolkata", aliases: ["New Delhi"] },
  { name: "Bengaluru", country: "India", tz: "Asia/Kolkata", aliases: ["Bangalore"] },
  { name: "Hyderabad", country: "India", tz: "Asia/Kolkata" },
  { name: "Chennai", country: "India", tz: "Asia/Kolkata", aliases: ["Madras"] },
  { name: "Kolkata", country: "India", tz: "Asia/Kolkata", aliases: ["Calcutta"] },
  { name: "Pune", country: "India", tz: "Asia/Kolkata" },
  { name: "Ahmedabad", country: "India", tz: "Asia/Kolkata" },
  { name: "Jaipur", country: "India", tz: "Asia/Kolkata" },
  { name: "Goa", country: "India", tz: "Asia/Kolkata" },

  // Pakistan
  { name: "Karachi", country: "Pakistan", tz: "Asia/Karachi" },
  { name: "Lahore", country: "Pakistan", tz: "Asia/Karachi" },
  { name: "Islamabad", country: "Pakistan", tz: "Asia/Karachi" },

  // Bangladesh
  { name: "Dhaka", country: "Bangladesh", tz: "Asia/Dhaka" },

  // Sri Lanka
  { name: "Colombo", country: "Sri Lanka", tz: "Asia/Colombo" },

  // Nepal
  { name: "Kathmandu", country: "Nepal", tz: "Asia/Kathmandu" },

  // Kazakhstan
  { name: "Almaty", country: "Kazakhstan", tz: "Asia/Almaty" },
  { name: "Astana", country: "Kazakhstan", tz: "Asia/Almaty" },

  // Uzbekistan
  { name: "Tashkent", country: "Uzbekistan", tz: "Asia/Tashkent" },

  // China
  { name: "Beijing", country: "China", tz: "Asia/Shanghai", aliases: ["Peking"] },
  { name: "Shanghai", country: "China", tz: "Asia/Shanghai" },
  { name: "Shenzhen", country: "China", tz: "Asia/Shanghai" },
  { name: "Guangzhou", country: "China", tz: "Asia/Shanghai", aliases: ["Canton"] },
  { name: "Chengdu", country: "China", tz: "Asia/Shanghai" },
  { name: "Hangzhou", country: "China", tz: "Asia/Shanghai" },
  { name: "Wuhan", country: "China", tz: "Asia/Shanghai" },
  { name: "Xi'an", country: "China", tz: "Asia/Shanghai" },

  // Hong Kong
  { name: "Hong Kong", country: "Hong Kong", tz: "Asia/Hong_Kong" },

  // Macau
  { name: "Macau", country: "Macau", tz: "Asia/Macau", aliases: ["Macao"] },

  // Taiwan
  { name: "Taipei", country: "Taiwan", tz: "Asia/Taipei" },

  // Mongolia
  { name: "Ulaanbaatar", country: "Mongolia", tz: "Asia/Ulaanbaatar" },
  { name: "Khovd", country: "Mongolia", tz: "Asia/Hovd", aliases: ["Hovd"] },

  // Japan
  { name: "Tokyo", country: "Japan", tz: "Asia/Tokyo" },
  { name: "Osaka", country: "Japan", tz: "Asia/Tokyo" },
  { name: "Kyoto", country: "Japan", tz: "Asia/Tokyo" },
  { name: "Yokohama", country: "Japan", tz: "Asia/Tokyo" },
  { name: "Nagoya", country: "Japan", tz: "Asia/Tokyo" },
  { name: "Sapporo", country: "Japan", tz: "Asia/Tokyo" },
  { name: "Fukuoka", country: "Japan", tz: "Asia/Tokyo" },
  { name: "Okinawa", country: "Japan", tz: "Asia/Tokyo", aliases: ["Naha"] },

  // South Korea
  { name: "Seoul", country: "South Korea", tz: "Asia/Seoul" },
  { name: "Busan", country: "South Korea", tz: "Asia/Seoul" },

  // Singapore
  { name: "Singapore", country: "Singapore", tz: "Asia/Singapore" },

  // Malaysia
  { name: "Kuala Lumpur", country: "Malaysia", tz: "Asia/Kuala_Lumpur", aliases: ["KL"] },
  { name: "Penang", country: "Malaysia", tz: "Asia/Kuala_Lumpur" },

  // Thailand
  { name: "Bangkok", country: "Thailand", tz: "Asia/Bangkok" },
  { name: "Chiang Mai", country: "Thailand", tz: "Asia/Bangkok" },
  { name: "Phuket", country: "Thailand", tz: "Asia/Bangkok" },

  // Vietnam
  { name: "Ho Chi Minh City", country: "Vietnam", tz: "Asia/Ho_Chi_Minh", aliases: ["Saigon"] },
  { name: "Hanoi", country: "Vietnam", tz: "Asia/Ho_Chi_Minh" },
  { name: "Da Nang", country: "Vietnam", tz: "Asia/Ho_Chi_Minh" },

  // Cambodia
  { name: "Phnom Penh", country: "Cambodia", tz: "Asia/Phnom_Penh" },

  // Myanmar
  { name: "Yangon", country: "Myanmar", tz: "Asia/Yangon", aliases: ["Rangoon"] },

  // Philippines
  { name: "Manila", country: "Philippines", tz: "Asia/Manila" },
  { name: "Cebu", country: "Philippines", tz: "Asia/Manila" },

  // Indonesia
  { name: "Jakarta", country: "Indonesia", tz: "Asia/Jakarta" },
  { name: "Surabaya", country: "Indonesia", tz: "Asia/Jakarta" },
  { name: "Bandung", country: "Indonesia", tz: "Asia/Jakarta" },
  { name: "Bali", country: "Indonesia", tz: "Asia/Makassar", aliases: ["Denpasar"] },
  { name: "Makassar", country: "Indonesia", tz: "Asia/Makassar" },
  { name: "Jayapura", country: "Indonesia", tz: "Asia/Jayapura" },

  // Afghanistan
  { name: "Kabul", country: "Afghanistan", tz: "Asia/Kabul" },

  // Kyrgyzstan
  { name: "Bishkek", country: "Kyrgyzstan", tz: "Asia/Bishkek" },

  // Tajikistan
  { name: "Dushanbe", country: "Tajikistan", tz: "Asia/Dushanbe" },

  // Turkmenistan
  { name: "Ashgabat", country: "Turkmenistan", tz: "Asia/Ashgabat" },

  // Bhutan
  { name: "Thimphu", country: "Bhutan", tz: "Asia/Thimphu" },

  // Maldives
  { name: "Malé", country: "Maldives", tz: "Indian/Maldives", aliases: ["Male"] },

  // British Indian Ocean Territory
  { name: "Diego Garcia", country: "British Indian Ocean Territory", tz: "Indian/Chagos" },

  // North Korea
  { name: "Pyongyang", country: "North Korea", tz: "Asia/Pyongyang" },

  // Laos
  { name: "Vientiane", country: "Laos", tz: "Asia/Vientiane" },

  // Brunei
  { name: "Bandar Seri Begawan", country: "Brunei", tz: "Asia/Brunei" },

  // Timor-Leste
  { name: "Dili", country: "Timor-Leste", tz: "Asia/Dili", aliases: ["East Timor"] },

  // ---------- Oceania ----------

  // Australia
  { name: "Sydney", country: "Australia", tz: "Australia/Sydney" },
  { name: "Canberra", country: "Australia", tz: "Australia/Sydney" },
  { name: "Melbourne", country: "Australia", tz: "Australia/Melbourne" },
  { name: "Brisbane", country: "Australia", tz: "Australia/Brisbane" },
  { name: "Gold Coast", country: "Australia", tz: "Australia/Brisbane" },
  { name: "Perth", country: "Australia", tz: "Australia/Perth" },
  { name: "Adelaide", country: "Australia", tz: "Australia/Adelaide" },
  { name: "Hobart", country: "Australia", tz: "Australia/Hobart" },
  { name: "Darwin", country: "Australia", tz: "Australia/Darwin" },
  { name: "Lord Howe Island", country: "Australia", tz: "Australia/Lord_Howe", aliases: ["Lord Howe"] },

  // New Zealand
  { name: "Auckland", country: "New Zealand", tz: "Pacific/Auckland" },
  { name: "Wellington", country: "New Zealand", tz: "Pacific/Auckland" },
  { name: "Christchurch", country: "New Zealand", tz: "Pacific/Auckland" },
  { name: "Queenstown", country: "New Zealand", tz: "Pacific/Auckland" },
  { name: "Chatham Islands", country: "New Zealand", tz: "Pacific/Chatham", aliases: ["Chatham"] },

  // Fiji
  { name: "Suva", country: "Fiji", tz: "Pacific/Fiji" },

  // Papua New Guinea
  { name: "Port Moresby", country: "Papua New Guinea", tz: "Pacific/Port_Moresby" },

  // Solomon Islands
  { name: "Honiara", country: "Solomon Islands", tz: "Pacific/Guadalcanal" },

  // Vanuatu
  { name: "Port Vila", country: "Vanuatu", tz: "Pacific/Efate" },

  // New Caledonia
  { name: "Nouméa", country: "New Caledonia", tz: "Pacific/Noumea", aliases: ["Noumea"] },

  // Samoa
  { name: "Apia", country: "Samoa", tz: "Pacific/Apia" },

  // American Samoa
  { name: "Pago Pago", country: "American Samoa", tz: "Pacific/Pago_Pago" },

  // Tonga
  { name: "Nukuʻalofa", country: "Tonga", tz: "Pacific/Tongatapu", aliases: ["Nuku'alofa"] },

  // Tuvalu
  { name: "Funafuti", country: "Tuvalu", tz: "Pacific/Funafuti" },

  // Wallis and Futuna
  { name: "Mata-Utu", country: "Wallis and Futuna", tz: "Pacific/Wallis" },

  // Kiribati
  { name: "Tarawa", country: "Kiribati", tz: "Pacific/Tarawa" },
  { name: "Kiritimati", country: "Kiribati", tz: "Pacific/Kiritimati", aliases: ["Christmas Island (Kiribati)"] },

  // Nauru
  { name: "Yaren", country: "Nauru", tz: "Pacific/Nauru" },

  // Marshall Islands
  { name: "Majuro", country: "Marshall Islands", tz: "Pacific/Majuro" },

  // Micronesia
  { name: "Palikir", country: "Micronesia", tz: "Pacific/Pohnpei" },
  { name: "Chuuk", country: "Micronesia", tz: "Pacific/Chuuk" },

  // Palau
  { name: "Ngerulmud", country: "Palau", tz: "Pacific/Palau" },
  { name: "Koror", country: "Palau", tz: "Pacific/Palau" },

  // Guam
  { name: "Hagåtña", country: "Guam", tz: "Pacific/Guam", aliases: ["Hagatna"] },

  // Northern Mariana Islands
  { name: "Saipan", country: "Northern Mariana Islands", tz: "Pacific/Saipan" },

  // French Polynesia
  { name: "Papeete", country: "French Polynesia", tz: "Pacific/Tahiti", aliases: ["Tahiti"] },
  { name: "Bora Bora", country: "French Polynesia", tz: "Pacific/Tahiti" },
  { name: "Marquesas Islands", country: "French Polynesia", tz: "Pacific/Marquesas", aliases: ["Nuku Hiva"] },

  // Cook Islands
  { name: "Avarua", country: "Cook Islands", tz: "Pacific/Rarotonga", aliases: ["Rarotonga"] },

  // Niue
  { name: "Alofi", country: "Niue", tz: "Pacific/Niue" },

  // Tokelau
  { name: "Fakaofo", country: "Tokelau", tz: "Pacific/Fakaofo" },

  // Pitcairn Islands
  { name: "Adamstown", country: "Pitcairn Islands", tz: "Pacific/Pitcairn" },

  // Norfolk Island
  { name: "Kingston", country: "Norfolk Island", tz: "Pacific/Norfolk" },

  // Christmas Island
  { name: "Flying Fish Cove", country: "Christmas Island", tz: "Indian/Christmas" },

  // Cocos (Keeling) Islands
  { name: "West Island", country: "Cocos (Keeling) Islands", tz: "Indian/Cocos" },

  // ---------- Antarctica ----------

  // French Southern Territories
  { name: "Port-aux-Français", country: "French Southern Territories", tz: "Indian/Kerguelen", aliases: ["Kerguelen"] },

  // Antarctica
  { name: "McMurdo Station", country: "Antarctica", tz: "Antarctica/McMurdo", aliases: ["McMurdo"] },
  { name: "Amundsen–Scott South Pole Station", country: "Antarctica", tz: "Antarctica/McMurdo", aliases: ["South Pole"] },
  { name: "Palmer Station", country: "Antarctica", tz: "Antarctica/Palmer" },
  { name: "Rothera Station", country: "Antarctica", tz: "Antarctica/Rothera" },
  { name: "Troll Station", country: "Antarctica", tz: "Antarctica/Troll" },
  { name: "Syowa Station", country: "Antarctica", tz: "Antarctica/Syowa" },
  { name: "Mawson Station", country: "Antarctica", tz: "Antarctica/Mawson" },
  { name: "Davis Station", country: "Antarctica", tz: "Antarctica/Davis" },
  { name: "Vostok Station", country: "Antarctica", tz: "Antarctica/Vostok" },
  { name: "Casey Station", country: "Antarctica", tz: "Antarctica/Casey" },
  { name: "Dumont d'Urville Station", country: "Antarctica", tz: "Antarctica/DumontDUrville" },
];