import ContatoController from '../controllers/ContatoController';
import $ from 'jquery';
import 'jquery-mask-plugin';

export default class ContatoView {
    constructor() {
        $(document).ready(() => {
            $('#telefone').mask('(00) 00000-0000');
        });

        this.contatoCtrl = new ContatoController();

        this.$ = document.getElementById.bind(document);
        this.$('agenda').style.display = "none";
    }

    salvar() {
        let nome = this.$('nome').value;
        let telefone = this.$('telefone').value;
        let dataNascimento = this.$('dataNascimento').valueAsDate;
        let contato = this.contatoCtrl.adicionar(nome, telefone, dataNascimento);
        this.$('nome').value = '';
        this.$('telefone').value = '';
        this.$('dataNascimento').value = '';
        this.exibirContato(contato);
    }

    exibirContato(contato) {
        if (this.$('agenda').style.display === 'none') {
            this.$('agenda').style.display = 'block';
        }

        let divContato = document.createElement('div');
        divContato.className = 'contato';

        let divInicial = document.createElement('div');
        divInicial.className = 'inicial';

        let divDados = document.createElement('div');
        divDados.className = 'dados';

        let spanInicial = document.createElement('span');
        spanInicial.innerHTML = contato.nome.charAt(0);
        divInicial.appendChild(spanInicial);

        let spanNome = document.createElement('span');
        spanNome.innerHTML = contato.nome;
        divDados.appendChild(spanNome);

        let spanOutrosDados = document.createElement('span');
        spanOutrosDados.innerHTML = `${contato.telefone} - Aniversário em ${contato.dataNascimento.toLocaleDateString()}`;
        divDados.appendChild(spanOutrosDados);

        divContato.appendChild(divInicial);
        divContato.appendChild(divDados);
        this.$('agenda').appendChild(divContato);
    }
}