(function () {
  document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('[data-accordion]').forEach((accordion) => {
      const items = accordion.querySelectorAll('[data-accordion-item]');
      const single = accordion.hasAttribute('data-single');

      items.forEach((item) => {
        const trigger = item.querySelector('[data-accordion-trigger]');
        const content = item.querySelector('[data-accordion-content]');
        const icon = item.querySelector('[data-accordion-icon]');

        trigger.addEventListener('click', () => {
          const isActive = item.classList.contains('active');

          if (single) {
            items.forEach((i) => {
              i.classList.remove('active');
              i.querySelector('[data-accordion-content]').style.maxHeight = null;
              i.querySelector('[data-accordion-icon]')?.classList.remove('active-icon');
            });
          }

          if (!isActive) {
            item.classList.add('active');
            content.style.maxHeight = content.scrollHeight + 'px';
            icon?.classList.add('active-icon');
          } else {
            item.classList.remove('active');
            content.style.maxHeight = null;
            icon?.classList.remove('active-icon');
          }
        });
      });
    });
  });
})();
