

const key = "8b820ba356ed7912f6063c69b9fec8fa"

function mostrarPrevisao (dados){
    document.querySelector(".city").innerHTML = "Tempo em " + dados.name
    document.querySelector(".temp").innerHTML = Math.floor(dados.main.temp) + "ºC"
    document.querySelector(".previ").innerHTML = dados.weather[0].description
    document.querySelector(".humidity").innerHTML = "Umidade: " +  dados.main.humidity  +  "%"
    document.querySelector(".img-info").src=`https://openweathermap.org/img/wn/${dados.weather[0].icon}.png`

}

async function searchCity (city){

    const dados = await fetch (`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}&lang=pt_br&units=metric`).then(response => response.json())

    mostrarPrevisao (dados)

}

function clickButton (){
    const city = document.querySelector(".input").value

    searchCity (city)
}