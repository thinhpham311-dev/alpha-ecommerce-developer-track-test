(function () {
  function initUGCVideo(root = document) {
    root.querySelectorAll('.product_ugc-video').forEach((wrapper) => {
      if (wrapper.dataset.init) return;
      wrapper.dataset.init = 'true';

      const video = wrapper.querySelector('video');
      const playBtn = wrapper.querySelector('.product_ugc-play');
      if (!video || !playBtn) return;

      // đảm bảo không có controls
      video.controls = false;
      video.removeAttribute('controls');

      function toggleVideo() {
        if (video.paused) {
          video.play();
          playBtn.style.display = 'none';
        } else {
          video.pause();
          playBtn.style.display = '';
        }
      }

      // click icon
      playBtn.addEventListener('click', toggleVideo);

      // click trực tiếp video
      video.addEventListener('click', toggleVideo);

      video.addEventListener('ended', () => {
        playBtn.style.display = '';
        video.currentTime = 0;
      });
    });
  }

  document.addEventListener('DOMContentLoaded', () => initUGCVideo());
  document.addEventListener('shopify:section:load', (e) => initUGCVideo(e.target));
})();
