const convertButton = document.querySelector(".convert-button")

function convertValues() {
    
    const inputValue = document.querySelector(".input-value").value

    const dolar = 5.40

    const convertedValue = inputValue * dolar

    console.log(convertedValue)
}

convertButton.addEventListener("click", convertValues)



