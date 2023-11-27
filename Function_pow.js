function Pow(x, y) {
    let result = 1;

    for (let i = 0; i < y; i++) {
        result *= x;
    }

    return result;
}

console.log(Pow(2, 3));
