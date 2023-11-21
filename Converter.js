function convertUnits(unit, value) {
    if (unit === 'км') {
        result = value * 1000;
        return `${value} км це ${result} м.`;
    } else if (unit === 'год') {
        result = value * 60;
        return `${value} год. це ${result} хв.`;
    } else if (unit === 'кг') {
        result = value * 1000;
        return `${value} кг. це ${result} грм.`;
    } else {
        return "Непідтримувана одиниця вимірювання.";
    }
}

var unit = prompt("Введіть одиницю вимірювання (км, год або кг):");
var value = parseFloat(prompt("Введіть кількість:"));

var result = convertUnits(unit, value);
console.log(result);
