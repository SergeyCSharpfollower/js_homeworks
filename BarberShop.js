var services = {
  "стрижка": "60 грн",
  "гоління": "80 грн",
  "Миття голови": "100 грн"
};

services['Розбити скло'] = "200 грн";

var priceCalculator = {
  price: function() {
    var total = 0;
    for (var service in services) {
      if (services.hasOwnProperty(service)) {
        var cost = parseFloat(services[service].replace(' грн', ''));
        total += cost;
      }
    }
    return total;
  },

  minPrice: function() {
    var minCost = Infinity;
    for (var service in services) {
      if (services.hasOwnProperty(service)) {
        var cost = parseFloat(services[service].replace(' грн', ''));
        if (cost < minCost) {
          minCost = cost;
        }
      }
    }
    return minCost;
  },

  maxPrice: function() {
    var maxCost = -Infinity;
    for (var service in services) {
      if (services.hasOwnProperty(service)) {
        var cost = parseFloat(services[service].replace(' грн', ''));
        if (cost > maxCost) {
          maxCost = cost;
        }
      }
    }
    return maxCost;
  }
};

console.log("Загальна вартість послуг: " + priceCalculator.price() + " грн");
console.log("Мінімальна вартість послуг: " + priceCalculator.minPrice() + " грн");
console.log("Максимальна вартість послуг: " + priceCalculator.maxPrice() + " грн");
