import puppeteer from 'puppeteer';
import path from 'path';
import { fileURLToPath } from 'url';
import fs from 'fs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

(async () => {
  console.log('Iniciando Puppeteer...');
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  
  const files = [
    { name: 'og-image.svg', width: 1200, height: 630 },
    { name: 'banner.svg', width: 1500, height: 500 }
  ];
  
  for (const file of files) {
    const filePath = path.join(__dirname, 'public', file.name);
    if (!fs.existsSync(filePath)) {
      console.log(`File not found: ${file.name}`);
      continue;
    }
    
    console.log(`Renderizando ${file.name}...`);
    await page.setViewport({ width: file.width, height: file.height, deviceScaleFactor: 1 });
    
    // Load simple HTML page with image
    const htmlContent = `
      <!DOCTYPE html>
      <html>
      <head>
        <style>
          body { margin: 0; padding: 0; background: transparent; overflow: hidden; }
          img { display: block; width: ${file.width}px; height: ${file.height}px; }
        </style>
      </head>
      <body>
        <img src="file://${filePath}" />
      </body>
      </html>
    `;
    
    await page.setContent(htmlContent, { waitUntil: 'networkidle0' });
    
    // extra wait for fonts
    await new Promise(r => setTimeout(r, 2000));
    
    const outPath = file.name.replace('.svg', '.png');
    await page.screenshot({ path: path.join(__dirname, 'public', outPath), clip: {x: 0, y: 0, width: file.width, height: file.height} });
    console.log(`Salvo: public/${outPath}`);
  }

  await browser.close();
  console.log('Concluido!');
})();
