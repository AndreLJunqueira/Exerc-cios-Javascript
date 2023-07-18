function calcular() {
   var N = document.getElementById(`txttab`)
   var tab = document.getElementById(`seltab`)
   
   if (N.value.length == 0) {
        window.alert(`Por favor Digite um Número!`)
   } else {
    var d = Number(N.value)
    tab.innerHTML = ``
    for(var c = 1; c <= 10; c++) {
          var item = document.createElement(`option`)
         item.text = `${d} * ${c} = ${d*c}`
         item.value = `tab${c}` //essa expressão serve para outras linguagens como php.
         tab.appendChild(item) //serve para fazer o elemento "item" criado, aparecer no programa.
    }

   }
}