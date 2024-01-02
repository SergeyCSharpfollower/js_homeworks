function Blend(arr) {
  function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  for (let i = arr.length - 1; i > 0; i--) {
    const j = getRandomInt(0, i);
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
}

var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

console.log("Початковий масив:", arr);

Blend(arr);

console.log("кінцевий масив:", arr);
