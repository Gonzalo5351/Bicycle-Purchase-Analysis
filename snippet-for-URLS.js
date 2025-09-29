// Run in the console while on the MercadoLibre favorites page.
(() => {
  const anchors = Array.from(document.querySelectorAll('a[href*="/p/"], a[href*="/MLB"]'));
  const urls = [...new Set(anchors.map(a => a.href))].filter(u => u.includes('mercadolivre') || u.includes('mercadolibre') || u.includes('mercadolivre.com.br') || u.includes('mercadolibre.com'));
  if (urls.length === 0) { console.warn('No se encontraron URLs. Asegurate de estar en la vista de favoritos.'); return; }
  const text = urls.join('\n');
  navigator.clipboard.writeText(text).then(()=>console.log('Copiadas', urls.length, 'URLs al portapapeles.'));
  console.log(urls.slice(0,50));
})();
