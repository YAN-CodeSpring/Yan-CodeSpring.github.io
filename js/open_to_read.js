console.log('open_to_read.js loaded');

document.addEventListener('DOMContentLoaded', () => {
  const data = [
    {
      type: 'book',
      title: 'Norwegian Wood',
      cover: 'https://images.unsplash.com/photo-1512820790803-83ca734da794?auto=format&fit=crop&w=900&q=80',
      rating: 8.5,
      tags: ['loneliness', 'youth'],
      quote: 'Death exists, not as the opposite but as a part of life.',
      meta: 'Haruki Murakami · 1987 · Novel',
      link: '/private/reviews/norwegian-wood/'
    },
    {
      type: 'movie',
      title: 'In the Mood for Love',
      cover: 'https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?auto=format&fit=crop&w=900&q=80',
      rating: 9.4,
      tags: ['restrained', 'aesthetic'],
      quote: "We won't be like them.",
      meta: 'Wong Kar-wai · 2000 · Drama / Romance',
      link: '/private/reviews/in-the-mood-for-love/'
    },
    {
      type: 'book',
      title: 'The Book of Disquiet',
      cover: 'https://images.unsplash.com/photo-1516979187457-637abb4f9353?auto=format&fit=crop&w=900&q=80',
      rating: 8.9,
      tags: ['solitude', 'fragments'],
      quote: 'To understand is to destroy.',
      meta: 'Fernando Pessoa · 1982 · Fragments',
      link: '/private/reviews/the-book-of-disquiet/'
    },
    {
      type: 'movie',
      title: 'Paterson',
      cover: 'https://images.unsplash.com/photo-1478720568477-152d9b164e26?auto=format&fit=crop&w=900&q=80',
      rating: 8.6,
      tags: ['daily life', 'poetry'],
      quote: 'Sometimes an empty page presents more possibilities.',
      meta: 'Jim Jarmusch · 2016 · Drama',
      link: '/private/reviews/paterson/'
    },
    {
      type: 'book',
      title: 'Sapiens',
      cover: 'https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?auto=format&fit=crop&w=900&q=80',
      rating: 8.7,
      tags: ['history', 'humanity'],
      quote: 'Culture tends to argue that it forbids only that which is unnatural.',
      meta: 'Yuval Noah Harari · 2011 · History',
      link: '/private/reviews/sapiens/'
    },
    {
      type: 'movie',
      title: 'Her',
      cover: 'https://images.unsplash.com/photo-1492724441997-5dc865305da7?auto=format&fit=crop&w=900&q=80',
      rating: 9.0,
      tags: ['technology', 'love'],
      quote: "The heart's not like a box that gets filled up.",
      meta: 'Spike Jonze · 2013 · Romance / Sci-Fi',
      link: '/private/reviews/her/'
    },
    {
      type: 'book',
      title: 'The Little Prince',
      cover: 'https://images.unsplash.com/photo-1544947950-fa07a98d237f?auto=format&fit=crop&w=900&q=80',
      rating: 9.2,
      tags: ['childhood', 'philosophy'],
      quote: 'What is essential is invisible to the eye.',
      meta: 'Antoine de Saint-Exupéry · 1943 · Classic',
      link: '/private/reviews/the-little-prince/'
    },
    {
      type: 'movie',
      title: 'Before Sunrise',
      cover: 'https://images.unsplash.com/photo-1505685296765-3a2736de412f?auto=format&fit=crop&w=900&q=80',
      rating: 8.8,
      tags: ['love', 'dialogue'],
      quote: "Isn't everything we do in life a way to be loved a little more?",
      meta: 'Richard Linklater · 1995 · Romance',
      link: '/private/reviews/before-sunrise/'
    },
    {
      type: 'book',
      title: 'The Alchemist',
      cover: 'https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=900&q=80',
      rating: 7.9,
      tags: ['journey', 'destiny'],
      quote: 'When you want something, all the universe conspires.',
      meta: 'Paulo Coelho · 1988 · Fable',
      link: '/private/reviews/the-alchemist/'
    },
    {
      type: 'movie',
      title: 'Interstellar',
      cover: 'https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?auto=format&fit=crop&w=900&q=80',
      rating: 9.3,
      tags: ['space', 'time'],
      quote: 'Love is the one thing that transcends time and space.',
      meta: 'Christopher Nolan · 2014 · Sci-Fi',
      link: '/private/reviews/interstellar/'
    }
  ];

  const state = {
    type: 'all',
    tag: 'all',
    sort: 'default',
    drawerOpen: false
  };

  const app = document.getElementById('collection-app');
  if (!app) {
    console.error('#collection-app not found');
    return;
  }

  const uniqueTags = [...new Set(data.flatMap(item => item.tags))].sort((a, b) => a.localeCompare(b));

  app.innerHTML = `
    <div class="collection-page">
      <div class="collection-backdrop" aria-hidden="true"></div>

      <div class="collection-shell">
        <section class="collection-hero">
          <div class="hero-frame">
            <div class="hero-main">
              <div class="hero-kicker">Private Archive</div>
              <h1 class="hero-title">Books & Films I Kept</h1>
              <p class="hero-subtitle">
                不是罗列完成项，而是留下一些曾经认真影响过我的书、电影、句子与片刻。
              </p>

              <div class="hero-meta">
                <span class="hero-meta-item">${data.filter(item => item.type === 'book').length} Books</span>
                <span class="hero-meta-item">${data.filter(item => item.type === 'movie').length} Films</span>
                <span class="hero-meta-item">Private Notes Available</span>
              </div>
            </div>

            <aside class="hero-note">
              <div class="note-card">
                <div class="note-kicker">Curator’s Note</div>
                <p class="note-quote">
                  “收藏一部电影或一本书，不只是记住它，而是承认它曾经认真地影响过你。”
                </p>
                <div class="note-foot">
                  <span>Selected fragments</span>
                  <span>Quiet archive</span>
                </div>
              </div>
            </aside>
          </div>
        </section>

        <div class="collection-stage">
          <section class="collection-toolbar">
            <div class="toolbar-left">
              <div class="segmented" id="type-switch">
                <button data-type="all" class="active">All</button>
                <button data-type="book">Books</button>
                <button data-type="movie">Films</button>
              </div>

              <button class="filter-toggle" id="tag-toggle" type="button">Tag Filter</button>
            </div>

            <div class="toolbar-right">
              <div class="sort-wrap">
                <span class="toolbar-label">Sort</span>
                <select class="sort-select" id="sort-select">
                  <option value="default">Curated</option>
                  <option value="rating-desc">Rating ↓</option>
                  <option value="rating-asc">Rating ↑</option>
                  <option value="title-asc">Title A–Z</option>
                </select>
              </div>
            </div>
          </section>

          <div class="tag-drawer" id="tag-drawer"></div>

          <section class="collection-grid" id="collection-grid"></section>
        </div>
      </div>
    </div>
  `;

  const grid = document.getElementById('collection-grid');
  const tagDrawer = document.getElementById('tag-drawer');
  const tagToggle = document.getElementById('tag-toggle');
  const sortSelect = document.getElementById('sort-select');
  const typeButtons = [...document.querySelectorAll('#type-switch button')];

  function escapeHtml(value) {
    return String(value)
      .replaceAll('&', '&amp;')
      .replaceAll('<', '&lt;')
      .replaceAll('>', '&gt;')
      .replaceAll('"', '&quot;')
      .replaceAll("'", '&#39;');
  }

  function buildRatingDots(rating) {
    const filled = Math.round(rating / 2);
    return Array.from({ length: 5 }, (_, index) => {
      const active = index < filled ? 'filled' : '';
      return `<span class="rating-dot ${active}"></span>`;
    }).join('');
  }

  function buildTagDrawer() {
    tagDrawer.innerHTML = [
      `<button class="tag-filter ${state.tag === 'all' ? 'active' : ''}" data-tag="all">All</button>`,
      ...uniqueTags.map(tag => `
        <button class="tag-filter ${state.tag === tag ? 'active' : ''}" data-tag="${escapeHtml(tag)}">
          ${escapeHtml(tag)}
        </button>
      `)
    ].join('');

    [...tagDrawer.querySelectorAll('[data-tag]')].forEach(btn => {
      btn.addEventListener('click', () => {
        state.tag = btn.dataset.tag;
        buildTagDrawer();
        renderGrid();
      });
    });
  }

  function getFilteredData() {
    let result = data.filter(item => {
      const typeMatch = state.type === 'all' || item.type === state.type;
      const tagMatch = state.tag === 'all' || item.tags.includes(state.tag);
      return typeMatch && tagMatch;
    });

    if (state.sort === 'rating-desc') {
      result = [...result].sort((a, b) => b.rating - a.rating);
    } else if (state.sort === 'rating-asc') {
      result = [...result].sort((a, b) => a.rating - b.rating);
    } else if (state.sort === 'title-asc') {
      result = [...result].sort((a, b) => a.title.localeCompare(b.title));
    }

    return result;
  }

  function renderGrid() {
    const items = getFilteredData();

    if (!items.length) {
      grid.innerHTML = `<div class="collection-empty">当前筛选条件下没有内容。</div>`;
      return;
    }

    grid.innerHTML = items.map((item, index) => {
      const serial = String(index + 1).padStart(2, '0');
      const typeLabel = item.type === 'book' ? 'Book' : 'Film';

      return `
        <a class="collection-card" href="${escapeHtml(item.link || '#')}" ${item.link ? '' : 'onclick="return false"'}>
          <article class="collection-card-inner">
            <div class="card-cover-wrap">
              <div class="card-badge">${typeLabel}</div>
              <div class="card-cover">
                <img
                  src="${escapeHtml(item.cover)}"
                  alt="${escapeHtml(item.title)}"
                  loading="lazy"
                  onerror="this.src='https://placehold.co/800x1100/e5dacc/705f4c?text=No+Cover';"
                />
              </div>
            </div>

            <div class="card-body">
              <div class="card-head">
                <div class="card-title-row">
                  <h2 class="card-title">${escapeHtml(item.title)}</h2>
                  <span class="card-index">No.${serial}</span>
                </div>
                <div class="card-meta">${escapeHtml(item.meta)}</div>
              </div>

              <div class="rating-row">
                <div class="rating-scale">${buildRatingDots(item.rating)}</div>
                <div class="rating-value">${item.rating.toFixed(1)}</div>
              </div>

              <p class="card-quote">“${escapeHtml(item.quote)}”</p>

              <div class="card-tags">
                ${item.tags.map(tag => `<span class="card-tag">${escapeHtml(tag)}</span>`).join('')}
              </div>

              <div class="card-linkline">
                <span>Archive Index</span>
                <strong>${item.link ? 'Entry Available' : 'Not Filed Yet'}</strong>
              </div>
            </div>
          </article>
        </a>
      `;
    }).join('');
  }

  function updateTypeButtons() {
    typeButtons.forEach(btn => {
      btn.classList.toggle('active', btn.dataset.type === state.type);
    });
  }

  typeButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      state.type = btn.dataset.type;
      updateTypeButtons();
      renderGrid();
    });
  });

  tagToggle.addEventListener('click', () => {
    state.drawerOpen = !state.drawerOpen;
    tagDrawer.classList.toggle('open', state.drawerOpen);
    tagToggle.textContent = state.drawerOpen ? 'Hide Tags' : 'Tag Filter';
  });

  sortSelect.addEventListener('change', event => {
    state.sort = event.target.value;
    renderGrid();
  });

  function updateParallax() {
    const y = window.scrollY || 0;
    const offset = Math.min(180, y * 0.24);
    document.documentElement.style.setProperty('--parallax-offset', `${offset}px`);
  }

  buildTagDrawer();
  updateTypeButtons();
  renderGrid();
  updateParallax();

  window.addEventListener('scroll', updateParallax, { passive: true });
});
