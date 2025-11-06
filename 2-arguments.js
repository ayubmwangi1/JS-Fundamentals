function checkArguments(args) {

    if (args === 0) {
        console.log("No argument");
    } else if (args === 1) {
        console.log("Argument found");
    } else {
        console.log("Arguments found");
    }
}

checkArguments(0)
checkArguments(1)
checkArguments(2)