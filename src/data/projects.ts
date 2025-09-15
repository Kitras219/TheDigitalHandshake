// Definiujemy typ (kształt) dla pojedynczego dokumentu w ramach projektu
export interface ProjectDocument {
  title: string;
  image: string;
  description?: string; // NOWOŚĆ: Opcjonalny opis dla każdego dokumentu
  downloadUrl?: string;
}

// Definiujemy główny typ dla obiektu projektu
export interface Project {
  title: string;
  description: string;
  longDescription: string;
  img: string;
  slug: string;
  imageFit?: 'cover' | 'contain';
  documents?: ProjectDocument[];
}

// Eksportujemy tablicę z danymi projektów
export const projects: Project[] = [
  {
    title: "Dokumentacja produkcyjna",
    description: "Instrukcje procesowe, jakościowe oraz procedury.",
    longDescription: "Projekt polegał na stworzeniu od zera i ustandaryzowaniu kompletnej dokumentacji procesowej dla kluczowego obszaru produkcyjnego. Obejmowało to analizę obecnych praktyk, stworzenie czytelnych instrukcji wizualnych oraz wdrożenie systemu regularnych przeglądów i aktualizacji.",
    img: "/images/project-1.png",
    slug: "dokumentacja-produkcyjna",
    imageFit: 'contain',
    documents: [
      { 
        title: 'Instrukcja montażu', 
        image: '/images/gallery/doc-1.jpg', 
        description: 'Szczegółowa, wizualna instrukcja montażu kluczowego komponentu, redukująca czas wdrożenia nowych pracowników o 30%.',
        downloadUrl: '/files/instrukcja-montazu.pdf' 
      },
      { 
        title: 'Karta kontroli jakości', 
        image: '/images/gallery/doc-2.jpg',
        description: 'Standaryzowana karta kontroli jakości z jasno określonymi punktami pomiarowymi i kryteriami akceptacji.'
      },
    ]
  },
  {
    title: "Dokumentacja 5s",
    description: "Dokumentacja 5s.",
    longDescription: "W ramach inicjatywy Lean Manufacturing, byłem odpowiedzialny za wdrożenie i utrzymanie standardów 5S na wyznaczonym obszarze. Stworzyłem pełną dokumentację, w tym checklisty, harmonogramy audytów oraz materiały szkoleniowe dla operatorów, co przełożyło się na znaczącą poprawę organizacji i bezpieczeństwa pracy.",
    img: "/images/project-3.png",
    slug: "dokumentacja-5s",
    imageFit: 'contain',
    documents: [
      { 
        title: 'Checklista 5s dla operatorów lasera', 
        image: '/images/gallery/5s_checklist.png', 
        description: 'Narzędzie wykorzystywane do regularnych, cotygodniowych audytów stanowisk pracy w celu utrzymania standardu 5S.',
        downloadUrl: '/files/5s_laser_checklist.xlsx'
      },
      { 
        title: 'Before-after nr 1', 
        image: '/images/gallery/beforeafter_1.png',
        description: 'Wprowadzone oznaczenia dla szybszego znajdowania odpowiednich regałów na odpady z cięcia.',
        downloadUrl: '/files/5s_BeforeAfter_Restplate.pdf'
      },
      {
        title: 'Before-after nr 2', 
        image: '/images/gallery/beforeafter_2.png',
        description: 'Wizualizacja przed oraz po przestrzeganiu 5s na stanowisku drukowania etykiet.',
        downloadUrl: '/files/5s_BeforeAfter_PrintingStation.pdf',
      },
    ]
  },
];

