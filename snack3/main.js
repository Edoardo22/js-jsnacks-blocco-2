let numeri = []
let somma = 0;
for (i = 0; i < 10; i++) {
    let numeroR = Math.random() * 10
    numeroR = Math.round(numeroR)
    numeri.push(numeroR)
    if (i % 2 === 0) {
        somma = somma + numeroR
    }
    console.log(somma)
}

