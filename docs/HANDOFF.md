# HANDOFF.md — abarca-studio-web
> Última actualización: 30 Jun 2026 | Abarca² Studio

## Primer comando
Sin build — clic derecho en index.html → "Open with Live Server" (VS Code)

---

## DIRECTIVAS
1. Solo PowerShell — un comando a la vez, sin &&
2. Edición de texto con acentos/símbolos especiales (á é í ó ú ñ — ²) SIEMPRE en el
   editor de VS Code — NUNCA pegado directo en la terminal de PowerShell. Causa
   corrupción de encoding silenciosa (incidente real 30 Jun 2026, ver Bugs resueltos).
3. Si es indispensable escribir texto con acentos desde PowerShell: usar heredoc
   @"..."@ con Out-File -Encoding utf8. NUNCA Get-Content sin -Encoding UTF8
   explícito tanto en lectura como en escritura — la falta de uno solo corrompe el archivo.
4. Confirmar antes de republicar a Netlify — sobrescribe la versión en producción
   sin aviso ni rollback automático.
5. Método Elon: causa raíz antes de parchear.
6. Kaizen: mejora incremental visible cada sesión.
7. Netlify Drop NO se actualiza solo con git push — hay que volver a arrastrar la
   carpeta manualmente a app.netlify.com/drop tras cada cambio que deba reflejarse
   en producción. git y el sitio en línea están desacoplados hasta que se conecte
   el repo directo a Netlify (ver Backlog).

---

## Stack
HTML + CSS puro — sin build, sin framework, sin Node, sin dependencias instaladas
Fuentes: Google Fonts CDN (Courier Prime + Lora)
Repo: local únicamente — aún no conectado a GitHub
Rama: master | Path: C:\Users\G3P\abarca-studio-web
Hosting: Netlify (deploy manual vía Drop) — https://abarca2-studio.netlify.app

---

## Módulos completados

| Módulo | Notas |
|--------|-------|
| Hero + CTA principal | WhatsApp directo, número confirmado 523541356258 |
| Sección "Lo que se resuelve" | 3 puntos, estilo ledger/registro |
| Prueba social | Tinguindín + Santa Clara — solo hechos verificables, sin testimonios inventados |
| CTA final + WhatsApp flotante | mismo número, mismo mensaje precargado |
| Deploy inicial | Netlify Drop, sitio reclamado en cuenta, nombre cambiado a abarca2-studio |

---

## Bugs resueltos
- **30 Jun 2026** — ROADMAP.md corrupción de encoding (Ã©, â€”) al leer/escribir vía
  PowerShell sin -Encoding UTF8 explícito. Resuelto reescribiendo con heredoc
  @"..."@ + Out-File -Encoding utf8.
- **30 Jun 2026** — index.html publicado con placeholder de WhatsApp (52XXXXXXXXXX)
  sin reemplazar en producción. El fix se hizo en local/git pero no se reflejó
  porque Netlify Drop no jala de git automáticamente (ver Directiva 7). Resuelto
  corrigiendo el archivo local y re-arrastrando la carpeta a Netlify Drop.

---

## Backlog activo

| # | Feature | Estado |
|---|---------|--------|
| 1 | Conectar repo local a GitHub | pendiente |
| 2 | Conectar GitHub → Netlify (deploys automáticos con git push) | pendiente |
| 3 | Revisar copy con tono real del equipo | pendiente |
| 4 | Probar botón de WhatsApp en mobile real | pendiente |
| 5 | Tracking básico de visitas/clics al CTA | pendiente |
| 6 | Dominio propio (ej. abarcastudio.com) | futuro |
| 7 | Más casos de éxito conforme se sumen clientes | futuro |

---

## Reglas de negocio / decisiones
- VENTAS.md NO se duplica aquí — vive únicamente en tres-pinos-admin/docs/VENTAS.md
  (single source of truth del pipeline comercial)
- Repo separado de tres-pinos-admin de forma intencional — no mezclar ERP con marketing
- Sin framework — página de una sola pantalla con un solo CTA, no se justifica
  complejidad adicional (React, build tools)
- WhatsApp es número personal del usuario, atendido directamente — no es el
  centro Tres Pinos ni un tercero

---

## Siguiente sesión
1. Conectar repo local a GitHub (crear repo vacío, git remote add origin, git push)
2. Conectar GitHub a Netlify para deploys automáticos
3. Revisar copy con tono real del equipo
4. Probar botón de WhatsApp en celular real
5. Evaluar dominio propio