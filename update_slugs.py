import os
import re

slugs = {
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
    "es-20-character-alphanumeric-password-generator": "generador-de-contrasenas-aleatorias-de-20-caracteres-con-letras-y-numeros", # fallback
    "es-pronounceable-password-generator-guide-for-seniors": "guia-del-generador-de-contrasenas-pronunciables-para-personas-mayores",
    "es-creating-strong-master-password-for-password-managers": "como-crear-una-contrasena-maestra-segura-para-gestores-de-contrasenas"
}

post_files = [f"src/lib/posts/post{str(i).zfill(2)}_es.ts" for i in range(1, 11)]

for fpath in post_files:
    if os.path.exists(fpath):
        with open(fpath, "r", encoding="utf-8") as f:
            content = f.read()
        
        # Replace the main slug
        for old_slug, new_slug in slugs.items():
            content = content.replace(f'slug: "{old_slug}"', f'slug: "{new_slug}"')
            
            # Replace inner HTML links
            content = content.replace(f'/blog/{old_slug}', f'/blog/{new_slug}')

            # Also replace if it was without es- prefix?
            orig_en = old_slug[3:]
            content = content.replace(f'/blog/{orig_en}', f'/blog/{new_slug}')
            
        with open(fpath, "w", encoding="utf-8") as f:
            f.write(content)
        print(f"Updated {fpath}")
