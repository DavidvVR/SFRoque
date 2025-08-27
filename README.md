# SistemaRoque Base

Este es un paquete base listo para subir a GitHub y activar GitHub Pages.

## Contenido

- **index.html** → Tu aplicación principal (versión LTR_V1.4.253 renombrada).
- **db-local.js** → Capa mínima para simular almacenamiento con `localStorage`.
- **README.md** → Instrucciones.

## Cómo usar

1. Crea un repositorio en GitHub (ej. `SistemaRoque`).
2. Sube estos archivos (`index.html`, `db-local.js`, `README.md`).
3. Activa GitHub Pages en **Settings > Pages** (branch: `main`, carpeta `/ (root)`).
4. Accede en `https://tuusuario.github.io/SistemaRoque/`.

## Pruebas de datos

Dentro de `index.html`, incluye la referencia al script de BD al final, antes de `</body>`:

```html
<script src="db-local.js"></script>
```

Ahora puedes usar `DB.get` y `DB.set` para guardar datos en el navegador.

---

Próximos pasos: migrar a Supabase, Firebase o backend propio para almacenamiento real.
