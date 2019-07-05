import ContatoView from './views/ContatoView';
import './css/estilos.css';

let contatoView = new ContatoView();
document
    .getElementById('formularioContato')
    .addEventListener('submit', event => {
        event.preventDefault();
        contatoView.salvar();
    });