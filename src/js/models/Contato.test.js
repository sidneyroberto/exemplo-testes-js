import Contato from './Contato';

test('deve gerar chaves distintas', () => {
    let contato1 = new Contato('Sidney Sousa', '99999-9999', new Date(1985, 7, 29));
    let contato2 = new Contato('Suelen Oliveira', '8888-8888', new Date(1986, 2, 29));
    let contato3 = new Contato('Joaquim Sousa', '77777-7777', new Date(2011, 7, 1));
    let contato4 = new Contato('Maria Rita Sousa', '66666-6666', new Date(2017, 0, 12));
    expect(contato1.id === contato2.id ||
        contato1.id === contato3.id ||
        contato1.id === contato4.id ||
        contato2.id === contato3.id ||
        contato2.id === contato4.id ||
        contato3.id === contato4.id
    ).toBeFalsy();
});