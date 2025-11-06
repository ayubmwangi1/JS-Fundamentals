function printMyNumber(value) {
  const num = parseInt(value);
  if (!isNaN(num)) {
    console.log(`My number: ${num}`);
  } else {
    console.log('Not a number');
  }
}