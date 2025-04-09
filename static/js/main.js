// main.js
function addNavigationButtons() {
  // 创建按钮容器
  const container = document.createElement('div');
  container.classList.add('nav-buttons');

  // 创建返回上一页按钮
  const backButton = document.createElement('button');
  backButton.innerHTML = '← 返回上一页';
  backButton.onclick = () => window.history.back();

  // 创建返回首页按钮
  const homeButton = document.createElement('button');
  homeButton.innerHTML = '🏠 返回首页';
  homeButton.onclick = () => window.location.href = 'https://jousimies.github.io';

  // 添加按钮到容器
  container.appendChild(backButton);
  container.appendChild(homeButton);

  // 将按钮容器添加到 body
  document.body.appendChild(container);
}

// 等页面加载完后，添加导航按钮
window.onload = addNavigationButtons;
