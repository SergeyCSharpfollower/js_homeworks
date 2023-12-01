function checkProbabilityTheory(count) {
    let evenCount = 0;
    let oddCount = 0;

    for (let i = 0; i < count; i++) {
        const randomNumber = Math.floor(Math.random() * (1000 - 100 + 1) + 100);
        randomNumber % 2 === 0 ? evenCount++ : oddCount++;
    }

    const evenPercentage = (evenCount / count) * 100;
    const oddPercentage = 100 - evenPercentage;

    console.log("Number of generated integers:", count);
    console.log("Paired numbers:", evenCount);
    console.log("Unpaired numbers:", oddCount);
    console.log("Percentage of even to odd:", evenPercentage.toFixed(2) + "% : " + oddPercentage.toFixed(2) + "%");
}
