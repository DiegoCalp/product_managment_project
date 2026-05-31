'use strict';

/* ═══════════════════════════════════════════════════════════════════════════════
   DATA
   ═══════════════════════════════════════════════════════════════════════════════ */

const SOLDIER = {
  id: 1, name: 'Alex Cohen', nameHe: 'אלכס כהן',
  country: 'ארה"ב', flag: '🇺🇸', age: 21, unit: 'גולני',
  base: 'צאלים', city: 'תל אביב', rank: 'טוראי',
  languages: ['English', 'עברית (בסיסי)'],
  interests: ['ספורט', 'סרטים וסדרות', 'בישול', 'מוזיקה'],
  dietary: 'כשרות',
  about: 'חייל בודד מניו יורק. בשנה הראשונה לשירות. מחפש חיבור לחברה הישראלית וחום ביתי בסופי שבוע.',
  initials: 'AC', color: '#2563EB',
  requests: [
    {
      id: 1, familyId: 3, familyName: 'משפחת ברגר',
      date: 'שבת, 14 ביוני 2025', meal: 'ארוחת שבת',
      area: 'חיפה', status: 'נמצאה משפחה מתעניינת', statusCode: 'interested'
    },
    {
      id: 2, familyId: 1, familyName: 'משפחת לוי',
      date: 'שישי, 23 במאי 2025', meal: 'ארוחת שישי',
      area: 'תל אביב', status: 'הושלם', statusCode: 'completed', rating: 5
    },
    {
      id: 3, familyId: 5, familyName: 'משפחת מזרחי',
      date: 'שבת, 10 במאי 2025', meal: 'ארוחת שבת',
      area: 'ראשון לציון', status: 'הושלם', statusCode: 'completed', rating: 5
    }
  ]
};

const FAMILIES = [
  {
    id: 1, name: 'משפחת לוי', firstName: 'רונית ויגאל לוי',
    city: 'תל אביב', area: 'גוש דן',
    languages: ['עברית', 'אנגלית'],
    members: 'זוג + 2 ילדים (גילאי 8, 12)',
    description: 'משפחה חמה ושמחה שמארחת חיילים בודדים כבר 4 שנים. אוהבים לבשל, לשחק משחקי קופסא ולשמוע סיפורים מרחבי העולם. הילדים מאוד אוהבים חיילים!',
    interests: ['בישול', 'משחקי קופסא', 'ספורט', 'מוזיקה'],
    dietary: ['כשרות', 'צמחונות'],
    hosting_style: 'ארוחה משפחתית חמה ושמחה',
    available: ['שישי ערב', 'שבת צהריים'],
    rating: 4.9, reviews: 28,
    initials: 'לו', color: '#059669', verified: true, hosting_since: '2021', distance: '2.3 ק"מ'
  },
  {
    id: 2, name: 'משפחת כהן', firstName: 'מרים ודוד כהן',
    city: 'ירושלים', area: 'גילה',
    languages: ['עברית', 'צרפתית', 'אנגלית'],
    members: 'זוג + 3 ילדים (גילאי 5, 10, 14)',
    description: 'עלינו מצרפת לפני 8 שנים ומבינים את חוויית העלייה מבפנים. מארחים כל שבת! שולחן שבת מסורתי, ירושלמי ואוהב. דלת פתוחה תמיד.',
    interests: ['שבת/דת', 'בישול', 'קריאה', 'יוגה'],
    dietary: ['כשרות'],
    hosting_style: 'שולחן שבת מסורתי ואוהב',
    available: ['שישי ערב', 'שבת צהריים', 'חגים'],
    rating: 5.0, reviews: 41,
    initials: 'כה', color: '#7C3AED', verified: true, hosting_since: '2020', distance: '62 ק"מ'
  },
  {
    id: 3, name: 'משפחת ברגר', firstName: 'נטשה ואנדריי ברגר',
    city: 'חיפה', area: 'כרמל',
    languages: ['עברית', 'רוסית', 'אנגלית'],
    members: 'זוג צעיר, ללא ילדים',
    description: 'זוג צעיר שעלו מרוסיה לפני 5 שנים. בבית הזה הכל מדבר — מוזיקה, סרטים ואוכל ביתי טוב. אווירה כיפית וקלילה, מקבלים בשמחה!',
    interests: ['מוזיקה', 'סרטים וסדרות', 'בישול', 'טכנולוגיה'],
    dietary: ['כשרות'],
    hosting_style: 'ערב כיפי וקליל, אווירה נעימה',
    available: ['שישי ערב', 'שבת'],
    rating: 4.8, reviews: 17,
    initials: 'בר', color: '#DB2777', verified: true, hosting_since: '2022', distance: '90 ק"מ'
  },
  {
    id: 4, name: 'משפחת אברהם', firstName: 'לורה ומשה אברהם',
    city: 'נתניה', area: 'נתניה',
    languages: ['עברית', 'ספרדית', 'אנגלית'],
    members: 'זוג + 2 ילדים (גילאי 7, 9)',
    description: 'משפחה ספרדית-ישראלית ססגונית! אוהבים לארח, ריקודים ואוכל ים-תיכוני ביתי. הבית שלנו הוא הבית שלכם — שמחה, שיר ואוכל טעים.',
    interests: ['ספורט', 'בישול', 'מוזיקה', 'טיולים/טבע'],
    dietary: ['כשרות'],
    hosting_style: 'ארוחה ספרדית-ים תיכונית חגיגית',
    available: ['שישי ערב', 'שבת', 'חגים'],
    rating: 4.7, reviews: 12,
    initials: 'אב', color: '#D97706', verified: true, hosting_since: '2023', distance: '31 ק"מ'
  },
  {
    id: 5, name: 'משפחת מזרחי', firstName: 'חגית ועמית מזרחי',
    city: 'ראשון לציון', area: 'ראשון לציון',
    languages: ['עברית', 'אנגלית'],
    members: 'זוג + 4 ילדים (גילאי 3, 6, 10, 15)',
    description: 'בית גדול, שמח ורועש! ילדים שאוהבים חיילים, אוכל טוב ושולחן ששבע. תמיד יש עוד כיסא סביב השולחן ועוד מקום בלב.',
    interests: ['משחקי קופסא', 'בישול', 'ספורט', 'וולנטריז\'ם'],
    dietary: ['כשרות'],
    hosting_style: 'שולחן גדול ומשפחתי, הרבה ילדים',
    available: ['שישי ערב', 'שבת צהריים'],
    rating: 4.8, reviews: 34,
    initials: 'מז', color: '#0891B2', verified: true, hosting_since: '2019', distance: '18 ק"מ'
  }
];

const INCOMING = {
  soldier: {
    id: 2, name: 'Maya Goldstein', nameHe: 'מאיה גולדשטיין',
    country: 'קנדה', flag: '🇨🇦', age: 20, unit: 'חיל האוויר',
    city: 'תל אביב',
    languages: ['English', 'עברית (בסיסי)', 'Français (בסיסי)'],
    interests: ['ספורט', 'מוזיקה', 'טיולים/טבע', 'בישול'],
    dietary: 'כשרות + צמחונית',
    about: 'חיילת בודדת מטורונטו, קנדה. בשנה הראשונה בצבא. אוהבת טבע, מוזיקה ולגלות תרבויות חדשות.',
    initials: 'MG', color: '#DC2626',
    verified: true
  },
  request: {
    id: 5, date: 'שבת, 14 ביוני 2025', meal: 'ארוחת שבת',
    area: 'תל אביב', max_distance: '30 ק"מ', needs_transport: false,
    notes: 'שמחה מאוד לפגוש משפחה ישראלית ולטעום בישול ביתי. יכולה להגיע עצמאית.',
    status: 'pending'
  }
};

/* ═══════════════════════════════════════════════════════════════════════════════
   STATE
   ═══════════════════════════════════════════════════════════════════════════════ */

const S = {
  screen: 'welcome',
  role: null,
  selectedFamilyId: null,
  formStep: 1,
  formData: {},
  formErrors: {},
  filter: 'הכל',
  favorites: new Set(),
  ratingValue: 0,
  cancelConfirm: false,
  reportTarget: null
};

/* ═══════════════════════════════════════════════════════════════════════════════
   NAVIGATION
   ═══════════════════════════════════════════════════════════════════════════════ */

function go(screen, params = {}) {
  Object.assign(S, params, { screen });
  render();
  window.scrollTo({ top: 0, behavior: 'instant' });
}

/* ═══════════════════════════════════════════════════════════════════════════════
   RENDER ENTRY
   ═══════════════════════════════════════════════════════════════════════════════ */

function render() {
  const app = document.getElementById('app');
  const map = {
    welcome:            renderWelcome,
    soldierHome:        renderSoldierHome,
    browseFamilies:     renderBrowseFamilies,
    familyDetail:       renderFamilyDetail,
    requestForm:        renderRequestForm,
    requestSent:        renderRequestSent,
    myRequests:         renderMyRequests,
    soldierProfile:     renderSoldierProfile,
    soldierViewMatch:   renderSoldierViewMatch,
    rateHosting:        renderRateHosting,
    familyDashboard:    renderFamilyDashboard,
    familyViewRequest:  renderFamilyViewRequest,
    matchConfirmed:     renderMatchConfirmed
  };
  app.innerHTML = (map[S.screen] || renderWelcome)();
  attachListeners();
}

/* ═══════════════════════════════════════════════════════════════════════════════
   COMPONENT HELPERS
   ═══════════════════════════════════════════════════════════════════════════════ */

