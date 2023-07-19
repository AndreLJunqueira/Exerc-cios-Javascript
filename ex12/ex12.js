var num = [5, 4, 8, 9]
num.push(6) //adicionou mais um elemento na última posição
num.sort()
console.log(num)
var p = num.indexOf(9)
if (p == -1) {
    console.log(`O valor não foi encontrado`)
} else {
    console.log(`O valor está na posição ${p}`)
}
console.log(`O vetor tem ${num.length} posições`)
console.log(`o primeiro valor do vetor é ${num[0]}`)
for(var pos=0; pos < num.length; pos++) {
    console.log(`A posição ${pos} tem o valor ${num[pos]}`)
}

//outra forma de fazer mais simplificado:

for(var pos in num) {
    console.log(num[pos])
}
