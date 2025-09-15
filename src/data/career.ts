// Definiujemy typ (kształt) dla pojedynczego wpisu na osi czasu
export interface CareerEntry {
  date: string;
  title: string;
  company: string;
  description: string;
  logo?: string; // NOWA WŁAŚCIWOŚĆ: Opcjonalne logo firmy
}

// Eksportujemy tablicę z danymi o doświadczeniu zawodowym
export const careerEntries: CareerEntry[] = [
    {
        date: '2025',
        title: 'Kierownik zespołu cięcia laserowego',
        company: 'Verschoor Metal Techniek (przez agencje pracy - Covebo) - Holandia',
        description: 'Odpowiedzialny za optymalizację procesów, poprawę wydajności i jakości oraz wdrażanie udoskonaleń na maszynach CNC.',
        logo: '/logos/vmt_logo.png' 
    },
    {
        date: '2022 - 2024',
        title: 'Specjalista ds. wydarzeń sportowych',
        company: 'IMG Arena - Gliwice',
        description: 'Zapewnienie wsparcia technicznego i obsługa infrastruktury IT podczas międzynarodowych wydarzeń sportowych.',
        logo: '/logos/img_logo.png' 
    },
    {
        date: '2018 - 2022',
        title: 'Inżynier produkcji',
        company: 'TE Connectivity - Bydgoszcz',
        description: 'Tworzenie i nadzór nad dokumentacją technologiczną oraz procesami produkcyjnymi.',
        logo: '/logos/te_logo.png'
    },
    {
        date: '2015 - 2018',
        title: 'Technik Serwisu Elektroniki',
        company: 'iQor - Bydgoszcz',
        description: 'Diagnoza i naprawa urządzeń elektronicznych, bezpośredni kontakt z klientem.',
        logo: '/logos/iqor_logo.png'
    }
]