function Avatar(initials, color, cls = 'av-md') {
  return `<div class="avatar ${cls}" style="background:${color}">${initials}</div>`;
}

function Stars(n, interactive = false) {
  if (interactive) {
    return [1,2,3,4,5].map(i =>
      `<span class="star-btn ${i <= S.ratingValue ? 'starred' : ''}" data-star="${i}">★</span>`
    ).join('');
  }
  const full = Math.floor(n), half = (n % 1) >= 0.5 ? 1 : 0, empty = 5 - full - half;
  return `<span class="stars">${'★'.repeat(full)}${'⯨'.repeat(half)}${'☆'.repeat(empty)}</span>`;
}

function StatusBadge(code) {
  const map = {
    pending:    ['b-amber',  '⏳ ממתין לאישור'],
    interested: ['b-purple', '💜 משפחה מתעניינת'],
    confirmed:  ['b-green',  '✅ אושר'],
    completed:  ['b-blue',   '🏠 הושלם'],
    cancelled:  ['b-red',    '❌ בוטל']
  };
  const [cls, label] = map[code] || ['b-gray', code];
  return `<span class="badge ${cls}">${label}</span>`;
}

function BottomNav(active) {
  if (S.role === 'soldier') {
    const items = [
      { id: 'soldierHome',    icon: '🏠', label: 'בית' },
      { id: 'browseFamilies', icon: '🔍', label: 'חפש' },
      { id: 'myRequests',     icon: '📋', label: 'בקשות', badge: 1 },
      { id: 'soldierProfile', icon: '👤', label: 'פרופיל' }
    ];
    return `<nav class="bottom-nav">${items.map(it => `
      <div class="nav-item ${active === it.id ? 'active' : ''}" data-nav="${it.id}">
        <span class="nav-icon">${it.icon}</span>
        ${it.badge ? `<span class="nav-badge">${it.badge}</span>` : ''}
        <span class="nav-label">${it.label}</span>
      </div>`).join('')}</nav>`;
  }
  const items = [
    { id: 'familyDashboard', icon: '🏠', label: 'דשבורד', badge: 1 },
    { id: 'browseFamilies',  icon: '🔍', label: 'חיפוש' },
    { id: 'soldierProfile',  icon: '👨‍👩‍👧', label: 'הפרופיל שלנו' }
  ];
  return `<nav class="bottom-nav">${items.map(it => `
    <div class="nav-item ${active === it.id ? 'active' : ''}" data-nav="${it.id}">
      <span class="nav-icon">${it.icon}</span>
      ${it.badge ? `<span class="nav-badge">${it.badge}</span>` : ''}
      <span class="nav-label">${it.label}</span>
    </div>`).join('')}</nav>`;
}

function Header(title, showBack = false, action = null) {
  return `<header class="header">
    ${showBack
      ? `<button class="back-btn" data-action="back">‹</button>`
      : `<div class="header-logo"><div class="logo-mark">B</div></div>`}
    <div class="header-title">${title}</div>
    ${action ? `<span class="header-action" data-action="${action.id}">${action.label}</span>` : ''}
  </header>`;
}

/* ═══════════════════════════════════════════════════════════════════════════════
   SCREEN: WELCOME
   ═══════════════════════════════════════════════════════════════════════════════ */

function renderWelcome() {
  return `<div class="screen welcome-screen">
    <div class="welcome-hero">
      <div class="welcome-logo-big">BS</div>
      <div class="welcome-title">BeSeder</div>
      <div style="font-size:20px;font-weight:700;opacity:.9;margin-bottom:8px;">בסדר</div>
      <div class="welcome-subtitle">מחברים חיילים בודדים עם משפחות ישראליות לשבת וחג — בבטחה ובפרטיות</div>
      <div class="welcome-stats">
        <div class="welcome-stat"><div class="welcome-stat-num">1,200+</div><div class="welcome-stat-label">אירוחים</div></div>
        <div class="welcome-stat"><div class="welcome-stat-num">340</div><div class="welcome-stat-label">משפחות</div></div>
        <div class="welcome-stat"><div class="welcome-stat-num">98%</div><div class="welcome-stat-label">שביעות רצון</div></div>
      </div>
    </div>
    <div class="welcome-bottom">
      <div class="welcome-bottom-title">ברוכים הבאים 👋</div>
      <div class="welcome-bottom-desc">מי אתם? נתאים עבורכם את החוויה</div>
      <div class="role-cards">
        <div class="role-card" data-role="soldier">
          <div class="role-card-icon" style="background:#EFF6FF">🪖</div>
          <div class="flex-1">
            <div class="role-card-title">אני חייל/ת בודד/ת</div>
            <div class="role-card-desc">עולה חדש/ה המשרת/ת בצה"ל</div>
          </div>
          <div class="role-card-arrow">›</div>
        </div>
        <div class="role-card" data-role="family">
          <div class="role-card-icon" style="background:#ECFDF5">🏡</div>
          <div class="flex-1">
            <div class="role-card-title">אנחנו משפחה מארחת</div>
            <div class="role-card-desc">רוצים לפתוח את הבית לחיילים</div>
          </div>
          <div class="role-card-arrow">›</div>
        </div>
      </div>
    </div>
  </div>`;
}

/* ═══════════════════════════════════════════════════════════════════════════════
   SCREEN: SOLDIER HOME
   ═══════════════════════════════════════════════════════════════════════════════ */

function renderSoldierHome() {
  const interestedReqs = SOLDIER.requests.filter(r => r.statusCode === 'interested');
  const pendingReqs    = SOLDIER.requests.filter(r => r.statusCode === 'pending');
  return `<div class="screen">
    ${Header('')}
    <div class="page">
      <div class="greeting-banner">
        <div class="greeting-blob"></div><div class="greeting-blob2"></div>
        <div style="position:relative;z-index:1">
          <div class="greeting-name">שלום, ${SOLDIER.name} ${SOLDIER.flag} 👋</div>
          <div class="greeting-sub">ברוך הבא לבסדר — מוצאים לך בית לשבת</div>
        </div>
      </div>
      <div style="height:20px"></div>

      <!-- 5.4.1: CTA prominent on main screen -->
      <div class="cta-card" data-action="requestForm">
        <div class="cta-label">🔒 פרטי ובטוח</div>
        <div class="cta-title">🍽️ מצא לי אירוח לשבת או חג</div>
        <div class="cta-desc">הבקשה תישלח באופן פרטי רק למשפחות רלוונטיות — ללא פרסום ציבורי</div>
        <div class="cta-btn-inner">🔍 בקש אירוח עכשיו &nbsp;›</div>
      </div>

      <div class="stats-row">
        <div class="stat-card"><div class="stat-icon">🏠</div><div class="stat-num">2</div><div class="stat-label">אירוחים מוצלחים</div></div>
        <div class="stat-card"><div class="stat-icon">⏳</div><div class="stat-num">${pendingReqs.length + interestedReqs.length}</div><div class="stat-label">בקשות פתוחות</div></div>
        <div class="stat-card"><div class="stat-icon">⭐</div><div class="stat-num">5.0</div><div class="stat-label">דירוג ממוצע</div></div>
      </div>

      <!-- 5.4.7: Notification when a family expresses interest -->
      ${interestedReqs.length ? `
      <div class="notification-banner" style="background:linear-gradient(135deg,#7C3AED,#9333EA);margin:0 16px 12px;border-radius:var(--r-lg)" data-nav="soldierViewMatch">
        <span class="notif-icon">💜</span>
        <div>
          <div class="notif-title">משפחה מתעניינת באירוח שלך!</div>
          <div class="notif-desc">${FAMILIES.find(f=>f.id===interestedReqs[0].familyId)?.name} · ${interestedReqs[0].date}</div>
        </div>
        <span class="notif-arrow">›</span>
      </div>` : ''}

      <div class="section-header"><span class="section-title">📋 סטטוס הבקשות שלי</span><span class="section-link" data-nav="myRequests">הכל ›</span></div>
      ${SOLDIER.requests.length ? `<div class="card" style="margin:0 16px 16px">
        ${SOLDIER.requests.slice(0,2).map(r => {
          const fam = FAMILIES.find(f => f.id === r.familyId);
          return `<div class="request-item" data-nav="myRequests">
            <div class="req-icon">${Avatar(fam.initials, fam.color, 'av-md')}</div>
            <div class="flex-1">
              <div class="req-title">${r.familyName}</div>
              <div class="req-sub">📅 ${r.date} · ${r.meal}</div>
            </div>
            ${StatusBadge(r.statusCode)}
          </div>`;
        }).join('')}
      </div>` : ''}

      <div class="section-header"><span class="section-title">❤️ משפחות מועדפות</span><span class="section-link" data-nav="browseFamilies">חפש עוד ›</span></div>
      <div class="family-grid" style="padding:0 16px 16px">
        ${FAMILIES.slice(0,2).map(f => FamilyCard(f, true)).join('')}
      </div>
    </div>
    ${BottomNav('soldierHome')}
  </div>`;
}

/* ═══════════════════════════════════════════════════════════════════════════════
   FAMILY CARD COMPONENT
   ═══════════════════════════════════════════════════════════════════════════════ */

