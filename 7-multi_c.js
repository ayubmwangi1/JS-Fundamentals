function printCisFun(x) {
    if (!Number.isInteger(x)) {
        console.log('Missing number of occurrences');
        return;
    }
    for (let i = 0; i < x; i++) console.log('C is fun');
}