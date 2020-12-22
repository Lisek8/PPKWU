# Mobile vCard PŁ

## Data provider API

Service address: `https://panoramafirm.pl/szukaj`

## Enpoints

### /

#### GET
Serves html page that allows interaction with api

### /search

#### GET

Requests data from data provider API, based on passed query parameter value

##### Request
```
/search?proffession=<string>
```

##### Response

An array of objects in fromat presented below

```
[
  {
        "name": <string>,
        "address": <string>,
        "www": <string>,
        "email": <string>,
        "phoneArea": <string>,
        "phoneNumber": <string>,
        "location": {
            "lat": <number>
            "lon": <number>
        }
    },
    ...
]
```

#### Example

##### Request
```
/search?proffession=hydraulik
```

##### Response
```
[
    {
        "name": "Fhu Nypel Usługi Hydrauliczne Łukasz Szydliński",
        "address": "ul. Cieszkowskiego 4/27, 41-303 Dąbrowa Górnicza  śląskie",
        "www": "http://Hydraulikdabrowagornicza.com",
        "email": "brak",
        "phoneArea": null,
        "phoneNumber": "698095573",
        "location": {
            "lat": 50.31829,
            "lon": 19.23723
        }
    },
    {
        "name": "Hydraulika Montaż Instalacji Sanitarnych i Grzewczych Robert Rosłoniec",
        "address": "ul. Wierzbowa 12, 05-503 Robercin  mazowieckie",
        "www": "http://www.uslugihydraulicznepiaseczno.pl",
        "email": "rrrobert@vp.pl",
        "phoneArea": null,
        "phoneNumber": "501083795",
        "location": {
            "lat": 52.05837,
            "lon": 20.93709
        }
    },
    {
        "name": "Kamil Przęczek",
        "address": "32-020 Grabówki 12  małopolskie",
        "www": "http://www.hydraulik-instalacje-krakow.pl",
        "email": "kamilprzeczek@interia.pl",
        "phoneArea": null,
        "phoneNumber": "516765572",
        "location": {
            "lat": 49.97393,
            "lon": 20.02903
        }
    },
    {
        "name": "Adam Kołota Udrażnianie rur",
        "address": "ul. Zaciszna 30A, 05-230 Kobyłka  mazowieckie",
        "www": "http://www.udraznianierurkobylka.pl",
        "email": "joanna-kolota@wp.pl",
        "phoneArea": null,
        "phoneNumber": "781266854",
        "location": {
            "lat": 52.34753,
            "lon": 21.21709
        }
    },
    {
        "name": "Hydro Seb FU Sebastian Jeziorowski",
        "address": "ul. Mirowska  42-202 Częstochowa  śląskie",
        "www": "http://www.hydraulik-zapchania.pl",
        "email": "hydroseb@op.pl",
        "phoneArea": null,
        "phoneNumber": "502220475",
        "location": {
            "lat": 50.81541,
            "lon": 19.16467
        }
    },
    {
        "name": "Kaz-Bud Bramy, ogrodzenia, usługi hydrauliczne Kazimierz Kuzioła",
        "address": "24-220 Strzeszkowice Małe 3  lubelskie",
        "www": "http://www.kaz-bud.pl",
        "email": "kaz.bud@wp.pl",
        "phoneArea": null,
        "phoneNumber": "669591968",
        "location": {
            "lat": 51.1504,
            "lon": 22.41841
        }
    },
    {
        "name": "Łukasz Noga Prima Sort",
        "address": "al. Dębowa 21, 32-005 Niepołomice  małopolskie",
        "www": "http://www.primasortinstalacje.pl",
        "email": "kontakt@primasortinstalacje.pl",
        "phoneArea": null,
        "phoneNumber": "536792675",
        "location": {
            "lat": 50.02739,
            "lon": 20.21707
        }
    },
    {
        "name": "HDK Hydraulika Krzysztof Danielewicz",
        "address": "ul. Borsucza 3a, 05-410 Józefów  mazowieckie",
        "www": "https://hydraulik24-warszawa.pl/",
        "email": "hydraulikawarszawa24@gmail.com",
        "phoneArea": null,
        "phoneNumber": "791851671",
        "location": {
            "lat": 52.1476,
            "lon": 21.20238
        }
    },
    {
        "name": "Hydrowat. PUH. Instalacje hydrauliczne i klimatyzacja. Kaczmarczyk W.",
        "address": "ul. Cyganerii 13/31, 43-100 Tychy  śląskie",
        "www": "http://www.hydrowat.com",
        "email": "hydrowat@gmail.com",
        "phoneArea": null,
        "phoneNumber": "501694091",
        "location": {
            "lat": 50.11846,
            "lon": 18.98698
        }
    },
    {
        "name": "Hydro Seb FU Sebastian Jeziorowski",
        "address": "ul. Śmiłowskiego 8/10, 41-100 Siemianowice Śląskie  śląskie",
        "www": "https://hydraulik-zapchania.pl/",
        "email": "hydroseb@op.pl",
        "phoneArea": null,
        "phoneNumber": "502220475",
        "location": {
            "lat": 50.30186,
            "lon": 19.03725
        }
    },
    {
        "name": "Gamar Marek Garliński",
        "address": "ul. Daszyńskiego 10 F/3, 56-400 Oleśnica  dolnośląskie",
        "www": "http://www.gamar.olesnica.pl",
        "email": "marekgarlinski@wp.pl",
        "phoneArea": null,
        "phoneNumber": "601746608",
        "location": {
            "lat": 51.20497,
            "lon": 17.39038
        }
    },
    {
        "name": "Jacoterm Instalacje wod-kan. gazowe Jacek Stępnik",
        "address": "ul. Górna 20/116, 25-415 Kielce  świętokrzyskie",
        "www": "http://www.jacoterm.pl",
        "email": "jacek_sash@interia.pl",
        "phoneArea": null,
        "phoneNumber": "509073924",
        "location": {
            "lat": 50.87747,
            "lon": 20.65062
        }
    },
    {
        "name": "Instalacje Mw Wyciek Zalanie Osuszanie",
        "address": "ul. Pełczyńska 119, 51-180 Wrocław  dolnośląskie",
        "www": null,
        "email": "instalacjemw@o2.pl",
        "phoneArea": null,
        "phoneNumber": "516706260",
        "location": {
            "lat": 51.17563,
            "lon": 16.99365
        }
    },
    {
        "name": "Łukasz Radochoński Hydroanet",
        "address": "37-722 Wyszatyce 231  podkarpackie",
        "www": null,
        "email": "hydroanet13@gmail.com",
        "phoneArea": null,
        "phoneNumber": "695155269",
        "location": {
            "lat": 49.83965,
            "lon": 22.88461
        }
    },
    {
        "name": "Michsan Zakład Instalacyjno-Budowlany",
        "address": "ul. Warmińska 7, 42-202 Częstochowa  śląskie",
        "www": "http://www.transpol.czest.pl/index.html",
        "email": "michsan@onet.pl",
        "phoneArea": "34",
        "phoneNumber": "3628945",
        "location": {
            "lat": 50.82521,
            "lon": 19.06203
        }
    },
    {
        "name": "Instal Term Piotr Rachwalik",
        "address": "ul. Szczecińska 52,  Świdwin  zachodniopomorskie",
        "www": "http://www.instal-term.com.pl",
        "email": "biuro@instal-term.com.pl",
        "phoneArea": null,
        "phoneNumber": "798574244",
        "location": {
            "lat": 53.76336,
            "lon": 15.75094
        }
    },
    {
        "name": "Technika Grzewcza I Sanitarna Instal Paweł Szeląg",
        "address": "24-120 Zbędowice 13  lubelskie",
        "www": "http://instalpulawy.pl/",
        "email": "tgis.instal@gmail.com",
        "phoneArea": null,
        "phoneNumber": "515079481",
        "location": {
            "lat": 51.35361,
            "lon": 22.01569
        }
    },
    {
        "name": "Technika Grzewcza I Sanitarna Instal Paweł Szeląg",
        "address": "24-120 Zbędowice 13  lubelskie",
        "www": "http://instalpulawy.pl/",
        "email": "tgis.instal@gmail.com",
        "phoneArea": null,
        "phoneNumber": "515079481",
        "location": {
            "lat": 51.35361,
            "lon": 22.01569
        }
    },
    {
        "name": "M-Instalacje Michał Filipkiewicz",
        "address": "ul. Słomiana 4/44, 30-316 Kraków  małopolskie",
        "www": "http://www.m-instalacje.pl",
        "email": "instalacje.filipkiewicz@gmail.com",
        "phoneArea": null,
        "phoneNumber": "508455843",
        "location": {
            "lat": 50.04227,
            "lon": 19.92575
        }
    },
    {
        "name": "Ilmar Technika Grzewcza Jerzy Ilków",
        "address": "pl. Stanisława Staszica 15/8, 50-238 Wrocław  dolnośląskie",
        "www": "http://www.ilmar.com.pl/",
        "email": "ilmar@wp.pl",
        "phoneArea": null,
        "phoneNumber": "601787666",
        "location": {
            "lat": 51.12376,
            "lon": 17.03322
        }
    },
    {
        "name": "Hydro Instal Przyłącza Wod-Kan",
        "address": "ul. Chorzowska 3, 26-603 Radom  mazowieckie",
        "www": "http://www.tomaszsalbut.pl",
        "email": "hydro-instal11@wp.pl",
        "phoneArea": null,
        "phoneNumber": "728916865",
        "location": {
            "lat": 51.39896,
            "lon": 21.19444
        }
    },
    {
        "name": "H&H INSTALACJE",
        "address": "84-210 Łętowo 3 lok. 4  pomorskie",
        "www": null,
        "email": "h.h.instalacje@gmail.com",
        "phoneArea": null,
        "phoneNumber": "512139545",
        "location": {
            "lat": 54.7134,
            "lon": 17.90842
        }
    },
    {
        "name": "Hydro Seb FU Sebastian Jeziorowski",
        "address": "42-244 Srocko 64  śląskie",
        "www": "http://www.hydraulik-zapchania.pl",
        "email": "hydroseb@op.pl",
        "phoneArea": null,
        "phoneNumber": "502220475",
        "location": {
            "lat": 50.79723,
            "lon": 19.2565
        }
    },
    {
        "name": "Grześpol PHU Grzegorz Polasiński",
        "address": "ul. Lipowa 82/20, 90-568 Łódź  łódzkie",
        "www": null,
        "email": "grzespol@op.pl",
        "phoneArea": null,
        "phoneNumber": "606986460",
        "location": {
            "lat": 51.762,
            "lon": 19.44622
        }
    },
    {
        "name": "FHU Instal Serwis Sławomir Zdzikot",
        "address": "Parkowa 29/9, 71-634 Szczecin  zachodniopomorskie",
        "www": "http://instalserwis.szczecin.pl",
        "email": "slawekzdzikot@wp.pl",
        "phoneArea": null,
        "phoneNumber": "518678009",
        "location": {
            "lat": 53.44035,
            "lon": 14.5682
        }
    }
]
```

