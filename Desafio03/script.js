function verificar() {
   var data = new Date()
   var ano = data.getFullYear()
   var fano = document.getElementById(`txtano`)
   var res = document.getElementById(`res`)
   if (fano.value.length == 0 || fano.value > ano) {
        window.alert(`[ERRO] Verifique os dados e tente novamente!`)
   } else {
        var fsex = document.getElementsByName(`radsex`)
        var idade = ano - fano.value
        res.innerHTML = `Idade calculada: ${idade}`
        var gênero = ``
        var img = document.createElement(`img`)
        img.setAttribute(`id`, `foto`)
        if (fsex[0].checked) {
            gênero = `Homem`
            if (idade >= 0 && idade < 10) {
               //criança 
               img.setAttribute(`src`, `imagens/criançah.png`)
            } else if (idade < 21) {
                // jovem
                img.setAttribute(`src`, `imagens/jovemh.png`)
            } else if (idade < 50) {
                //adulto
                img.setAttribute(`src`, `imagens/homem.png`)
            } else {
                //idoso
                img.setAttribute(`src`, `imagens/idoso.png`)
            }
        } else {
            gênero = `Mulher`
            if (idade >= 0 && idade < 10) {
                //criança 
                img.setAttribute(`src`, `imagens/criançam.png`)
             } else if (idade < 21) {
                 // jovem
                 img.setAttribute(`src`, `imagens/jovemm.png`)
             } else if (idade < 50) {
                 //adulto
                 img.setAttribute(`src`, `imagens/mulher.png`)
             } else {
                 //idoso
                 img.setAttribute(`src`, `imagens/idosa.png`)
             }
        }
        res.innerHTML = `Detectamos ${gênero} com ${idade} anos.`
        res.appendChild(img)
   }

}