import ContatoController from './controllers/contato_controller';
import './css/estilos.css';

let contatoCtrl = new ContatoController();
contatoCtrl.adicionar('Sidney Sousa', '99999-9999', '21/03/1954');
contatoCtrl.adicionar('Suelen Oliveira', '8888-8888', '25/01/1955');
contatoCtrl.adicionar('Joaquim Sousa', '77777-7777', '05/07/1980');
console.log(contatoCtrl.listar());