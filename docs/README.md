# abarca-studio-web

Landing page de Abarca² Studio — sitio de marketing para Tres Pinos ERP.

## Propósito
Página de captación con CTA único (WhatsApp) dirigida a directores de centros
de tratamiento. Separado de `tres-pinos-admin` (la aplicación ERP en sí) y de
`VENTAS.md` (que vive en tres-pinos-admin/docs — seguimiento comercial,
single source of truth, no se duplica aquí).

## Stack
- HTML + CSS puro, sin framework ni build step
- Sin backend — sitio estático

## Estructura
```
abarca-studio-web/
├── index.html       # página única
└── docs/
    ├── README.md     # este archivo
    └── ROADMAP.md    # pendientes del sitio
```

## Cómo correr en local
1. Abrir la carpeta en VS Code
2. Extensión "Live Server" → clic derecho en index.html → "Open with Live Server"

## Deploy
- Opción rápida: arrastrar carpeta a netlify.com/drop
- Opción con control de versiones: conectar repo a Netlify/Vercel/GitHub Pages

## Referencias
- Pipeline comercial y clientes: ver `tres-pinos-admin/docs/VENTAS.md`
