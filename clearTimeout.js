const myTimeout = setTimeout(() => {
    console.log('TIMEOUT IS DONE!');
}, 8000);

console.log('myTimeout', myTimeout);

const weShouldCancel = true;

if(weShouldCancel) {
    clearTimeout(myTimeout);
}
