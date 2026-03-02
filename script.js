// パビリオンのデータリスト
const pavilions = [
    {
        id: 1,
        name: "シグネチャーパビリオン「いのちの未来」",
        category: "プロデューサー：石黒浩",
        description: "アンドロイドと人間の境界線、そして未来の「いのち」の姿を問いかけます。",
        image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&q=80&w=800" // サンプル画像（高画質）
    },
    {
        id: 2,
        name: "日本館",
        category: "公式参加国",
        description: "「いのちの循環」をテーマに、日本の知恵と技術を結集。建築デザインにも注目。",
        image: "https://images.unsplash.com/photo-1528164344705-4754268799af?auto=format&fit=crop&q=80&w=800"
    },
    {
        id: 3,
        name: "ガンダムパビリオン（仮称）",
        category: "民間出展",
        description: "宇宙世紀の技術や未来を体験。ファン必見の没入型展示が魅力。",
        image: "https://images.unsplash.com/photo-1593305841991-05c297ba4575?auto=format&fit=crop&q=80&w=800"
    }
];

// HTMLにカードを生成して挿入する関数
function renderPavilions() {
    const container = document.getElementById('pavilion-grid');
    
    pavilions.forEach(p => {
        const card = document.createElement('div');
        card.className = 'card';
        
        card.innerHTML = `
            <img src="${p.image}" alt="${p.name}">
            <div class="card-content">
                <span class="category-tag">${p.category}</span>
                <h3>${p.name}</h3>
                <p>${p.description}</p>
            </div>
        `;
        
        container.appendChild(card);
    });
}

// 実行
document.addEventListener('DOMContentLoaded', renderPavilions);