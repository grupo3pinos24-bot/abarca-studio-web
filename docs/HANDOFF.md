# HANDOFF.md — abarca-studio-web
> Última actualización: 30 Jun 2026

## Propósito
Documento de traspaso técnico: estado actual del proyecto, decisiones tomadas,
y qué necesita saber alguien que retome el trabajo (incluyendo Claude en una
sesión nueva). Separado de ROADMAP.md (pendientes/tareas) y de VENTAS.md
(que vive en tres-pinos-admin/docs — no se duplica aquí).

---

## Qué es este proyecto
Landing page de una sola página para Abarca² Studio, con el objetivo de dar
soporte al outreach comercial de Tres Pinos ERP (ver tres-pinos-admin/docs/VENTAS.md).
CTA único: contacto directo por WhatsApp. Sin backend, sin build step — HTML/CSS puro.

## Stack y estructura
- `index.html` — página completa (HTML + CSS inline, sin dependencias externas
  salvo Google Fonts vía CDN: Courier Prime + Lora)
- Sin framework, sin npm, sin build — se edita y se sirve directo
- Repo de git separado de `tres-pinos-admin` (decisión intencional — ver
  sección "Decisiones" abajo)

## Estado actual (30 Jun 2026)
- Diseño y copy inicial completos
- CTA de WhatsApp configurado con número personal del usuario (atendido
  directamente, no es número del centro Tres Pinos ni de terceros)
- Repo de git inicializado localmente, con commits locales — **aún no
  conectado a GitHub ni publicado**
- Carpeta `docs/` con README.md, ROADMAP.md, HANDOFF.md (este archivo)

## Decisiones clave
1. **Repo separado de tres-pinos-admin.** Son proyectos distintos (ERP vs.
   marketing) — se evita mezclar código, historial de git, y dependencias.
2. **VENTAS.md no se duplica aquí.** Sigue viviendo en
   `tres-pinos-admin/docs/VENTAS.md` como single source of truth del pipeline
   comercial. Esta web no necesita leerlo para funcionar.
3. **Sin framework.** Página estática simple — no se justifica complejidad
   adicional (React, build tools) para una sola página con un solo CTA.
4. **Diseño con identidad propia.** Estética de "registro/ledger" (sello,
   tipografía de máquina de escribir) en vez de plantilla genérica de SaaS —
   intencional, conecta con el problema real que resuelve Tres Pinos ERP.

## Pendiente antes de publicar
Ver `docs/ROADMAP.md` para la lista completa. Bloqueante principal: aún no
está publicado (falta Netlify Drop o conexión a GitHub + hosting).

## Cómo retomar el trabajo
1. Abrir la carpeta `abarca-studio-web` en su propia ventana de VS Code
   (no mezclar con tres-pinos-admin)
2. Live Server para ver cambios en vivo
3. Editar `index.html` directo en el editor — **nunca pegar texto con acentos
   o símbolos especiales en PowerShell** (causa corrupción de encoding; ya
   pasó una vez con ROADMAP.md). Editar siempre desde el editor de VS Code.
4. Commits con `git add . && git commit -m "..."` desde la terminal integrada
