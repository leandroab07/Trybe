let n = 10;

let espaco = '';
let todos = '';
let asterisco = '';

for (let e = n; e >= 0; e -= 1) {
    let espaco = '';
    for (let i = 0; i < e; i += 1) {
        espaco += ' ';
    }
    asterisco += '*';
    console.log(espaco + asterisco);
}
