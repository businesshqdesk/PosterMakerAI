const canvas=document.getElementById('poster'),ctx=canvas.getContext('2d');
const fields=['business','headline','offer','contact'];let template='sale',palette='sunset';
const palettes={sunset:['#7155e8','#ffbd4a','#241b36','#fff8e9'],ocean:['#173c65','#55c8d9','#f5fbff','#c6f3f5'],berry:['#7e285d','#ff8eae','#fff3f7','#ffd0df'],forest:['#245343','#b5d69b','#f5f8ed','#dcebc9'],mono:['#222222','#eeeeee','#ffffff','#d7d7d7']};
const val=id=>document.getElementById(id).value.trim();
function rounded(x,y,w,h,r,color){ctx.fillStyle=color;ctx.beginPath();ctx.roundRect(x,y,w,h,r);ctx.fill()}
function draw(){
 const [bg,accent,ink,pale]=palettes[palette],business=val('business')||'YOUR BUSINESS',headline=val('headline')||'YOUR HEADLINE',offer=val('offer')||'YOUR OFFER',contact=val('contact')||'CONTACT US';
 ctx.clearRect(0,0,1080,1350);ctx.fillStyle=bg;ctx.fillRect(0,0,1080,1350);
 if(template==='sale'){
  ctx.fillStyle=accent;ctx.beginPath();ctx.arc(930,160,300,0,Math.PI*2);ctx.fill();
  ctx.fillStyle=ink;ctx.font='700 28px Arial';ctx.fillText(business.toUpperCase(),75,105);
  ctx.fillStyle=pale;ctx.font='900 138px Arial';wrap(headline.toUpperCase(),75,420,900,145);
  rounded(75,1030,660,115,16,accent);ctx.fillStyle=ink;ctx.font='800 43px Arial';ctx.fillText(offer.toUpperCase(),110,1102);
  ctx.fillStyle=pale;ctx.font='700 25px Arial';ctx.fillText(contact.toUpperCase(),75,1240);
 }else if(template==='food'){
  ctx.fillStyle=accent;ctx.beginPath();ctx.arc(540,690,410,0,Math.PI*2);ctx.fill();
  ctx.fillStyle=pale;ctx.font='800 28px Arial';center(business.toUpperCase(),115);
  ctx.font='900 110px Arial';wrap(headline.toUpperCase(),170,470,780,120,true);
  ctx.fillStyle=ink;ctx.font='800 42px Arial';center(offer.toUpperCase(),1090);
  ctx.font='600 25px Arial';center(contact.toUpperCase(),1240);
 }else if(template==='fashion'){
  ctx.fillStyle=accent;ctx.fillRect(0,0,1080,1350);ctx.fillStyle=bg;ctx.fillRect(55,55,970,1240);
  ctx.fillStyle=ink;ctx.font='700 25px Arial';ctx.fillText(business.toUpperCase(),105,145);
  ctx.font='900 130px Arial';wrap(headline.toUpperCase(),105,420,850,145);
  ctx.fillStyle=bg;ctx.font='800 38px Arial';ctx.fillText(offer.toUpperCase(),105,1050);
  ctx.font='600 24px Arial';ctx.fillText(contact.toUpperCase(),105,1195);
 }else if(template==='event'){
  ctx.fillStyle=accent;ctx.beginPath();ctx.arc(540,675,470,0,Math.PI*2);ctx.fill();
  ctx.fillStyle=ink;ctx.font='700 27px Arial';center(business.toUpperCase(),130);
  ctx.font='900 105px Arial';wrap(headline.toUpperCase(),300,480,800,120,true);
  ctx.font='700 36px Arial';center(offer.toUpperCase(),1080);
  ctx.font='600 25px Arial';center(contact.toUpperCase(),1200);
 }else if(template==='arrival'){
  ctx.fillStyle=accent;ctx.fillRect(0,0,1080,1350);
  ctx.fillStyle=bg;ctx.beginPath();ctx.arc(540,665,445,0,Math.PI*2);ctx.fill();
  ctx.fillStyle=ink;ctx.font='700 28px Arial';center(business.toUpperCase(),160);
  ctx.font='900 120px Arial';wrap(headline.toUpperCase(),130,550,820,135,true);
  ctx.fillStyle=accent;ctx.font='800 40px Arial';center(offer.toUpperCase(),1040);
  ctx.fillStyle=ink;ctx.font='600 25px Arial';center(contact.toUpperCase(),1190);
 }else if(template==='festival'){
  ctx.fillStyle=accent;ctx.fillRect(0,0,1080,1350);
  ctx.fillStyle=bg;ctx.beginPath();ctx.arc(540,630,500,0,Math.PI*2);ctx.fill();
  ctx.fillStyle=ink;ctx.font='700 28px Arial';center(business.toUpperCase(),150);
  ctx.font='900 112px Arial';wrap(headline.toUpperCase(),120,520,840,125,true);
  ctx.fillStyle=bg;ctx.font='800 40px Arial';center(offer.toUpperCase(),1030);
  ctx.fillStyle=ink;ctx.font='600 25px Arial';center(contact.toUpperCase(),1190);
 }else if(template==='property'){
  ctx.fillStyle=bg;ctx.fillRect(0,0,1080,1350);
  ctx.fillStyle=accent;ctx.fillRect(0,0,1080,500);
  ctx.fillStyle=pale;ctx.font='700 28px Arial';ctx.fillText(business.toUpperCase(),80,110);
  ctx.font='900 105px Arial';wrap(headline.toUpperCase(),80,290,900,115);
  ctx.fillStyle=ink;ctx.font='800 42px Arial';ctx.fillText(offer.toUpperCase(),80,850);
  ctx.fillStyle=ink;ctx.font='600 28px Arial';ctx.fillText(contact.toUpperCase(),80,1050);
  ctx.strokeStyle=accent;ctx.lineWidth=8;ctx.strokeRect(55,55,970,1240);
 }else if(template==='beauty'){
  ctx.fillStyle=bg;ctx.fillRect(0,0,1080,1350);
  ctx.fillStyle=accent;ctx.beginPath();ctx.ellipse(540,620,390,510,0,0,Math.PI*2);ctx.fill();
  ctx.fillStyle=pale;ctx.font='700 27px Arial';center(business.toUpperCase(),180);
  ctx.font='900 112px Arial';wrap(headline.toUpperCase(),120,570,840,125,true);
  ctx.fillStyle=pale;ctx.font='800 38px Arial';center(offer.toUpperCase(),1040);
  ctx.font='600 25px Arial';center(contact.toUpperCase(),1190);
 }else if(template==='tech'){
  ctx.fillStyle=bg;ctx.fillRect(0,0,1080,1350);
  ctx.strokeStyle=accent;ctx.lineWidth=5;
  for(let x=80;x<1080;x+=100){ctx.beginPath();ctx.moveTo(x,0);ctx.lineTo(x,1350);ctx.stroke()}
  for(let y=80;y<1350;y+=100){ctx.beginPath();ctx.moveTo(0,y);ctx.lineTo(1080,y);ctx.stroke()}
  ctx.fillStyle=accent;ctx.fillRect(65,65,950,1220);
  ctx.fillStyle=bg;ctx.font='700 28px Arial';ctx.fillText(business.toUpperCase(),110,155);
  ctx.font='900 112px Arial';wrap(headline.toUpperCase(),110,500,850,125);
  ctx.font='800 38px Arial';ctx.fillText(offer.toUpperCase(),110,1030);
  ctx.font='600 25px Arial';ctx.fillText(contact.toUpperCase(),110,1180);
 }else{
  ctx.fillStyle=accent;ctx.fillRect(0,0,1080,22);ctx.fillRect(0,1328,1080,22);
  ctx.fillStyle=ink;ctx.font='700 26px Arial';ctx.fillText(business.toUpperCase(),85,150);
  ctx.font='900 112px Arial';wrap(headline.toUpperCase(),85,510,900,130);
  ctx.fillStyle=bg;ctx.fillRect(85,990,650,5);ctx.fillStyle=ink;
  ctx.font='700 37px Arial';ctx.fillText(offer.toUpperCase(),85,1080);
  ctx.font='600 25px Arial';ctx.fillText(contact.toUpperCase(),85,1200);
 }
 ctx.fillStyle=template==='sale'||template==='food'||template==='event'?pale:ink;
 ctx.globalAlpha=.65;ctx.font='600 17px Arial';ctx.fillText('DESIGNED WITH POSTERMAKER',75,1305);ctx.globalAlpha=1;
}
function center(t,y){ctx.textAlign='center';ctx.fillText(t,540,y);ctx.textAlign='left'}
function wrap(text,x,y,maxWidth,lineHeight,centered=false){const words=text.split(/\s+/);let line='',lines=[];for(const word of words){const test=line?line+' '+word:word;if(ctx.measureText(test).width>maxWidth&&line){lines.push(line);line=word}else line=test}if(line)lines.push(line);lines.slice(0,3).forEach((l,i)=>{if(centered)center(l,y+i*lineHeight);else ctx.fillText(l,x,y+i*lineHeight)})}
fields.forEach(id=>document.getElementById(id).addEventListener('input',draw));
document.querySelectorAll('.template').forEach(b=>b.addEventListener('click',()=>{template=b.dataset.template;document.querySelectorAll('.template').forEach(x=>x.classList.toggle('active',x===b));draw()}));
document.querySelectorAll('.swatch').forEach(b=>b.addEventListener('click',()=>{palette=b.dataset.color;document.querySelectorAll('.swatch').forEach(x=>x.classList.toggle('selected',x===b));draw()}));
document.getElementById('downloadBtn').addEventListener('click',()=>{const a=document.createElement('a');a.download='postermaker-'+(val('business')||'poster').toLowerCase().replace(/[^a-z0-9]+/g,'-')+'.png';a.href=canvas.toDataURL('image/png');a.click()});
document.getElementById('shareBtn').addEventListener('click',async()=>{canvas.toBlob(async blob=>{const file=new File([blob],'poster.png',{type:'image/png'});if(navigator.share&&navigator.canShare?.({files:[file]})){try{await navigator.share({files:[file],title:'My poster'})}catch(e){}}else{document.getElementById('downloadBtn').click();alert('Poster downloaded. You can now share it from your gallery.')}},'image/png')});
draw();
