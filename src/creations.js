const listaMoedas = document.querySelector('.lista-moedas');
const titleMoedas = document.querySelector('.moedas-title');

const createElementLi = (coin) => {
  const liElement = document.createElement('li'); // cria um elemento li
  liElement.classList.add('coin'); // adiciona a classe coin
  liElement.innerHTML = `
    ASK: <span>${coin.ask}</span>
  `; // adiciona o conteúdo do elemento li
  return liElement;
};

export const renderListMoedas = (coins, title) => {
  titleMoedas.innerHTML = `Últimas variações de ${title}`;
  listaMoedas.innerHTML = '';

  coins.forEach((coin) => {
    console.log(coin);
    const liElement = createElementLi(coin); // cria o elemento li
    listaMoedas.appendChild(liElement); // adiciona o elemento li na lista
  });
};
