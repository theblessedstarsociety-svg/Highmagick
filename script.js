// Starfield
const c=document.getElementById('stars'),x=c.getContext('2d');let S=[];
function size(){c.width=innerWidth;c.height=innerHeight;S=Array.from({length:140},()=>({x:Math.random()*c.width,y:Math.random()*c.height,r:Math.random()*1.6+.2,s:Math.random()*.4+.05,p:Math.random()*6}))}
addEventListener('resize',size);size();
(function draw(t=0){x.clearRect(0,0,c.width,c.height);for(const s of S){s.y+=s.s;if(s.y>c.height)s.y=0;
x.globalAlpha=.4+.6*Math.abs(Math.sin(t/1000+s.p));x.fillStyle='#e9d8ff';x.beginPath();x.arc(s.x,s.y,s.r,0,7);x.fill()}requestAnimationFrame(draw)})();
// Cursor glow
const g=document.getElementById('glow');addEventListener('mousemove',e=>{g.style.left=e.clientX+'px';g.style.top=e.clientY+'px'});
// Scroll reveal
const io=new IntersectionObserver(es=>es.forEach(e=>e.isIntersecting&&e.target.classList.add('show')),{threshold:.12});
document.querySelectorAll('.reveal').forEach(el=>io.observe(el));
// Tarot draw
const cards=[["The Fool","New beginnings, trust and a leap of faith."],["The Magician","Willpower and resources are in your hands."],["The High Priestess","Listen to intuition and hidden knowledge."],["The Empress","Nurture, abundance and creativity."],["The Emperor","Structure, discipline and stability."],["The Lovers","Choices of the heart and alignment of values."],["The Chariot","Drive and determination to move ahead."],["Strength","Gentle courage and inner resilience."],["The Hermit","Retreat and seek inner guidance."],["Wheel of Fortune","Cycles turn and change is near."],["Justice","Fairness, truth and accountability."],["Death","An ending that clears space for transformation."],["Temperance","Balance, patience and healing."],["The Tower","Sudden upheaval that frees you from false ground."],["The Star","Hope, renewal and calm after the storm."],["The Moon","Illusion and intuition; not all is as it seems."],["The Sun","Joy, clarity and success."],["The World","Completion and fulfilment of a cycle."]];
const t=document.getElementById('tcard');
t.onclick=()=>{if(t.classList.contains('flip')){t.classList.remove('flip');return}
const k=cards[Math.floor(Math.random()*cards.length)];document.getElementById('cname').textContent=k[0];document.getElementById('cmean').textContent=k[1];t.classList.add('flip')};
