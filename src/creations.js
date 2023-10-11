const listaMoedas = document.querySelector('.lista-moedas');
const titleMoedas = document.querySelector('.moedas-title');

const BASE_CONVERSION = 1000;

const createElementLi = (coin) => {
  const liElement = document.createElement('li'); // cria um elemento li

  const date = new Date(coin.timestamp * BASE_CONVERSION); // converte para data
  const localDate = (date.toLocaleDateString('pt-BR')); // formata de acordo com o requisito

  // adiciona a classe coin
  liElement.classList.add('coin');
  // adiciona o conteúdo do elemento li
  liElement.innerHTML = `${localDate} - <span>${coin.ask}</span>`;

  return liElement;
};

export const renderListMoedas = (coins) => {
  titleMoedas.innerHTML = `Últimas variações de ${coins[0].code}`;
  listaMoedas.innerHTML = '';

  coins.forEach((coin) => {
    const liElement = createElementLi(coin); // cria o elemento li
    listaMoedas.appendChild(liElement); // adiciona o elemento li na lista
  });
};
