// Your code here.
let isDragging = false;
    let startX;

    const items = document.querySelector('.items');

    items.addEventListener('mousedown', (e) => {
      isDragging = true;
      startX = e.clientX - items.offsetLeft;
      items.classList.add('active');
    });

    items.addEventListener('mousemove', (e) => {
      if (!isDragging) return;
      e.preventDefault();
      
      const x = e.clientX - startX;
      items.scrollLeft = -x;
    });

    items.addEventListener('mouseup', () => {
      isDragging = false;
      items.classList.remove('active');
    });

    items.addEventListener('mouseleave', () => {
      isDragging = false;
      items.classList.remove('active');
    });