function FamilyCard(f, compact = false) {
  const isFav = S.favorites.has(f.id);
  return `<div class="card family-card" data-action="viewFamily" data-fid="${f.id}">
    <div class="family-card-cover" style="background:${f.color}">
      <div class="cover-pattern"></div>
      ${Avatar(f.initials, 'rgba(255,255,255,0.22)', compact ? 'av-xl' : 'av-xxl')}
      ${f.verified ? `<div class="cover-badge cover-badge-left">✓ מאומת</div>` : ''}
      <div class="cover-badge cover-badge-right">📍 ${f.distance}</div>
      <!-- Feature 9: Favorites -->
      <button class="fav-btn ${isFav ? 'fav-active' : ''}" data-fav="${f.id}" title="שמור כמועדפת">${isFav ? '❤️' : '🤍'}</button>
    </div>
    <div class="family-card-body">
      <div class="flex items-center justify-between" style="gap:8px">
        <div>
          <div class="family-name">${f.name}</div>
          <div class="family-city">📍 ${f.city} · ${f.members}</div>
        </div>
        <div style="text-align:left">
          ${Stars(f.rating)}
          <div style="font-size:11px;color:var(--text-3)">${f.rating} (${f.reviews})</div>
        </div>
      </div>
      <div class="family-desc">${f.description}</div>
      <div class="badge-row">
        ${f.languages.map(l => `<span class="badge b-blue">🗣 ${l}</span>`).join('')}
        ${f.verified ? `<span class="verified-badge">✓ מאומת</span>` : ''}
      </div>
      ${!compact ? `<div class="badge-row">${f.interests.map(i=>`<span class="badge b-gray">${i}</span>`).join('')}</div>
      <div style="margin-top:10px;font-size:13px;color:var(--text-3)">🕯️ ${f.hosting_style}</div>` : ''}
    </div>
    <div class="family-card-footer">
      <div style="font-size:12px;color:var(--text-3)">⏰ ${f.available.join(' · ')}</div>
      <button class="btn btn-primary btn-sm" data-action="requestFam" data-fid="${f.id}">בקש אירוח</button>
    </div>
  </div>`;
}

/* ═══════════════════════════════════════════════════════════════════════════════
   SCREEN: BROWSE FAMILIES
   ═══════════════════════════════════════════════════════════════════════════════ */

function renderBrowseFamilies() {
  const filters = ['הכל', 'תל אביב', 'ירושלים', 'חיפה', 'ראשון לציון', 'נתניה'];
  const filtered = S.filter === 'הכל' ? FAMILIES : FAMILIES.filter(f => f.city === S.filter);
  return `<div class="screen">
    ${Header('חפש משפחות')}
    <div class="page">
      <div class="filter-bar">
        ${filters.map(f => `<div class="filter-chip ${S.filter === f ? 'active' : ''}" data-filter="${f}">${f}</div>`).join('')}
      </div>
      <div style="padding:4px 16px 8px;font-size:13px;color:var(--text-3)">${filtered.length} משפחות נמצאו</div>
      <div class="family-grid">
        ${filtered.map(f => FamilyCard(f, false)).join('')}
      </div>
    </div>
    ${BottomNav('browseFamilies')}
  </div>`;
}

/* ═══════════════════════════════════════════════════════════════════════════════
   SCREEN: FAMILY DETAIL
   ═══════════════════════════════════════════════════════════════════════════════ */

function renderFamilyDetail() {
  const f = FAMILIES.find(x => x.id === S.selectedFamilyId) || FAMILIES[0];
  const isFav = S.favorites.has(f.id);
  return `<div class="screen">
    <header class="header">
      <button class="back-btn" data-action="back">‹</button>
      <div class="header-title">${f.name}</div>
      <button class="fav-btn ${isFav ? 'fav-active' : ''}" data-fav="${f.id}" style="font-size:22px;padding:4px">${isFav ? '❤️' : '🤍'}</button>
    </header>
    <div class="page">
      <div class="profile-cover" style="background:${f.color}">
        <div class="cover-pattern"></div>
        <svg class="profile-cover-wave" viewBox="0 0 480 36" preserveAspectRatio="none" height="36">
          <path d="M0,36 Q120,0 240,18 Q360,36 480,10 L480,36 Z" fill="#F1F5F9"/>
        </svg>
      </div>
      <div class="profile-avatar-wrap">
        <div class="avatar-ring">${Avatar(f.initials, f.color, 'av-xl')}</div>
        <div style="text-align:left">
          <div class="rating-row">${Stars(f.rating)}<span class="rating-num">${f.rating}</span><span class="rating-count">(${f.reviews})</span></div>
          <div style="font-size:12px;color:var(--text-3);margin-top:2px">מארחים מאז ${f.hosting_since}</div>
        </div>
      </div>
      <div style="padding:0 16px 8px">
        <div class="flex items-center gap-8">
          <div style="font-size:22px;font-weight:800">${f.name}</div>
          ${f.verified ? `<span class="verified-badge">✓ מאומת</span>` : ''}
        </div>
        <div style="font-size:14px;color:var(--text-3);margin-top:2px">${f.firstName}</div>
        <div class="flex gap-8" style="margin-top:8px;flex-wrap:wrap">
          <span class="badge b-blue">📍 ${f.city}</span>
          <span class="badge b-gray">${f.distance}</span>
        </div>
      </div>

      <div class="section-gap"></div>
      <div class="info-section">
        <div class="info-section-title">על המשפחה</div>
        <p style="font-size:14px;color:var(--text-2);line-height:1.7">${f.description}</p>
      </div>

      <div class="section-gap"></div>
      <div class="info-section">
        <div class="info-section-title">פרטי האירוח</div>
        <div class="info-row"><span class="info-icon">👨‍👩‍👧‍👦</span><span class="info-label">הרכב</span><span class="info-value">${f.members}</span></div>
        <div class="info-row"><span class="info-icon">🗣️</span><span class="info-label">שפות</span><span class="info-value">${f.languages.join(', ')}</span></div>
        <div class="info-row"><span class="info-icon">🕯️</span><span class="info-label">סגנון</span><span class="info-value">${f.hosting_style}</span></div>
        <div class="info-row"><span class="info-icon">🥗</span><span class="info-label">תזונה</span><span class="info-value">${f.dietary.join(', ')}</span></div>
        <div class="info-row"><span class="info-icon">📅</span><span class="info-label">זמינות</span><span class="info-value">${f.available.join(', ')}</span></div>
      </div>

      <div class="section-gap"></div>
      <div class="info-section">
        <div class="info-section-title">תחומי עניין</div>
        <div class="badge-row">${f.interests.map(i => `<span class="badge b-teal">${i}</span>`).join('')}</div>
      </div>

      <div style="padding:16px;display:flex;flex-direction:column;gap:10px">
        <button class="btn btn-primary btn-full btn-lg" data-action="requestFam" data-fid="${f.id}">
          🏠 בקש אירוח ממשפחה זו
        </button>
        <!-- Feature 6: Report/Block -->
        <button class="btn btn-ghost btn-sm" style="color:var(--text-4);font-size:12px" data-action="reportUser" data-name="${f.name}">
          🚩 דווח על משתמש / חסום
        </button>
      </div>
    </div>
  </div>`;
}

/* ═══════════════════════════════════════════════════════════════════════════════
   SCREEN: REQUEST FORM — 3 STEPS (PRD 5.4.1–5.4.3)
   ═══════════════════════════════════════════════════════════════════════════════ */

function renderRequestForm() {
  const f = S.selectedFamilyId ? FAMILIES.find(x => x.id === S.selectedFamilyId) : null;
  const step = S.formStep;
  const pct = Math.round((step / 3) * 100);
  const stepLabels = ['פרטים בסיסיים', 'העדפות', 'סיכום ושליחה'];

  let body = '';
  if (step === 1) body = formStep1(f);
  else if (step === 2) body = formStep2();
  else body = formStep3(f);

  return `<div class="screen">
    <header class="header">
      <button class="back-btn" data-action="back">‹</button>
      <div class="header-title">בקשת אירוח — שלב ${step} מתוך 3</div>
    </header>
    <div class="page">
      <div style="padding:12px 16px 0">
        <div class="step-indicator">
          ${[1,2,3].map((n, i) => `
            ${i > 0 ? `<div class="step-line ${step > n-1 ? 'sl-done' : ''}"></div>` : ''}
            <div class="step-item ${step > n ? 's-done' : step === n ? 's-active' : ''}">
              <div class="step-circle">${step > n ? '✓' : n}</div>
              <div class="step-lbl">${stepLabels[i]}</div>
            </div>
          `).join('')}
        </div>
        <div class="progress-bar"><div class="progress-fill" style="width:${pct}%"></div></div>
      </div>

      ${f ? `<div style="margin:12px 16px 0;padding:12px;background:var(--primary-light);border-radius:var(--r);display:flex;align-items:center;gap:10px">
        ${Avatar(f.initials, f.color, 'av-sm')}
        <div><div style="font-size:13px;font-weight:600;color:var(--primary)">${f.name}</div><div style="font-size:12px;color:var(--text-3)">📍 ${f.city}</div></div>
      </div>` : ''}

      <!-- 5.4.1: Privacy notice before filling form -->
      <div style="margin:12px 16px 0;background:var(--warning-light);border:1px solid #FDE68A;border-radius:var(--r);padding:11px 14px;font-size:13px;color:var(--warning);display:flex;gap:8px;align-items:flex-start">
        🔒 <span>הבקשה תישלח <strong>באופן פרטי בלבד</strong> למשפחות מארחות רלוונטיות — לא תפורסם בשום קבוצה או פלטפורמה ציבורית</span>
      </div>

      <div class="page-content">
        ${S.formErrors._global ? `<div style="background:var(--danger-light);border:1px solid #FCA5A5;border-radius:var(--r);padding:10px 14px;margin-bottom:12px;font-size:13px;color:var(--danger)">⚠️ ${S.formErrors._global}</div>` : ''}
        ${body}
      </div>
    </div>
  </div>`;
}

