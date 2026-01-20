// selector.js
(function () {
  const ROOT_SELECTOR = '.product_selector-content';
  const BLOCK_SELECTOR = '.product-selector_block';
  const OUTER_SELECTOR = '.product-selector_outer';
  const ACTIVE_CLASS = 'active';

  const root = document.querySelector(ROOT_SELECTOR);
  if (!root) return;

  /**
   * Remove active class from blocks in the same group
   */
  function clearActive(outer) {
    outer
      .querySelectorAll(`${BLOCK_SELECTOR}.${ACTIVE_CLASS}`)
      .forEach((el) => el.classList.remove(ACTIVE_CLASS));
  }

  /**
   * Handle click on product block
   */
  function onBlockClick(event) {
    const block = event.target.closest(BLOCK_SELECTOR);
    if (!block || !root.contains(block)) return;

    const outer = block.closest(OUTER_SELECTOR);
    if (!outer) return;

    // 1️⃣ Reset active state in same group
    clearActive(outer);

    // 2️⃣ Activate selected block
    block.classList.add(ACTIVE_CLASS);

    // 3️⃣ Handle checkout URL
    const checkoutUrl = block.dataset.champsUrl;
    if (checkoutUrl) {
      // Option A: redirect
      // window.location.href = checkoutUrl;

      // Option B: update CTA button
      const checkoutBtn = document.querySelector('[data-checkout-btn]');
      if (checkoutBtn) {
        checkoutBtn.setAttribute('href', checkoutUrl);
      }
    }

    // 4️⃣ Optional debug (remove in prod)
    // console.log({
    //   group: outer.getAttribute('data'),
    //   productId: block.dataset.id,
    //   index: block.dataset.index
    // });
  }

  /**
   * Init
   */
  function init() {
    root.addEventListener('click', onBlockClick);
  }

  init();
})();
