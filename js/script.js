const $ = document;
const convertBtn = $.querySelector(".convertButton");
const resetBtn = $.querySelector(".resetButton");
const changeBtn = $.querySelector(".changeButton");
const converter = $.querySelector("#converter");
const celsius = $.querySelector(".C");
const fahrenheit = $.querySelector(".F");
const result = $.querySelector(".result");

function change() {
    if ($.title === "Js | °C to °F") {
        $.title = "Js | °F to °C";
        celsius.innerHTML = "°F";
        fahrenheit.innerHTML = "°C";
        converter.setAttribute("placeholder", "°F");
    } else if ($.title === "Js | °F to °C") {
        $.title = "Js | °C to °F";
        celsius.innerHTML = "°C";
        fahrenheit.innerHTML = "°F";
        converter.setAttribute("placeholder", "°C");
    }
}

function convert() {
    if (converter.value === "") {
        result.innerHTML = "Enter a value.";
        result.style.color = "#993300";
    } else {
        if ($.title === "Js | °C to °F") {
            let celsiusToFahrenheit = ((converter.value * 9 / 5) + 32).toFixed(2);
            result.style.color = "rgb(255, 255, 102)";
            result.innerHTML = converter.value + "°C to " + celsiusToFahrenheit + "°F";
        } else if ($.title === "Js | °F to °C") {
            let fahrenheitToCelsius = ((converter.value - 32) / 1.8).toFixed(2);
            result.style.color = "rgb(255, 255, 102)";
            result.innerHTML = converter.value + "°F to " + fahrenheitToCelsius + "°C";
        }
    }
}

function reset () {
    result.innerHTML = "";
    converter.value = "";
}

changeBtn.addEventListener("click", change);
convertBtn.addEventListener("click", convert);
resetBtn.addEventListener("click", reset);