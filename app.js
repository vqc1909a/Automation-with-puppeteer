const puppeteer = require('puppeteer');

(async () => {
    try {
        const browser = await puppeteer.launch({headless: false}); // Abre un nuevo navegador Chromium
        const page = await browser.newPage(); // Crea una nueva página en el navegador

        await page.goto('https://citaspasaporte.migraciones.gob.pe/citas-pasaporte-v2/programar-cita'); // Navega a la página deseada
        await page.setViewport({width: 2560, height: 1440});
        
        // Espera a que el elemento select sea visible para darle click
        const mat_select = await page.waitForSelector('#mat-select-0');
        await mat_select.click();

        // Selecciona la opción deseada del select
        await page.waitForSelector("span[class='mat-option-text']");
        const mat_options = await page.$$("span[class='mat-option-text']");
        const huancayo_option = mat_options[7]
        huancayo_option.click()

        //await page.select('#mat-select-0', 'ÁNCASH - CHIMBOTE');

        // Marcar el CAptcha
        const captcha = await page.waitForSelector("#recaptcha-anchor");
        captcha.click();

        // Cierra el navegador
        console.log("Todo bien")
        //await browser.close();
    } catch (err) {
        console.log(err);
        process.exit(1);    
    }
})();

// No, hacer clic en un captcha utilizando Puppeteer no es una tarea simple, ya que los captchas están diseñados específicamente para evitar la automatización. La idea detrás de un captcha es presentar un desafío que solo un ser humano debería ser capaz de resolver, y las técnicas que se utilizan para resolver captchas son, por lo tanto, bastante complejas.

// Es posible que algunos tipos de captcha se puedan resolver con métodos más simples, pero esto dependerá del tipo de captcha y de cómo esté implementado en la página web que estés automatizando. Algunos captchas pueden ser resueltos mediante el uso de servicios de terceros que utilizan el aprendizaje automático y otros enfoques avanzados para resolver captchas de manera efectiva.

// Sin embargo, ten en cuenta que el uso de servicios de terceros para resolver captchas puede no ser legal o ético en algunas situaciones. Además, es posible que los servicios de terceros no puedan resolver todos los tipos de captcha y que debas buscar soluciones personalizadas en función del captcha que estés intentando resolver.