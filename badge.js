const badge = document.createElement('div');
badge.style.position = 'fixed';
badge.style.bottom = '20px';
badge.style.right = '20px';
badge.style.backgroundColor = 'rgba(25, 40, 25, 0.5)';
badge.style.padding = '10px';
badge.style.borderRadius = '5px';
badge.style.cursor = 'pointer';
badge.style.zIndex = '9999';
badge.innerHTML = '<a href="/" style="color: black; text-decoration: none;">Home</a>';
badge.addEventListener('click', () => {
  window.location.href = '/';
});
document.body.appendChild(badge);