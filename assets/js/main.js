// 主要JavaScript功能 - 移动优先交互

document.addEventListener('DOMContentLoaded', function() {
  // 导航栏滚动效果
  initNavbarScroll();

  // 汉堡菜单
  initHamburgerMenu();

  // 返回顶部按钮
  initBackToTop();

  // 搜索功能
  initSearch();

  // 动画效果
  initAnimations();

  // 图片懒加载
  initLazyLoading();

  // 响应式图片
  initResponsiveImages();
});

// 导航栏滚动效果
function initNavbarScroll() {
  const navbar = document.querySelector('.navbar');

  window.addEventListener('scroll', () => {
    if (window.scrollY > 100) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  });
}

// 汉堡菜单功能
function initHamburgerMenu() {
  const hamburger = document.querySelector('.hamburger');
  const navMenu = document.querySelector('.nav-menu');

  if (hamburger && navMenu) {
    hamburger.addEventListener('click', () => {
      navMenu.classList.toggle('active');
      hamburger.classList.toggle('active');

      // 汉堡菜单动画
      const spans = hamburger.querySelectorAll('span');
      if (navMenu.classList.contains('active')) {
        spans[0].style.transform = 'rotate(45deg) translate(5px, 5px)';
        spans[1].style.opacity = '0';
        spans[2].style.transform = 'rotate(-45deg) translate(7px, -6px)';
      } else {
        spans[0].style.transform = 'none';
        spans[1].style.opacity = '1';
        spans[2].style.transform = 'none';
      }
    });
  }
}

// 返回顶部按钮
function initBackToTop() {
  const backToTopBtn = document.querySelector('.back-to-top');

  if (backToTopBtn) {
    // 显示/隐藏按钮
    window.addEventListener('scroll', () => {
      if (window.scrollY > 300) {
        backToTopBtn.classList.add('show');
      } else {
        backToTopBtn.classList.remove('show');
      }
    });

    // 点击返回顶部
    backToTopBtn.addEventListener('click', () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
  }
}

// 搜索功能
function initSearch() {
  const searchInput = document.querySelector('.search-input');
  const searchBtn = document.querySelector('.search-btn');

  if (searchInput && searchBtn) {
    // 搜索按钮点击
    searchBtn.addEventListener('click', performSearch);

    // 回车搜索
    searchInput.addEventListener('keypress', (e) => {
      if (e.key === 'Enter') {
        performSearch();
      }
    });
  }
}

function performSearch() {
  const searchInput = document.querySelector('.search-input');
  const query = searchInput.value.trim().toLowerCase();

  if (!query) {
    alert('请输入搜索关键词');
    return;
  }

  // 这里可以实现实际的搜索逻辑
  // 例如：过滤文章、显示搜索结果等
  console.log('搜索关键词:', query);

  // 示例：简单的客户端搜索
  const posts = document.querySelectorAll('.post-card');
  let found = false;

  posts.forEach(post => {
    const title = post.querySelector('.post-title').textContent.toLowerCase();
    const excerpt = post.querySelector('.post-excerpt').textContent.toLowerCase();
    const tags = Array.from(post.querySelectorAll('.tag')).map(tag =>
      tag.textContent.toLowerCase()
    );

    const matches = title.includes(query) ||
                   excerpt.includes(query) ||
                   tags.some(tag => tag.includes(query));

    if (matches) {
      post.style.display = 'block';
      found = true;
    } else {
      post.style.display = 'none';
    }
  });

  if (!found) {
    showNoResults();
  }
}

function showNoResults() {
  // 显示无搜索结果的提示
  const postsGrid = document.querySelector('.posts-grid');
  if (postsGrid) {
    const noResults = document.createElement('div');
    noResults.className = 'no-results';
    noResults.innerHTML = `
      <h3>没有找到相关内容</h3>
      <p>请尝试其他关键词</p>
    `;

    // 移除之前的无结果提示
    const existingNoResults = postsGrid.querySelector('.no-results');
    if (existingNoResults) {
      existingNoResults.remove();
    }

    postsGrid.appendChild(noResults);
  }
}

// 动画效果
function initAnimations() {
  // 观察元素进入视口
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('fade-in');
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  // 观察需要动画的元素
  const animateElements = document.querySelectorAll('.post-card, .article-content > *');
  animateElements.forEach(element => {
    observer.observe(element);
  });
}

// 图片懒加载
function initLazyLoading() {
  const images = document.querySelectorAll('img[data-src]');

  const imageObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const img = entry.target;
        img.src = img.dataset.src;
        img.classList.remove('lazy');
        imageObserver.unobserve(img);
      }
    });
  });

  images.forEach(img => imageObserver.observe(img));
}

