
let year = prompt("Введіть кількість років:", "");

if (isNaN(year) || year < 0) {
    alert("Будь ласка, введіть додатне число.");
} else {

    let result = "";
    if (year % 10 === 1 && year % 100 !== 11) {
        result = "рік";
    } else if (year % 10 >= 2 && year % 10 <= 4 && (year % 100 < 10 || year % 100 >= 20)) {
        result = "роки";
    } else {
        result = "років";
    }

    alert(`${year} ${result}`);
}
