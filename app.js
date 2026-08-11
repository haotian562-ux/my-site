/*
=====================================================

 陈昊天数字空间 OS

 PERSONAL_OS SYSTEM v4.0

 MATRIX BOOT
 CRT DESKTOP
 DIGITAL ARCHIVE

=====================================================
*/


document.addEventListener(
"DOMContentLoaded",
()=>{



/* =====================================================
   MATRIX DIGITAL RAIN
===================================================== */


const canvas =
document.getElementById(
"matrix"
);



if(canvas){


const ctx =
canvas.getContext(
"2d"
);



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
"01陈昊天数字空间系统启动ABCDEFGHIJKLMNOPQRSTUVWXYZアイウエオ";



const fontSize = 18;



let drops = [];



function createDrops(){


drops =
Array(
Math.floor(
canvas.width / fontSize
)
)
.fill(1);


}



createDrops();





function matrixRain(){



ctx.fillStyle =
"rgba(0,0,0,0.08)";



ctx.fillRect(
0,
0,
canvas.width,
canvas.height
);




ctx.fillStyle =
"#00ff88";



ctx.font =
fontSize +
"px monospace";




drops.forEach(
(y,index)=>{



const text =
chars[
Math.floor(
Math.random()*chars.length
)
];



ctx.fillText(
text,
index*fontSize,
y*fontSize
);





if(
y*fontSize >
canvas.height
&&
Math.random()>0.975
){


drops[index]=0;


}



drops[index]++;



});


}



setInterval(
matrixRain,
50
);



}









/* =====================================================
   ENTER SYSTEM
===================================================== */


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



if(intro){

intro.style.opacity="0";


setTimeout(()=>{


intro.remove();


},1000);


}




const system =
document.getElementById(
"system"
);



if(system){

system.classList.remove(
"hidden"
);

}



console.log(
"BOOT COMPLETE"
);



};



}









/* =====================================================
   PAGE SYSTEM
===================================================== */



function openPage(id){



document
.querySelectorAll(
".page"
)
.forEach(
page=>{


page.classList.add(
"hidden"
);



});




const target =
document.getElementById(
id
);



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
button=>{



button.onclick=()=>{


openPage(
button.dataset.page
);



};



});











/* =====================================================
   SYSTEM CLOCK
===================================================== */


const clock =
document.getElementById(
"clock"
);



function updateClock(){


if(!clock)
return;



clock.innerHTML =
new Date()
.toLocaleTimeString(
"zh-CN",
{
hour12:false
}
);



}



setInterval(
updateClock,
1000
);



updateClock();











/* =====================================================
   WORK ARCHIVE
===================================================== */



const works = [


"work01.jpg",

"work02.jpg",

"work03.jpg"


];




const workBox =
document.getElementById(
"works-list"
);





if(workBox){



works.forEach(
(item)=>{



workBox.innerHTML += `


<div class="work"
data-image="assets/works/${item}">


<img src="assets/works/${item}">


<p>

PROJECT_${item}

</p>


</div>



`;



});



}












/* =====================================================
   IMAGE VIEWER
===================================================== */


const viewer =
document.getElementById(
"viewer"
);



const viewerImage =
document.getElementById(
"viewer-image"
);




document.addEventListener(
"click",
(e)=>{



const target =
e.target.closest(
".work"
);



if(!target)
return;



const img =
target.dataset.image;



if(viewerImage){

viewerImage.src =
img;


}



if(viewer){

viewer.classList.remove(
"hidden"
);

}



});






const closeViewer =
document.getElementById(
"viewer-close"
);



if(closeViewer){


closeViewer.onclick=()=>{


viewer.classList.add(
"hidden"
);


};



}









/* =====================================================
   BLOG DATABASE PLACEHOLDER

   Future:

   Supabase

   posts table


===================================================== */


const blogBox =
document.getElementById(
"blog-list"
);



if(blogBox){



const demoBlogs=[


"建立我的数字空间",

"Y2K CRT视觉实验",

"未来数字档案计划"


];




demoBlogs.forEach(
(blog,index)=>{


blogBox.innerHTML += `


<div class="blog-item">


ID:
00${index+1}


<br>


TITLE:

${blog}



<br>

STATUS:

ONLINE


</div>



`;



});



}









/* =====================================================
   COMMENT PLACEHOLDER

===================================================== */


const send =
document.getElementById(
"send-comment"
);



if(send){


send.onclick=()=>{


const input =
document.getElementById(
"comment-input"
);



const list =
document.getElementById(
"comment-list"
);



if(
!input ||
!list ||
input.value.trim()==""
)
return;




list.innerHTML += `


<p>

USER:

${input.value}


</p>


`;



input.value="";



};


}









/* =====================================================
   SYSTEM READY
===================================================== */


console.log(
`
===========================

 PERSONAL_OS ONLINE

 MATRIX : OK

 CRT : OK

 ARCHIVE : OK

 DATABASE : WAITING

===========================
`
);



});
