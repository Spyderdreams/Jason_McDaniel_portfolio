(function(){
  // Highlight active nav link based on current path
  const path = (location.pathname.split('/').pop() || 'index.html').toLowerCase();
  document.querySelectorAll('.navlinks a').forEach(a=>{
    const href = (a.getAttribute('href')||'').toLowerCase();
    if(href === path) a.classList.add('active');
  });
})();
