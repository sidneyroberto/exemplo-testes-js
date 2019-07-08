import ContatoView from './views/ContatoView';
import '../styles/estilos.scss';

let contatoView = new ContatoView();
document
    .getElementById('formularioContato')
    .addEventListener('submit', event => {
        event.preventDefault();
        contatoView.salvar();
    });