/* PRD 5.4.2: All required form fields */
function formStep1(f) {
  const meals = ['ארוחת שישי ערב', 'ארוחת שבת צהריים', 'ארוחת חג', 'אחר'];
  const areas = ['תל אביב', 'ירושלים', 'חיפה', 'ראשון לציון', 'נתניה', 'פתח תקווה', 'גבעתיים', 'אחר'];
  const distances = ['5 ק"מ', '10 ק"מ', '20 ק"מ', '30 ק"מ', '50 ק"מ', 'ללא הגבלה'];
  const sel = S.formData;
  return `
    <div class="form-group">
      <label class="form-label">סוג הארוחה המבוקשת <span style="color:var(--danger)">*</span></label>
      <div class="chip-group">
        ${meals.map(m => `<div class="chip ${sel.meal === m ? 'selected' : ''}" data-chip="meal" data-val="${m}">${m}</div>`).join('')}
      </div>
      ${S.formErrors.meal ? `<div style="color:var(--danger);font-size:12px;margin-top:4px">⚠️ ${S.formErrors.meal}</div>` : ''}
    </div>
    <div class="form-group">
      <label class="form-label">תאריך האירוח המבוקש <span style="color:var(--danger)">*</span></label>
      <input type="date" class="form-control ${S.formErrors.date ? 'error-border' : ''}" id="inp-date"
        value="${sel.date || ''}" min="${new Date().toISOString().split('T')[0]}">
      ${S.formErrors.date ? `<div style="color:var(--danger);font-size:12px;margin-top:4px">⚠️ ${S.formErrors.date}</div>` : ''}
    </div>
    <div class="form-group">
      <label class="form-label">עיר או אזור מועדפים <span style="color:var(--danger)">*</span></label>
      <div class="chip-group">
        ${areas.map(a => `<div class="chip ${sel.area === a ? 'selected' : ''}" data-chip="area" data-val="${a}">${a}</div>`).join('')}
      </div>
      ${S.formErrors.area ? `<div style="color:var(--danger);font-size:12px;margin-top:4px">⚠️ ${S.formErrors.area}</div>` : ''}
    </div>
    <div class="form-group">
      <label class="form-label">מרחק נסיעה מקסימלי</label>
      <div class="chip-group">
        ${distances.map(d => `<div class="chip sel-amber ${sel.maxDist === d ? 'selected' : ''}" data-chip="maxDist" data-val="${d}">${d}</div>`).join('')}
      </div>
    </div>
    <div class="form-group">
      <label class="form-label">הגעה לארוחה</label>
      <select class="form-control" id="inp-transport">
        <option value="">בחר...</option>
        <option ${sel.transport === 'self'    ? 'selected' : ''} value="self">יכול/ה להגיע עצמאית</option>
        <option ${sel.transport === 'help'    ? 'selected' : ''} value="help">אשמח לעזרה בהגעה</option>
        <option ${sel.transport === 'unknown' ? 'selected' : ''} value="unknown">עדיין לא יודע/ת</option>
      </select>
    </div>
    <button class="btn btn-primary btn-full btn-lg" data-action="formNext">המשך ›</button>`;
}

function formStep2() {
  const langs  = ['עברית', 'English', 'Français', 'Español', 'Русский', 'Português', 'አማርኛ'];
  const styles = ['ארוחה משפחתית שקטה', 'משפחה עם ילדים', 'זוג צעיר', 'ללא העדפה'];
  const diet   = ['כשרות', 'צמחונות', 'טבעונות', 'ללא גלוטן', 'ללא אגוזים', 'ללא הגבלה'];
  const sel    = S.formData;
  const selLangs = sel.languages || [];
  const selDiet  = sel.dietary   || [];
  return `
    <div class="form-group">
      <label class="form-label">שפות שאני דובר/ת <span style="color:var(--danger)">*</span></label>
      <div class="chip-group">
        ${langs.map(l => `<div class="chip ${selLangs.includes(l) ? 'selected' : ''}" data-chip="lang" data-val="${l}">${l}</div>`).join('')}
      </div>
      ${S.formErrors.languages ? `<div style="color:var(--danger);font-size:12px;margin-top:4px">⚠️ ${S.formErrors.languages}</div>` : ''}
    </div>
    <div class="form-group">
      <label class="form-label">צרכים תזונתיים</label>
      <div class="chip-group">
        ${diet.map(d => `<div class="chip sel-green ${selDiet.includes(d) ? 'selected' : ''}" data-chip="diet" data-val="${d}">${d}</div>`).join('')}
      </div>
    </div>
    <div class="form-group">
      <label class="form-label">העדפות אופי האירוח <span style="color:var(--danger)">*</span></label>
      <div class="chip-group">
        ${styles.map(s => `<div class="chip ${sel.style === s ? 'selected' : ''}" data-chip="style" data-val="${s}">${s}</div>`).join('')}
      </div>
      ${S.formErrors.style ? `<div style="color:var(--danger);font-size:12px;margin-top:4px">⚠️ ${S.formErrors.style}</div>` : ''}
    </div>

    <!-- 5.4.3: Explicit privacy breakdown -->
    <div style="background:var(--info-light);border-radius:var(--r);padding:14px;margin-bottom:16px">
      <div style="font-size:13px;font-weight:700;color:var(--info);margin-bottom:8px">🔒 מה יוצג למשפחות</div>
      <div style="font-size:12px;color:var(--info);line-height:1.8">
        <div>✅ <strong>יוצג:</strong> שם פרטי, שפות, צרכים תזונתיים, העדפות אירוח, אזור כללי</div>
        <div>🚫 <strong>לא יוצג:</strong> מספר טלפון, כתובת הבסיס, שם היחידה, פרטים צבאיים</div>
      </div>
    </div>

    <div style="display:flex;gap:8px">
      <button class="btn btn-ghost btn-full" data-action="formBack">‹ חזור</button>
      <button class="btn btn-primary btn-full btn-lg" data-action="formNext">המשך ›</button>
    </div>`;
}

function formStep3(f) {
  const sel = S.formData;
  return `
    <div class="card" style="margin-bottom:16px">
      <div class="card-body">
        <div style="font-size:15px;font-weight:700;margin-bottom:14px;color:var(--text)">📋 סיכום הבקשה</div>
        <div class="info-row"><span class="info-icon">🍽️</span><span class="info-label">סוג ארוחה</span><span class="info-value">${sel.meal || '—'}</span></div>
        <div class="info-row"><span class="info-icon">📅</span><span class="info-label">תאריך</span><span class="info-value">${sel.date || '—'}</span></div>
        <div class="info-row"><span class="info-icon">📍</span><span class="info-label">אזור</span><span class="info-value">${sel.area || '—'}</span></div>
        <div class="info-row"><span class="info-icon">🚗</span><span class="info-label">מרחק מקס'</span><span class="info-value">${sel.maxDist || 'ללא הגבלה'}</span></div>
        <div class="info-row"><span class="info-icon">🗣️</span><span class="info-label">שפות</span><span class="info-value">${(sel.languages || []).join(', ') || '—'}</span></div>
        <div class="info-row"><span class="info-icon">🥗</span><span class="info-label">תזונה</span><span class="info-value">${(sel.dietary || []).join(', ') || 'ללא הגבלה'}</span></div>
        <div class="info-row"><span class="info-icon">🕯️</span><span class="info-label">סגנון</span><span class="info-value">${sel.style || '—'}</span></div>
        ${f ? `<div class="info-row"><span class="info-icon">👨‍👩‍👧</span><span class="info-label">משפחה</span><span class="info-value">${f.name}</span></div>` : ''}
      </div>
    </div>
    <div class="form-group">
      <label class="form-label">הערה חופשית (אופציונלי)</label>
      <textarea class="form-control" id="inp-notes" placeholder="מידע נוסף, שאלות, הערות למשפחה...">${sel.notes || ''}</textarea>
    </div>
    <div style="display:flex;gap:8px">
      <button class="btn btn-ghost btn-full" data-action="formBack">‹ חזור</button>
      <button class="btn btn-success btn-full btn-lg" data-action="formSubmit">🚀 שלח בקשה</button>
    </div>`;
}

/* ═══════════════════════════════════════════════════════════════════════════════
   SCREEN: REQUEST SENT — 5.4.4 + 5.4.5
   ═══════════════════════════════════════════════════════════════════════════════ */

