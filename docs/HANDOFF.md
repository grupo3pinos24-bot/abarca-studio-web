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
---

## Sesión 10 Jul 2026 — Estrategia de copy: neuroventas / "Véndele a la mente, no a la gente"

### Contexto
Se rediseñó el copy del sitio con el marco de neuroventas (Jürgen Klarić),
disparado por una reacción real del padrino al ver la aplicación:
"eso para mí genera tranquilidad". Se identificó que el copy anterior lideraba
con miedo/urgencia regulatoria como emoción principal — se reposicionó esa
emoción como respaldo racional, y "tranquilidad" pasó a ser el eje central.

### Decisiones de copy (texto final acordado, pendiente de aplicar a index.html)
- H1 nuevo: enfoque en escena concreta ("vete de vacaciones, tu centro sigue
  en orden") en vez del concepto abstracto de tranquilidad — el cerebro
  reacciona mejor a imágenes visualizables que a conceptos sueltos.
- Testimonio del padrino: se incluye SIN nombre — atribuido como
  "Dueño, Tres Pinos". Decisión explícita del usuario para evitar exponer
  el nombre real; también resuelve el pendiente de consentimiento.
- Orden de secciones cambiado: Hero (emocional) → Testimonio → Qué incluye
  (racional/tangible primero) → Lo que se resuelve (dolor + cierre emocional)
  → En uso real → CTA final. Se decidió mostrar "Qué incluye" antes de
  "Lo que se resuelve" por ser más claro para el lector.
- Sección de gobierno/regulación (banner de reforma + panorama-nacional):
  POSPUESTA Y RETIRADA del copy actual por decisión del usuario. No se
  borra el trabajo de investigación previo (dato Edomex, Coprisem, 53
  centros clausurados) — queda documentado en la sesión 1 Jul 2026 de este
  mismo archivo para retomar cuando se decida reincorporar el ángulo.
- Precio actualizado: $800 MXN/mes por centro (antes $500).
- Precio fundador: "primeros 100 centros" (antes "primeros 10"). Nota de
  Claude entregada al usuario: cambia el instinto que dispara el mensaje
  (urgencia/escasez con 10 vs. estabilidad/precio de lista con 100) —
  decisión del usuario, no revertida.

### Estado
- Texto final acordado en chat, NO aplicado aún a index.html — el usuario
  pidió explícitamente no regenerar el archivo hasta nueva confirmación.
- Backlog activo #3 ("Revisar copy con tono real del equipo") se da por
  cubierto en cuanto se aplique este texto al archivo real.

### Siguiente sesión
1. Usuario confirma si el CTA final ("¿puedes irte de vacaciones sin
   cargar tu centro contigo?") representa bien al cliente objetivo.
2. Aplicar el texto acordado a index.html (hero, testimonio, orden de
   secciones, precio, CTA final) — reemplaza el contenido actual, retira
   banner de reforma y panorama-nacional del render (sin borrar el dato
   de investigación, que queda en este HANDOFF).
3. Confirmar antes de push a master (Directiva 4/8 — deploy automático).
4. Retomar backlog #8 (estrategia de gobierno) cuando el usuario lo indique.
