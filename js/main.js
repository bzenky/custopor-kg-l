const preço = document.querySelector('.preço')
const quantidade = document.querySelector('.quantidade')
const calcular = document.querySelector('.calcular')
const resultado = document.querySelector('.resultado')

function calculo() {
  let res = parseInt(((preço.value * 1000)/quantidade.value))
    .toLocaleString('pt-br',{style: 'currency', currency: 'BRL'});
  
  resultado.innerHTML = res

  preço.innerHTML = ' '

}

calcular.onclick = calculo