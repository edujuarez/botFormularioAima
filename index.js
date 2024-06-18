import puppeteer from "puppeteer";
import { setTimeout as delay } from "node:timers/promises";


let counter = 0; // Inicializa el contador

async function botbardeoAima()  {
    const browser = await puppeteer.launch({
        headless: false    });

    const page = await browser.newPage();

    await page.goto("https://aima.gov.pt/pt/contactos")

    try {
        await page.focus('#input-firstname')
        await page.keyboard.type('Ruben Eduardo')

        await page.focus('#input-lastname')
        await page.keyboard.type('Juarez')

        await page.focus('#txtEmailContact')
        await page.keyboard.type('edukjuarez@gmail.com')

        await page.focus('#input-phone')
        await page.keyboard.type('914142111')

        await page.focus('#input-subject')
        await page.select('#input-subject', 'Autorização de Residência')

        await page.focus('#txtMessage')
        await page.keyboard.type("Bom dia! Queria pedir um agendamiento na AIMA para fazer a minha primeira residência temporária, eu tem visto procura do trabalho. \n Meu passaporte argentino AAI472126 quando solicitei meu visto não veio com o agendamento correspondente. \n Por favor, solicito uma consulta, pois tenho todos os documentos necessários prontos e preciso da minha primeira residência antes do tempo estabelecido pelo visto expirar. \n Anexo os meus dados, \n Nome: Rubén Eduardo Juárez, \n Passaporte: AAI472126, \n NIF: 322778123, \n NISS: 12172732785, \n Telemovel: 914142111, \n moro en Porto. \n Obrigado")

        const checkboxTerms = await page.waitForSelector(".uk-checkbox");
        await checkboxTerms.click();

        await delay(3000);

        const checkboxSend = await page.waitForSelector("#btnSubmit");
        await checkboxSend.click();
        
        await delay(3000);


        counter++; // Incrementa el contador
        console.log(`El formulario ha sido enviado ${counter} veces.`);

    } catch (error) {
        console.error(`Error en el envío del formulario: ${error}`);
    } finally {
        await browser.close();
    }   

    // Ejecutar cada 5 minutos
    setTimeout(botbardeoAima, 300000);

}
botbardeoAima()

