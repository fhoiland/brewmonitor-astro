export const site = {
  name: "Bunker Brew",
  description: "Underground beer. Built simple. En enkel bryggeblogg med batcher, notater og rolige oppdateringer.",
  email: "kontakt@bunkerbrew.no",
};

export const brewStatus = {
  kettle: {
    title: "Brew Kettle",
    currentTemperature: "66",
    mode: "Mesking",
    updatedLabel: "Sist sett fra bryggeriet",
    rows: [
      { label: "Kjeletemperatur", value: "66 °C" },
      { label: "Malt pipe", value: "68.5 °C" },
      { label: "Effekt", value: "2500 W" },
      { label: "Bryggetid", value: "01:42:10" },
    ],
  },
  fermenter: {
    title: "Fermenter",
    batch: "NEIPA",
    progress: 74,
    rows: [
      { label: "Temperatur", value: "19.4 °C" },
      { label: "Gravity", value: "1.012" },
      { label: "Volum", value: "25 L" },
      { label: "Tid igjen", value: "3 dager" },
    ],
  },
  stats: [
    { label: "Totale brygg", value: "18", tone: "Live" },
    { label: "Liter produsert", value: "472L", tone: "Bryggeri" },
    { label: "Aktive gjæringer", value: "1", tone: "Status" },
    { label: "Dager siden sist brygg", value: "9", tone: "Logg" },
  ],
};

export const homeHighlights = [
  {
    title: "Dagens batch",
    body: "En myk og fruktig NEIPA er i rolig gjæring. Denne delen skal etter hvert kobles til live-data, men nå holder vi det bevisst enkelt.",
    meta: "Batch 018",
  },
  {
    title: "Bryggedager",
    body: "Siden skal samle små notater, temperaturvalg, erfaringer og det vi faktisk lærer mellom batchene.",
    meta: "Logg",
  },
  {
    title: "Rolig struktur",
    body: "Målet er mindre app-følelse og mer bryggejournal, uten å miste den mørke og tydelige profilen du allerede liker.",
    meta: "Ny retning",
  },
];

export const processSteps = [
  {
    title: "Brygging",
    text: "Mesking, kok og korte notater fra selve bryggedagen.",
  },
  {
    title: "Gjæring",
    text: "Temperatur, gravity og små oppdateringer mens batchen utvikler seg.",
  },
  {
    title: "Smaking",
    text: "Hva fungerte, hva endrer vi og hva vil vi brygge igjen.",
  },
];
