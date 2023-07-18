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