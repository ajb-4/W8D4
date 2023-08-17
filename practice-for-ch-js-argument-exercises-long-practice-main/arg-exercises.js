function sum() {
    let totalSum = 0;
    for (let i = 0; i < arguments.length; i++) {
        totalSum += arguments[i];
    }
    return totalSum;
};

// console.log(sum(1, 2, 3, 4))
// console.log(sum(1, 2, 3, 4, 5))

function sum2(...args) {
    let totalSum = 0;
    for (let i = 0; i < args.length; i++) {
        totalSum += args[i];
    }
    return totalSum;
};

// console.log(sum2(1, 2, 3, 4))
// console.log(sum2(1, 2, 3, 4, 5))

function sum3() {
    let totalSum = 0;
    let args = Array.prototype.slice.call(arguments);
    args.forEach(function(num) {
        totalSum += num
    })
    return totalSum;
};

// console.log(sum3(1, 2, 3, 4))
// console.log(sum3(1, 2, 3, 4, 5))

Function.prototype.myBind = function(ctx){
    let that = this;
    let args = Array.prototype.slice(1).call(arguments);
    return function (){
        let args2 = Array.prototype.slice.call(arguments);
        return that.apply(ctx, args.concat(args2));
    }
}

class Cat {
    constructor(name) {
      this.name = name;
    }

    says(sound, person) {
      console.log(`${this.name} says ${sound} to ${person}!`);
      return true;
    }
  }

  class Dog {
    constructor(name) {
      this.name = name;
    }
  }

  const markov = new Cat("Markov");
  const pavlov = new Dog("Pavlov");

  markov.says("meow", "Ned");

  console.log(markov.says.myBind(pavlov, "meow", "Kush")());
