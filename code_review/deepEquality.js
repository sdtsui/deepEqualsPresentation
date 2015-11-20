/**
  * Write a function that, given two objects, returns whether or not the two
  * are deeply equivalent--meaning the structure of the two objects is the
  * same, and so is the structure of each of their corresponding descendants.
  *
  * Examples:
  *
  * deepEquals({a:1, b: {c:3}},{a:1, b: {c:3}}); // true
  * deepEquals({a:1, b: {c:5}},{a:1, b: {c:6}}); // false
  *
  * don't worry about handling cyclical object structures.
  *
  *
  //shallowEquality base case
  //type match check
  //keys length check
  //  reduce, checking apple[key] vs orange[key], true
  *
  */
 
var deepEquals = function(apple, orange){
  if (apple === orange) return true;
  if (typeof apple !== 'object' || typeof orange !== 'object') return false;
  if (Object.keys(apple).length !== Object.keys(orange).length) return false;
  return Object.keys(apple).reduce(function(acc, key) {
    return acc && deepEquals(apple[key], orange[key]);
  }, true);
};

var deepEquals = function(apple, orange){
  return (apple === orange) ? true:
    (typeof apple !== 'object' || typeof orange !== 'object')  ? false : 
    (Object.keys(apple).length !== Object.keys(orange).length) ? false : 
    Object.keys(apple).reduce(function(acc, key) {
    return acc && deepEquals(apple[key], orange[key]);
  }, true);
};


console.log('Should be true: ', deepEquals({a:1, b: {c:3}},{a:1, b: {c:3}}));
console.log('Should be false: ', deepEquals({a:1, b: {c:5}},{a:1, b: {c:6}}));
