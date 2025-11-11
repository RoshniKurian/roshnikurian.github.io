// js/main.js
document.addEventListener('DOMContentLoaded', ()=> {
  // year filler if you use an element
  const yearEl = document.getElementById('year');
  if(yearEl) yearEl.textContent = new Date().getFullYear();

  // reveal on scroll simple
  const reveals = document.querySelectorAll('.reveal');
  const io = new IntersectionObserver((entries)=> {
    entries.forEach(e=> { if(e.isIntersecting){ e.target.classList.add('in'); io.unobserve(e.target); }});
  }, {threshold: .12});
  reveals.forEach(r=>io.observe(r));

  // nav highlight when scrolling
  const links = document.querySelectorAll('.nav-links a[href^="#"]');
  const sections = Array.from(links).map(l=>document.querySelector(l.getAttribute('href')));
  window.addEventListener('scroll', ()=>{
    const pos = window.scrollY + 120;
    let current = null;
    sections.forEach(s=>{ if(s && s.offsetTop <= pos) current = s; });
    links.forEach(a => a.classList.toggle('active', current && a.getAttribute('href') === '#'+current.id));
  }, {passive:true});
});
