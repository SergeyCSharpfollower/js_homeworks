// 'number' + 3 + 3
//стрінга "number" конкатенується з першим числом 3, і потім результат конкатенується з іншим числом 3.
// Результат: "number33"

// null + 3
// null перетворюється в число 0 перед додаванням до числа 3.
// Результат: 3

// 5 && "qwerty"
// Логічне І вираження повертає значення останнього істинного операнда
// Результат: "qwerty"

// +'40' + +'2' + "hillel";
// Спроба перетворення рядків в числа за допомогою унарного оператора +, і потім вони сумуються.
// Результат: 42hillel

// '10' - 5 === 6;
// стрінга '10' перетворюється в число 10, і потім порівніємо з 6.
// Результат: false

// true + false
// true перетворюється в число 1, а false в 0, і додаємо ці числа.
// Результат: 1

// '4px' - 3
// стрінга '4px' не може бути перетворена, тому результат є NaN.
// Результат: NaN

// '4' - 3
// стрінга '4' перетворюється в число 4, і потім віднімаємо.
// Результат: 1

// '6' + 3 ** 0;
// 3 ** 0 дорівнює 1, і його додають до стрінги '6'.
// Результат: "61"

// 12 / '6'
// стрінга '6' перетворюється в число 6, і відбувається ділення 12 на 6
// Результат: 2

// '10' + (5 === 6);
// Вираз (5 === 6) повертає false, яке конкатенується як рядок з '10'.
// Результат: "10false"

// null == ''
// null != пустому рядку.
// Результат: false

// 3 ** (9 / 3);
// 9 / 3 = 3, і потім відбувається підняття числа 3 до ступеня 3.
// Результат: 27

// !!'false' == !!'true'
// Використання двох унарних операторів !! перетворює стрінги в булеві значення.
// Результат: true (обидва вирази !! перетворюються в булеві значення true)

// 0 || '0' && 1
// Оператор || повертає перший істинний операнд, а оператор && повертає останній істинний операнд.
// Результат: 1 (0 || '0' повертає '0', а '0' && 1 повертає 1)

// (+null == false) < 1;
// null перетворюється в 0, що дорівнює false. Потім порівнюється (0 == false) < 1, що є true.
// Результат: true

// false && true || true
// false && true дорівнює false, але false || true дорівнює true.
// Результат: true

// false && (false || true);
// false || true дорівнює true, але false && true дорівнює false.
// Результат: false

// (+null == false) < 1 ** 5;
// Аналогічно до попереднього виразу, де (+null == false) дорівнює true.
// Результат: true