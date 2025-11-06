const [argumentOne, argumentTwo] = process.argv.slice(2);

if (argumentOne === undefined) {
  console.log("undefined is undefined");
} else if (argumentTwo === undefined) {
  console.log("HBTN is undefined");
} else {
  console.log("Python is fun");
}