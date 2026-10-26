// Sliders and ticker: duplicate each track once so the right-to-left scroll loops with no gap.
(function(){
  if(window.matchMedia('(prefers-reduced-motion: reduce)').matches)return;
  document.querySelectorAll('.mq .tk,.ticker .track').forEach(function(t){
    var c=document.createElement('div');c.style.display='contents';c.setAttribute('aria-hidden','true');
    c.innerHTML=t.innerHTML;t.appendChild(c);
  });
})();

// Project filter chips
document.addEventListener('click',function(e){
  var b=e.target.closest('.filters button');if(!b)return;
  var box=b.closest('.filters');box.querySelectorAll('button').forEach(function(x){x.classList.toggle('active',x===b)});
  var f=b.getAttribute('data-filter'),grid=box.nextElementSibling;
  grid.querySelectorAll('.proj').forEach(function(p){p.hidden=!(f==='all'||p.getAttribute('data-cat')===f)});
});
