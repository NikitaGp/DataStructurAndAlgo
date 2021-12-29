

function multiple(a, b, c) {

	return a* b* c;
}

function curry(func) {
	function curried(...args) {
  // if args is equal or greater to func args then just call the func
  	if (args.length >= func.length) {
    	return func(...args)
    } else {
    // returning a function which takes args then we are call curried function and appendenig the arumets curried function will called untill args is equal or greater than the curried function
    	return function(...more) {
      	return curried(...args, ...more)
      }
    }
  }
	return curried
}
// pass function whatever you want to run
var curried = curry(multiple);
console.log(curried(2)(3)(4)); // 24
console.log(curried(2,3)(4));  // 24
console.log(curried(2,3,4));  // 24
console.log(curried(5)(6,7)); // 210