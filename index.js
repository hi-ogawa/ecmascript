var p = new Promise((resolve, reject) => {
    resolve('test');
});

p.then((result) => { console.log(result); });

var i = 0;
while(i < 500000000) {
    i = i + 1;
}