function renderRequestSent() {
  const f = S.selectedFamilyId ? FAMILIES.find(x => x.id === S.selectedFamilyId) : null;
  const matchedFamilies = f ? [f] : FAMILIES.filter(x =>
    (!S.formData.area || x.city === S.formData.area || S.formData.area === 'אחר')
  ).slice(0, 3);

  return `<div class="screen">
    ${Header('הבקשה נשלחה', true)}
    <div class="page">
      <div style="padding:32px 16px 16px;text-align:center">
        <div class="success-anim">✅</div>
        <div style="font-size:24px;font-weight:800;color:var(--text);margin-bottom:8px">הבקשה נשלחה!</div>
        <div style="font-size:14px;color:var(--text-3);max-width:300px;margin:0 auto;line-height:1.6">הבקשה נשלחה באופן פרטי ל-${matchedFamilies.length} משפחות מתאימות. נעדכן אותך בהקדם!</div>
      </div>

      <!-- 5.4.4: Matching families notified -->
      <div style="padding:0 16px 12px">
        <div style="font-size:14px;font-weight:700;color:var(--text);margin-bottom:10px">📤 הבקשה נשלחה למשפחות אלו:</div>
        ${matchedFamilies.map(m => `
          <div style="display:flex;align-items:center;gap:10px;padding:10px;background:var(--surface);border-radius:var(--r);margin-bottom:8px;box-shadow:var(--shadow-sm)">
            ${Avatar(m.initials, m.color, 'av-sm')}
            <div class="flex-1"><div style="font-size:13px;font-weight:600">${m.name}</div><div style="font-size:11px;color:var(--text-3)">📍 ${m.city} · 🗣 ${m.languages.join(', ')}</div></div>
            <span class="badge b-amber" style="font-size:11px">⏳ ממתין</span>
          </div>`).join('')}
      </div>

      <!-- 5.4.5: Full status tracking + all 5 statuses -->
      <div style="margin:0 16px 16px">
        <div class="card">
          <div class="card-body">
            <div style="font-size:15px;font-weight:700;margin-bottom:12px">מעקב סטטוס הבקשה</div>
            <div class="timeline">
              <div class="timeline-item tl-done">
                <div class="timeline-dot">✅</div>
                <div class="timeline-content"><div class="timeline-title">הבקשה נשלחה</div><div class="timeline-desc">${matchedFamilies.length} משפחות קיבלו את הבקשה</div></div>
              </div>
              <div class="timeline-item tl-active">
                <div class="timeline-dot">⏳</div>
                <div class="timeline-content"><div class="timeline-title">ממתין לתגובת משפחה מארחת</div><div class="timeline-desc">לרוב תוך 24–48 שעות</div></div>
              </div>
              <div class="timeline-item">
                <div class="timeline-dot">💜</div>
                <div class="timeline-content"><div class="timeline-title">נמצאה משפחה מתעניינת</div><div class="timeline-desc">תקבל/י התראה ותוכל/י לאשר</div></div>
              </div>
              <div class="timeline-item">
                <div class="timeline-dot">💬</div>
                <div class="timeline-content"><div class="timeline-title">תיאום דרך הצ'אט הפנימי</div><div class="timeline-desc">בלי חשיפת מספר טלפון</div></div>
              </div>
              <div class="timeline-item">
                <div class="timeline-dot">🏠</div>
                <div class="timeline-content"><div class="timeline-title">האירוח אושר!</div><div class="timeline-desc">כל הפרטים מסודרים — עד השבת!</div></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div style="padding:0 16px 8px">
        <div style="font-size:13px;color:var(--text-3);background:var(--bg);border-radius:var(--r);padding:12px;display:flex;gap:8px;align-items:flex-start">
          🔒 <span>מספר הטלפון שלך <strong>לא יועבר</strong> לאף אחד. כל התקשורת מתנהלת בתוך הפלטפורמה.</span>
        </div>
      </div>

      <div style="display:flex;gap:8px;padding:16px">
        <button class="btn btn-primary btn-full" data-nav="soldierHome">🏠 חזור לבית</button>
        <button class="btn btn-secondary btn-full" data-nav="myRequests">📋 בקשות שלי</button>
      </div>
    </div>
  </div>`;
}

/* ═══════════════════════════════════════════════════════════════════════════════
   SCREEN: MY REQUESTS — 5.4.8 (cancel/edit)
   ═══════════════════════════════════════════════════════════════════════════════ */

function renderMyRequests() {
  const reqs = SOLDIER.requests;
  return `<div class="screen">
    ${Header('הבקשות שלי')}
    <div class="page">
      <div class="page-content">
        <button class="btn btn-primary btn-full" data-action="requestForm" style="margin-bottom:16px">+ בקשת אירוח חדשה</button>
        ${reqs.map(r => {
          const fam = FAMILIES.find(f => f.id === r.familyId);
          const isInterested = r.statusCode === 'interested';
          const isPending    = r.statusCode === 'pending';
          const isCompleted  = r.statusCode === 'completed';
          return `<div class="card" style="margin-bottom:12px">
            <div style="display:flex;align-items:center;gap:12px;padding:14px 16px;border-bottom:1px solid var(--border-light)">
              ${Avatar(fam.initials, fam.color, 'av-md')}
              <div class="flex-1">
                <div style="font-size:15px;font-weight:700">${fam.name}</div>
                <div style="font-size:12px;color:var(--text-3)">📍 ${fam.city}</div>
              </div>
              ${StatusBadge(r.statusCode)}
            </div>
            <div style="padding:12px 16px">
              <div style="font-size:13px;color:var(--text-2)">📅 ${r.date}</div>
              <div style="font-size:13px;color:var(--text-2);margin-top:2px">🍽️ ${r.meal}</div>
              ${r.rating ? `<div class="rating-row" style="margin-top:6px">${Stars(r.rating)}<span style="font-size:12px;color:var(--text-3)">דירגת ${r.rating}/5</span></div>` : ''}

              ${isInterested ? `
              <div style="margin-top:10px;padding:10px;background:var(--purple-light);border-radius:var(--r);font-size:13px;color:var(--purple)">
                💜 המשפחה מתעניינת! לחץ לצפייה בפרופיל ואישור
              </div>
              <button class="btn btn-primary btn-sm" style="margin-top:8px;background:var(--purple);border-color:var(--purple)" data-nav="soldierViewMatch">👀 ראה פרופיל המשפחה ואשר</button>` : ''}

              ${isPending ? `
              <div style="margin-top:8px;display:flex;gap:8px;flex-wrap:wrap">
                <button class="btn btn-secondary btn-sm" data-action="editRequest" data-rid="${r.id}">✏️ עדכן תאריך</button>
                <button class="btn btn-ghost btn-sm" style="color:var(--danger);border:1px solid var(--border)" data-action="cancelRequest" data-rid="${r.id}">✕ בטל בקשה</button>
              </div>` : ''}

              ${isCompleted && !r.rating ? `<button class="btn btn-amber btn-sm" style="margin-top:8px" data-action="rateHosting" data-fid="${r.familyId}">⭐ דרג את האירוח</button>` : ''}
            </div>
          </div>`;
        }).join('')}
      </div>
    </div>
    ${BottomNav('myRequests')}
  </div>`;
}

/* ═══════════════════════════════════════════════════════════════════════════════
   SCREEN: SOLDIER PROFILE
   ═══════════════════════════════════════════════════════════════════════════════ */

function renderSoldierProfile() {
  const s = SOLDIER;
  return `<div class="screen">
    ${Header('הפרופיל שלי')}
    <div class="page">
      <div class="profile-cover" style="background:${s.color}">
        <div class="cover-pattern"></div>
        <svg class="profile-cover-wave" viewBox="0 0 480 36" preserveAspectRatio="none" height="36">
          <path d="M0,36 Q120,10 240,22 Q360,36 480,8 L480,36 Z" fill="#F1F5F9"/>
        </svg>
      </div>
      <div class="profile-avatar-wrap">
        <div class="avatar-ring">${Avatar(s.initials, s.color, 'av-xl')}</div>
        <div style="display:flex;gap:8px;align-items:center">
          ${s.verified ? `<span class="verified-badge">✓ מאומת</span>` : `<button class="btn btn-amber btn-sm">🔐 אמת פרופיל</button>`}
          <button class="btn btn-secondary btn-sm">✏️ ערוך</button>
        </div>
      </div>
      <div style="padding:8px 16px 16px">
        <div style="font-size:22px;font-weight:800">${s.name} ${s.flag}</div>
        <div style="font-size:14px;color:var(--text-3)">${s.nameHe}</div>
        <div class="flex gap-8" style="margin-top:8px;flex-wrap:wrap">
          <span class="badge b-blue">🪖 ${s.unit}</span>
          <span class="badge b-purple">${s.rank}</span>
          <span class="badge b-gray">📍 ${s.city}</span>
        </div>
      </div>

      <div class="section-gap"></div>
      <div class="info-section">
        <div class="info-section-title">אודות</div>
        <p style="font-size:14px;color:var(--text-2);line-height:1.7">${s.about}</p>
      </div>

      <div class="section-gap"></div>
      <div class="info-section">
        <div class="info-section-title">פרטים אישיים</div>
        <div class="info-row"><span class="info-icon">🌍</span><span class="info-label">מדינת מוצא</span><span class="info-value">${s.country}</span></div>
        <div class="info-row"><span class="info-icon">🎂</span><span class="info-label">גיל</span><span class="info-value">${s.age}</span></div>
        <div class="info-row"><span class="info-icon">🪖</span><span class="info-label">יחידה</span><span class="info-value">${s.unit} — ${s.base}</span></div>
        <div class="info-row"><span class="info-icon">📍</span><span class="info-label">עיר</span><span class="info-value">${s.city}</span></div>
        <div class="info-row"><span class="info-icon">🗣️</span><span class="info-label">שפות</span><span class="info-value">${s.languages.join(', ')}</span></div>
        <div class="info-row"><span class="info-icon">🥗</span><span class="info-label">תזונה</span><span class="info-value">${s.dietary}</span></div>
      </div>

      <div class="section-gap"></div>
      <div class="info-section">
        <div class="info-section-title">תחומי עניין</div>
        <div class="badge-row">${s.interests.map(i => `<span class="badge b-teal">${i}</span>`).join('')}</div>
      </div>

      <!-- Feature 5: Verification block -->
      <div style="margin:0 16px;padding:14px;background:var(--warning-light);border-radius:var(--r);border:1px solid #FDE68A">
        <div style="font-size:13px;font-weight:700;color:var(--warning);margin-bottom:6px">🔐 אימות פרופיל (Feature #5)</div>
        <div style="font-size:12px;color:var(--warning);line-height:1.7">
          לאמת את זהותך כחייל בודד עולה חדש — ניתן להעלות: תעודת חייל, אישור ממש"קית ת"ש, או אישור מרכז קליטה
        </div>
        <button class="btn btn-amber btn-sm btn-full" style="margin-top:10px">📎 העלה מסמך לאימות</button>
      </div>

      <div style="padding:16px">
        <button class="btn btn-ghost btn-full" style="color:var(--danger);border:1px solid var(--border)" data-nav="welcome">יציאה מהחשבון</button>
      </div>
    </div>
    ${BottomNav('soldierProfile')}
  </div>`;
}

