const search=document.getElementById("videoSearch");

const filter=document.getElementById("videoFilter");

const cards=document.querySelectorAll(".video-card");

function updateVideos(){

const text=search.value.toLowerCase();

const category=filter.value;

cards.forEach(card=>{

const title=card.innerText.toLowerCase();

const tags=card.dataset.category;

const textMatch=title.includes(text);

const categoryMatch=

category==="all"||

tags.includes(category);

if(textMatch&&categoryMatch){

card.style.display="block";

}else{

card.style.display="none";

}

});

}

search.addEventListener("keyup",updateVideos);

filter.addEventListener("change",updateVideos);
// LIKE & WATCH

const likeButtons=document.querySelectorAll(".like-btn");

likeButtons.forEach(btn=>{

let liked=false;

btn.addEventListener("click",()=>{

const span=btn.querySelector(".like-count");

let count=parseInt(span.innerText);

if(!liked){

count++;

liked=true;

btn.style.background="#ff2b2b";

}else{

count--;

liked=false;

btn.style.background="#1a1a1a";

}

span.innerText=count;

});

});

const videos=document.querySelectorAll("video");

videos.forEach(video=>{

const card=video.closest(".video-card");

if(!card) return;

const watch=card.querySelector(".watch-count");

let viewed=false;

video.addEventListener("play",()=>{

if(viewed) return;

viewed=true;

watch.innerText=parseInt(watch.innerText)+1;

});

});
// Basit örnek güncelleme

const mostViewed=document.getElementById("mostViewed");
const mostLiked=document.getElementById("mostLiked");

setInterval(()=>{

const likes=document.querySelectorAll(".like-count");
const views=document.querySelectorAll(".watch-count");

let maxLike=0;
let maxView=0;

likes.forEach((item,index)=>{

const value=parseInt(item.innerText);

if(value>maxLike){

maxLike=value;

mostLiked.textContent="Video "+(index+1);

}

});

views.forEach((item,index)=>{

const value=parseInt(item.innerText);

if(value>maxView){

maxView=value;

mostViewed.textContent="Video "+(index+1);

}

});

},1000);
/*=========================
LOADER
==========================*/

window.addEventListener("load",()=>{

setTimeout(()=>{

document.getElementById("loader").style.opacity="0";

setTimeout(()=>{

document.getElementById("loader").style.display="none";

},1000);

},2500);

});

/*=========================
CURSOR LIGHT
==========================*/

const light=document.getElementById("cursor-light");

document.addEventListener("mousemove",(e)=>{

light.style.left=e.clientX+"px";

light.style.top=e.clientY+"px";

});

/*=========================
COUNTER
==========================*/

const counters=document.querySelectorAll(".stat-card h1");

counters.forEach(counter=>{

const target=parseFloat(counter.innerText);

let count=0;

const speed=target/100;

const update=()=>{

count+=speed;

if(count<target){

counter.innerText=Math.round(count);

requestAnimationFrame(update);

}else{

counter.innerText=target;

}

}

update();

});
/*=========================
SMOOTH SCROLL
=========================*/

document.querySelectorAll('a[href^="#"]').forEach(link=>{

link.addEventListener("click",function(e){

e.preventDefault();

const target=document.querySelector(this.getAttribute("href"));

if(target){

target.scrollIntoView({

behavior:"smooth"

});

}

});

});
