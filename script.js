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
