document.addEventListener('DOMContentLoaded', () => {

    /* --- 1. 加载处理（确保遮罩能正常隐藏） --- */
    window.addEventListener('load', () => {
        const loader = document.getElementById('loader');
        // 延迟一点点，确保布局计算完成
        setTimeout(() => {
            if (loader) {
                loader.style.opacity = '0';
                loader.style.transition = 'opacity 0.6s ease-out'; // 显式添加过渡
                setTimeout(() => {
                    loader.style.display = 'none';
                    startTypewriter();
                }, 600);
            }
        }, 800);
    });

    /* --- 2. 打字机 --- */
    const textToType = "嘿，亲爱的！✨\n很高兴我们的故事里一直有彼此。\n那些一起疯、一起笑、一起干饭的日子，\n我全都偷偷藏在这个网页里啦。\n生日快乐！要永远做最开心的女孩子呀！🎀";
    const typeContainer = document.getElementById('typewriter-text');
    let typeIndex = 0;

    function startTypewriter() {
        if (!typeContainer) return;
        function type() {
            if (typeIndex < textToType.length) {
                const char = textToType.charAt(typeIndex);
                typeContainer.innerHTML += char === '\n' ? '<br>' : char;
                typeIndex++;
                setTimeout(type, 100);
            }
        }
        type();
    }

    /* --- 3. 滚动显现动画 (彻底排除相册元素 + 修复语法错误) --- */
    // 修正：之前的括号位置错误，导致JS报错中断
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.05,
        rootMargin: '0px 0px -50px 0px'
    });

    // 重点：只观测非相册元素，避免影响图片显示
    const animatedElements = document.querySelectorAll('.timeline-item, .section-header, .letter-paper');

    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(50px)';
        el.style.transition = 'all 0.8s ease-out';
        observer.observe(el);
    });

    /* --- 4. 静止时间戳 --- */
    function formatCurrentTime() {
        const now = new Date();
        const year = now.getFullYear();
        const month = String(now.getMonth() + 1).padStart(2, '0');
        const day = String(now.getDate()).padStart(2, '0');
        const hour = String(now.getHours()).padStart(2, '0');
        const minute = String(now.getMinutes()).padStart(2, '0');
        const second = String(now.getSeconds()).padStart(2, '0');
        return `${year}.${month}.${day}\n${hour}:${minute}:${second}`;
    }
    const timeElement = document.getElementById('live-timestamp');
    if (timeElement) {
        timeElement.innerText = formatCurrentTime();
    }

    /* --- 5. Emoji 粒子 --- */
    const emojis = ['💖', '✨', '🌸', '🎂', '🎀', '🍭', '🧸'];
    function createParticle() {
        const container = document.getElementById('particle-container');
        if (!container) return;

        const particle = document.createElement('span');
        particle.className = 'particle';
        particle.innerText = emojis[Math.floor(Math.random() * emojis.length)];

        const startLeft = Math.random() * 100;
        const duration = Math.random() * 5 + 5;
        const size = Math.random() * 20 + 20;

        particle.style.left = startLeft + 'vw';
        particle.style.fontSize = size + 'px';
        particle.style.animationDuration = duration + 's';

        container.appendChild(particle);
        setTimeout(() => particle.remove(), duration * 1000);
    }
    setInterval(createParticle, 600);

    /* --- 6. 视差联动 --- */
    window.addEventListener('scroll', () => {
        const scrollY = window.scrollY;
        const heroContent = document.querySelector('.hero-content');
        if (heroContent) {
            heroContent.style.transform = `translateY(calc(-50px + ${scrollY * 0.1}px))`;
        }
    });
});