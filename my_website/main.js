document.querySelector('.mobile-menu-toggle').addEventListener('click', () => {
    const navbar = document.querySelector('.navbar ul');
    navbar.style.display = navbar.style.display === 'flex' ? 'none' : 'flex';
  });
  