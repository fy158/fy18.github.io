document.addEventListener('DOMContentLoaded', function() {
  // 图片模态框功能
  const photoItems = document.querySelectorAll('.photo-item');
  const imageModal = document.querySelector('.image-modal');
  const modalImage = document.querySelector('.modal-image');
  const closeImageModal = document.querySelector('.close-image-modal');

  // 设置图片点击事件
  photoItems.forEach(item => {
    const photoThumbnail = item.querySelector('.photo-thumbnail');
    
    photoThumbnail.addEventListener('click', () => {
      openImageModal(photoThumbnail.src);
    });
  });

  // 打开图片模态框
  function openImageModal(imageSrc) {
    modalImage.src = imageSrc;
    imageModal.style.display = 'flex';
    document.body.style.overflow = 'hidden';
  }

  // 关闭图片模态框
  closeImageModal.addEventListener('click', () => {
    imageModal.style.display = 'none';
    modalImage.src = '';
    document.body.style.overflow = 'auto';
  });

  // 点击模态框外部关闭
  imageModal.addEventListener('click', (e) => {
    if (e.target === imageModal) {
      imageModal.style.display = 'none';
      modalImage.src = '';
      document.body.style.overflow = 'auto';
    }
  });

  // 视频模态框功能
  const videoItems = document.querySelectorAll('.video-item');
  const videoModal = document.querySelector('.video-modal');
  const modalVideo = document.querySelector('.modal-video');
  const closeModal = document.querySelector('.close-modal');

  // 设置视频点击事件
  videoItems.forEach(item => {
    const videoThumbnail = item.querySelector('.video-thumbnail');
    const playButton = item.querySelector('.play-button');
    
    playButton.addEventListener('click', (e) => {
      e.stopPropagation();
      openVideoModal(videoThumbnail.dataset.src);
    });

    videoThumbnail.addEventListener('click', () => {
      openVideoModal(videoThumbnail.dataset.src);
    });
  });

  // 打开视频模态框
  function openVideoModal(videoSrc) {
    modalVideo.src = videoSrc;
    videoModal.style.display = 'flex';
    document.body.style.overflow = 'hidden';
  }

  // 关闭视频模态框
  closeModal.addEventListener('click', () => {
    videoModal.style.display = 'none';
    modalVideo.src = '';
    document.body.style.overflow = 'auto';
  });

  // 点击模态框外部关闭
  videoModal.addEventListener('click', (e) => {
    if (e.target === videoModal) {
      videoModal.style.display = 'none';
      modalVideo.src = '';
      document.body.style.overflow = 'auto';
    }
  });

  // 图片懒加载
  const lazyImages = document.querySelectorAll('.photo-thumbnail[loading="lazy"]');
  
  if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const img = entry.target;
          img.src = img.getAttribute('src');
          observer.unobserve(img);
        }
      });
    });

    lazyImages.forEach(img => {
      imageObserver.observe(img);
    });
  }

  // 滚动动画
  const animateElements = document.querySelectorAll('.animate-on-scroll');
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animated');
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.1
  });

  animateElements.forEach(el => {
    observer.observe(el);
  });
});
