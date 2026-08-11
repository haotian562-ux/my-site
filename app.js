document.addEventListener(
"DOMContentLoaded",
()=>{


/* Matrix */

const canvas=
document.getElementById("matrix");


const ctx=
canvas.getContext("2d");


canvas.width=
innerWidth;

canvas.height=
innerHeight;


const chars=
"01ABCDEFGHIJKLMNOPQRSTUVWXYZ";


const drops=
Array(
Math.floor(canvas.width/18)
)
.fill(1);



setInterval(()=>{


ctx.fillStyle=
"rgba(0,0,0,.08)";


ctx.fillRect(
0,
0,
canvas.width,
canvas.height
);



ctx.fillStyle="#00ff88";


ctx.font="18px monospace";



drops.forEach((y,i)=>{


ctx.fillText(
chars[Math.floor(Math.random()*chars.length)],
i*18,
y*18
);



if(y*18>canvas.height)
drops[i]=0;


drops[i]++;



});


},50);





/* enter */


document
.getElementById("enter")
.onclick=()=>{


document
.getElementById("matrix-intro")
.remove();


document
.getElementById("system")
.classList.remove("hidden");


};





/* 页面 */


document
.querySelectorAll("nav span")
.forEach(btn=>{


btn.onclick=()=>{


document
.querySelectorAll(".page")
.forEach(p=>
p.classList.add("hidden")
);



document
.getElementById(
btn.dataset.page
)
.classList.remove("hidden");


};


});





/* clock */


setInterval(()=>{


clock.innerHTML=
new Date()
.toLocaleTimeString();


},1000);






/*作品 */


const works=[

"work01.jpg",
"work02.jpg",
"work03.jpg"

];



const box=
document.getElementById(
"works-list"
);



works.forEach(w=>{


box.innerHTML+=`

<div class="work">

<img src="assets/works/${w}">

<p>
PROJECT_${w}
</p>

</div>

`;


});



console.log(
"DIGITAL ARCHIVE ONLINE"
);



});