### /vCard

#### GET
Generates .vcf file based on passed data in query parameters

##### Request
```
/vCard?name=<string>&address=<string>&www=<string>&email=<string>&phoneArea=<string>&phoneNumber=<string>&lat=<string>&lon=<string>
```

##### Response
VCARD file in version 3.0 based on passed data

#### Example

##### Request
```
/vCard?name=Elmar%20Marek%20Furga%u0142a&address=ul.%20Alabastrowa%208%2C%2043-382%20Bielsko-Bia%u0142a%20%20%u015Bl%u0105skie&www=http%3A//www.elmar-bielsko.pl&email=biuro@elmar-bielsko.pl&phoneArea=null&phoneNumber=606828472&lat=49.81784&lon=18.97642
```

##### Response
A .vcf file with content presented below
```
BEGIN:VCARD
VERSION:3.0
N:Elmar Marek Furgała
FN:Elmar Marek Furgała
ORG:Elmar Marek Furgała
TITLE:Elmar Marek Furgała
ADR;TYPE=WORK,PREF:;;ul. Alabastrowa 8; 43-382 Bielsko-Biała  śląskie
TEL;TYPE=WORK,VOICE:606828472
TEL;TYPE=WORK,VOICE:606828472
EMAIL;TYPE=WORK:biuro@elmar-bielsko.pl
URL:http://www.elmar-bielsko.pl
END:VCARD
```