/* ═══════════════════════════════════════════════════════════════════════════════
   SCREEN: SOLDIER VIEWS INTERESTED FAMILY — 5.4.7
   ═══════════════════════════════════════════════════════════════════════════════ */

function renderSoldierViewMatch() {
  const intReq = SOLDIER.requests.find(r => r.statusCode === 'interested');
  const fam = FAMILIES.find(f => f.id === (intReq?.familyId || 3));
  return `<div class="screen">
    <header class="header">
      <button class="back-btn" data-action="back">‹</button>
      <div class="header-title">משפחה מתעניינת!</div>
      <span class="badge b-purple">💜 חדש</span>
    </header>
    <div class="page">
      <!-- 5.4.7: Soldier sees family's basic profile when they express interest -->
      <div style="background:linear-gradient(135deg,${fam.color},${fam.color}bb);color:white;padding:24px 16px;text-align:center">
        ${Avatar(fam.initials, 'rgba(255,255,255,.25)', 'av-xxl')}
        <div style="font-size:22px;font-weight:800;margin-top:12px">${fam.name}</div>
        <div style="font-size:14px;opacity:.85">${fam.firstName}</div>
        <div style="margin-top:8px;display:flex;gap:6px;flex-wrap:wrap;justify-content:center">
          ${fam.languages.map(l=>`<span style="background:rgba(255,255,255,.2);padding:2px 10px;border-radius:999px;font-size:12px;font-weight:600">${l}</span>`).join('')}
        </div>
      </div>

      <div style="margin:16px;padding:12px;background:var(--purple-light);border-radius:var(--r);font-size:13px;color:var(--purple);font-weight:600;text-align:center">
        💜 ${fam.name} הביעו עניין לארח אותך ב-${intReq?.date || 'שבת, 14 ביוני 2025'}
      </div>

      <div class="section-gap"></div>
      <div class="info-section">
        <div class="info-section-title">פרטי המשפחה</div>
        <div class="info-row"><span class="info-icon">📍</span><span class="info-label">עיר</span><span class="info-value">${fam.city}</span></div>
        <div class="info-row"><span class="info-icon">👨‍👩‍👧‍👦</span><span class="info-label">הרכב</span><span class="info-value">${fam.members}</span></div>
        <div class="info-row"><span class="info-icon">🗣️</span><span class="info-label">שפות</span><span class="info-value">${fam.languages.join(', ')}</span></div>
        <div class="info-row"><span class="info-icon">🕯️</span><span class="info-label">סגנון</span><span class="info-value">${fam.hosting_style}</span></div>
        <div class="info-row"><span class="info-icon">🥗</span><span class="info-label">תזונה</span><span class="info-value">${fam.dietary.join(', ')}</span></div>
      </div>

      <div class="section-gap"></div>
      <div class="info-section">
        <div class="info-section-title">תחומי עניין משותפים</div>
        <div class="badge-row">
          ${fam.interests.map(i => {
            const match = SOLDIER.interests.includes(i);
            return `<span class="badge ${match ? 'b-green' : 'b-gray'}">${match ? '✓ ' : ''}${i}</span>`;
          }).join('')}
        </div>
        <div style="margin-top:8px;font-size:12px;color:var(--success)">✓ תחום עניין משותף</div>
      </div>

      <div class="section-gap"></div>
      <div class="info-section">
        <div class="info-section-title">דירוג ושביעות רצון</div>
        <div class="rating-row" style="gap:8px">${Stars(fam.rating)}<span style="font-size:16px;font-weight:700">${fam.rating}</span><span style="font-size:13px;color:var(--text-3)">(${fam.reviews} ביקורות)</span></div>
        <div style="font-size:12px;color:var(--text-3);margin-top:4px">מארחים מאז ${fam.hosting_since} · ${fam.reviews} אירוחים מוצלחים</div>
      </div>

      <!-- 5.4.7: Soldier can confirm, decline or chat -->
      <div style="padding:16px;display:flex;flex-direction:column;gap:10px">
        <button class="btn btn-success btn-full btn-lg" data-action="approveRequest">✅ אני רוצה להגיע — אשר!</button>
        <button class="btn btn-secondary btn-full" data-action="chat">💬 שאל/י שאלה לפני אישור</button>
        <button class="btn btn-ghost btn-full" style="color:var(--danger)" data-nav="soldierHome">✕ דחה בנימוס</button>
        <button class="btn btn-ghost btn-sm" style="color:var(--text-4);font-size:12px" data-action="reportUser" data-name="${fam.name}">🚩 דווח על משתמש</button>
      </div>
    </div>
  </div>`;
}

/* ═══════════════════════════════════════════════════════════════════════════════
   SCREEN: RATE HOSTING — Feature #7
   ═══════════════════════════════════════════════════════════════════════════════ */

function renderRateHosting() {
  const fam = FAMILIES.find(f => f.id === (S.ratingFamilyId || 1)) || FAMILIES[0];
  return `<div class="screen">
    ${Header('דרג את האירוח', true)}
    <div class="page">
      <div style="text-align:center;padding:32px 24px 16px">
        ${Avatar(fam.initials, fam.color, 'av-xl')}
        <div style="font-size:20px;font-weight:800;margin-top:12px">${fam.name}</div>
        <div style="font-size:14px;color:var(--text-3);margin-top:4px">שישי, 23 במאי 2025 · ארוחת שישי</div>
      </div>

      <div style="padding:0 24px 16px;text-align:center">
        <div style="font-size:16px;font-weight:600;margin-bottom:16px">איך היה האירוח?</div>
        <div style="font-size:48px;letter-spacing:8px;cursor:pointer" id="star-row">
          ${[1,2,3,4,5].map(i =>
            `<span class="star-btn ${i <= S.ratingValue ? 'starred' : ''}" data-star="${i}">★</span>`
          ).join('')}
        </div>
        <div style="font-size:14px;color:var(--text-3);margin-top:8px">
          ${['','😞 גרוע','😐 בסדר','🙂 טוב','😊 מצוין','🤩 מדהים!'][S.ratingValue] || 'לחץ לדירוג'}
        </div>
      </div>

      <div class="page-content">
        <div class="form-group">
          <label class="form-label">מה היה מיוחד? (אופציונלי)</label>
          <div class="chip-group" style="margin-bottom:12px">
            ${['אוכל טעים','אווירה חמה','ילדים נחמדים','שפה משותפת','קל להגיע','ידוויילי לחייל'].map(tag =>
              `<div class="chip" data-chip="tag" data-val="${tag}">${tag}</div>`
            ).join('')}
          </div>
        </div>
        <div class="form-group">
          <label class="form-label">כתוב/י ביקורת (אופציונלי)</label>
          <textarea class="form-control" placeholder="שתף/י את החוויה שלך..."></textarea>
        </div>
        <button class="btn btn-primary btn-full btn-lg" data-action="submitRating">⭐ שלח דירוג</button>
      </div>
    </div>
  </div>`;
}

/* ═══════════════════════════════════════════════════════════════════════════════
   SCREEN: FAMILY DASHBOARD
   ═══════════════════════════════════════════════════════════════════════════════ */

function renderFamilyDashboard() {
  const fam = FAMILIES[0];
  return `<div class="screen">
    ${Header('')}
    <div class="page">
      <div class="greeting-banner" style="background:linear-gradient(135deg,#059669,#10B981)">
        <div class="greeting-blob"></div>
        <div style="position:relative;z-index:1">
          <div class="greeting-name">שלום, ${fam.name} 👋</div>
          <div class="greeting-sub">מארחים מאז ${fam.hosting_since} · ${fam.reviews} אירוחים מוצלחים</div>
        </div>
      </div>
      <div style="height:20px"></div>

      <!-- 5.4.6: Family receives notification of new matching request -->
      <div class="notification-banner" data-nav="familyViewRequest">
        <span class="notif-icon">🔔</span>
        <div>
          <div class="notif-title">בקשת אירוח חדשה!</div>
          <div class="notif-desc">מאיה גולדשטיין (🇨🇦) · שבת 14 ביוני · תל אביב</div>
        </div>
        <span class="notif-arrow">›</span>
      </div>

      <div class="stats-row" style="margin-top:16px">
        <div class="stat-card"><div class="stat-icon">📬</div><div class="stat-num">1</div><div class="stat-label">בקשות חדשות</div></div>
        <div class="stat-card"><div class="stat-icon">🏠</div><div class="stat-num">${fam.reviews}</div><div class="stat-label">אירוחים</div></div>
        <div class="stat-card"><div class="stat-icon">⭐</div><div class="stat-num">${fam.rating}</div><div class="stat-label">דירוג</div></div>
      </div>

      <div class="section-header"><span class="section-title">📬 בקשות נכנסות</span></div>
      <div style="padding:0 16px 16px">
        <div class="card req-card" data-nav="familyViewRequest">
          <div class="req-card-header">
            ${Avatar(INCOMING.soldier.initials, INCOMING.soldier.color, 'av-md')}
            <div class="flex-1">
              <div style="font-size:15px;font-weight:700">${INCOMING.soldier.name} ${INCOMING.soldier.flag}</div>
              <div style="font-size:12px;color:var(--text-3)">${INCOMING.soldier.unit} · ${INCOMING.soldier.city}</div>
            </div>
            <span class="badge b-amber">חדש</span>
          </div>
          <div class="req-card-body">
            <div style="font-size:13px;color:var(--text-2)">📅 ${INCOMING.request.date} · 🍽️ ${INCOMING.request.meal}</div>
            <div style="font-size:13px;color:var(--text-2);margin-top:2px">📍 ${INCOMING.request.area} · 🚗 ${INCOMING.request.max_distance}</div>
            <div class="badge-row">
              ${INCOMING.soldier.languages.map(l => `<span class="badge b-blue">🗣 ${l}</span>`).join('')}
            </div>
          </div>
          <div class="req-card-footer" style="justify-content:flex-end">
            <button class="btn btn-danger btn-sm" data-action="declineRequest">✕ דחה</button>
            <button class="btn btn-secondary btn-sm" data-action="chat">💬 שאלה</button>
            <button class="btn btn-success btn-sm" data-action="approveRequest">✅ אשר</button>
          </div>
        </div>
      </div>

      <!-- Feature 5: Verification status -->
      <div style="margin:0 16px 16px;padding:12px;background:var(--success-light);border-radius:var(--r);font-size:13px;color:var(--success)">
        ✅ <strong>פרופיל מאומת</strong> — חיילים רואים את הבית שלך כאמין ובטוח
      </div>
    </div>
    ${BottomNav('familyDashboard')}
  </div>`;
}

