document.getElementById('clickMe')?.addEventListener('click', () => {
  const msg = document.getElementById('msg')
  const now = new Date().toLocaleTimeString()
  if (msg) msg.textContent = `Hello — your site works! (${now})`
})
