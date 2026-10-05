const menu=document.querySelector('.menu');
const nav=document.querySelector('.nav');
menu.addEventListener('click',()=>nav.classList.toggle('open'));
document.querySelectorAll('nav a').forEach(a=>a.addEventListener('click',()=>nav.classList.remove('open')));

const observer=new IntersectionObserver((entries)=>{
  entries.forEach(e=>{if(e.isIntersecting)e.target.classList.add('visible')});
},{threshold:.12});
document.querySelectorAll('.section,.timeline-item,.project-card,.edu-card').forEach(el=>{
  el.classList.add('reveal-on-scroll'); observer.observe(el);
});