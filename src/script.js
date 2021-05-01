let body = document.querySelector('body');
let formElements = document.getElementById('conversionForm').elements;
let button = document.getElementById('submit');
let newP = document.createElement('p');
let script = document.querySelector('script');
body.insertBefore(newP, script);

button.addEventListener('click', function(event) {
    event.preventDefault();
    let inputTemp = formElements["inputTemp"].value;
    let fromType = formElements["fromType"].value;
    console.log(inputTemp)
    console.log(fromType)
    if (typeof inputTemp !== "number" || fromType === "") {
        newP.textContent = "Please put a number in the temperature box, and select a type from the drop down menu."
    }
    if (fromType === "Celsius") {
        newP.textContent = `${inputTemp}°C is ${(inputTemp * 1.8) + 32}°F.`;
    } else if (fromType === "Fahrenheit") {
        newP.textContent = `${inputTemp}°F is ${(inputTemp - 32) * .5556}°C.`;
    }
});




