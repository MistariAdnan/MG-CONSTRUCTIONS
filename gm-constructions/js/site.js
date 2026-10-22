// Sliders: duplicate each track once so the right-to-left scroll loops with no gap.
(function(){
  var rm=window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if(rm)return;
  document.querySelectorAll('.mq .tk').forEach(function(t){
    var c=document.createElement('div');c.style.display='contents';c.setAttribute('aria-hidden','true');
    c.innerHTML=t.innerHTML;t.appendChild(c);
  });
})();
