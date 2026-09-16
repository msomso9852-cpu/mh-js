// 讀取本地 JSON 資料，模擬動態加載
fetch('data.json')
  .then(response => response.json())
  .then(data => {
    renderBanner(data.banners);
    renderNews(data.news);
    renderGames(data.games);
  })
  .catch(error => console.error('無法載入資料:', error));

// 1. 渲染 Banner
function renderBanner(banners) {
    const bannerBox = document.getElementById('banner-box');
    if(banners && banners.length > 0) {
        bannerBox.innerHTML = `<img src="${banners[0].image}" alt="${banners[0].title}">`;
    }
}

// 2. 渲染新聞列表
function renderNews(newsList) {
    const container = document.getElementById('news-list');
    if (!container) return;
    container.innerHTML = newsList.map(item => `
        <li>
            <div>
                <span class="news-tag">${item.category}</span>
                <a href="#" style="color: #f8fafc; text-decoration: none;">${item.title}</a>
            </div>
            <span style="color: #64748b; font-size: 14px;">${item.date}</span>
        </li>
    `).join('');
}

// 3. 渲染遊戲卡片
function renderGames(gamesList) {
    const container = document.getElementById('games-grid');
    if (!container) return;
    container.innerHTML = gamesList.map(game => `
        <div class="game-card">
            <img src="${game.img}" alt="${game.name}">
            <h4>${game.name}</h4>
            <p>${game.type} | ${game.tag}</p>
        </div>
    `).join('');
}
