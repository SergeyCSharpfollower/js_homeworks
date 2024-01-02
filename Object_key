let obj = {
  name: 'John',
  age: 25,
  city: 'Dnipro',
  
  getInfo: function() {
    for (let key in this) {
      if (this.hasOwnProperty(key) && typeof this[key] !== 'function') {
        console.log(`${key}: ${this[key]}`);
      }
    }
  }
};

obj.gender = 'Male';
obj.job = 'QA Engineer';
obj.hobbies = ['Reading', 'Testing', 'Traveling'];

obj.getInfo();
