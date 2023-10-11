const listaMoedas = document.querySelector('.lista-moedas');
const titleMoedas = document.querySelector('.moedas-title');

const createElementLi = (coin) => {
  const liElement = document.createElement('li'); // cria um elemento li

  const date = new Date(coin.timestamp * 1000); // converte para data
  const localDate = (date.toLocaleDateString('pt-BR')); // formata de acordo com o requisito

  liElement.classList.add('coin'); // adiciona a classe coin
  liElement.innerHTML = `
    ${localDate} - <span>${coin.ask}</span>
  `; // adiciona o conteúdo do elemento li
  return liElement;
};

export const renderListMoedas = (coins, title) => {
  titleMoedas.innerHTML = `Últimas variações de ${title}`;
  listaMoedas.innerHTML = '';

  coins.forEach((coin) => {
    const liElement = createElementLi(coin); // cria o elemento li
    listaMoedas.appendChild(liElement); // adiciona o elemento li na lista
  });
};
