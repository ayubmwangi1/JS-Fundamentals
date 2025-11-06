function processStringArgument(arg) {
    // Check if the argument is undefined or null (or check specifically for a string type)
    if (arg === undefined || arg === null) {
        console.log("No argument");
    } else if (typeof arg === 'string') {
        // If it is a string, we treat it as the expected single argument.
        console.log("Argument found");
        // You can use the argument here: console.log(`The argument value is: ${arg}`);
    } else {
        // Handle unexpected input types if necessary
        console.log("An argument was found, but it is not a string.");
    }
}

processStringArgument()