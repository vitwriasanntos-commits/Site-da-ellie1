// ========================= //
// CONTADOR                  //
// ========================= //
const startDate = new Date("2025-02-10");

function updateCounter(){
  const today = new Date();
  const diff = today.getTime() - startDate.getTime();
  const days = Math.floor(diff / (1000*60*60*24));
  document.getElementById("contador").innerHTML = `${days} DAYS TOGETHER`;
}
// Executa na hora e atualiza a cada segundo
updateCounter();
setInterval(updateCounter, 1000);

// ========================= //
// CARTA                     //
// ========================= //
function openLetter(){
  const letter = document.getElementById("letter");
  if(letter.style.display === "block"){
    letter.style.display = "none";
  }else{
    letter.style.display = "block";
    letter.scrollIntoView({ behavior:"smooth" });
  }
}

// ========================= //
// ESTRELAS DE FUNDO         //
// ========================= //
const stars = document.getElementById("stars");
for(let i=0; i<180; i++){
  const star = document.createElement("div");
  star.style.position = "absolute";
  star.style.width = Math.random()*3+1+"px";
  star.style.height = star.style.width;
  star.style.background = "white";
  star.style.left = Math.random()*100+"vw";
  star.style.top = Math.random()*5000+"px";
  star.style.opacity = Math.random();
  star.style.animation = `twinkle ${ Math.random()*4+2 }s infinite`;
  stars.appendChild(star);
}

const style = document.createElement("style");
style.innerHTML = `
  @keyframes twinkle{
    0%, 100% { opacity:.2; }
    50% { opacity:1; }
  }
`;
document.head.appendChild(style);

// ========================= //
// TEXTO FINAL               //
// ========================= //
setTimeout(()=>{
  const finalText = document.getElementById("finalText");
  if(finalText) {
    finalText.style.transition = "1s";
    finalText.style.opacity = "0";
    setTimeout(()=>{
      finalText.innerHTML = "PLAYER TWO CONNECTED";
      finalText.style.opacity = "1";
    },1000);
  }
},5000);

// ========================= //
// CURSOR TRAIL              //
// ========================= //
const particles = ["+", "*", "✨", "❤️"];
document.addEventListener("mousemove", createTrail);
document.addEventListener("touchmove", createTrail);

function createTrail(e){
  const particle = document.createElement("div");
  particle.innerHTML = particles[Math.floor(Math.random()*particles.length)];
  particle.style.position = "fixed";   
  particle.style.color = "#8ab4ff";
  particle.style.pointerEvents = "none";
  particle.style.zIndex = "9999";
  particle.style.fontSize = (8+Math.random()*6) +"px";
  
  let x = e.touches ? e.touches[0].clientX : e.clientX;
  let y = e.touches ? e.touches[0].clientY : e.clientY;
  
  particle.style.left = x+"px";
  particle.style.top = y+"px";
  document.body.appendChild(particle);
  
  particle.animate([
    { opacity:1, transform: "translateY(0)" },
    { opacity:0, transform: `translate(${(Math.random()-0.5)*40}px, -40px)` }
  ], { duration:900, easing:"ease-out" });
  
  setTimeout(()=>{ particle.remove(); },900);
}

// ========================= //
// SONIC                     //
// ========================= //
setInterval(()=>{
  const sonic = document.createElement("div");
  sonic.innerHTML = "🦔💨";
  sonic.style.position = "fixed";
  sonic.style.left = "-100px";
  sonic.style.top = Math.random()*70+10+"%";
  sonic.style.fontSize = "42px";
  sonic.style.zIndex = "9999";
  document.body.appendChild(sonic);
  
  sonic.animate([
    { transform: "translateX(0)" },
    { transform: "translateX(calc(100vw + 200px))" }
  ], { duration:3500, easing:"linear" });
  
  setTimeout(()=>{ sonic.remove(); },3500);
},30000);

// ========================= //
// SEGREDO ELLIE             //
// ========================= //
const ellie = document.querySelector(".ellie-art");
if(ellie) {
  let clicks = 0;
  ellie.addEventListener("click", ()=>{
    clicks++;
    if(clicks === 7){
      alert(`SECRET FILE FOUND\nreasons_i_love_you.txt\n\n  your smile\n  your voice\n  your hugs\n  your laugh\n  you`);
      clicks = 0;
    }
  });
}

// ========================= //
// UFO EXTRA                 //
// ========================= //
setInterval(()=>{
  const ufo = document.createElement("div");
  ufo.innerHTML = "🛸";
  ufo.style.position = "fixed";
  ufo.style.left = "-100px";
  ufo.style.top = Math.random()*60+10+"%";
  ufo.style.fontSize = "35px";
  ufo.style.opacity = ".8";
  ufo.style.zIndex = "9998";
  document.body.appendChild(ufo);
  
  ufo.animate([
    { transform: "translateX(0)" },
    { transform: "translateX(calc(100vw + 250px))" }
  ], { duration:12000, easing:"linear" });
  
  setTimeout(()=>{ ufo.remove(); },12000);
},45000);

// ========================= //
// CONTROLE DE MÚSICA        //
// ========================= //
const music = document.getElementById("bgMusic");
if (music) {
  document.addEventListener("click", () => {
    if (music.paused) {
      music.volume = 0.15;
      music.play().catch(err => console.log("Áudio aguardando interação."));
    }
  }, { once: true });
}

function toggleMusic() {
  const music = document.getElementById("bgMusic");
  if (music) {
    if (music.paused) {
      music.play();
    } else {
      music.pause();
    }
  }
}

