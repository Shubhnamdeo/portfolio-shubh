/* ================================================
   SHUBH PORTFOLIO — Admin Panel System
   Password: Shubh@2026
   ================================================ */

const ADMIN = {
  HASH: '839cb5fa006df6fb7d776b90a104169535798b388a3f8781f24219ba6d1bf500',
  SALT: 'shubh-portfolio-salt',
  SESSION_KEY: 'shubh_admin_session',
  DATA_KEY: 'shubh_portfolio_data',
  isLoggedIn: false,

  async hashPassword(password) {
    const encoder = new TextEncoder();
    const data = encoder.encode(password + this.SALT);
    const hashBuffer = await crypto.subtle.digest('SHA-256', data);
    const hashArray = Array.from(new Uint8Array(hashBuffer));
    return hashArray.map(b => b.toString(16).padStart(2, '0')).join('');
  },

  checkSession() {
    return sessionStorage.getItem(this.SESSION_KEY) === 'active';
  },

  async login(password) {
    const hash = await this.hashPassword(password);
    if (hash === this.HASH) {
      sessionStorage.setItem(this.SESSION_KEY, 'active');
      this.isLoggedIn = true;
      this.enableAdminMode();
      return true;
    }
    return false;
  },

  logout() {
    sessionStorage.removeItem(this.SESSION_KEY);
    this.isLoggedIn = false;
    this.disableAdminMode();
  },

  enableAdminMode() {
    document.body.classList.add('admin-mode');
    document.getElementById('adminToolbar').classList.add('visible');
    document.getElementById('adminLoginModal').classList.remove('open');
    this.makeEditable();
    this.addImageEditButtons();
    this.addCertEditButtons();
    this.loadSavedData();
    this.showNotification('✅ Admin mode enabled — click any text to edit!', 'success');
  },

  disableAdminMode() {
    document.body.classList.remove('admin-mode');
    document.getElementById('adminToolbar').classList.remove('visible');
    this.removeEditable();
    document.querySelectorAll('.admin-img-overlay, .admin-cert-btn').forEach(el => el.remove());
  },

  makeEditable() {
    const selectors = [
      '.hero-title', '.hero-desc', '.hero-badge',
      '.about-lead', '.about-text p',
      '.cert-embed-footer h4', '.cert-embed-footer span',
      '.cert-cat-header h3',
      '.timeline-role', '.timeline-company-name', '.timeline-body > p',
      '.timeline-achievements li', '.timeline-date',
      '.info-content h4', '.info-content p', '.info-content span',
      '.section-title', '.section-desc', '.stat-num', '.stat-label',
      '.footer-sub'
    ];
    selectors.forEach(sel => {
      document.querySelectorAll(sel).forEach(el => {
        el.setAttribute('contenteditable', 'true');
        el.classList.add('admin-editable');
        el.addEventListener('blur', () => this.saveData());
      });
    });
  },

  removeEditable() {
    document.querySelectorAll('[contenteditable="true"]').forEach(el => {
      el.removeAttribute('contenteditable');
      el.classList.remove('admin-editable');
    });
  },

  addImageEditButtons() {
    const profileImg = document.querySelector('.profile-img');
    if (profileImg) {
      const wrap = profileImg.parentElement;
      const overlay = document.createElement('div');
      overlay.className = 'admin-img-overlay';
      overlay.innerHTML = `<span>📷 Change Photo</span>`;
      overlay.addEventListener('click', () => this.uploadImage('profile', profileImg));
      wrap.style.position = 'relative';
      wrap.appendChild(overlay);
    }

    const bannerImg = document.querySelector('.banner-img');
    if (bannerImg) {
      const wrap = bannerImg.parentElement;
      const overlay = document.createElement('div');
      overlay.className = 'admin-img-overlay admin-img-overlay-banner';
      overlay.innerHTML = `<span>🖼️ Change Banner</span>`;
      overlay.addEventListener('click', () => this.uploadImage('banner', bannerImg));
      wrap.appendChild(overlay);
    }
  },

  uploadImage(type, imgEl) {
    const input = document.createElement('input');
    input.type = 'file';
    input.accept = 'image/*';
    input.onchange = async (e) => {
      const file = e.target.files[0];
      if (!file) return;
      const reader = new FileReader();
      reader.onload = (evt) => {
        imgEl.src = evt.target.result;
        this.pendingFiles = this.pendingFiles || {};
        this.pendingFiles[type === 'profile' ? 'photo-headshot.jpg' : 'banner.png'] = {
          content: evt.target.result.split(',')[1],
          name: type === 'profile' ? 'photo-headshot.jpg' : 'banner.png'
        };
        this.showNotification(`✅ ${type === 'profile' ? 'Photo' : 'Banner'} updated! Click "Publish" to go live.`, 'success');
        this.saveData();
      };
      reader.readAsDataURL(file);
    };
    input.click();
  },

  addCertEditButtons() {
    document.querySelectorAll('.cert-embed-card').forEach(card => {
      const btn = document.createElement('button');
      btn.className = 'admin-cert-btn';
      btn.innerHTML = '✕ Remove';
      btn.onclick = () => {
        if (confirm('Remove this certificate?')) {
          card.remove();
          const block = card.closest('.cert-category-block');
          if (block) {
            const remaining = block.querySelectorAll('.cert-embed-card').length;
            const countEl = block.querySelector('.cert-cat-count');
            if (countEl) countEl.textContent = `${remaining} certificate${remaining !== 1 ? 's' : ''}`;
          }
          this.showNotification('Certificate removed! Click Publish to save.', 'info');
          this.saveData();
        }
      };
      card.style.position = 'relative';
      card.appendChild(btn);
    });

    document.querySelectorAll('.cert-embed-grid').forEach(grid => {
      const addBtn = document.createElement('button');
      addBtn.className = 'admin-add-cert-btn';
      addBtn.innerHTML = '＋ Add Certificate';
      addBtn.onclick = () => this.addNewCert(grid);
      grid.parentElement.appendChild(addBtn);
    });
  },

  addNewCert(grid) {
    const name = prompt('Certificate Name:');
    if (!name) return;
    const issuer = prompt('Issuer (e.g. Google, Cisco):');
    if (!issuer) return;

    const input = document.createElement('input');
    input.type = 'file';
    input.accept = 'application/pdf';
    input.onchange = async (e) => {
      const file = e.target.files[0];
      if (!file) return;
      const reader = new FileReader();
      reader.onload = (evt) => {
        const fileName = `certs/${file.name}`;
        this.pendingFiles = this.pendingFiles || {};
        this.pendingFiles[fileName] = { content: evt.target.result.split(',')[1], name: fileName };

        const card = document.createElement('div');
        card.className = 'cert-embed-card';
        card.innerHTML = `
          <div class="cert-embed-frame-wrap">
            <iframe src="${URL.createObjectURL(file)}#toolbar=0&navpanes=0&scrollbar=0"
              class="cert-embed-iframe" title="${name}"></iframe>
          </div>
          <div class="cert-embed-footer">
            <div><h4>${name}</h4><span>${issuer}</span></div>
            <button class="cert-expand-btn" onclick="openPDF('${fileName}','${name}')">⛶ Expand</button>
          </div>`;
        grid.appendChild(card);

        const removeBtn = document.createElement('button');
        removeBtn.className = 'admin-cert-btn';
        removeBtn.innerHTML = '✕ Remove';
        removeBtn.onclick = () => { if (confirm('Remove?')) card.remove(); };
        card.style.position = 'relative';
        card.appendChild(removeBtn);

        const block = grid.closest('.cert-category-block');
        if (block) {
          const count = block.querySelectorAll('.cert-embed-card').length;
          const countEl = block.querySelector('.cert-cat-count');
          if (countEl) countEl.textContent = `${count} certificate${count !== 1 ? 's' : ''}`;
        }
        this.showNotification(`✅ "${name}" added! Click Publish to go live.`, 'success');
        this.saveData();
      };
      reader.readAsDataURL(file);
    };
    input.click();
  },

  saveData() {
    const data = {
      profileSrc: document.querySelector('.profile-img')?.src,
      bannerSrc: document.querySelector('.banner-img')?.src,
      heroTitle: document.querySelector('.hero-title')?.innerHTML,
      heroDesc: document.querySelector('.hero-desc')?.innerHTML,
      certSection: document.getElementById('certifications')?.innerHTML,
      aboutText: document.querySelector('.about-text')?.innerHTML,
      timestamp: Date.now()
    };
    localStorage.setItem(this.DATA_KEY, JSON.stringify(data));
  },

  loadSavedData() {
    const raw = localStorage.getItem(this.DATA_KEY);
    if (!raw) return;
    try {
      const data = JSON.parse(raw);
      if (data.heroTitle) document.querySelector('.hero-title').innerHTML = data.heroTitle;
      if (data.heroDesc) document.querySelector('.hero-desc').innerHTML = data.heroDesc;
      if (data.certSection) document.getElementById('certifications').innerHTML = data.certSection;
      if (data.aboutText) document.querySelector('.about-text').innerHTML = data.aboutText;
      if (data.profileSrc && data.profileSrc.startsWith('data:')) {
        document.querySelector('.profile-img').src = data.profileSrc;
      }
      if (data.bannerSrc && data.bannerSrc.startsWith('data:')) {
        document.querySelector('.banner-img').src = data.bannerSrc;
      }
    } catch(e) { console.warn('Could not load admin data', e); }
  },

  async publishToGitHub() {
    const token = prompt(
      '🔑 Enter your GitHub Personal Access Token:\n\n' +
      'Create one at: github.com/settings/tokens\n' +
      '(Select repo → Contents permissions)\n\n' +
      'Your token starts with "ghp_"'
    );
    if (!token || !token.startsWith('ghp_')) {
      this.showNotification('❌ Invalid token. Must start with ghp_', 'error');
      return;
    }

    const REPO = 'Shubhnamdeo/portfolio-shubh';
    const BASE_URL = `https://api.github.com/repos/${REPO}/contents/`;

    this.showNotification('⏳ Publishing to GitHub...', 'info');

    const htmlContent = document.documentElement.outerHTML;
    const htmlB64 = btoa(unescape(encodeURIComponent(htmlContent)));

    try {
      const getRes = await fetch(`${BASE_URL}index.html`, {
        headers: { Authorization: `token ${token}`, Accept: 'application/vnd.github+json' }
      });
      const existing = await getRes.json();

      await fetch(`${BASE_URL}index.html`, {
        method: 'PUT',
        headers: { Authorization: `token ${token}`, Accept: 'application/vnd.github+json', 'Content-Type': 'application/json' },
        body: JSON.stringify({
          message: 'Admin: Update portfolio content',
          content: htmlB64,
          sha: existing.sha
        })
      });

      if (this.pendingFiles) {
        for (const [path, file] of Object.entries(this.pendingFiles)) {
          const res = await fetch(`${BASE_URL}${path}`, {
            headers: { Authorization: `token ${token}`, Accept: 'application/vnd.github+json' }
          });
          const body = { message: `Admin: Update ${path}`, content: file.content };
          if (res.ok) { const ex = await res.json(); body.sha = ex.sha; }
          await fetch(`${BASE_URL}${path}`, {
            method: 'PUT',
            headers: { Authorization: `token ${token}`, Accept: 'application/vnd.github+json', 'Content-Type': 'application/json' },
            body: JSON.stringify(body)
          });
        }
        this.pendingFiles = {};
      }

      this.showNotification('🚀 Published! Live in ~30 seconds at shubhnamdeo.github.io/portfolio-shubh', 'success');
      localStorage.removeItem(this.DATA_KEY);

    } catch (err) {
      this.showNotification(`❌ Publish failed: ${err.message}`, 'error');
    }
  },

  showNotification(message, type = 'info') {
    const existing = document.getElementById('adminNotif');
    if (existing) existing.remove();
    const notif = document.createElement('div');
    notif.id = 'adminNotif';
    notif.className = `admin-notif admin-notif-${type}`;
    notif.textContent = message;
    document.body.appendChild(notif);
    setTimeout(() => notif.classList.add('show'), 10);
    setTimeout(() => { notif.classList.remove('show'); setTimeout(() => notif.remove(), 400); }, 4000);
  },

  init() {
    if (this.checkSession()) {
      this.isLoggedIn = true;
      this.enableAdminMode();
    }

    document.getElementById('openAdminBtn')?.addEventListener('click', () => {
      if (this.isLoggedIn) {
        this.showNotification('Already logged in as Admin!', 'info');
      } else {
        document.getElementById('adminLoginModal').classList.add('open');
      }
    });

    let clickCount = 0;
    document.querySelector('.nav-logo')?.addEventListener('click', (e) => {
      clickCount++;
      if (clickCount >= 3) {
        clickCount = 0;
        if (this.isLoggedIn) this.logout();
        else document.getElementById('adminLoginModal').classList.add('open');
      }
      setTimeout(() => { clickCount = 0; }, 1000);
    });

    document.getElementById('adminLoginForm')?.addEventListener('submit', async (e) => {
      e.preventDefault();
      const pwd = document.getElementById('adminPasswordInput').value;
      const ok = await this.login(pwd);
      if (!ok) {
        document.getElementById('adminLoginError').textContent = '❌ Wrong password';
        document.getElementById('adminPasswordInput').value = '';
      }
    });

    document.getElementById('adminLoginClose')?.addEventListener('click', () => {
      document.getElementById('adminLoginModal').classList.remove('open');
    });

    document.getElementById('adminLogoutBtn')?.addEventListener('click', () => this.logout());
    document.getElementById('adminPublishBtn')?.addEventListener('click', () => this.publishToGitHub());
    document.getElementById('adminResetBtn')?.addEventListener('click', () => {
      if (confirm('Reset all unsaved changes?')) {
        localStorage.removeItem(this.DATA_KEY);
        location.reload();
      }
    });
  }
};

document.addEventListener('DOMContentLoaded', () => ADMIN.init());