/* ═══════════════════════════════════════════════════════════════════════════════
   SCREEN: FAMILY VIEW REQUEST — 5.4.6
   ═══════════════════════════════════════════════════════════════════════════════ */

function renderFamilyViewRequest() {
  const sol = INCOMING.soldier;
  const req = INCOMING.request;
  return `<div class="screen">
    <header class="header">
      <button class="back-btn" data-action="back">‹</button>
      <div class="header-title">בקשת אירוח</div>
      <span class="badge b-amber">ממתין לתגובה</span>
    </header>
    <div class="page">
      <div style="background:linear-gradient(135deg,${sol.color},${sol.color}bb);color:white;padding:24px 16px">
        <div style="display:flex;align-items:center;gap:16px">
          ${Avatar(sol.initials, 'rgba(255,255,255,.25)', 'av-xl')}
          <div>
            <div style="font-size:20px;font-weight:800">${sol.name} ${sol.flag}</div>
            <div style="font-size:14px;opacity:.85">${sol.nameHe}</div>
            ${sol.verified ? `<div style="margin-top:6px"><span style="background:rgba(255,255,255,.25);padding:2px 10px;border-radius:999px;font-size:12px;font-weight:600">✓ מאומת</span></div>` : ''}
            <div style="margin-top:6px;display:flex;gap:6px;flex-wrap:wrap">
              <span style="background:rgba(255,255,255,.2);padding:2px 10px;border-radius:999px;font-size:12px">🪖 ${sol.unit}</span>
              <span style="background:rgba(255,255,255,.2);padding:2px 10px;border-radius:999px;font-size:12px">🌍 ${sol.country}</span>
            </div>
          </div>
        </div>
      </div>

      <div class="section-gap"></div>
      <div class="info-section">
        <div class="info-section-title">פרטי הבקשה</div>
        <div class="info-row"><span class="info-icon">🍽️</span><span class="info-label">ארוחה</span><span class="info-value">${req.meal}</span></div>
        <div class="info-row"><span class="info-icon">📅</span><span class="info-label">תאריך</span><span class="info-value">${req.date}</span></div>
        <div class="info-row"><span class="info-icon">📍</span><span class="info-label">אזור</span><span class="info-value">${req.area}</span></div>
        <div class="info-row"><span class="info-icon">🚗</span><span class="info-label">מרחק מקס'</span><span class="info-value">${req.max_distance}</span></div>
        <div class="info-row"><span class="info-icon">🚗</span><span class="info-label">הגעה</span><span class="info-value">${req.needs_transport ? 'זקוק/ה לסיוע' : 'מגיע/ה עצמאית'}</span></div>
        <div class="info-row" style="align-items:flex-start"><span class="info-icon">💬</span><span class="info-label">הערה</span><span class="info-value" style="font-size:13px;line-height:1.6">${req.notes}</span></div>
      </div>

      <div class="section-gap"></div>
      <div class="info-section">
        <div class="info-section-title">על החייל/ת</div>
        <div class="info-row"><span class="info-icon">🎂</span><span class="info-label">גיל</span><span class="info-value">${sol.age}</span></div>
        <div class="info-row"><span class="info-icon">🗣️</span><span class="info-label">שפות</span><span class="info-value">${sol.languages.join(', ')}</span></div>
        <div class="info-row"><span class="info-icon">🥗</span><span class="info-label">תזונה</span><span class="info-value">${sol.dietary}</span></div>
        <div class="info-row" style="align-items:flex-start"><span class="info-icon">ℹ️</span><span class="info-label">אודות</span><span class="info-value" style="font-size:13px;line-height:1.6">${sol.about}</span></div>
      </div>

      <div class="section-gap"></div>
      <div class="info-section">
        <div class="info-section-title">תחומי עניין</div>
        <div class="badge-row">${sol.interests.map(i => `<span class="badge b-teal">${i}</span>`).join('')}</div>
      </div>

      <!-- 5.4.3: Privacy notice for family -->
      <div style="margin:0 16px;padding:14px;background:var(--info-light);border-radius:var(--r);font-size:13px;color:var(--info)">
        🔒 <strong>הגנת פרטיות:</strong> מספר הטלפון יועבר רק לאחר אישור שני הצדדים. עד אז — כל התקשורת בפלטפורמה.
      </div>

      <!-- 5.4.6: Three options for family -->
      <div style="padding:16px;display:flex;flex-direction:column;gap:10px">
        <button class="btn btn-success btn-full btn-lg" data-action="approveRequest">✅ הבע עניין באירוח</button>
        <button class="btn btn-secondary btn-full" data-action="chat">💬 בקש מידע נוסף (צ'אט)</button>
        <button class="btn btn-ghost btn-full" style="color:var(--danger)" data-action="declineRequest">✕ דחה בקשה</button>
        <!-- Feature 6: Report/Block -->
        <button class="btn btn-ghost btn-sm" style="color:var(--text-4);font-size:12px" data-action="reportUser" data-name="${sol.name}">🚩 דווח / חסום משתמש</button>
      </div>
    </div>
  </div>`;
}

/* ═══════════════════════════════════════════════════════════════════════════════
   SCREEN: MATCH CONFIRMED
   ═══════════════════════════════════════════════════════════════════════════════ */

function renderMatchConfirmed() {
  const sol = INCOMING.soldier;
  const req = INCOMING.request;
  const fam = FAMILIES[0];
  return `<div class="screen">
    <div class="match-header">
      <div class="confetti-row">🎉 🏠 🎉</div>
      <div style="font-size:26px;font-weight:800;margin-bottom:6px">ההתאמה אושרה!</div>
      <div style="font-size:15px;opacity:.9">הכל מסודר — נתראה בשבת!</div>
    </div>
    <div class="page" style="padding-bottom:24px">
      <div style="padding:20px 16px">
        <div style="display:flex;gap:12px;align-items:center;padding:16px;background:var(--bg);border-radius:var(--r-lg)">
          ${Avatar(sol.initials, sol.color, 'av-md')}
          <div style="font-size:22px;color:var(--text-4)">⇄</div>
          ${Avatar(fam.initials, fam.color, 'av-md')}
          <div class="flex-1">
            <div style="font-size:14px;font-weight:600">${sol.name} ↔ ${fam.name}</div>
            <div style="font-size:12px;color:var(--text-3);margin-top:2px">ההתאמה אושרה 🎊</div>
          </div>
        </div>
      </div>

      <div style="padding:0 16px 16px">
        <div class="card">
          <div class="card-body">
            <div style="font-size:15px;font-weight:700;margin-bottom:12px">✅ פרטי האירוח</div>
            <div class="info-row"><span class="info-icon">📅</span><span class="info-label">תאריך</span><span class="info-value">${req.date}</span></div>
            <div class="info-row"><span class="info-icon">🍽️</span><span class="info-label">ארוחה</span><span class="info-value">${req.meal}</span></div>
            <div class="info-row"><span class="info-icon">📍</span><span class="info-label">עיר</span><span class="info-value">${fam.city}</span></div>
          </div>
        </div>
      </div>

      <div style="margin:0 16px 16px;padding:14px;background:var(--success-light);border-radius:var(--r);font-size:13px;color:var(--success)">
        📱 כעת ניתן לתאם פרטים נוספים (כתובת, שעה) דרך הצ'אט הפנימי
      </div>

      <div style="padding:0 16px;display:flex;flex-direction:column;gap:10px">
        <button class="btn btn-primary btn-full btn-lg" data-action="chat">💬 פתח/י צ'אט</button>
        <button class="btn btn-secondary btn-full" data-nav="${S.role === 'soldier' ? 'soldierHome' : 'familyDashboard'}">🏠 חזור לדף הבית</button>
      </div>
    </div>
  </div>`;
}

/* ═══════════════════════════════════════════════════════════════════════════════
   EVENT LISTENERS
   ═══════════════════════════════════════════════════════════════════════════════ */

