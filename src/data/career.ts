// Definiujemy typ (kształt) dla pojedynczego wpisu na osi czasu
export interface CareerEntry {
  date: string;
  title: string;
  company: string;
  description: string;
}

// Eksportujemy tablicę z danymi o doświadczeniu zawodowym
export const careerEntries: CareerEntry[] = [
    {
        date: '2022 - Obecnie',
        title: 'Inżynier Procesu',
        company: 'Branża obróbki metali, Holandia',
        description: 'Odpowiedzialny za optymalizację procesów, poprawę wydajności i jakości oraz wdrażanie udoskonaleń na maszynach CNC.'
    },
    {
        date: '2020 - 2022',
        title: 'Specjalista IT',
        company: 'Turnieje tenisowe',
        description: 'Zapewnienie wsparcia technicznego i obsługa infrastruktury IT podczas międzynarodowych wydarzeń sportowych.'
    },
    {
        date: '2018 - 2020',
        title: 'Technolog Produkcji',
        company: 'Produkcja wiązek kablowych',
        description: 'Tworzenie i nadzór nad dokumentacją technologiczną oraz procesami produkcyjnymi.'
    },
    {
        date: '2016 - 2018',
        title: 'Technik Serwisu Elektroniki',
        company: 'Serwis RTV/AGD',
        description: 'Diagnoza i naprawa urządzeń elektronicznych, bezpośredni kontakt z klientem.'
    }
]