// 响应式图片
function initResponsiveImages() {
  const images = document.querySelectorAll('img');

  images.forEach(img => {
    // 确保图片有alt属性
    if (!img.alt) {
      console.warn('图片缺少alt属性:', img.src);
    }

    // 添加加载错误处理
    img.addEventListener('error', function() {
      console.error('图片加载失败:', this.src);
      this.style.display = 'none';
    });
  });
}

// 平滑滚动到锚点
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();

    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      const offsetTop = target.offsetTop - 80; // 考虑导航栏高度

      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
    }
  });
});

// 键盘导航支持
document.addEventListener('keydown', (e) => {
  // ESC键关闭汉堡菜单
  if (e.key === 'Escape') {
    const navMenu = document.querySelector('.nav-menu');
    const hamburger = document.querySelector('.hamburger');

    if (navMenu && navMenu.classList.contains('active')) {
      navMenu.classList.remove('active');
      hamburger.classList.remove('active');
    }
  }
});

// 触摸设备优化
if ('ontouchstart' in window) {
  document.body.classList.add('touch-device');

  // 为触摸设备添加更大的点击区域
  const clickableElements = document.querySelectorAll('a, button, .tag');
  clickableElements.forEach(element => {
    element.style.minHeight = '44px';
    element.style.minWidth = '44px';
  });
}

// 打赏边栏功能
function initDonationSidebar() {
  const donationSidebar = document.querySelector('.donation-sidebar');
  const donationToggle = document.querySelector('.donation-toggle');
  const donationClose = document.querySelector('.donation-close');

  if (!donationSidebar || !donationToggle) return;

  // 点击触发按钮显示边栏
  donationToggle.addEventListener('click', function(e) {
    e.preventDefault();
    donationSidebar.classList.toggle('open');
  });

  // 点击关闭按钮隐藏边栏
  if (donationClose) {
    donationClose.addEventListener('click', function() {
      donationSidebar.classList.remove('open');
    });
  }

  // 点击边栏外部区域关闭边栏
  document.addEventListener('click', function(e) {
    if (!donationSidebar.contains(e.target) && !donationToggle.contains(e.target)) {
      donationSidebar.classList.remove('open');
    }
  });

  // ESC键关闭边栏
  document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape' && donationSidebar.classList.contains('open')) {
      donationSidebar.classList.remove('open');
    }
  });

  // 防止边栏内容区域的点击冒泡
  const donationContent = document.querySelector('.donation-content');
  if (donationContent) {
    donationContent.addEventListener('click', function(e) {
      e.stopPropagation();
    });
  }
}

// 性能监控
function initPerformanceMonitoring() {
  // Core Web Vitals 监控
  if ('web-vitals' in window) {
    import('https://unpkg.com/web-vitals@3.1.0/dist/web-vitals.es5.min.js').then(({getCLS, getFID, getFCP, getLCP, getTTFB}) => {
      getCLS(console.log);
      getFID(console.log);
      getFCP(console.log);
      getLCP(console.log);
      getTTFB(console.log);
    });
  }
}

// 页面可见性API - 节省资源
document.addEventListener('visibilitychange', () => {
  if (document.hidden) {
    // 页面不可见时暂停非必要动画
    document.body.classList.add('page-hidden');
  } else {
    // 页面重新可见时恢复
    document.body.classList.remove('page-hidden');
  }
});

// 初始化打赏边栏
initDonationSidebar();

// 初始化性能监控
initPerformanceMonitoring();

// Service Worker 注册（用于离线支持和缓存）
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/sw.js')
      .then(registration => {
        console.log('Service Worker 注册成功:', registration.scope);
      })
      .catch(error => {
        console.log('Service Worker 注册失败:', error);
      });
  });
}