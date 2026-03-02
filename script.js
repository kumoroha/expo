// パビリオンのデータリスト（主要なものを網羅）
const pavilions = [
    { id: 1, name: "日本館", category: "公式参加国", description: "「いのちの循環」をテーマに、伝統と革新が融合したホスト国パビリオン。", image: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?w=800" },
    { id: 2, name: "シグネチャー：いのちの未来", category: "シグネチャー", description: "石黒浩教授による、アンドロイドと未来のいのちを考える展示。", image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800" },
    { id: 3, name: "ガンダムパビリオン", category: "民間出展", description: "宇宙世紀を現実に。ガンダムを通じて未来の課題を提示します。", image: "https://images.unsplash.com/photo-1608889175123-8ee362201f81?w=800" },
    { id: 4, name: "アメリカ館", category: "公式参加国", description: "「Imagine What We Can Create Together」をテーマに、米国の革新性を紹介。", image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=800" },
    { id: 5, name: "大阪ヘルスケアパビリオン", category: "自治体", description: "「REBORN」をテーマに、2050年の健康な暮らしを体験。", image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800" },
    { id: 6, name: "ドイツ館", category: "公式参加国", description: "「わ（Wa!）ドイツ」をテーマに、循環経済と自然との共生を表現。", image: "https://images.unsplash.com/photo-1467269204594-9661b134dd2b?w=800" },
    { id: 7, name: "三菱未来館", category: "民間出展", description: "「深海・地中・宇宙」を旅し、いのちの始まりを体験するライド型展示。", image: "https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?w=800" },
    { id: 8, name: "シグネチャー：いのちを響き合わせる", category: "シグネチャー", description: "中島さち子氏。数学・音楽・芸術が交差する創造の場。", image: "https://images.unsplash.com/photo-1514525253361-bee87187030c?w=800" },
    { id: 9, name: "韓国館", category: "公式参加国", description: "デジタル技術を活用し、繋がりが生み出す未来の文化を提示。", image: "https://images.unsplash.com/photo-1538481199705-c710c4e965fc?w=800" },
    { id: 10, name: "パナソニックグループ館", category: "民間出展", description: "「ノモの国」をテーマに、子供たちの想像力を解き放つ空間。", image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800" },
    { id: 11, name: "サウジアラビア館", category: "公式参加国", description: "巨大な構造物と最新技術で、砂漠の国の変革を表現。", image: "https://images.unsplash.com/photo-1541410965313-d53b3c16ef17?w=800" },
    { id: 12, name: "シグネチャー：いのちを拡げる", category: "シグネチャー", description: "宮田裕章氏。データと共創が作る新しい社会の形。", image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=800" }
];

// 表示関数
function render(filter = "all") {
    const container = document.getElementById('pavilion-grid');
    container.innerHTML = "";

    const filtered = filter === "all" ? pavilions : pavilions.filter(p => p.category.includes(filter));

    filtered.forEach(p => {
        const card = document.createElement('div');
        card.className = 'card';
        card.innerHTML = `
            <img src="${p.image}" alt="${p.name}" loading="lazy">
            <div class="card-content">
                <span class="category-tag">${p.category}</span>
                <h3>${p.name}</h3>
                <p>${p.description}</p>
            </div>
        `;
        container.appendChild(card);
    });
}

// フィルターイベント
document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
        document.querySelector('.filter-btn.active').classList.remove('active');
        e.target.classList.add('active');
        render(e.target.dataset.category);
    });
});

document.addEventListener('DOMContentLoaded', () => render());
