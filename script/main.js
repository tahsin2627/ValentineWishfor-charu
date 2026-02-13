const music = document.getElementById("bgm");
music.volume = 0;

function fadeInAudio(){
  let vol = 0;
  music.play().catch(()=>{});
  const fade = setInterval(()=>{
    if(vol < 0.25){
      vol += 0.01;
      music.volume = vol;
    } else{
      clearInterval(fade);
    }
  },150);
}

window.addEventListener("load", ()=>{
  fadeInAudio();
});

document.addEventListener("click", ()=>{
  if(music.paused) fadeInAudio();
},{once:true});

const noBtn = document.getElementById("noBtn");
const yesBtn = document.getElementById("yesBtn");

const noTexts = [
  "Why are you saying no 😭",
  "Catch me if you can 🥱",
  "Are you sure about that? 👀",
  "Charuuuu don’t do this 😩",
  "Okay this is getting serious now 😭",
  "It’s shrinking because you keep clicking 😭"
];

let clickCount = 0;
let scaleSize = 1;

noBtn.addEventListener("click", (e)=>{
  e.preventDefault();

  noBtn.classList.add("no-shake");

  setTimeout(()=>{
    noBtn.classList.remove("no-shake");

    const randomX = Math.floor(Math.random()*300)-150;
    const randomY = Math.floor(Math.random()*200)-100;

    noBtn.style.left = randomX+"px";
    noBtn.style.top = randomY+"px";

  },400);

  if(scaleSize > 0.5){
    scaleSize -= 0.08;
    noBtn.style.transform = `scale(${scaleSize})`;
  }

  if(clickCount < noTexts.length){
    document.getElementById("noMessage").innerText = noTexts[clickCount];
    clickCount++;
  } else{
    document.getElementById("noMessage").innerText = "Okay okay I surrender 😭";
  }
});

yesBtn.addEventListener("click", ()=>{
  document.querySelector(".container").innerHTML = `
    <h1>You just made me the happiest person alive 🤍</h1>
    <p style="margin-top:20px;">I promise I’ll always choose you, Charu.</p>
  `;
});
