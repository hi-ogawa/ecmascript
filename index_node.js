var cp = require('child_process');

cp.exec('echo ChildHelloDirectlyToTty > /dev/tty; echo ChildHelloToStdout', (err, stdout) => {
    console.log('- Child process finished -');
    console.log(stdout);
});

console.log('- Start intensive work -');

var i = 0;
while(i < 1000000000) {
    i = i + 1;
}

console.log('- Finish intensive work -');
