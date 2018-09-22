'use strict';

console.log('*** STRING AND ARRAY CHALLENGES ***');

console.log('STEP 1');
{
  let myString = 'hello,this,is,a,difficult,to,read,sentence';
  console.log('Difficult to read: ' + myString);
  console.log(myString.length);
  let easyToRead = myString.replace(/,/g, ' ');
  console.log('Easy to read: ' + easyToRead);
}

console.log('STEP 2');
{
  let favoriteAnimals = ['blowfish', 'capricorn', 'giraffe'];
  favoriteAnimals.push('turtle');
  console.log('I added `turtle` to the array: ' + favoriteAnimals);
  favoriteAnimals.splice(1, 0, 'meerkat');
  console.log('I think the value of the array is: blowfish, meerkat, capricorn, giraffe, turtle');
  console.log('The actual value is: ' + favoriteAnimals);
  console.log('The array has a length of:', favoriteAnimals.length);
  favoriteAnimals.splice(3, 1);
  console.log('I removed `giraffe`: ' + favoriteAnimals);
  let index = favoriteAnimals.indexOf('meerkat');
  console.log('The item you are looking for is at index: ' + index);
}

console.log('\n*** MORE JAVASCRIPT ***');

console.log('STEP 1');
{
  function sum(a, b, c) {
    return a + b + c;
  }

  console.log(sum(1, 2, 3));
}

console.log('STEP 2');
{
  function colorCar(color) {
    console.log('a ' + color + ' car');
  }

  colorCar('red');
}

console.log('STEP 3');
{
  function printObject(obj) {
    const keys = Object.keys(obj);

    for (let i = 0; i < keys.length; i++) {
      const key = keys[i];
      console.log(key + ': ' + obj[key]);
    }
  }

  const person = {
    firstName: 'Maartje',
    lastName: 'Kruijt',
    city: 'Amsterdam'
  };

  printObject(person);
}

console.log('STEP 4');
{
  function vehicleType(color, code) {
    let type;
    if (code === 1) {
      type = 'car';
    } else if (code === 2) {
      type = 'motorbike';
    } else {
      type = 'unknown vehicle';
    }

    return 'a ' + color + ' ' + type;
  }

  console.log(vehicleType('blue', 2));
  console.log(vehicleType('red', 5));
}

console.log('STEP 5');
{
  console.log(3 === 3 ? 'yes' : 'no');
}

console.log('STEP 6');
{
  function vehicle(color, code, age) {
    let type;
    if (code === 1) {
      type = 'car';
    } else if (code === 2) {
      type = 'motorbike';
    } else {
      type = 'unknown vehicle';
    }

    let condition = 'new';
    if (age > 1) {
      condition = 'used';
    }

    return 'a ' + color + ' ' + condition + ' ' + type;
  }

  console.log(vehicle('blue', 1, 5));
}

console.log('STEP 7');
{
  const vehicles = ['motorbike', 'caravan', 'bike', 'car'];
  console.log(vehicles);
}

console.log('STEP 8');
{
  const vehicles = ['motorbike', 'caravan', 'bike', 'car'];
  const thirdElement = vehicles[2];
  console.log('The third element is: ' + thirdElement);
}

console.log('STEP 9');
{
  const vehicles = ['motorbike', 'caravan', 'bike', 'car'];

  function vehicle(color, code, age) {
    let type;
    if (code >= 1 && code <= vehicles.length) {
      type = vehicles[code - 1];
    } else {
      type = 'unknown vehicle';
    }
    let condition = 'new';
    if (age > 1) {
      condition = 'used';
    }

    return 'a ' + color + ' ' + condition + ' ' + type;
  }

  console.log(vehicle('green', 3, 1));
}

console.log('STEP 10');
{
  function advertisement(vehicleNames) {
    let text = '';
    for (let i = 0; i < vehicleNames.length - 1; i++) {
      const name = vehicleNames[i];
      if (i > 0) {
        text += ', ';
      }
      text += name + 's';
    }
    text += ' and ' + vehicleNames[vehicleNames.length - 1] + 's.';
    return 'Amazing Joe\'s Garage, we service ' + text;
  }

  const vehicles = ['motorbike', 'caravan', 'bike', 'car'];

  const text = advertisement(vehicles);
  console.log(text);
}

console.log('STEP 11');
{
  function advertisement(vehicleNames) {
    let text = '';
    for (let i = 0; i < vehicleNames.length - 1; i++) {
      const name = vehicleNames[i];
      if (i > 0) {
        text += ', ';
      }
      text += name + 's';
    }
    text += ' and ' + vehicleNames[vehicleNames.length - 1] + 's.';
    return 'Amazing Joe\'s Garage, we service ' + text;
  }

  const vehicles = ['motorbike', 'caravan', 'bike', 'car', 'tractor'];

  const text = advertisement(vehicles);
  console.log(text);
}

console.log('STEP 12');
{
  const emptyObject = {};
  console.log('This is an empty object:', emptyObject);
}

console.log('STEP 13');
{
  const teachers = [
    {
      firstName: 'Philip',
      lastName: 'Beau',
    },
    {
      firstName: 'Unmesh',
      lastName: 'Joshi',
    },
    {
      firstName: 'Jim',
      lastName: 'Cramer',
    }
  ];

  console.log('Teachers:', teachers);
}

console.log('STEP 14');
{
  const teachers = [
    {
      firstName: 'Philip',
      lastName: 'Beau',
      languages: ['HTML', 'CSS']
    },
    {
      firstName: 'Unmesh',
      lastName: 'Joshi',
      languages: ['Git']
    },
    {
      firstName: 'Jim',
      lastName: 'Cramer',
      languages: ['JavaScript']
    }
  ];

  console.log('Teachers and languages:', teachers);
}

console.log('STEP 15');
{
  const x = [1, 2, 3];
  const y = [1, 2, 3];
  const z = y;

  console.log('x and y are like twin brothers: they look the same but are different instances');
  console.log('z is just another name for the array assigned to y: they reference the same instance');

  console.log('x == y', x == y);
  console.log('x === y', x === y);
  console.log('z === y', z === y);
  console.log('z === x', z === x);
}

console.log('STEP 16');
{
  const o1 = { foo: 'bar' };
  const o2 = { foo: 'bar' };
  const o3 = o2;

  console.log('o1 and o2 are like twin brothers: they look the same but are different instances');
  console.log('03is just another name for the object assigned to o2 they reference the same instance');

  console.log('o1', o1, 'o2', o2, 'o3', o3);

  o1.foo = 'baz';

  console.log('o1', o1, 'o2', o2, 'o3', o3);

  o2.foo = 'hyf';

  console.log('o1', o1, 'o2', o2, 'o3', o3);
}

console.log('STEP 17');
{
  let bar = 42;
  const result = typeof typeof bar;
  console.log('the typeof operator returns the type of an expression as a string:', result);
}