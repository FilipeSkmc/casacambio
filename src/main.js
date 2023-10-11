import Swal from 'sweetalert2';
import { renderListMoedas } from './creations';

const moeda = document.querySelector('#moeda');
const btnSearch = document.querySelector('.btn-search');

btnSearch.addEventListener('click', (e) => {
  e.preventDefault();
  const moedaValue = moeda.value;

  if (moedaValue === '') {
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: 'Campo vazio, por favor preencha!',
    });
  }

  const endpoint = `https://economia.awesomeapi.com.br/json/daily/${moedaValue}/30`;

  fetch(endpoint)
    .then((response) => response.json())
    .then((data) => {
      renderListMoedas(data);
    })
    .catch(() => {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Moeda não encontrada!',
      });
    });
});
