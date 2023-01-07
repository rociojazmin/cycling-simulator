const time_max = 6 * 60;
const time_min = 5 * 60;

let recordMundial = tiempoAlAzarDentroDelRango(5 * 60, 5.2 * 60);
document.querySelector("#tiempoRecord").textContent =
    formatearTiempo(recordMundial);

let huboRecord = false;
let tiempoRecord = 0;
let posicionCiclistaActual = 0;


//generamos 20 objetos (con generatedata.com) de  ciclistas con sus atributos
let ciclistas = [
    {
        "name": "Adam Henson",
        "country": { name: "Spain", code: "spa" },
        "team": "Consectetuer Adipiscing Elit Inc.",
        "time": 0
    },
    {
        "name": "Wyatt Mayer",
        "country": { name: "Venezuela", code: "ven" },
        "team": "Eleifend Non Foundation",
        "time": 0
    },
    {
        "name": "Illiana Compton",
        "country": { name: "Peru", code: "per" },
        "team": "Risus Donec Egestas Foundation",
        "time": 0
    },
    {
        "name": "Aidan Pollard",
        "country": { name: "Chile", code: "chi" },
        "team": "Sed Id Risus Inc.",
        "time": 0
    },
    {
        "name": "Urielle Reeves",
        "country": { name: "Italy", code: "ita" },
        "team": "Quisque Imperdiet Erat Limited",
        "time": 0
    },
    {
        "name": "Petra Vincent",
        "country": { name: "India", code: "ind" },
        "team": "Ultrices Vivamus Rhoncus Corp.",
        "time": 0
    },
    {
        "name": "Kathleen Mercado",
        "country": { name: "Ukraine", code: "ukr" },
        "team": "Nunc Mauris Limited",
        "time": 0
    },
    {
        "name": "Jameson Robles",
        "country": { name: "Portugal", code: "por" },
        "team": "Sociis Associates",
        "time": 0
    },
    {
        "name": "Priscilla Nieves",
        "country": { name: "Colombia", code: "col" },
        "team": "Egestas Duis Ac Corporation",
        "time": 0
    },
    {
        "name": "Tanner Glenn",
        "country": { name: "Argentina", code: "arg" },
        "team": "Hendrerit Neque Ltd",
        "time": 0
    },
    {
        "name": "Tarik Tucker",
        "country": { name: "France", code: "fra" },
        "team": "Tristique Neque Corporation",
        "time": 0
    },
    {
        "name": "Peter Young",
        "country": { name: "Ecuador", code: "ecu" },
        "team": "Neque Industries",
        "time": 0
    },
    {
        "name": "Ashton Huff",
        "country": { name: "Japan", code: "jap" },
        "team": "Quisque Tincidunt PC",
        "time": 0
    },
    {
        "name": "Maia Estrada",
        "country": { name: "South Africa", code: "saf" },
        "team": "Aenean Ltd",
        "time": 0
    },
    {
        "name": "Wynter Salinas",
        "country": { name: "Uruguay", code: "uru" },
        "team": "Etiam Bibendum LLP",
        "time": 0
    },
    {
        "name": "Austin Clemons",
        "country": { name: "South Korea", code: "sko" },
        "team": "Sit Amet PC",
        "time": 0
    },
    {
        "name": "Hayden Ryan",
        "country": { name: "Germany", code: "ger" },
        "team": "Donec Egestas Corp.",
        "time": 0
    },
    {
        "name": "Tamekah Gaines",
        "country": { name: "Puerto Rico", code: "pur" },
        "team": "Risus Quisque Libero Institute",
        "time": 0
    },
    {
        "name": "Ferdinand Strong",
        "country": { name: "China", code: "ina" },
        "team": "Est Nunc Limited",
        "time": 0
    },
    {
        "name": "Zenia White",
        "country": { name: "Brazil", code: "bra" },
        "team": "At Risus Corp.",
        "time": 0
    }
]

function formatearTiempo(tiempo) {
    const m = Math.floor(tiempo / 60);
    const s = Math.floor(tiempo % 60);
    const ms = Math.round(1000 * (tiempo - m * 60 - s));

    return (
        ("" + m).padStart(2, "0") +
        "m" +
        ("" + s).padStart(2, "0") +
        "s" +
        (ms + "").padStart(3, "0") +
        "ms"
    );
}

function tiempoAlAzarDentroDelRango(min, max) {
    return parseFloat((Math.random() * (max - min + 1) + min).toFixed(3));//el num. tres corta los decimales en 3.
}

//funcion que muestra un ciclista
function mostrarCiclista(container, ciclista, posicion) {
    let tr = document.createElement("tr");
    posicionCiclistaActual++;

    if (ciclista.time < recordMundial && !huboRecord) {
        tr.setAttribute("class", "record-superado");
        huboRecord = true;
        tiempoRecord = ciclista.time;
        console.log(ciclista.time + ciclista.time * 0.07);
    }

    if (huboRecord) {
        let tiempoComparacion = tiempoRecord * 1.05;
        if (ciclista.time > tiempoComparacion && posicionCiclistaActual > 17) {
            console.log(ciclista.time);
            tr.setAttribute("class", "ultimos");
        }
    }

    let tdPosicion = document.createElement("td");
    tdPosicion.appendChild(document.createTextNode(posicion + "º"))

    let tdName = document.createElement("td");
    tdName.appendChild(document.createTextNode(ciclista.name));

    let tdCountry = document.createElement("td");
    let imgCountry = document.createElement("img");
    imgCountry.setAttribute("src", "img/" + ciclista.country.code + ".svg");
    imgCountry.setAttribute("alt", ciclista.country.name);
    imgCountry.setAttribute("title", ciclista.country.name);
    imgCountry.style.width = "35px";
    tdCountry.appendChild(imgCountry);



    let tdTeam = document.createElement("td");
    tdTeam.appendChild(document.createTextNode(ciclista.team));

    let tdTime = document.createElement("td");
    tdTime.appendChild(document.createTextNode(formatearTiempo(ciclista.time)));

    [tdPosicion, tdName, tdCountry, tdTeam, tdTime].forEach(function (td) {
        tr.appendChild(td);
    });

    container.appendChild(tr);
}


//funcion que muestra los datoS
function mostrarResultados() {
    // Recorremos el array:
    // for (let i = 0; i < ciclistas.length; i++) {
    //     let ciclista = ciclistas[i];
    // }

    // Recorremos el array usando un forEach:
    let container = document.querySelector("tbody");
    ciclistas.forEach(function (ciclista, i) {
        mostrarCiclista(container, ciclista, i + 1);
    });
}

function simularCarrera() {
    ciclistas.forEach(function (ciclista) {
        ciclista.time = tiempoAlAzarDentroDelRango(time_min, time_max)
    });
    ciclistas.sort(function (c1, c2) {
        return c1.time - c2.time;
    });
}

function doIt() {
    simularCarrera();
    mostrarResultados();
}
