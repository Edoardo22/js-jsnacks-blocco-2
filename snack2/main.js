let nomi = ["mario", "giuseppe", "francesca", "alice", "andrea", "obiwan", "elon"];
let cognomi = ["rossi", "gialli", "bros", "esposito", "di marzio", "kenobi", "musk"];
let nomeCompleto = [];
let x = 0;
for (var i = 0; i < 7; i++) {

    posizioneCasualeNomi = Math.floor(Math.random() * 7);
    x = nomi[i];
    nomi[i] = nomi[posizioneCasualeNomi];
    nomi[posizioneCasualeNomi] = x;
    nomeCompleto.push(nomi[i])
    posizioneCasualeCognomi = Math.floor(Math.random() * 7);
    x = cognomi[i];
    cognomi[i] = cognomi[posizioneCasualeCognomi];
    cognomi[posizioneCasualeCognomi] = x;
    nomeCompleto.push(cognomi[i])

}

console.log(nomeCompleto)