function printSquare(size) {
    if (!Number.isInteger(size)) {
        console.log('Missing size');
        return;
    }
    for (let i = 0; i < size; i++) console.log('X'.repeat(size));
}