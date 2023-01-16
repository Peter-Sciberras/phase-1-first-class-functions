// receivesAFunction function
function receivesAFunction(callback) {
    callback();
  }
  
  // returnsANamedFunction function
  function returnsANamedFunction() {
    return function namedFunction() {};
  }
  
  // returnsAnAnonymousFunction function
  function returnsAnAnonymousFunction() {
    return function() {};
  }