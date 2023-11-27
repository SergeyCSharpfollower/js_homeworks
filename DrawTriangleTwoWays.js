//Using loop
function DrawTriangle(height, symbol) {
    for (let i = 1; i <= height; i++) {
        let row = '';
        for (let j = 1; j <= i; j++) {
            row += symbol;
        }
        console.log(row);
    }
}

DrawTriangle(5, '*');

//Using recursion
function DrawTriangle(height, symbol, currentHeight = 1) {
    if (currentHeight > height) {
        return;
    }

    const row = symbol.repeat(currentHeight);
    console.log(row);

    drawTriangle(height, symbol, currentHeight + 1);
}

DrawTriangle(5, '*');