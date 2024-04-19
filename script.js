const convertButton = document.querySelector(".convert-button")
const currencySelect = document.querySelector(".currency-select")

function convertValues() {
    
    const inputValue = document.querySelector(".input-value").value
    const currencyValuetoConvert = document.querySelector(".currency-value-to-convert") //valor a converter
    const currencyValueConverted = document.querySelector(".currency-value-converted") //valor convertido para outras moedas
    
   console.log(currencySelect.value)
   
    const dolar = 5.20
    const euro = 6.20
    const libra = 7.30
    const bitcoin = 315000

    if(currencySelect.value == 'Dolar') {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(inputValue / dolar)
    }

    if(currencySelect.value == 'Euro') {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(inputValue / euro)
    }

    if(currencySelect.value == 'Libra') {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-GB", {
            style: "currency",
            currency: "GBP"
        }).format(inputValue / libra)
    }

    if(currencySelect.value == 'Bitcoin') {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "BTC"
        }).format(inputValue / bitcoin)
    }

    currencyValuetoConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL"
    }).format(inputValue)

}

function changeCurrency() {
    const currencyName = document.getElementById("currency-name")
    const currencyImage = document.querySelector(".currency-img")

    if(currencySelect.value == 'Dolar') {
        currencyName.innerHTML = 'Dólar Americano'
        currencyImage.src = './assets/dolar.png'
    }

    if(currencySelect.value == 'Euro') {
        currencyName.innerHTML = 'Euro'
        currencyImage.src = './assets/euro.png'
    }

    
    if(currencySelect.value == 'Libra') {
        currencyName.innerHTML = 'Libra'
        currencyImage.src = './assets/libra.png'
    }

    if(currencySelect.value == 'Bitcoin') {
        currencyName.innerHTML = 'Bitcoin'
        currencyImage.src = './assets/bitcoin.png'
    }

    convertValues()
}

currencySelect.addEventListener("change", changeCurrency)
convertButton.addEventListener("click", convertValues)



