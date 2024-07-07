const blogServices = document.getElementById('blogServices');

blogServices.addEventListener('click', function () {
    const isExpanded = blogServices.getAttribute('aria-expanded') === 'true';

    if (isExpanded) {
      blogServices.textContent = 'View Less';
    } else {
      blogServices.textContent = 'View More';
    }
  });