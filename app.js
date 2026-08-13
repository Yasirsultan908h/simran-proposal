const begin=document.querySelector('#begin'),story=document.querySelector('#story'),no=document.querySelector('#no'),yes=document.querySelector('#yes'),hint=document.querySelector('#hint'),success=document.querySelector('#success');
document.querySelector('.intro .overline').textContent='A LETTER FROM THE HEART';
yes.textContent='Haan, bilkul ♥';
success.querySelector('p').textContent='Thank you, Sumoo. Tumne kisi ko sabse khush kar diya.';
begin.onclick=()=>story.scrollIntoView({behavior:'smooth'});
const moments=['Sochungi? Theek hai, dil ko thoda time de dete hain 🤍','Oops… ye button bhi tumhari tarah thoda unpredictable hai!','Add, remove, phir add… button bhi confused ho gaya 😄','Jab dil ready ho, Haan wala button yahin tumhara wait kar raha hai.'];let n=0;
function playfulNo(){n++;no.style.transform=`translate(${Math.random()*150-75}px,${Math.random()*70-35}px) rotate(${Math.random()*12-6}deg)`;hint.textContent=moments[n%moments.length];if(n>2)no.textContent='Maybe after one smile?';}
no.addEventListener('mouseenter',playfulNo);no.addEventListener('click',playfulNo);
yes.onclick=()=>{success.style.display='block';hint.textContent='Tumhara Haan is kahani ka sabse khoobsurat chapter hai ♥';yes.textContent='Haan mil gaya ♥';yes.disabled=true;no.style.display='none';confetti()};
function confetti(){const c=document.querySelector('#confetti'),x=c.getContext('2d');c.width=innerWidth;c.height=innerHeight;const colors=['#a26b61','#d9a59d','#d5b980','#fff'];const bits=Array.from({length:120},()=>({x:innerWidth/2,y:innerHeight*.62,vx:(Math.random()-.5)*12,vy:-Math.random()*12-3,s:Math.random()*7+3,r:Math.random()*6}));let f=0;function draw(){x.clearRect(0,0,c.width,c.height);bits.forEach((b,i)=>{b.x+=b.vx;b.vy+=.3;b.y+=b.vy;b.r+=.1;x.save();x.translate(b.x,b.y);x.rotate(b.r);x.fillStyle=colors[i%colors.length];x.fillRect(0,0,b.s,b.s*1.7);x.restore()});if(f++<180)requestAnimationFrame(draw);else x.clearRect(0,0,c.width,c.height)}draw()}
