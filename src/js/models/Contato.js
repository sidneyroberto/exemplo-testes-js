export default class Contato {
    constructor(nome, telefone, dataNascimento) {
        this.id = this.gerarChaveAleatoria();
        this.nome = nome;
        this.telefone = telefone;
        this.dataNascimento = dataNascimento;
    }

    gerarChaveAleatoria() {
        const caracteres = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        const quantidadeCaracteres = caracteres.length;
        let chave = '';
        for (let i = 0; i < 16; i++) {
            chave += caracteres.charAt(Math.floor(Math.random() * quantidadeCaracteres));
        }
        return chave;
    }

}