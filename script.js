let data = new Date()
let dia = data.getDay()
let mes = data.getMonth()
let ano = data.getFullYear()

document.querySelector(`.current-date`).innerHTML = `${dia}/${mes}/${ano}`