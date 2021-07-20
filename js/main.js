const preço = document.querySelector('.preço')
const quantidade = document.querySelector('.quantidade')
const calcular = document.querySelector('.calcular')
const resultado = document.querySelector('.resultado')

function calculo() {
  let res = parseInt(((preço.value * 1000)/quantidade.value))
    .toLocaleString('pt-br',{style: 'currency', currency: 'BRL'});
  
  if (quantidade.value <= 0 || preço.value <= 0) {
    alert('Valor inserido inválido, confira e tente novamente !')
  } else {
    resultado.innerHTML = res + ' por Kg/Litro'
  }
}

calcular.onclick = calculo