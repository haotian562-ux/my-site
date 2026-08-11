/* =====================================================
   中文 Y2K CRT DIGITAL SPACE OS
   FRONTEND SYSTEM v2.0
===================================================== */

/* =================================
 MATRIX DIGITAL RAIN
================================= */


const canvas =
document.getElementById(
"matrix-canvas"
);



if(canvas){


const ctx =
canvas.getContext(
"2d"
);



canvas.width =
window.innerWidth;


canvas.height =
window.innerHeight;



const chars =
"01アイウエオカキクケコABCDEFGHIJKLMNOPQRSTUVWXYZ";



const fontSize=18;


const columns =
canvas.width/fontSize;



const drops=[];



for(
let i=0;
i<columns;
i++
){

drops[i]=1;

}



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
"#00ff41";



ctx.font =
fontSize+"px monospace";



for(
let i=0;
i<drops.length;
i++
){



const text =
chars[
Math.floor(
Math.random()*chars.length
)
];



ctx.fillText(

text,

i*fontSize,

drops[i]*fontSize

);



if(
drops[i]*fontSize >
canvas.height
&&
Math.random()>0.975
){

drops[i]=0;


}



drops[i]++;


}



}



setInterval(
matrixRain,
50
);



}

document.addEventListener(
"DOMContentLoaded",
()=>{



/* =====================================================
   系统启动
===================================================== */


const bootScreen =
document.getElementById(
"boot-screen"
);



setTimeout(()=>{


bootScreen.style.transition=
"opacity .8s";


bootScreen.style.opacity="0";



setTimeout(()=>{


bootScreen.style.display="none";


},800);



},3500);







/* =====================================================
   系统时间
===================================================== */


const clock =
document.getElementById(
"clock"
);



function updateClock(){


const now =
new Date();



clock.innerText =

now.toLocaleTimeString(
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
   模拟系统状态
===================================================== */


const memory =
document.getElementById(
"memory"
);



const visitor =
document.getElementById(
"visitor"
);



function systemMonitor(){



if(memory){


memory.innerText =

Math.floor(
Math.random()*30+60
)
+
"%";


}



if(visitor){


visitor.innerText =

Math.floor(
Math.random()*50
+
1
);


}



}



setInterval(
systemMonitor,
3000
);









/* =====================================================
   页面切换系统
===================================================== */


const icons =
document.querySelectorAll(
".pixel-icon"
);



const pages =
document.querySelectorAll(
".page"
);



icons.forEach(icon=>{


icon.addEventListener(
"click",
()=>{


const target =
icon.dataset.page;



pages.forEach(page=>{


page.classList.add(
"hidden"
);


});



const openPage =
document.getElementById(
target
);



if(openPage){


openPage.classList.remove(
"hidden"
);


}



});


});









/* =====================================================
   顶部菜单快捷访问
===================================================== */


const menuButtons =
document.querySelectorAll(
".menu-bar span"
);



const menuMap={


"首页":
"home",

"博客":
"blog",

"作品":
"works",

"关于":
"about",

"留言":
"message"


};



menuButtons.forEach(btn=>{


btn.onclick=()=>{


let target =
menuMap[
btn.innerText
];



if(!target)return;



pages.forEach(page=>{


page.classList.add(
"hidden"
);


});



document
.getElementById(target)
.classList.remove(
"hidden"
);



};



});









/* =====================================================
   窗口关闭
===================================================== */



document.querySelectorAll(
".close"
)
.forEach(button=>{


button.onclick=()=>{


button
.closest(".window")
.style.display=
"none";


};


});









/* =====================================================
   窗口最小化
===================================================== */



document.querySelectorAll(
".minimize"
)
.forEach(button=>{


button.onclick=()=>{


let win =
button.closest(
".window"
);



win.style.transform=
"scale(.05)";



win.style.opacity=
"0";



setTimeout(()=>{


win.style.display="none";


},300);



};



});









/* =====================================================
   窗口拖动
===================================================== */



const windows =
document.querySelectorAll(
".window"
);



windows.forEach(win=>{


const header =
win.querySelector(
".window-header"
);



if(!header)return;



let moving=false;

let offsetX=0;

let offsetY=0;



header.addEventListener(
"mousedown",
(e)=>{


moving=true;



offsetX =
e.clientX -
win.offsetLeft;


offsetY =
e.clientY -
win.offsetTop;


});





document.addEventListener(
"mousemove",
(e)=>{


if(!moving)return;



win.style.left =
e.clientX-offsetX
+
"px";



win.style.top =
e.clientY-offsetY
+
"px";



});





document.addEventListener(
"mouseup",
()=>{


moving=false;


});



});









/* =====================================================
   图片查看器
===================================================== */



const viewer =
document.getElementById(
"image-viewer"
);



const viewerImg =
document.getElementById(
"viewer-image"
);



document.addEventListener(
"click",
(e)=>{


const file =
e.target.closest(
".work-item"
);



if(!file)return;



viewerImg.src =
file.dataset.image;



viewer.classList.remove(
"hidden"
);



});





const closeViewer =
document.querySelector(
".close-viewer"
);



if(closeViewer){


closeViewer.onclick=()=>{


viewer.classList.add(
"hidden"
);


};


}









/* =====================================================
   BLOG 数据接口
   后续连接 Supabase
===================================================== */



async function loadBlogs(){



/*

未来替换：


const {
data
}=await supabase
.from("posts")
.select("*")


*/



const demo=[


{

title:
"我的Y2K设计实验",


status:
"已发布"


},


{

title:
"建立个人数字空间",


status:
"进行中"


}


];



const box =
document.getElementById(
"blog-list"
);



if(!box)return;



box.innerHTML="";



demo.forEach(
(post,index)=>{


box.innerHTML += `


<div class="blog-item">


编号:
0${index+1}


<br>


标题:

${post.title}


<br>


状态:

${post.status}


</div>


<hr>


`;


});



}



loadBlogs();









/* =====================================================
   WORK 数据接口
===================================================== */



async function loadWorks(){



const box =
document.getElementById(
"works-list"
);



if(!box)return;



const demo=[


"assets/work01.jpg",

"assets/work02.jpg",

"assets/work03.jpg"


];



demo.forEach(
(img,index)=>{


box.innerHTML +=`


<div 
class="work-item"
data-image="${img}">


<img src="${img}">


<p>

作品_${index+1}

</p>


</div>


`;


});



}



loadWorks();









/* =====================================================
   评论系统接口
===================================================== */


const send =
document.getElementById(
"send-comment"
);



const input =
document.getElementById(
"comment-input"
);



const commentList =
document.getElementById(
"comment-list"
);



if(send){



send.onclick=()=>{


if(
input.value.trim()==""
)
return;



const text =
input.value;



commentList.innerHTML += `


<p>

USER:

${text}

</p>


`;



input.value="";



/*

未来：

上传 Supabase comments 表


*/


};



}









/* =====================================================
   管理员检测接口
===================================================== */


async function checkAdmin(){



/*

未来：

读取 Supabase Auth


如果：

role == admin


显示后台入口



*/



}



checkAdmin();



});

const enterButton =
document.getElementById(
"enter-system"
);



if(enterButton){


enterButton.onclick=()=>{


const intro =
document.getElementById(
"matrix-intro"
);



intro.style.transition=
"opacity 1.5s";


intro.style.opacity=0;



setTimeout(()=>{


intro.remove();



},1500);



};


}
