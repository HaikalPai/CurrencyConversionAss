function performCurrencyConversion() {
    var amountInput = parseFloat(document.getElementById("amountInput").value);
    var fromCurrency = document.getElementById("fromCurrency").value;
    var toCurrency = document.getElementById("toCurrency").value;

    // Check if the entered amount is a valid number
    if (isNaN(amountInput)) {
        document.getElementById("conversionResult").innerHTML = "Please enter a valid number.";
        return;
    }

    // Replace the example conversion rates with actual rates
    var conversionRates = {
        usd_myr: 4.65,
        eur_myr: 4.12,
        gbp_myr: 5.29,
        jpy_myr: 0.042,
        usd_aud: 1.52,
        usd_cad: 1.35,
        usd_inr: 83.12,
        eur_aud: 1.65,
        eur_cad: 1.46,
        eur_inr: 90.73,
        gbp_aud: 1.92,
        gbp_cad: 1.70,
        gbp_inr: 105.60,
        jpy_aud: 0.010,
        jpy_cad: 0.0091,
        jpy_inr: 0.56,

        // Add more conversion rates as needed
    };

    // Check if the conversion rates are defined
    if (conversionRates[`${fromCurrency}_${toCurrency}`] !== undefined) {
        var exchangeRate = conversionRates[`${fromCurrency}_${toCurrency}`];
        var conversionResult = amountInput * exchangeRate;
        document.getElementById("conversionResult").innerHTML = `${toCurrency.toUpperCase()}: ${conversionResult.toFixed(2)}`;
    } else {
        document.getElementById("conversionResult").innerHTML = "Invalid conversion.";
    }
}

function resetForm() {
    document.getElementById("fromCurrency").selectedIndex = 0;
    document.getElementById("toCurrency").selectedIndex = 0;
    document.getElementById("amountInput").value = "";
    document.getElementById("conversionResult").innerHTML = "";
}