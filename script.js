// パビリオンのデータリスト（詳細解説付き）
const pavilions = [
    { 
        id: 1, 
        name: "日本館", 
        category: "公式参加国", 
        description: "「いのちの循環」をテーマに、ホスト国として未来の生き方を提示。",
        details: "世界最大級の木造建築である「大屋根（リング）」と調和する、竹を用いた膜構造の外観が特徴。内部では、日本の食文化や技術がどう循環していくかを没入型映像で体験できます。",
        image: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?w=800" 
    },
    { 
        id: 2, 
        name: "シグネチャー：いのちの未来", 
        category: "シグネチャー", 
        description: "石黒浩教授がプロデュースする、人間とロボットの未来。",
        details: "最新のアンドロイド技術を駆使し、「人間とは何か」を問いかけます。自分自身のデジタルツインや分身ロボットを通じて、身体の制約を超えた未来の生活を体験できます。",
        image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800" 
    },
    { 
        id: 3, 
        name: "GUNDAM Next Future Pavilion", 
        category: "民間出展", 
        description: "ガンダムを通じて、宇宙世紀の技術と社会課題を考える。",
        details: "実物大ガンダム像の展示に加え、ガンダムの世界観をベースにした「宇宙での暮らし」や「環境問題」を学ぶ展示。ファンのみならず、未来のテクノロジーに関心がある層を魅了します。",
        image: "https://images.unsplash.com/photo-1608889175123-8ee362201f81?w=800" 
    },
    { 
        id: 4, 
        name: "アメリカ館", 
        category: "公式参加国", 
        description: "「Imagine What We Can Create Together」をテーマにした革新の場。",
        details: "米国の宇宙開発（アルテミス計画）やAI技術の進化を展示。オープンな民主主義が育むイノベーションの精神を、ダイナミックなシアター体験で紹介します。",
        image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=800" 
    },
    { 
        id: 5, 
        name: "大阪ヘルスケアパビリオン", 
        category: "自治体", 
        description: "「REBORN」をテーマに、2050年の健康な自分に会える場所。",
        details: "来場者のパーソナルデータをその場で解析。未来のあなたの姿や健康状態をシミュレーションし、最適なライフスタイルを提案する「未来の病院」のような体験が可能です。",
        image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800" 
    },
    { 
        id: 6, 
        name: "ドイツ館", 
        category: "公式参加国", 
        description: "「わ（Wa!）ドイツ」をテーマに、循環型社会を楽しく学ぶ。",
        details: "自然と技術の調和を重視した木造建築。内部では、サーキュラーエコノミー（循環型経済）の実例を、ゲーム感覚で学べるインタラクティブな展示が並びます。",
        image: "https://images.unsplash.com/photo-1467269204594-9661b134dd2b?w=800" 
    },
    { 
        id: 7, 
        name: "三菱未来館", 
        category: "民間出展", 
        description: "「空想の旅」を通じて、いのちの始まりと未来を冒険する。",
        details: "深海から宇宙までを舞台にした圧倒的なスケールのライド型アトラクション。地球上のいのちがいかに繋がり、未来へ続いていくかをドラマチックに描きます。",
        image: "https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?w=800" 
    },
    { 
        id: 8, 
        name: "フランス館", 
        category: "公式参加国", 
        description: "「愛、讃歌」をテーマに、愛と自由、そして持続可能性を表現。",
        details: "五感を刺激する展示が特徴。フランスらしい洗練されたデザインのなかで、環境保護とラグジュアリーがいかに共存できるかというメッセージを伝えます。",
        image: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=800" 
    },
    { 
        id: 9, 
        name: "シグネチャー：いのちの遊び場", 
        category: "シグネチャー", 
        description: "中島さち子氏。数学と音楽、芸術が混ざり合う創造の空間。",
        details: "巨大な「クラゲ」のような建築構造が特徴。子どもから大人まで、楽器を奏でたりパズルを解いたりすることで、知的好奇心と想像力を爆発させる場所です。",
        image: "https://images.unsplash.com/photo-1514525253361-bee87187030c?w=800" 
    },
    { 
        id: 10, 
        name: "中国館", 
        category: "公式参加国", 
        description: "「人、自然、調和」をテーマに、伝統の巻物をイメージした建築。",
        details: "中国の伝統的な竹簡（ちくかん）をモチーフにした外観。最新のグリーンエネルギー技術と、数千年にわたる文明の歴史が融合した展示内容となっています。",
        image: "https://images.unsplash.com/photo-1547981609-4b6bfe67ca0b?w=800" 
    },
    { 
        id: 11, 
        name: "サントリー館", 
        category: "民間出展", 
        description: "「水」をテーマに、自然との共生を考える没入体験。",
        details: "水が循環する様子を光と音で表現。私たちが飲む一滴の水が、どれほどの長い年月を経て届いているのかを体感し、自然保護の重要性を再認識させます。",
        image: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=800" 
    }
];

// 表示ロジック
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
                <p><strong>概要:</strong> ${p.description}</p>
                <p class="details-text" style="display:none;">${p.details}</p>
                <button class="more-btn" onclick="toggleDetails(this)">詳しく見る</button>
            </div>
        `;
        container.appendChild(card);
    });
}

// 詳細表示の切り替え
function toggleDetails(btn) {
    const details = btn.previousElementSibling;
    if (details.style.display === "none") {
        details.style.display = "block";
        btn.innerText = "閉じる";
    } else {
        details.style.display = "none";
        btn.innerText = "詳しく見る";
    }
}

// フィルターイベント（以前と同じ）
document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
        document.querySelector('.filter-btn.active').classList.remove('active');
        e.target.classList.add('active');
        render(e.target.dataset.category);
    });
});

document.addEventListener('DOMContentLoaded', () => render());
