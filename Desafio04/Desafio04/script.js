function contar() {
   var finicio = document.getElementById(`txtin`)
   var ffim = document.getElementById(`txtfim`)
   var fpasso = document.getElementById(`txtpas`)
   var res = document.getElementById(`res`)
   
   if (finicio.value.length == 0 || ffim.value.length == 0) {
        res.innerHTML = `Impossível contar`
   } else {
        res.innerHTML = `Contando: <br>`
        var i = Number(finicio.value)
        var f = Number(ffim.value)
        var p = Number(fpasso.value)
        if (p <= 0 || fpasso.value.length == 0) {
          window.alert(`Passo invalido! Considerando PASSO 1`)
          p = 1
        }
        if (i < f) {
          for(var c = i; c <= f; c += p) {
               res.innerHTML += ` ${c} \u{1F449}`
           }
        } else {
          for(var c = i; c >= f; c -= p) {
               res.innerHTML += ` ${c} \u{1F449}`
          }
        }
        res.innerHTML += `\u{1F3C1}`
   }
}