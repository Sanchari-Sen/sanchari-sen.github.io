document.addEventListener('DOMContentLoaded', () => {
  const navLinks = document.querySelectorAll('.nav-link');
  const sections = document.querySelectorAll('.page-section');

  function activateSection(targetId) {
    navLinks.forEach(l => l.classList.toggle('active', l.getAttribute('data-target') === targetId));
    sections.forEach(section => section.classList.toggle('active', section.id === targetId));
  }

  navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const targetId = link.getAttribute('data-target');
      activateSection(targetId);

      // Clicking a nav tab always resets that page back to its list view.
      if (targetId === 'research') showResearchList();
      if (targetId === 'musings') showMusingsList();
      if (location.hash) history.pushState('', document.title, location.pathname + location.search);

      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  });

  initPosts(activateSection);
});

// ---------------------------------------------------------------------
// Legacy accordion helper (kept for any inline "Read" toggles you still use)
// ---------------------------------------------------------------------
function toggleExpand(triggerElement) {
  let cardContainer = triggerElement.closest('.research-card') || triggerElement.closest('.musing-card');
  if (!cardContainer) return;

  let panel = cardContainer.querySelector('.expandable-panel');
  let btn = cardContainer.querySelector('.read-btn');

  if (panel.classList.contains('open')) {
    panel.classList.remove('open');
    if (btn) btn.textContent = 'Read';
  } else {
    panel.classList.add('open');
    if (btn) btn.textContent = 'Close';
  }
}

// ---------------------------------------------------------------------
// Markdown-driven Research & Musings
//
// Posts live as plain .md files with a small frontmatter block:
//
//   ---
//   title: My title
//   date: 2026
//   tags: tag one, tag two        (research only)
//   meta: any subtitle line        (research only)
//   link: https://...              (research only, optional)
//   link_label: View Code Repository (research only, optional)
//   category: sky | under-sky      (musings only)
//   summary: one-line teaser
//   ---
//   Markdown body here.
//
// content/manifest.json lists which files to load for each collection.
// To add a new post: drop a .md file into content/research/ or
// content/musings/, then add its filename to manifest.json.
// ---------------------------------------------------------------------

let researchPosts = [];
let musingsPosts = [];

async function initPosts(activateSection) {
  try {
    const manifestRes = await fetch(`content/manifest.json?v=${Date.now()}`, { cache: 'no-store' });
    const manifest = await manifestRes.json();

    researchPosts = await loadCollection('research', manifest.research || []);
    musingsPosts = await loadCollection('musings', manifest.musings || []);

    renderResearchList();
    renderMusingsList();

    // Support deep links like #research/slug or #musings/slug on load and back/forward
    window.addEventListener('hashchange', () => handleHash(activateSection));
    handleHash(activateSection, true);
  } catch (err) {
    console.error('Could not load posts from content/manifest.json', err);
  }
}

async function loadCollection(kind, files) {
  const items = await Promise.all(files.map(async (filename) => {
    try {
      const res = await fetch(`content/${kind}/${filename}?v=${Date.now()}`, { cache: 'no-store' });
      if (!res.ok) throw new Error(`${filename}: ${res.status}`);
      const raw = await res.text();
      const { meta, body } = parseFrontmatter(raw);
      return { slug: filename.replace(/\.md$/, ''), meta, body };
    } catch (err) {
      console.warn(`Skipping ${kind}/${filename}:`, err);
      return null;
    }
  }));
  return items.filter(Boolean);
}

