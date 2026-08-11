document.addEventListener(
"DOMContentLoaded",
()=>{


/* =========================
 MATRIX DIGITAL RAIN
========================= */


const canvas =
document.getElementById("matrix");


if(canvas){


const ctx =
canvas.getContext("2d");


function resize(){

canvas.width =
window.innerWidth;

canvas.height =
window.innerHeight;

}


resize();


window.addEventListener(
"resize",
resize
);



const chars =
"01ABCDEFGHIJKLMNOPQRSTUVWXYZアイウエオ陈昊天DIGITAL";


let drops =
Array(
Math.floor(canvas.width/18)
)
.fill(1);



function draw(){


ctx.fillStyle =
"rgba(0,0,0,.08)";


ctx.fillRect(
0,
0,
canvas.width,
canvas.height
);



ctx.fillStyle =
"#00ff88";


ctx.font =
"18px monospace";



drops.forEach(
(y,i)=>{


const text =
chars[
Math.floor(
Math.random()*chars.length
)
];


ctx.fillText(
text,
i*18,
y*18
);



if(
y*18 > canvas.height
){

drops[i]=0;

}


drops[i]++;


});


}


setInterval(
draw,
50
);


}





/* =========================
 ENTER SYSTEM
========================= */


const enter =
document.getElementById(
"enter"
);



if(enter){


enter.onclick=()=>{


const intro =
document.getElementById(
"matrix-intro"
);


const system =
document.getElementById(
"system"
);



if(intro){

intro.style.opacity="0";


setTimeout(()=>{

intro.remove();

},1000);


}



if(system){

system.classList.remove(
"hidden"
);


}



};


}







/* =========================
 PAGE SWITCH
========================= */


function openPage(id){


document
.querySelectorAll(".page")
.forEach(
page=>{

page.classList.add(
"hidden"
);

});


const target =
document.getElementById(id);



if(target){

target.classList.remove(
"hidden"
);

}


}



document
.querySelectorAll(
"nav span"
)
.forEach(
btn=>{


btn.onclick=()=>{


openPage(
btn.dataset.page
);


};


});







/* =========================
 CLOCK
========================= */


const clock =
document.getElementById(
"clock"
);



function updateClock(){


if(clock){

clock.innerHTML =
new Date()
.toLocaleTimeString(
"zh-CN",
{
hour12:false
}
);


}


}



setInterval(
updateClock,
1000
);


updateClock();







/* =========================
 WORK DATABASE
========================= */


const works=[

"work01.jpg",
"work02.jpg",
"work03.jpg"

];



const box =
document.getElementById(
"works-list"
);



if(box){


works.forEach(
(work)=>{


box.innerHTML +=`


<div class="work">


<img src="assets/works/${work}">


<p>
PROJECT_${work}
</p>


</div>


`;


});


}






/* =========================
 IMAGE VIEWER
========================= */


const viewer =
document.getElementById(
"viewer"
);



document
.querySelectorAll(
".work img"
)
.forEach(
img=>{


img.onclick=()=>{


if(viewer){


viewer.src =
img.src;


viewer.classList.remove(
"hidden"
);


}



};


});






console.log(
"DIGITAL ARCHIVE SYSTEM ONLINE"
);



});
