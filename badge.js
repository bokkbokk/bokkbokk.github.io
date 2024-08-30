const badge = document.createElement('div');
badge.style.position = 'fixed';
badge.style.bottom = '20px';
badge.style.right = '20px';
badge.style.backgroundColor = 'rgba(255, 255, 255, 0.5)';
badge.style.padding = '10px';
badge.style.borderRadius = '5px';
badge.style.cursor = 'pointer';
badge.style.zIndex = '9999';
badge.innerHTML = '<p href="index.html" style="color: black; text-decoration: none;">Home</p>';
badge.addEventListener('click', () => {
  badge.style.transition = 'transform 0.5s ease-in-out';
  badge.style.transform = 'scale(0.1)';
  setTimeout(() => {
    window.location.href = 'index.html';
  }, 500);
});
document.body.appendChild(badge);