const [arg] = process.argv.slice(2);

const number = parseInt(arg); //Parse interger is used to convert the argument to an interger or number method can also be used!

if (isNaN(number)) {
  console.log("Not a number");
} else {
  console.log(`My number: ${number}`);
}