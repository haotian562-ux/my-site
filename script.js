/* =====================================================
   Y2K CRT PERSONAL OS
   JAVASCRIPT SYSTEM
===================================================== */



document.addEventListener(
"DOMContentLoaded",
()=>{


/* =====================================================
   BOOT SYSTEM
===================================================== */


const boot =
document.getElementById(
"boot-screen"
);


setTimeout(()=>{


boot.style.opacity="0";


setTimeout(()=>{

boot.style.display="none";

},800);


},3500);







/* =====================================================
   CLOCK
===================================================== */


const clock =
document.getElementById(
"clock"
);



function updateClock(){


let now =
new Date();



clock.textContent =

now.toLocaleTimeString(
"fr-FR"
);


}



setInterval(
updateClock,
1000
);


updateClock();








/* =====================================================
   SYSTEM RANDOM DATA
===================================================== */


const memory =
document.getElementById(
"memory"
);



function updateSystem(){


let value =
Math.floor(
Math.random()*35
)+60;



memory.textContent =
value+"%";


}



setInterval(
updateSystem,
2000
);








/* =====================================================
   WINDOW DRAG SYSTEM
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


win.style.zIndex=100;



});





document.addEventListener(
"mousemove",
(e)=>{


if(!moving)return;



win.style.left =

(e.clientX-offsetX)
+"px";



win.style.top =

(e.clientY-offsetY)
+"px";



});





document.addEventListener(
"mouseup",
()=>{


moving=false;


});



});









/* =====================================================
   WINDOW CONTROLS
===================================================== */



document.querySelectorAll(
".close"
)
.forEach(btn=>{


btn.onclick=()=>{


btn.closest(
".window"
)
.style.display="none";


};



});





document.querySelectorAll(
".minimize"
)
.forEach(btn=>{


btn.onclick=()=>{


let win =
btn.closest(
".window"
);



win.style.transform =
"scale(.05)";


win.style.opacity =
"0";



setTimeout(()=>{


win.style.display="none";


},300);



};



});









/* =====================================================
   DESKTOP ICON NAVIGATION
===================================================== */


const icons =
document.querySelectorAll(
".pixel-icon"
);



const pages={


"HOME.exe":
"home-page",


"BLOG.log":
"blog-page",


"WORKS.dir":
"portfolio-page",


"USER.cfg":
"about-page"


};



icons.forEach(icon=>{


icon.onclick=()=>{


const name =
icon.querySelector(
"span"
)
.textContent;



Object.values(pages)
.forEach(id=>{


document
.getElementById(id)
.classList.add(
"hidden"
);


});



document
.getElementById(
pages[name]
)
.classList.remove(
"hidden"
);



};



});









/* =====================================================
   IMAGE VIEWER
===================================================== */



const viewer =
document.getElementById(
"image-viewer"
);



const viewerImage =
document.getElementById(
"viewer-image"
);



const viewerText =
document.getElementById(
"viewer-text"
);



document.querySelectorAll(
".image-file"
)
.forEach(item=>{


item.onclick=()=>{


let img =
item.dataset.image;



viewerImage.src =
img;



viewerText.textContent =

"FILE OPENED : "
+
img;



viewer.classList.remove(
"hidden"
);



};



});






document
.querySelector(
".close-viewer"
)
.onclick=()=>{


viewer.classList.add(
"hidden"
);


};








/* =====================================================
   CRT RANDOM SIGNAL EFFECT
===================================================== */


const crt =
document.querySelector(
".crt-overlay"
);



setInterval(()=>{


let opacity =

Math.random()
*
0.05
+
0.95;



crt.style.opacity =
opacity;



},120);








/* =====================================================
   PIXEL BUTTON SIGNAL
===================================================== */


document
.querySelectorAll(
"button"
)
.forEach(btn=>{


btn.addEventListener(
"mouseenter",
()=>{


btn.style.filter =
"brightness(1.8)";


});



btn.addEventListener(
"mouseleave",
()=>{


btn.style.filter =
"none";


});



});





});