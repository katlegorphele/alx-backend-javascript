const readline = require('readline')

// Create process in/out interface

const rdln = readline.createInterface({
    input: process.stdin,
    output: process.stdout
    });
console.log('Welcome to Holberton School, what is your name?')

// Read user input
if (process.stdin.isTTY) {
    rdln.on('line', (inp) => {
        console.log(`Your name is: ${inp}`);
        //console.log('This important software is now closing')
        process.exit()
    });
}

rdln.on('line', (inp) => {
    console.log(`Your name is: ${inp}`);
    //console.log('This important software is now closing')
});

rdln.on('close', () => {
    console.log('This important software is now closing')
    process.exit()
});

rdln.on('SIGINT', () => {
    console.log('This important software is now closing')
    process.exit()
});