function subtract(a, b) {
  let localVariable = b;
  let anotherLocalvariable = a - localVariable;
  let blablabla = anotherLocalvariable.toString();
  console.log(blablabla);
  // something is happening in the code (business logic) ...
  return blablabla;
}

function helper() {
  console.log('This is an ampty function!');
}

module.exports = subtract;
