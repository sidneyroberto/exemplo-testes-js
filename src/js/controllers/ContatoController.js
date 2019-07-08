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

    remover(id) {
        this.contatos = this.contatos.filter(contato => contato.id !== id);
        return this.contatos;
    }

    listar() {
        return this.contatos;
    }

}