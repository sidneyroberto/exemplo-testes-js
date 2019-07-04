import Contato from '../models/Contato';

export default class ContatoController {

    constructor() {
        this.contatos = [];
    }

    adicionar(nome, telefone, dataNascimento) {
        let contato = new Contato(nome, telefone, dataNascimento);
        this.contatos.push(contato);
        return contato;
    }

    listar() {
        return this.contatos;
    }
}