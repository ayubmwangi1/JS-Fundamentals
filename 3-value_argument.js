function printFirstArgument(firstArg) {
    // Check if firstArg is undefined.
    // In JavaScript, omitted function arguments are automatically 'undefined'.
    if (firstArg === undefined) {
        console.log("No argument");
    } else {
        console.log(firstArg);
    }
}