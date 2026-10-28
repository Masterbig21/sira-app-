# SIRA: riego inteligente

Prototipo de la app móvil de **SIRA**, una empresa en formación que ofrece riego inteligente para condominios y hoteles. Proyecto del Grupo 5, ramo Creación de Empresas 2, INACAP Valparaíso.

> **Importante:** esta versión es una demostración. Los sensores, la humedad, las alertas y el ahorro de agua son **simulados**. El pronóstico de Valparaíso es una captura de Meteored del 27 de octubre de 2026 y no se actualiza solo. No se envían SMS ni WhatsApp reales.

## Qué hace la app

- **Inicio:** estado de las zonas, ahorro de agua estimado y botón de emergencia (plan Premium).
- **Clima:** condiciones, próximas horas y 7 días, con la decisión de riego según la lluvia.
- **Zonas:** humedad por zona, riego manual y modo automático con rango óptimo.
- **Alertas:** avisos por SMS o WhatsApp (simulados) con teléfono configurable.
- **Planes:** Básico, Estándar y Premium, y qué incluye cada uno.
- **Ubicaciones:** una demostración fija y la opción de agregar ubicaciones propias, con superficie, zonas y sensores.

## Planes (precios referenciales)

| Plan | Mensual | Incluye |
|---|---|---|
| Básico | $95.000 | Riego automático, monitoreo remoto, soporte base |
| Estándar | $103.000 | Todo lo del Básico, pronóstico, alertas, app |
| Premium | $201.000 | Todo lo del Estándar, reportes de ahorro y ESG, SLA y soporte 24/7 |

Los precios son supuestos que se validan con entrevistas y cotizaciones reales.

## Equipo

Bastián, Joaquín, Etihel, Oscar y Vanderlei.

## Cómo usarla

Es una página estática (`index.html`), sin instalación.

1. Abre `index.html` en el navegador, o publica el repositorio con **GitHub Pages**: *Settings → Pages → Deploy from a branch → `main` → `/ (root)`*.
2. En el celular, abre el enlace y elige **Añadir a pantalla de inicio** para instalarla.

## Próximos pasos

- Conectar un ESP32 con sensor de humedad de suelo a ThingSpeak.
- Alertas reales con un bot de Telegram.
- Pronóstico en vivo mediante un servidor.
- Historial de humedad por zona y horarios de riego.
- Ahorro editable y medición del consumo con medidor de agua.
