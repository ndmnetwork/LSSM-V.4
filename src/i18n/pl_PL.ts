const modules = {
    appstore: {
        save: 'Zapisz',
        reset: 'Reset',
        noMapkit:
            'Ten moduł nie działa z mapą typu „Mapkit” z powodu ograniczeń Mapkit!',
        dev: 'Ten moduł jest obecnie nadal rozwijany. Aktywacja może prowadzić do niekompletnych i błędnych funkcji!',
        closeWarning: {
            title: 'Niezapisane zmiany',
            text: 'Wprowadziłeś zmiany w App Store, które nie zostały jeszcze zapisane. Zresetuj je lub zapisz, aby zamknąć App Store.',
            abort: 'Anuluj',
            saveAndExit: 'Zapisz i wyjdź',
            exit: 'Wyjdź bez zapisywania',
        },
    },
    settings: {
        name: 'Ustawienia',
        save: 'Zapisz',
        discard: 'Anuluj',
        reset: 'Reset',
        export: 'Export',
        import: 'Import',
        donate: 'Wesprzyj dobrowolnie',
        appendableList: {
            unique: {
                title: 'podwójna wartość',
                text: 'W kolumnie {title} nie może być zduplikowanych wartości. Wartość {value} już istnieje!',
                confirm: 'Potwierdź',
            },
        },
        resetWarning: {
            title: 'Resetuj ustawienia',
            text: 'Czy na pewno chcesz zresetować ustawienia do wartości domyślnych? Tego nie można cofnąć!',
            close: 'Anuluj',
            total: 'Wszystkie ustawienia',
            module: 'Tylko dla tego modułu',
        },
        resetWarningSetting: {
            title: 'Resetuj ustawienia',
            text: 'Czy na pewno chcesz zresetować to ustawienie<b>{setting}</b>modułu<b>{module}</b>do jego wartości domyślnej?',
            close: 'Anuluj',
            reset: 'Reset',
        },
        closeWarning: {
            title: 'Niezapisane zmiany',
            text: 'Dokonałeś zmian w ustawieniach, które nie zostały jeszcze zapisane. Zresetuj je, odrzuć lub zapisz, aby zamknąć ustawienia.',
            abort: 'Anuluj',
            saveAndExit: 'Zapisz i wyjdź',
            exit: 'Wyjdź bez zapisywania',
        },
        changeList: {
            true: 'On',
            false: 'Off',
        },
        locationSelect: {
            location: 'Wybierz pozycję',
            zoom: 'Wybierz pozycję i zoom',
            sync: 'Użyj aktualnej pozycji',
        },
    },
} as Record<string, Record<string, unknown>>;

