const fs = require('fs');
const path = require('path');

const slugs = {
    "es-secure-random-password-generator-for-crypto-wallets": "generador-seguro-de-contrasenas-aleatorias-para-billeteras-cripto",
    "es-how-long-to-crack-16-character-alphanumeric-password": "cuanto-se-tarda-en-descifrar-una-contrasena-alfanumerica-de-16-caracteres",
    "es-how-to-create-a-strong-master-password-for-password-managers": "como-crear-una-contrasena-maestra-segura-para-gestores-de-contrasenas",
    "es-is-12-character-password-secure-enough-in-2026": "es-suficiente-una-contrasena-de-12-caracteres-en-2026",
    "es-secure-wifi-password-ideas-for-airbnb-hosts": "ideas-de-contrasenas-wifi-seguras-para-anfitriones-de-airbnb",
    "es-create-strong-password-without-special-characters": "crear-contrasena-segura-sin-caracteres-especiales",
    "es-best-secure-password-generator-app-for-iphone-2026": "la-mejor-app-generadora-de-contrasenas-seguras-para-iphone-en-2026",
    "es-random-password-generator-with-specific-symbols": "generador-de-contrasenas-aleatorias-con-simbolos-especificos",
    "es-passphrase-vs-password-the-critical-difference": "frase-de-contrasena-vs-contrasena-la-diferencia-critica",
    "es-20-character-random-password-generator-with-letters-and-numbers": "generador-de-contrasenas-aleatorias-de-20-caracteres-con-letras-y-numeros",
    "es-20-character-alphanumeric-password-generator": "generador-de-contrasenas-aleatorias-de-20-caracteres-con-letras-y-numeros",
    "es-pronounceable-password-generator-guide-for-seniors": "guia-del-generador-de-contrasenas-pronunciables-para-personas-mayores",
    "es-creating-strong-master-password-for-password-managers": "como-crear-una-contrasena-maestra-segura-para-gestores-de-contrasenas"
};

for (let i = 1; i <= 10; i++) {
    const idx = String(i).padStart(2, '0');
    const fpath = path.join(__dirname, `src/lib/posts/post${idx}_es.ts`);
    if (fs.existsSync(fpath)) {
        let content = fs.readFileSync(fpath, 'utf8');
        
        for (const [oldSlug, newSlug] of Object.entries(slugs)) {
            content = content.split(`slug: "${oldSlug}"`).join(`slug: "${newSlug}"`);
            content = content.split(`/blog/${oldSlug}`).join(`/blog/${newSlug}`);
            
            const origEn = oldSlug.substring(4); // Remove "es-", ah wait, it's 3 chars "es-"
            const origEnCorrect = oldSlug.substring(3);
            content = content.split(`/blog/${origEnCorrect}`).join(`/blog/${newSlug}`);
        }
        
        fs.writeFileSync(fpath, content, 'utf8');
        console.log(`Updated ${fpath}`);
    }
}
