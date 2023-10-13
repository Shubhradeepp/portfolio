var sidemenu=document.getElementById("sidemenu")
function openmenu(){
sidemenu.style.right="0";
}
function closemenu(){
    sidemenu.style.right="-100%";
}



var tablinks=document.getElementsByClassName("tab-links")
var tabcontains=document.getElementsByClassName("tab-contains")
 function opentab(tabname){
    for(tablink of tablinks){
        tablink.classList.remove("active");
    }
    for(tabcontain of tabcontains){
        tabcontain.classList.remove("active-tab");
    }
    event.currentTarget.classList.toggle("active");

    document.getElementById(tabname).classList.add("active-tab")
 }




 var icon = document. getElementById("icon");
icon. onclick = function (){
     document.body.classList. toggle ("light-mode");
     if (document. body.classList.contains ("light-mode")){
         icon. src = "moon.png";
     }else{
         icon.src = "sun.png";}
}



// function open(skillId) {
//     // Get all elements with the class "skill-menulist"
//     const skillMenus = document.querySelectorAll('.skill-menulist');
    
//     // Loop through each skill menu and hide its child list if it's not the selected skill
//     skillMenus.forEach(skillMenu => {
//       const list = skillMenu.querySelector('ul');
//       if (skillMenu.id === skillId) {
//         list.classList.remove('hide');
//       } else {
//         list.classList.add('hide');
//       }
//     });
//   }
  






{/*  */}