export default {
    modules,
    buildingCategories: {
        ['Straż pożarna']: {
            buildings: [0, 18],
            color: '#990000',
        },
        'Pogotowie ratunkowe': {
            buildings: [2, 5, 20],
            color: '#FFFFCC',
        },
        'Policja': {
            buildings: [6, 13, 26, 19],
            color: '#93B7FF',
        },
        'OPP': {
            buildings: [11, 23],
            color: '#93B7FF',
        },
        'WOPR': {
            buildings: [15],
            color: '#F9D74A',
        },
        ['Szkoły']: {
            buildings: [1, 3, 8],
            color: '#02a18c',
        },
        'Inne': {
            buildings: [7, 4, 14, 21, 22],
            color: '#a10269',
        },
    },
    vehicleCategories: {
        ['Straż Pożarna']: {
            vehicles: {
                ['Gaśnicze']: [0, 1, 12, 55, 38, 39, 55, 56, 29],
                'Kontenery': [40, 41, 42, 43, 44, 45, 46, 47, 64],
                'Przyczepy': [48, 49, 50, 51, 52, 53, 60, 62, 63],
                'Pojazdy specjalne': [
                    3, 4, 7, 10, 11, 15, 18, 23, 25, 27, 28, 2, 13, 6, 61, 47,
                    35, 36, 37, 57, 58, 59,
                ],
            },
            color: '#ff2d2d',
        },
        Ratownictwo: {
            vehicles: {
                Ambulanse: [5, 31, 34],
                HEMS: [9],
                ['Pozostałe pojazdy ratownictwa']: [32, 33],
            },
            color: '#ffa500',
        },
        Policja: {
            vehicles: {
                'Radiowozy': [8],
                'SPKP': [15, 18],
                'Helikoptery Policyjne': [14],
                'K-9': [16],
                'Motocykle': [17],
                ['Radiowóz WRD']: [30],
            },
            color: '#00ac00',
        },
        OPP: {
            vehicles: {
                OPP: [
                    65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79,
                    80,
                ],
            },
            color: '#00ac00',
        },
        WOPR: {
            vehicles: {
                'Pojazdy ratownicze': [19, 20, 24],
                ['Łodzie']: [21, 22, 23, 26, 54],
            },
            color: '#00ac00',
        },
    },
    small_buildings: {
        0: 18,
        2: 20,
        6: 19,
    },
    schoolings: {
        ['Posterunek straży pożarnej']: [
            {
                caption: 'Ratownictwo chemiczne',
                duration: '3 Dni',
                key: 'gw_gefahrgut',
            },
            {
                caption: 'Szkolenie w dowodzeniu',
                duration: '5 Dni',
                key: 'elw2',
            },
            {
                caption: 'Szkolenie SP LSP',
                duration: '3 Dni',
                key: 'arff',
            },
            {
                caption: 'Szybkie ratownictwo wodne',
                duration: '4 Dni',
                key: 'gw_wasserrettung',
            },
            {
                caption: 'Kurs Nurka MSWiA',
                duration: '5 Dni',
                key: 'gw_taucher',
            },
            {
                caption: 'Nawigacja oceaniczna',
                duration: '5 Dni',
                key: 'ocean_navigation',
            },
            {
                caption: 'Ratownictwo wysokościowe',
                duration: '5 Dni',
                key: 'gw_hoehenrettung',
            },
            {
                caption: 'Lekarz',
                duration: '3 Dni',
                key: 'critical_care',
            },
            {
                caption: 'Ratownictwo poszukiwawczo - ratownicze',
                duration: '3 Dni',
                key: 'search_and_rescue',
            },
            {
                caption: 'Przewodnik psa ratowniczego',
                duration: '5 Dni',
                key: 'rescue_dogs',
            },
        ],
        Policja: [
            {
                caption: 'Lotnictwo policyjne',
                duration: '7 Dni',
                key: 'polizeihubschrauber',
            },
            {
                caption: 'SPKP',
                duration: '5 Dni',
                key: 'swat',
            },
            {
                caption: 'K-9',
                duration: '5 Dni',
                key: 'k9',
            },
            {
                caption: 'Motocykl Policyjny',
                duration: '3 Dni',
                key: 'police_motorcycle',
            },
            {
                caption: 'Szkolenie WRD',
                duration: '3 Dni',
                key: 'traffic_police',
            },
            {
                caption: 'Szkolenie OPP',
                duration: '2 Dni',
                key: 'riot_police',
            },
            {
                caption: 'Policyjny ratownik medyczny',
                duration: '5 Dni',
                key: 'riot_police_ambulance',
            },
            {
                caption: 'Szkolenie policyjnego dowódcy',
                duration: '7 Dni',
                key: 'police_service_group_leader',
            },
        ],
        Ratownictwo: [
            {
                caption: 'Szybkie ratownictwo wodne',
                duration: '4 Dni',
                key: 'gw_wasserrettung',
            },
            {
                caption: 'Kurs Nurka MSWiA',
                duration: '5 Dni',
                key: 'gw_taucher',
            },
            {
                caption: 'Lekarz',
                duration: '3 Dni',
                key: 'critical_care',
            },
            {
                caption: 'Motoambulans',
                duration: '2 Dni',
                key: 'rapid_response_motorcycle',
            },
        ],
    },
    amount: 'Ilość',
    search: 'Szukaj',
    alliance: 'Sojusz',
    premiumNotice:
        'Ta funkcja rozszerza funkcję premium gry i dlatego jest dostępna tylko dla graczy z kontem premium Operatora ratukowego!',
    credits: 'Kredyty',
    coins: 'Monety',
    close: 'Zamknij',
    fullscreen: {
        expand: 'Aktywuj tryb pełnoekranowy',
        compress: 'Wyłącz tryb pełnoekranowy',
    },
    hideTitle: 'Pokaż nagłówek | Ukryj nagłówek',
    vehicle: 'Samochody | Samochód | Samochody',
    building: 'Budynki',
    station: 'Stacje | Stacja | Stacje',
    distance: 'Dystans | Odległości',
    vehicleType: 'Typ pojazdu',
    noOptions: 'Przepraszamy, brak pasujących opcji.',
    fmsReal2Show: {
        1: 1,
        2: 2,
        3: 3,
        4: 4,
        5: 5,
        6: 6,
        7: 7,
        9: 9,
    },
    pois: [
        'Park',
        'Jezioro',
        'Szpital',
        'Las',
        'Przystanek autobusowy',
        'Przystanek tramwajowy',
        'Dworzec kolejowy (ruch podmiejski)',
        'Dworzec kolejowy (ruch podmiejski i dalekobieżny)',
        'Stacja towarowa',
        'Supermarket (mały)',
        'Supermarket (duży)',
        'Stacja paliw',
        'Szkoła',
        'Muzeum',
        'Centrum handlowe',
        'Warsztat samochodowy',
        'Zjazd z autostrady',
        'Jarmark Bożonarodzeniowy',
        'Magazyn',
        'Dyskoteka',
        'Stadion',
        'Gospodarstwo rolne',
        'Biurowiec',
        'Basen',
        'Przejazd kolejowy',
        'Teatr',
        'Teren wystawowy',
        'Rzeka',
        'Mały port lotniczy (pas startowy)',
        'Duży port lotniczy (pas startowy)',
        'Terminal portu lotniczego',
        'Bank',
        'Magazyn firmowy',
        'Most',
        'Bar szybkiej obsługi',
        'Cargo-port',
        'Centrum segregacji odpadów',
        'Wieżowiec',
        'Dok dla wycieczkowców',
        'Marina',
        'Przejazd kolejowo-drogowy',
        'Tunel',
        'Chłodnia składowa',
        'Elektrownia',
        'Fabryka',
        'Składowisko złomu',
        'Stacja metra',
        'Mały zbiornik na substancje chemiczne',
        'Duży zbiornik na substancje chemiczne',
        'Hotel',
        'Bar',
        'Składowisko odpadów',
        'Parking',
        'Silos',
        'Centrum Miasta',
    ],
    only_alliance_missions: [57, 74, 351],
    transfer_missions: [373],
    ranks: {
        missionchief: {
            0: 'Nowy',
            200: 'Strażak',
            10_000: 'Starszy strażak',
            100_000: 'Ogniomistrz',
            1_000_000: 'Aspirant',
            5_000_000: 'Kapitan',
            20_000_000: 'Starszy kapitan',
            50_000_000: 'Szef brygady',
            1_000_000_000: 'Nadbrygadier',
            2_000_000_000: 'Zastępca komendanta głównego',
            5_000_000_000: 'Komendant główny',
        },
    },
};
