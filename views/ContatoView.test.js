import puppeteer from 'puppeteer';
import 'regenerator-runtime/runtime';

/**
 * Exemplo de teste e2e
 */
test('deve salvar o novo contato proveniente do formulário e exibi-lo na página', async () => {
    /**
     * 
     * Caso queira visualizar o teste automatizado,
     * use esta sugestão de configuração:
     const browser = await puppeteer.launch({
        headless: false,
        slowMo: 80,
        args: ['--window-size=1920,1080']
    });
     */
    const browser = await puppeteer.launch({
        headless: true
    });

    const pagina = await browser.newPage();
    await pagina.goto('http://localhost:8081');
    await pagina.click('#nome');
    await pagina.type('#nome', 'Sidney Sousa');
    await pagina.click('#telefone');
    await pagina.type('#telefone', '67991056178');
    await pagina.click('#dataNascimento');
    await pagina.type('#dataNascimento', '29081985');
    await pagina.click('#botaoSalvar');
    const nomeContato = await pagina.$eval('.dados span:first-child', el => el.textContent);
    expect(nomeContato).toBe('Sidney Sousa');
}, 10000);