import ContatoController from './ContatoController';

test('deve adicionar um novo contato e retornar o objeto referente', () => {
    let contatoCtrl = new ContatoController();
    let contato = contatoCtrl.adicionar('Sidney Sousa', '99999-9999', new Date(1985, 7, 29));
    expect(contato.nome).toBe('Sidney Sousa');
    expect(contato.telefone).toBe('99999-9999');
    expect(contato.dataNascimento).toEqual(new Date(1985, 7, 29));
});

test('deve listar todos os contatos previamente adicionados', () => {
    let contatoCtrl = new ContatoController();
    contatoCtrl.adicionar('Sidney Sousa', '99999-9999', new Date(1985, 7, 29));
    contatoCtrl.adicionar('Suelen Oliveira', '8888-8888', new Date(1986, 2, 29));
    contatoCtrl.adicionar('Joaquim Sousa', '77777-7777', new Date(2011, 7, 1));
    let listaContatos = contatoCtrl.listar();
    expect(listaContatos[0].nome).toBe('Sidney Sousa');
    expect(listaContatos[1].nome).toBe('Suelen Oliveira');
    expect(listaContatos[2].nome).toBe('Joaquim Sousa');
});

test('deve remover contato pelo seu id', () => {
    let contatoCtrl = new ContatoController();
    let contato = contatoCtrl.adicionar('Sidney Sousa', '99999-9999', new Date(1985, 7, 29));
    contatoCtrl.adicionar('Suelen Oliveira', '8888-8888', new Date(1986, 2, 29));
    contatoCtrl.adicionar('Joaquim Sousa', '77777-7777', new Date(2011, 7, 1));
    let id = contato.id;
    let listaContatos = contatoCtrl.remover(id);
    listaContatos.forEach(contato => expect(contato.id === id).toBeFalsy());
});