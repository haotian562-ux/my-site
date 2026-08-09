/* =====================================================
   ADMIN CONTROL OS
   中文 Y2K CRT 管理系统
   ADMIN.JS v1.0
===================================================== */



document.addEventListener(
"DOMContentLoaded",
()=>{



/* =====================================================
   系统元素
===================================================== */


const loginScreen =
document.getElementById(
"login-screen"
);



const adminPanel =
document.getElementById(
"admin-panel"
);



const loginBtn =
document.getElementById(
"login-btn"
);



const loginStatus =
document.getElementById(
"login-status"
);








/* =====================================================
   管理员登录
===================================================== */


loginBtn.onclick =
async ()=>{



const email =
document.getElementById(
"admin-email"
)
.value;



const password =
document.getElementById(
"admin-password"
)
.value;



if(
!email ||
!password
){


loginStatus.innerText =
"请输入管理员账号";


return;


}





/*

未来接入 Supabase Auth


示例：


const {

data,

error

}=await supabase.auth.signInWithPassword({

email,

password

});





*/


/*
演示验证

上线删除这里

*/


if(
email==="admin@test.com"
&&
password==="123456"
){


loginStatus.innerText =
"身份确认 ROOT权限开启";



setTimeout(()=>{


loginScreen
.classList
.add(
"hidden"
);



adminPanel
.classList
.remove(
"hidden"
);



},1000);



}

else{


loginStatus.innerText =
"访问失败：权限不足";


}



};









/* =====================================================
   发布博客
===================================================== */


const publishBtn =
document.getElementById(
"publish-post"
);



if(publishBtn){



publishBtn.onclick =
async ()=>{



const title =
document
.getElementById(
"post-title"
)
.value;



const content =
document
.getElementById(
"post-content"
)
.value;




if(
!title ||
!content
){


alert(
"请输入文章内容"
);


return;


}







/*

未来：

写入 Supabase


posts 表



*/


console.log({

title,

content

});




alert(
"文章发布成功"
);



};



}









/* =====================================================
   上传作品
===================================================== */


const uploadBtn =
document.getElementById(
"upload-work"
);



if(uploadBtn){



uploadBtn.onclick =
async ()=>{



const file =
document
.getElementById(
"work-image"
)
.files[0];



const title =
document
.getElementById(
"work-title"
)
.value;



const description =
document
.getElementById(
"work-description"
)
.value;



if(!file){


alert(
"请选择图片"
);


return;


}





/*

未来：

上传 Supabase Storage


storage:

works/


获得URL


写入 works 表



*/



console.log({

file,

title,

description


});



alert(
"作品上传完成"
);



};



}











/* =====================================================
   评论管理
===================================================== */


const commentBox =
document.getElementById(
"comment-manager"
);



async function loadComments(){



/*

未来:

从 Supabase:

comments

读取



*/


const demoComments=[


{


user:
"访客001",

text:
"这个网站很有未来感"


},


{


user:
"访客002",

text:
"喜欢CRT效果"


}


];




if(!commentBox)return;



commentBox.innerHTML="";



demoComments.forEach(
(comment,index)=>{


commentBox.innerHTML +=`


<div class="comment-item">


用户：

${comment.user}


<br>


留言：

${comment.text}



<br>


<button
onclick="deleteComment(${index})">


删除


</button>


</div>


`;



});



}



loadComments();







/* 删除评论 */


window.deleteComment =
function(id){



/*

未来：

DELETE FROM comments


*/


alert(
"评论已删除 ID:"
+
id
);


};









/* =====================================================
   保存个人资料
===================================================== */


const saveProfile =
document.getElementById(
"save-profile"
);



if(saveProfile){



saveProfile.onclick =
()=>{



const text =
document
.getElementById(
"profile-editor"
)
.value;



/*

未来:

更新:

profile 表


*/



console.log(
text
);



alert(
"系统配置已保存"
);



};



}








/* =====================================================
   管理菜单
===================================================== */


document
.querySelectorAll(
".admin-menu span"
)
.forEach(
item=>{


item.onclick =
()=>{


console.log(

"打开模块:",
item.innerText

);



};


});






});