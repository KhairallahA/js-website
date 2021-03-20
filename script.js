// تعريف وبرمجة زررات المشاريع
var project_1 = document.getElementById('project_1');
var project_2 = document.getElementById('project_2');
var project_3 = document.getElementById('project_3');
var project_4 = document.getElementById('project_4');
var project_5 = document.getElementById('project_5');

project_1.addEventListener("click", ()=>{
    window.open("file:///C:/Users/ayman%20ali/Desktop/Learn%20Programmer/%D8%AA%D8%B9%D9%84%D9%85%20js/js-my_web/index.html");
});

project_2.addEventListener("click", ()=>{
    window.open("file:///C:/Users/ayman%20ali/Desktop/Learn%20Programmer/%D8%AA%D8%B9%D9%84%D9%85%20js/js-editor/index.html");
});

project_3.addEventListener("click", ()=>{
    window.open("file:///C:/Users/ayman%20ali/Desktop/Learn%20Programmer/%D8%AA%D8%B9%D9%84%D9%85%20js/js-on_de_code/index.html");
});

project_4.addEventListener("click", ()=>{
    window.open("file:///C:/Users/ayman%20ali/Desktop/Learn%20Programmer/%D8%AA%D8%B9%D9%84%D9%85%20js/js-time/time.html");
});

project_5.addEventListener("click", ()=>{
    window.open("file:///C:/Users/ayman%20ali/Desktop/Learn%20Programmer/%D8%AA%D8%B9%D9%84%D9%85%20js/js-audio/player.html");
});
/////////////////////////////////////////////////////////////////////////////
// تعريف زرارات اختيار اللغة
var language_main = document.getElementById('language_main');
var arabic_id = document.getElementById('arabic_id');
var english_id = document.getElementById('english_id');
// تعريف الكتابات
var title_name = document.getElementById('title_name');
var title_des = document.getElementById('title_des');

// برمجة زررارت اختيار اللغة
arabic_id.addEventListener("click", ()=>{
    setLanguage("arabic");
    localStorage.setItem("Language","arabic");
});
english_id.addEventListener("click", ()=>{
    setLanguage("english");
    localStorage.setItem("Language","english")
});

onload = ()=>{
    setLanguage(localStorage.getItem("Language"));
}

function setLanguage(getLanguage){
    if(getLanguage === "arabic"){
        arabic_id.innerHTML = "العربيه";
        english_id.innerHTML = "الانجليزيه";
        title_name.innerHTML = "!مرحبا, انا خيرالله العواضي";
        title_des.innerHTML = "انا مطور ويب و مصمم ويب"
        project_1.innerHTML = "المشروع 1";
        project_2.innerHTML = "المشروع 2";
        project_3.innerHTML = "المشروع 3";
        project_4.innerHTML = "المشروع 4";
        project_5.innerHTML = "المشروع 5";
    }
    else if(getLanguage === "english"){
        arabic_id.innerHTML = "Arabic";
        english_id.innerHTML = "English";
        title_name.innerHTML = "Hi, I'm Khairallah AL-Awady!";
        title_des.innerHTML = "I'm a Web developer & Web designer"
        project_1.innerHTML = "Project 1";
        project_2.innerHTML = "Project 2";
        project_3.innerHTML = "Project 3";
        project_4.innerHTML = "Project 4";
        project_5.innerHTML = "Project 5";
    }
}
// لوضع استايل خاص لاصحاب هواتف الايباد
var Ipad = navigator.userAgent.toLowerCase();
if(Ipad.includes("ipad") || Ipad.includes("ipod")){
    language_main.style.marginTop = "100px";
}
else if(screen.width<360){
    language_main.style.marginTop = "10px";
    arabic_id.style.width = "65px";
    english_id.style.width = "65px";
}

// السوشيال ميديا واتصل بنا
var facebook_id = document.getElementById('facebook_id');
var instagram_id = document.getElementById('instagram_id');
var contact_id = document.getElementById('contact_id');

facebook_id.addEventListener("click", ()=>{
    window.open("https://www.facebook.com/profile.php?id=100015246318313");
});
instagram_id.addEventListener("click", ()=>{
    window.open("https://www.instagram.com/prrogramerr/");
});

var phone = navigator.userAgent.toLowerCase();
if(phone.includes("android") || phone.includes("iphone")){
    facebook_id.style.left = "8%";
    instagram_id.style.left = "25%";
    contact_id.style.left = "68%";
}