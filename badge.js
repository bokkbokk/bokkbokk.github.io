const badge = document.createElement('div');
badge.style.position = 'fixed';
badge.style.bottom = '20px';
badge.style.right = '20px';
badge.style.backgroundColor = 'rgba(255, 255, 255, 0.5)';
badge.style.padding = '10px';
badge.style.borderRadius = '5px';
badge.style.cursor = 'pointer';
badge.style.zIndex = '9999';
badge.innerHTML = '<a href="/" style="color: black; text-decoration: none;">Home</a>';
document.body.appendChild(badge);


<