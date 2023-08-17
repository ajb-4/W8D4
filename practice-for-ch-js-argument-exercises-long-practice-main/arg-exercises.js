function sum1() {
    let totalSum = 0;
    for (let i = 0; i < arguments.length; i++) {
        totalSum += arguments[i];
    }
    return totalSum;
};

// console.log(sum1(1, 2, 3, 4))
// console.log(sum1(1, 2, 3, 4, 5))

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
    let args = Array.prototype.slice.call(arguments).slice(1);
    return function (){
        let args2 = Array.prototype.slice.call(arguments);
        return that.apply(ctx, args.concat(args2));
    }
}

Function.prototype.myBind2 = function(ctx, ...args){
    let that = this;
    // let args = Array.prototype.slice.call(arguments).slice(1);
    return function (...args2){
        // let args2 = Array.prototype.slice.call(arguments);
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

// markov.says("meow", "Ned");

// markov.says.myBind(pavlov, "meow", "Kush")();
// markov.says.myBind(pavlov)("meow", "a tree");
// markov.says.myBind(pavlov, "meow")("Markov");
// const notMarkovSays = markov.says.myBind(pavlov);
// notMarkovSays("meow", "me");

function curriedSum(numArgs) {
    let numbers = [];
    function _curriedSum(number) {
        numbers.push(number)
    if (numbers.length === numArgs) {
        let res = 0;
        numbers.forEach(function(num) {
            res += num;
        })
        return res;
    }
    else {
        return _curriedSum;
    }
    }
    return _curriedSum;
}

const sum = curriedSum(4);
// console.log(sum(5)(30)(20)(1));


Function.prototype.curry = function(numArgs){
    let that = this;
    return function _curry(){
        let args = Array.prototype.slice.call(arguments);
        if(args.length === numArgs){
            console.log(args.length);
            return that.curry.apply(that);
        }else{
            // console.log(args.length);
            return _curry;
        }
    }

}

const v1 = sum1.curry(4);
console.log(v1(2,3,1));
