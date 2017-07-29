var array = [];

function forLoop(array) {
  for (var i = 0; i < 25; i++){
  if (i == 1){
    array.push("I am 1 strange loop.");
  }
  else {
    array.push(`I am ${i} strange loops.`);
  }
  //make sure if...else statement is inside loop
}
return array;
}

function whileLoop(n){
//n = 100;
// n = 100; we are passing in the number, so dont set n to a number
  while (n > 0){
    console.log (--n);
  }
return 'done';
}

function doWhileLoop(array){
function maybeTrue() {
  return Math.random() >= 0.5;
  //random true of false with >=. 50% chance true or false;
}

do {
    array.shift();
//dont forget () condition brackers on shift() method;
}
while (array.length > 0 && maybeTrue());
  return array;
}
