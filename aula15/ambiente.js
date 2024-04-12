let num = [5, 8, 2, 9, 3]
num.push(7) // Acrescenta um vetor no array
num.sort() // Coloca em ordem
console.log(`Nosso vetor é o ${num}`)
console.log(`O vetor tem ${num.length} posições`)
console.log(`O primeiro valor é ${num[0]}`)
let pos = num.indexOf(8) // Pesquisa valores (OBS: Ele pesquisa o valor e não o index/chave)
if (pos == -1) {
    console.log('O valor não foi encontrado!')
} else {
    console.log(`O valor 8 está na posição ${pos}`)
}