function parseTags(raw) {
  if (!raw) return [];
  const stripped = raw.trim().replace(/^\[/, '').replace(/\]$/, '');
  return stripped.split(',').map((t) => t.trim().replace(/^["']|["']$/g, '')).filter(Boolean);
}

function parseFrontmatter(raw) {
  const match = raw.match(/^---\s*\n([\s\S]*?)\n---\s*\n?([\s\S]*)$/);
  if (!match) return { meta: {}, body: raw };
  const meta = {};
  match[1].split('\n').forEach((line) => {
    const idx = line.indexOf(':');
    if (idx === -1) return;
    const key = line.slice(0, idx).trim();
    const val = line.slice(idx + 1).trim();
    if (key) meta[key] = val;
  });
  return { meta, body: match[2].trim() };
}

function handleHash(activateSection, isInitialLoad) {
  const hash = location.hash.replace(/^#/, '');
  if (hash.startsWith('research/')) {
    activateSection('research');
    showResearchDetail(hash.slice('research/'.length));
  } else if (hash.startsWith('musings/')) {
    activateSection('musings');
    showMusingsDetail(hash.slice('musings/'.length));
  } else if (!isInitialLoad) {
    if (hash === '' && document.getElementById('research').classList.contains('active')) showResearchList();
    if (hash === '' && document.getElementById('musings').classList.contains('active')) showMusingsList();
  }
}

// --- Research -----------------------------------------------------------

function renderResearchList() {
  const list = document.getElementById('research-list');
  if (!list) return;

  if (researchPosts.length === 0) {
    list.innerHTML = '<p class="section-intro-text">No research posts found. Add .md files to content/research/ and list them in content/manifest.json.</p>';
    return;
  }

  list.innerHTML = researchPosts.map((post) => {
    const tags = parseTags(post.meta.tags);
    const teaser = post.meta.summary || post.meta.description || '';
    return `
      <article class="research-card" data-slug="${post.slug}">
        <div class="research-card-content">
          <h3 class="research-title">${post.meta.title || post.slug}</h3>
          ${post.meta.meta ? `<p class="research-meta">${post.meta.meta}</p>` : ''}
          ${teaser ? `<div class="key-investigations"><p>${teaser}</p></div>` : ''}
          <div class="project-tags">${tags.map((t) => `<span>${t}</span>`).join('')}</div>
        </div>
        <div class="research-card-side">
          <div class="research-date">${post.meta.date || ''}</div>
          <button class="read-btn" data-slug="${post.slug}">Read</button>
        </div>
      </article>
    `;
  }).join('');

  list.querySelectorAll('[data-slug]').forEach((el) => {
    el.addEventListener('click', () => {
      location.hash = `research/${el.getAttribute('data-slug')}`;
    });
  });
}

function showResearchDetail(slug) {
  const post = researchPosts.find((p) => p.slug === slug);
  const listEl = document.getElementById('research-list');
  const detailEl = document.getElementById('research-detail');
  if (!detailEl) return;

  if (!post) {
    detailEl.innerHTML = '<p class="section-intro-text">Post not found.</p>';
  } else {
    const tags = parseTags(post.meta.tags);
    detailEl.innerHTML = `
      <a href="#research" class="back-link">&larr; Back to Research</a>
      <h2 class="detail-title">${post.meta.title || post.slug}</h2>
      <div class="detail-meta">
        ${post.meta.meta ? `${post.meta.meta} · ` : ''}${post.meta.date || ''}
      </div>
      <div class="project-tags">${tags.map((t) => `<span>${t}</span>`).join('')}</div>
      <div class="detail-body">${marked.parse(post.body)}</div>
      ${post.meta.link ? `<div class="resource-links"><a href="${post.meta.link}" target="_blank">[ ${post.meta.link_label || 'View link'} ]</a></div>` : ''}
    `;
    detailEl.querySelector('.back-link').addEventListener('click', (e) => {
      e.preventDefault();
      history.pushState('', document.title, location.pathname + location.search);
      showResearchList();
    });
    if (window.MathJax && window.MathJax.typesetPromise) {
      window.MathJax.typesetPromise([detailEl]);
    }
  }

  if (listEl) listEl.hidden = true;
  detailEl.hidden = false;
}

function showResearchList() {
  const listEl = document.getElementById('research-list');
  const detailEl = document.getElementById('research-detail');
  if (listEl) listEl.hidden = false;
  if (detailEl) detailEl.hidden = true;
}

// --- Musings --------------------------------------------------------------

function renderMusingsList() {
  const skyEl = document.getElementById('musings-list-sky');
  const underEl = document.getElementById('musings-list-underksy');
  if (!skyEl || !underEl) return;

  const sky = musingsPosts.filter((p) => (p.meta.category || 'sky') === 'sky');
  const under = musingsPosts.filter((p) => p.meta.category === 'under-sky');

  skyEl.innerHTML = sky.length ? sky.map(musingCardHtml).join('') :
    '<p class="section-intro-text">Nothing here yet.</p>';
  underEl.innerHTML = under.length ? under.map(musingCardHtml).join('') :
    '<p class="section-intro-text">Nothing here yet — add .md files with <code>category: under-sky</code> to content/musings/.</p>';

  [skyEl, underEl].forEach((container) => {
    container.querySelectorAll('[data-slug]').forEach((el) => {
      el.addEventListener('click', () => {
        location.hash = `musings/${el.getAttribute('data-slug')}`;
      });
    });
  });
}

function musingCardHtml(post) {
  return `
    <article class="musing-card" data-slug="${post.slug}">
      <div class="musing-top">
        <span class="musing-date">${post.meta.date || ''}</span>
        <div class="musing-header-text">
          <h4 class="musing-title">${post.meta.title || post.slug}</h4>
          ${post.meta.summary ? `<p class="musing-summary">${post.meta.summary}</p>` : ''}
        </div>
        <button class="read-btn">Read</button>
      </div>
    </article>
  `;
}

function showMusingsDetail(slug) {
  const post = musingsPosts.find((p) => p.slug === slug);
  const listEl = document.getElementById('musings-list');
  const detailEl = document.getElementById('musings-detail');
  if (!detailEl) return;

  if (!post) {
    detailEl.innerHTML = '<p class="section-intro-text">Post not found.</p>';
  } else {
    detailEl.innerHTML = `
      <a href="#musings" class="back-link">&larr; Back to Musings</a>
      <h2 class="detail-title">${post.meta.title || post.slug}</h2>
      <div class="detail-meta">${post.meta.date || ''}</div>
      <div class="detail-body">${marked.parse(post.body)}</div>
    `;
    detailEl.querySelector('.back-link').addEventListener('click', (e) => {
      e.preventDefault();
      history.pushState('', document.title, location.pathname + location.search);
      showMusingsList();
    });
    if (window.MathJax && window.MathJax.typesetPromise) {
      window.MathJax.typesetPromise([detailEl]);
    }
  }

  if (listEl) listEl.hidden = true;
  detailEl.hidden = false;
}

function showMusingsList() {
  const listEl = document.getElementById('musings-list');
  const detailEl = document.getElementById('musings-detail');
  if (listEl) listEl.hidden = false;
  if (detailEl) detailEl.hidden = true;
}
