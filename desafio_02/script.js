// DESAFIO 02

const receiveValue =  (valueInt) => {
    for (let i = valueInt; i < 350; i = i + 5) {
        if (i % 5 === 0) {
            return `Valor recebido: ${i}, múltiplo de 5!!`
        } else if (valueInt % 7 === 0) {
            return `Valor recebido: ${i}, múltiplo de 7!!`
        } else {
            return `Valor recebido: ${i}, não é múltiplo de 5 e nem de 7!!`
        }
    }
}

console.log(receiveValue(13));