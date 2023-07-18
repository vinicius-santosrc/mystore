/* BARRA */

let selectedindex = '';
let selectedgames = '';
let selectedapps = '';
let selectedcloud = '';
let selectedsearch = '';

if(document.location.pathname == 'index.html') {
    selectedindex = 'selected'
}

else if(document.location.pathname == 'games.html') {
    selectedgames = 'selected'
}

else if(document.location.pathname == 'apps.html') {
    selectedapps = 'selected'
}

else if(document.location.pathname == 'cloud.html') {
    selectedcloud = 'selected'
}

else if(document.location.pathname == 'search.html') {
    selectedsearch = 'selected'
}


document.querySelector(`.bottom-bar`).innerHTML = `
        <div class="bottom-bar-icons">
            <a href="index.html" id="${selectedindex}">
                <i class="fa-solid fa-house"></i> Inicio
            </a>
            <a href="games.html" id='${selectedgames}'>
                <i class="fa-solid fa-rocket"></i> Jogos
            </a>
            <a href="apps.html" id='${selectedapps}'>
                <i class="fa-solid fa-bars"></i> Apps
            </a>
            <a href="cloud.html id='${selectedcloud}'>
                <i class="fa-solid fa-cloud"></i> Cloud
            </a>
            <a href="search.html" id='${selectedsearch}'>
                <i class="fa-solid fa-magnifying-glass"></i> Buscar
            </a>
        </div>
`


let data = new Date()
let dia = data.getDate()
let mes = data.getMonth()
let ano = data.getFullYear()

mes = mes + 1

if(dia < 10) {
    dia = `0` + dia
}

let mesnome = ``

if(mes == 1) {
    mesnome = `janeiro`
}

if(mes == 2) {
    mesnome = `fevereiro`
}

if(mes == 3) {
    mesnome = `março`
}

if(mes == 4) {
    mesnome = `abril`
}
if(mes == 5) {
    mesnome = `maio`
}

if(mes == 6) {
    mesnome = `junho`
}

if(mes == 7) {
    mesnome = `julho`
}

if(mes == 8) {
    mesnome = `agosto`
}

if(mes == 9) {
    mesnome = `setembro`
}

if(mes == 10) {
    mesnome = `outubro`
}

if(mes == 11) {
    mesnome = `novembro`
}

if(mes == 12) {
    mesnome = `dezembro`
}


if(mes < 10) {
    mes = `0` + mes
}

document.querySelector(`.current-date`).innerHTML = `${dia} de ${mesnome}`