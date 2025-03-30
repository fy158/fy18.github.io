document.addEventListener('DOMContentLoaded', function() {
  // 文章数据
  const articles = [
    {
      id: 1,
      title: "认知行为疗法的实践应用",
      date: "2025-03-15",
      category: "心理学",
      image: "5ADE5105E33B03EBD7A8F35A62865A5CEB34A767_size575_w1920_h1152.jpg",
      content: `
        <p>认知行为疗法(Cognitive Behavioral Therapy, CBT)是一种广泛应用于心理治疗的方法，它通过改变不良认知和行为模式来改善情绪和心理健康。</p>
        
        <h2>核心原理</h2>
        <p>CBT基于一个核心理念：我们的思想、情感和行为是相互关联的。消极或不准确的思维会导致情绪困扰和行为问题。</p>
        
        <h2>日常应用</h2>
        <p>在日常生活中，我们可以运用CBT技术来管理压力、焦虑和抑郁情绪。以下是一些实用技巧：</p>
        <ul>
          <li>识别自动消极思维(ANTs)</li>
          <li>挑战认知扭曲</li>
          <li>行为实验</li>
          <li>情绪记录</li>
        </ul>
        
        <h2>我的实践心得</h2>
        <p>作为一名心理学爱好者，我发现将CBT原理应用于日常生活可以显著改善情绪管理能力。特别是在羽毛球比赛中，通过调整自我对话方式，能够更好地控制比赛压力。</p>
      `
    },
    {
      id: 2,
      title: "羽毛球运动中的心理战术",
      date: "2025-03-10",
      category: "运动心理", 
      image: "科技.png",
      content: `
        <p>羽毛球不仅是一项体力运动，更是一场心理博弈。高水平比赛中，心理因素往往成为决定胜负的关键。</p>
        
        <h2>常见心理战术</h2>
        <ul>
          <li>节奏控制：通过改变发球和击球节奏打乱对手</li>
          <li>情绪伪装：隐藏真实情绪状态</li>
          <li>注意力干扰：利用假动作和视线误导</li>
          <li>心理施压：关键分时的特殊策略</li>
        </ul>
        
        <h2>心理训练方法</h2>
        <p>基于我的训练经验，推荐以下心理训练方法：</p>
        <ul>
          <li>可视化训练</li>
          <li>正念冥想</li>
          <li>自我对话优化</li>
          <li>压力情境模拟</li>
        </ul>
        
        <h2>应用实例</h2>
        <p>在一次关键比赛中，我通过调整呼吸节奏和积极的自我暗示，成功逆转了比赛局面。这让我深刻体会到心理因素的重要性。</p>
      `
    },
    {
      id: 3,
      title: "水果与心理健康的关系",
      date: "2025-03-05",
      category: "健康心理",
      content: `
        <p>作为葡萄、西瓜和橙子的爱好者，我研究了这些水果对心理健康的潜在益处。</p>
        
        <h2>营养成分分析</h2>
        <ul>
          <li>葡萄：富含抗氧化剂和白藜芦醇</li>
          <li>西瓜：含有丰富的L-瓜氨酸</li>
          <li>橙子：维生素C的优质来源</li>
        </ul>
        
        <h2>对心理健康的影响</h2>
        <p>研究表明，这些水果中的特定成分可能通过以下途径影响心理健康：</p>
        <ul>
          <li>减少氧化应激</li>
          <li>调节神经递质水平</li>
          <li>改善脑血流</li>
          <li>降低炎症水平</li>
        </ul>
        
        <h2>个人体验</h2>
        <p>通过调整饮食结构，增加这些水果的摄入量后，我注意到自己的情绪稳定性和认知功能有所改善。特别是在高强度心理学学习后，西瓜汁能帮助我快速恢复精力。</p>
      `
    }
  ];

  // 获取DOM元素
  const articleLinks = document.querySelectorAll('.article-link');
  const articleModal = document.querySelector('.article-modal');
  const closeModal = document.querySelector('.close-modal');
  const modalContent = document.querySelector('.modal-content');
  const articleDetailTitle = document.querySelector('.article-detail-title');
  const articleDetailDate = document.querySelector('.article-date');
  const articleDetailCategory = document.querySelector('.article-category');
  const articleDetailImage = document.querySelector('.article-detail-image');
  const articleDetailContent = document.querySelector('.article-detail-content');

  // 为每篇文章链接添加点击事件
  articleLinks.forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      const articleId = parseInt(this.getAttribute('data-article-id'));
      const article = articles.find(a => a.id === articleId);
      
      if (article) {
        showArticleDetail(article);
      }
    });
  });

  // 显示文章详情
  function showArticleDetail(article) {
    articleDetailTitle.textContent = article.title;
    articleDetailDate.textContent = article.date;
    articleDetailCategory.textContent = article.category;
    
    // 设置文章图片
    if (article.image) {
      articleDetailImage.innerHTML = `<img src="${article.image}" alt="${article.title}" loading="lazy">`;
    } else {
      articleDetailImage.innerHTML = '';
    }
    
    // 设置文章内容
    articleDetailContent.innerHTML = article.content;
    
    // 显示模态框
    articleModal.style.display = 'block';
    document.body.style.overflow = 'hidden';
    
    // 添加滚动动画
    setTimeout(() => {
      modalContent.style.transform = 'translateY(0)';
      modalContent.style.opacity = '1';
    }, 10);
  }

  // 关闭模态框
  closeModal.addEventListener('click', function() {
    closeArticleModal();
  });

  // 点击模态框外部关闭
  articleModal.addEventListener('click', function(e) {
    if (e.target === articleModal) {
      closeArticleModal();
    }
  });

  // 关闭文章模态框
  function closeArticleModal() {
    modalContent.style.transform = 'translateY(-20px)';
    modalContent.style.opacity = '0';
    
    setTimeout(() => {
      articleModal.style.display = 'none';
      document.body.style.overflow = 'auto';
    }, 300);
  }

  // 初始化滚动动画
  const animateOnScrollElements = document.querySelectorAll('.animate-on-scroll');
  
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

  animateOnScrollElements.forEach(el => {
    observer.observe(el);
  });
});
