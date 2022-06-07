// DESAFIO 01

const escreveResultado = () => {
    for (let i = 1; i < 299; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            console.log(`Múltiplos de 3 e 5: ${i}, VAMBORA`)
        } else if (i % 5 === 0) {
            console.log(`Múltiplos de 5: ${i}, BORA`)
        } else if  (i % 3 === 0) {
            console.log(`Múltiplos de 3: ${i}, VAMO`)
        }
    }
    
}

console.log(escreveResultado());

