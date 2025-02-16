document.addEventListener('DOMContentLoaded', () => {
    const badge = document.createElement('div');
    badge.style.position = 'fixed';
    badge.style.bottom = '20px';
    badge.style.right = '20px';
    badge.style.backgroundColor = 'rgba(25, 40, 25, 0.5)';
    badge.style.padding = '10px';
    badge.style.borderRadius = '5px';
    badge.style.cursor = 'pointer';
    badge.style.zIndex = '9999';
    badge.style.border = '1px solid #4a7023';
    badge.style.borderRadius = '5px';
    
    badge.innerHTML = '<a href="/" style="color: #99ff66; text-decoration: none;">^</a>';
    badge.addEventListener('click', () => {
        window.location.href = '/';
    });
    document.body.appendChild(badge);
});