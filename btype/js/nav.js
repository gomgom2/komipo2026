const siteHeader = document.querySelector('.site-header');
const mainNav = document.querySelector('.main-nav');
const hamburger = document.querySelector('.hamburger');
const drawer = document.getElementById('drawer');
const drawerClose = drawer ? drawer.querySelector('.drawer-close') : null;

/* 데스크탑: 메가 드롭다운 - 레이아웃을 건드리지 않고 상태 클래스만 토글 */
if (mainNav) {
  mainNav.addEventListener('mouseenter', () => {
    siteHeader.classList.add('mega-open');
  });
  mainNav.addEventListener('mouseleave', () => {
    siteHeader.classList.remove('mega-open');
  });

  // 키보드 접근성
  mainNav.addEventListener('focusin', () => {
    siteHeader.classList.add('mega-open');
  });
  mainNav.addEventListener('focusout', (e) => {
    if (!mainNav.contains(e.relatedTarget)) {
      siteHeader.classList.remove('mega-open');
    }
  });
}

/* 스크롤 시 헤더 상태 (높이 변화 없음) */
window.addEventListener('scroll', () => {
  if (window.scrollY > 40) siteHeader.classList.add('scrolled');
  else siteHeader.classList.remove('scrolled');
});

/* 모바일 드로어 (전부 펼침) */
if (hamburger && drawer && drawerClose) {
  hamburger.addEventListener('click', () => {
    drawer.classList.add('open');
    drawer.setAttribute('aria-hidden', 'false');
    hamburger.setAttribute('aria-expanded', 'true');
    document.body.style.overflow = 'hidden';
  });

  drawerClose.addEventListener('click', () => {
    drawer.classList.remove('open');
    drawer.setAttribute('aria-hidden', 'true');
    hamburger.setAttribute('aria-expanded', 'false');
    document.body.style.overflow = '';
    hamburger.focus();
  });

  // 배경 클릭으로 닫기 (옵션)
  drawer.addEventListener('click', (e) => {
    if (e.target === drawer) {
      drawer.classList.remove('open');
      drawer.setAttribute('aria-hidden', 'true');
      hamburger.setAttribute('aria-expanded', 'false');
      document.body.style.overflow = '';
      hamburger.focus();
    }
  });
}