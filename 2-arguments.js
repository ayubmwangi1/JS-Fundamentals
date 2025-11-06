function analyzeStringArguments(...args) {
    // The 'args' variable is automatically an Array containing all arguments passed.
    const numArgs = args.length;

    if (numArgs === 0) {
        console.log("No argument");
    } else if (numArgs === 1 && typeof args[0] === 'string') {
        // We ensure the single argument is actually a string type.
        console.log("Argument found");
    } else if (numArgs > 1 && args.every(arg => typeof arg === 'string')) {
        // If there are multiple arguments, and all are strings.
        console.log("Arguments found");
    } else {
        // Handle cases where non-string types might be mixed in, if necessary
        console.log("Mixed or invalid argument types found.");
    }
}