const convertButton = document.querySelector(".convert-button")

function convertValues() {
    
    const inputValue = document.querySelector(".input-value").value
    const currencyValuetoConvert = document.querySelector(".currency-value-to-convert") //valor a converter
    const currencyValueConverted = document.querySelector(".currency-value-converted") //valor convertido para outras moedas
    
    const dolar = 5.10

    const convertedValue = inputValue / dolar

    currencyValuetoConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL"
    }).format(inputValue)

    currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD"
    }).format(convertedValue)

    
}

convertButton.addEventListener("click", convertValues)



