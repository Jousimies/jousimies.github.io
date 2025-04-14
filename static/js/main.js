// main.js
function addNavigationButtons() {
  // 判断是否在首页
  const isHomepage =
    window.location.pathname === '/' ||
    window.location.pathname.endsWith('/index.html');

  if (isHomepage) return; // 如果是首页，不添加按钮

  // 创建按钮容器
  const container = document.createElement('div');
  container.classList.add('nav-buttons');

  // 创建返回上一页按钮
  const backButton = document.createElement('button');
  backButton.innerHTML = '← 返回上一页';
  backButton.classList.add('back-button');
  backButton.onclick = () => window.history.back();

  // 创建返回首页按钮
  const homeButton = document.createElement('button');
  homeButton.innerHTML = '🏠 返回首页';
  homeButton.classList.add('home-button');
  homeButton.onclick = () => window.location.href = 'https://jousimies.github.io';

  // 添加按钮到容器
  container.appendChild(backButton);
  container.appendChild(homeButton);

  // 将按钮容器添加到 body
  document.body.appendChild(container);
}

// 页面加载完后执行
window.onload = addNavigationButtons;


// main.js
// 加载highlight.js并高亮代码块
// document.addEventListener("DOMContentLoaded", function() {
//   // 初始化代码高亮
//   hljs.highlightAll();
// });

// main.js
// 加载prism.js并高亮代码块
document.addEventListener("DOMContentLoaded", function() {
  Prism.highlightAll();
});

// sitemap 图标插入
document.addEventListener("DOMContentLoaded", function () {
  const sitemapLink = document.createElement("a");
  sitemapLink.href = "/posts/sitemap.html";
  sitemapLink.title = "Sitemap";
  sitemapLink.className = "sitemap-icon";
  sitemapLink.innerHTML = `
    <svg xmlns="http://www.w3.org/2000/svg" class="icon" fill="none"
         viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
      <path stroke-linecap="round" stroke-linejoin="round"
            d="M4 4h16M4 12h16M4 20h16" />
    </svg>
  `;

  document.body.appendChild(sitemapLink);
});
