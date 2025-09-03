
(function(){
  const apply = (mode)=>document.documentElement.setAttribute('data-theme', mode==='dark'?'dark':'light');
  const saved = localStorage.getItem('voltx-mode');
  const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
  if(saved){ apply(saved);} else { apply(prefersDark?'dark':'light'); }
  document.addEventListener('click', (e)=>{
    const t = e.target.closest('[data-volt="toggle-theme"]');
    if(!t) return;
    const cur = document.documentElement.getAttribute('data-theme')==='dark'?'dark':'light';
    const next = cur==='dark'?'light':'dark';
    apply(next); localStorage.setItem('voltx-mode', next);
  });
  // Simple slider scroll for brands & products
  document.querySelectorAll('[data-volt="slider"]').forEach(s=>{
    s.addEventListener('wheel', (e)=>{ s.scrollLeft += e.deltaY; });
  });
  // Mobile menu toggle
  const toggle = document.querySelector('.vx-menu-toggle');
  if(toggle){
    toggle.addEventListener('click', ()=>{
      const nav = document.querySelector('.vx-nav ul');
      if(!nav) return;
      nav.style.display = nav.style.display==='flex' ? 'none' : 'flex';
    });
  }
})();
