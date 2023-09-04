function parimpar(n) {
    if (n%2==0) {
        return `Par!`
    } else {
        return `Ímpar!`
    }
}
console.log(parimpar(5))

function soma(n1=0, n2=0) {
    return n1 + n2
}
console.log(soma(2, 7))

function fatorial(n) {
    var fat = 1
    for(var c = n; c > 1; c--) {
        fat *= c
    }
    return fat
}
console.log(fatorial(5))

function fat(nu) {
    if (nu == 1) {
        return 1
    } else {
        return nu * fat(nu-1)
    }
}
console.log(fat(5)) //Usando a função com recursividade