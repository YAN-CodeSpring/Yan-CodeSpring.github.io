(function() {
    function initOCPage() {
        // 1. 暴力清除所有可能干扰的元素（包括 Hexo 自动渲染的标题和页脚）
        document.body.classList.add('oc-body-locked');

        // 创建新的根节点
        const root = document.createElement('div');
        root.id = 'oc-custom-root';

        // 页面 HTML 结构
        root.innerHTML = `
            <nav style="position:fixed; top:0; width:100%; z-index:100; padding:20px 40px; background:rgba(15,23,42,0.8); backdrop-filter:blur(10px); display:flex; justify-content:space-between; align-items:center; border-bottom:1px solid rgba(255,255,255,0.05);">
                <div style="color:white; font-weight:900; letter-spacing:2px;">AURELIA_LOG</div>
                <div style="display:flex; gap:30px; font-size:10px; color:#94a3b8; text-transform:uppercase; letter-spacing:2px;">
                    <a href="#top" style="color:inherit; text-decoration:none;">Top</a>
                    <a href="#profile" style="color:inherit; text-decoration:none;">Profile</a>
                    <a href="#visual" style="color:inherit; text-decoration:none;">Visual</a>
                </div>
            </nav>

            <div id="top" class="parallax-wrap" style="--bg-url: url('https://images.unsplash.com/photo-1614728263952-84ea206f2c40?q=80&w=1920');">
                <div class="overlay"></div>
                <div class="fade-in" style="text-align:center; position:relative; z-index:1;">
                    <h1 style="font-size: clamp(3rem, 10vw, 6rem); font-weight:900; margin:0; color:white;">奥瑞利亚</h1>
                    <p style="color:#a78bfa; font-style:italic; letter-spacing:4px;">OBSERVER FROM THE VOID</p>
                </div>
            </div>

            <div id="profile" class="content-block">
                <div style="max-width:1000px; margin:0 auto; padding:0 20px;">
                    <h2 class="fade-in" style="font-size:2rem; border-left:4px solid #7c3aed; padding-left:15px; margin-bottom:40px;">档案概览</h2>
                    <div class="acc-item fade-in">
                        <div class="acc-trigger">01. 基础特征</div>
                        <div class="acc-panel">这里填写角色基础设定内容。</div>
                    </div>
                    <div class="acc-item fade-in">
                        <div class="acc-trigger">02. 核心异能</div>
                        <div class="acc-panel">这里填写角色异能描述。</div>
                    </div>
                </div>
            </div>

            <div id="visual" class="content-block" style="background:#020617;">
                <div style="max-width:1000px; margin:0 auto;">
                    <h2 class="fade-in" style="font-size:2rem; text-align:center; margin-bottom:60px;">视觉映像</h2>
                    <div class="gallery fade-in">
                        <div class="gallery-item"><img src="https://placehold.co/600x800/1e293b/eee?text=Art+1" style="width:100%;"></div>
                        <div class="gallery-item"><img src="https://placehold.co/600x400/2a1b3d/eee?text=Art+2" style="width:100%;"></div>
                        <div class="gallery-item"><img src="https://placehold.co/600x900/0f172a/eee?text=Art+3" style="width:100%;"></div>
                        <div class="gallery-item"><img src="https://placehold.co/600x600/1e1b4b/eee?text=Art+4" style="width:100%;"></div>
                    </div>
                </div>
            </div>

            <footer style="padding:60px 0; text-align:center; color:#475569; font-size:10px; letter-spacing:3px;">
                SYSTEM DISCONNECTED // END OF FILE
            </footer>
        `;

        // 彻底清空 body 并添加根节点
        document.body.innerHTML = '';
        document.body.appendChild(root);

        // 初始化交互逻辑
        setupInteractions(root);
    }

    function setupInteractions(root) {
        // 手风琴
        root.querySelectorAll('.acc-trigger').forEach(t => {
            t.addEventListener('click', () => {
                const p = t.nextElementSibling;
                p.classList.toggle('active');
            });
        });

        // 滚动淡入
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) entry.target.classList.add('show');
            });
        }, { threshold: 0.1 });

        root.querySelectorAll('.fade-in').forEach(el => observer.observe(el));
    }

    // 确保在各种加载情况下都能运行
    if (document.readyState === 'complete') {
        initOCPage();
    } else {
        window.addEventListener('load', initOCPage);
    }
})();