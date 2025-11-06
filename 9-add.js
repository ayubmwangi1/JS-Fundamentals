
const argOne = parseInt(process.argv[2]);
const argTwo = parseInt(process.argv[3]);

function add(a, b) {
  return a + b;
}

if (isNaN(argOne) || isNaN(argTwo)) {
  console.log("NaN");
} else {
  console.log(add(argOne, argTwo));
}