function attachListeners() {
  const app = document.getElementById('app');

  /* --- Role selection --- */
  app.querySelectorAll('[data-role]').forEach(el => {
    el.addEventListener('click', () => {
      S.role = el.dataset.role;
      go(S.role === 'soldier' ? 'soldierHome' : 'familyDashboard');
    });
  });

  /* --- Bottom nav --- */
  app.querySelectorAll('[data-nav]').forEach(el => {
    el.addEventListener('click', () => go(el.dataset.nav));
  });

  /* --- Filter chips --- */
  app.querySelectorAll('[data-filter]').forEach(el => {
    el.addEventListener('click', () => { S.filter = el.dataset.filter; go('browseFamilies'); });
  });

  /* --- Favorites toggle (Feature #9) --- */
  app.querySelectorAll('[data-fav]').forEach(el => {
    el.addEventListener('click', (e) => {
      e.stopPropagation();
      const fid = +el.dataset.fav;
      S.favorites.has(fid) ? S.favorites.delete(fid) : S.favorites.add(fid);
      render();
    });
  });

  /* --- Family card → view detail --- */
  app.querySelectorAll('[data-action="viewFamily"]').forEach(el => {
    el.addEventListener('click', (e) => {
      if (e.target.closest('[data-fav]') || e.target.closest('[data-action="requestFam"]')) return;
      go('familyDetail', { selectedFamilyId: +el.dataset.fid });
    });
  });

  /* --- Request family button --- */
  app.querySelectorAll('[data-action="requestFam"]').forEach(el => {
    el.addEventListener('click', (e) => {
      e.stopPropagation();
      S.formData = {}; S.formErrors = {}; S.formStep = 1;
      go('requestForm', { selectedFamilyId: +el.dataset.fid });
    });
  });

  /* --- Request form CTA on home --- */
  const reqFormBtn = app.querySelector('[data-action="requestForm"]');
  if (reqFormBtn) reqFormBtn.addEventListener('click', () => {
    S.formData = {}; S.formErrors = {}; S.formStep = 1; S.selectedFamilyId = null;
    go('requestForm');
  });

  /* --- Chip toggles in form --- */
  app.querySelectorAll('[data-chip]').forEach(el => {
    el.addEventListener('click', () => {
      const type = el.dataset.chip, val = el.dataset.val;
      if (type === 'lang' || type === 'diet' || type === 'tag') {
        const key = type === 'lang' ? 'languages' : type === 'diet' ? 'dietary' : 'tags';
        const arr = S.formData[key] || [];
        const idx = arr.indexOf(val);
        idx === -1 ? arr.push(val) : arr.splice(idx, 1);
        S.formData[key] = arr;
      } else {
        const key = { meal: 'meal', area: 'area', style: 'style', maxDist: 'maxDist' }[type] || type;
        S.formData[key] = val;
      }
      el.classList.toggle('selected');
    });
  });

  /* --- Form NEXT with validation --- */
  const nextBtn = app.querySelector('[data-action="formNext"]');
  if (nextBtn) nextBtn.addEventListener('click', () => {
    const dateInp = document.getElementById('inp-date');
    const transportInp = document.getElementById('inp-transport');
    if (dateInp) S.formData.date = dateInp.value;
    if (transportInp) S.formData.transport = transportInp.value;

    S.formErrors = {};
    // Step 1 validation
    if (S.formStep === 1) {
      if (!S.formData.meal)  S.formErrors.meal = 'נא לבחור סוג ארוחה';
      if (!S.formData.date)  S.formErrors.date = 'נא לבחור תאריך';
      if (!S.formData.area)  S.formErrors.area = 'נא לבחור אזור';
    }
    // Step 2 validation
    if (S.formStep === 2) {
      if (!S.formData.languages?.length) S.formErrors.languages = 'נא לבחור לפחות שפה אחת';
      if (!S.formData.style)             S.formErrors.style     = 'נא לבחור העדפת אירוח';
    }

    if (Object.keys(S.formErrors).length) { go('requestForm'); return; }
    S.formStep++;
    go('requestForm');
  });

  /* --- Form BACK --- */
  const backFormBtn = app.querySelector('[data-action="formBack"]');
  if (backFormBtn) backFormBtn.addEventListener('click', () => { S.formStep--; go('requestForm'); });

  /* --- Form SUBMIT --- */
  const submitBtn = app.querySelector('[data-action="formSubmit"]');
  if (submitBtn) submitBtn.addEventListener('click', () => {
    const notes = document.getElementById('inp-notes');
    if (notes) S.formData.notes = notes.value;
    go('requestSent');
  });

  /* --- Approve request (both sides) --- */
  app.querySelectorAll('[data-action="approveRequest"]').forEach(el => {
    el.addEventListener('click', () => go('matchConfirmed'));
  });

  /* --- Decline request --- */
  app.querySelectorAll('[data-action="declineRequest"]').forEach(el => {
    el.addEventListener('click', () => go(S.role === 'family' ? 'familyDashboard' : 'myRequests'));
  });

  /* --- 5.4.8: Cancel request --- */
  app.querySelectorAll('[data-action="cancelRequest"]').forEach(el => {
    el.addEventListener('click', () => {
      if (confirm('האם לבטל את הבקשה? המשפחה תקבל הודעה על הביטול.')) {
        alert('✅ הבקשה בוטלה. המשפחה קיבלה עדכון.');
        go('myRequests');
      }
    });
  });

  /* --- Edit request --- */
  app.querySelectorAll('[data-action="editRequest"]').forEach(el => {
    el.addEventListener('click', () => {
      S.formStep = 1; S.formErrors = {};
      go('requestForm');
    });
  });

  /* --- Rating screen --- */
  app.querySelectorAll('[data-action="rateHosting"]').forEach(el => {
    el.addEventListener('click', () => go('rateHosting', { ratingFamilyId: +el.dataset.fid, ratingValue: 0 }));
  });

  /* --- Star clicks (interactive rating) --- */
  app.querySelectorAll('.star-btn').forEach(el => {
    el.addEventListener('click', () => {
      S.ratingValue = +el.dataset.star;
      go('rateHosting');
    });
  });

  /* --- Submit rating --- */
  const submitRating = app.querySelector('[data-action="submitRating"]');
  if (submitRating) submitRating.addEventListener('click', () => {
    if (!S.ratingValue) { alert('נא לבחור דירוג 1–5 כוכבים'); return; }
    alert(`✅ תודה על הדירוג! נתת ${S.ratingValue} ⭐`);
    go('myRequests');
  });

  /* --- Chat placeholder --- */
  app.querySelectorAll('[data-action="chat"], [data-action="chatRequest"]').forEach(el => {
    el.addEventListener('click', () => {
      alert('💬 צ\'אט פנימי — מאפשר תיאום בלי חשיפת מספר טלפון!\n\n(בגרסה מלאה — ממשק צ\'אט בזמן אמת)');
    });
  });

  /* --- Feature 6: Report/Block --- */
  app.querySelectorAll('[data-action="reportUser"]').forEach(el => {
    el.addEventListener('click', () => {
      const name = el.dataset.name || 'משתמש זה';
      const choice = confirm(`🚩 דיווח על ${name}\n\nלחץ "אישור" לדיווח, "ביטול" לחסימה בלבד.`);
      alert(choice
        ? `✅ הדיווח על ${name} נשלח לצוות הפלטפורמה לבדיקה.`
        : `🚫 ${name} נחסם. לא תקבל/י בקשות ממנו/ה יותר.`);
    });
  });

  /* --- Back button --- */
  app.querySelectorAll('[data-action="back"]').forEach(btn => {
    btn.addEventListener('click', () => {
      const map = {
        familyDetail:      'browseFamilies',
        requestForm:       S.selectedFamilyId ? 'familyDetail' : 'browseFamilies',
        requestSent:       'soldierHome',
        familyViewRequest: 'familyDashboard',
        soldierViewMatch:  'myRequests',
        rateHosting:       'myRequests'
      };
      go(map[S.screen] || (S.role === 'soldier' ? 'soldierHome' : 'familyDashboard'));
    });
  });
}

/* ═══════════════════════════════════════════════════════════════════════════════
   EXTRA STYLES (injected for star rating + fav button)
   ═══════════════════════════════════════════════════════════════════════════════ */

const extraCSS = `
  .star-btn { color: var(--border); font-size: 42px; cursor: pointer; transition: color .15s, transform .1s; }
  .star-btn.starred { color: var(--secondary); }
  .star-btn:hover { transform: scale(1.2); color: var(--secondary); }
  .fav-btn { background: none; border: none; cursor: pointer; font-size: 20px; line-height: 1; padding: 4px; transition: transform .15s; }
  .family-card-cover .fav-btn { position: absolute; left: 10px; bottom: 10px; z-index: 2; }
  .fav-btn:hover { transform: scale(1.25); }
  .fav-btn.fav-active { animation: heartPop .3s ease-out; }
  @keyframes heartPop { 0%{transform:scale(1)} 50%{transform:scale(1.4)} 100%{transform:scale(1)} }
  .error-border { border-color: var(--danger) !important; }
  .info-section-title { font-size: 12px; font-weight: 700; color: var(--text-3); text-transform: uppercase; letter-spacing: .5px; margin-bottom: 10px; }
`;

const styleTag = document.createElement('style');
styleTag.textContent = extraCSS;
document.head.appendChild(styleTag);

/* ═══════════════════════════════════════════════════════════════════════════════
   INIT
   ═══════════════════════════════════════════════════════════════════════════════ */

render();
