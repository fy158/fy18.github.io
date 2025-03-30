// 滚动动画观察器
const animateOnScrollElements = document.querySelectorAll('.animate-on-scroll');

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, {
  threshold: 0.1
});

animateOnScrollElements.forEach(element => {
  observer.observe(element);
});

// 主题切换功能
const themeToggle = document.getElementById('theme-toggle');
const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)');

function setTheme(isDark) {
  if (isDark) {
    document.documentElement.style.setProperty('--primary', '#0a192f');
    document.documentElement.style.setProperty('--background', '#0a192f');
    document.documentElement.style.setProperty('--card-bg', 'rgba(10, 25, 47, 0.8)');
    document.documentElement.style.setProperty('--text', '#ccd6f6');
    document.documentElement.style.setProperty('--text-secondary', '#8892b0');
    themeToggle.querySelector('.theme-icon').textContent = '🌓';
  } else {
    document.documentElement.style.setProperty('--primary', '#f8f9fa');
    document.documentElement.style.setProperty('--background', '#f8f9fa');
    document.documentElement.style.setProperty('--card-bg', 'rgba(248, 249, 250, 0.9)');
    document.documentElement.style.setProperty('--text', '#212529');
    document.documentElement.style.setProperty('--text-secondary', '#495057');
    themeToggle.querySelector('.theme-icon').textContent = '🌒';
  }
}

// 初始化主题
const currentTheme = localStorage.getItem('theme');
if (currentTheme === 'light' || (!currentTheme && !prefersDarkScheme.matches)) {
  setTheme(false);
} else {
  setTheme(true);
}

// 切换主题事件
themeToggle.addEventListener('click', () => {
  const isDark = document.documentElement.style.getPropertyValue('--primary') === '#0a192f';
  setTheme(!isDark);
  localStorage.setItem('theme', isDark ? 'light' : 'dark');
});

// 导航栏滚动效果
const header = document.querySelector('.header');
let lastScroll = 0;

window.addEventListener('scroll', () => {
  const currentScroll = window.pageYOffset;
  
  if (currentScroll <= 0) {
    header.style.transform = 'translateY(0)';
    header.style.boxShadow = 'none';
  } else if (currentScroll > lastScroll) {
    // 向下滚动
    header.style.transform = 'translateY(-100%)';
  } else {
    // 向上滚动
    header.style.transform = 'translateY(0)';
    header.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
  }
  
  lastScroll = currentScroll;
});

// 平滑滚动
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});
