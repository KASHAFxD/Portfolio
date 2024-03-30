function dinKardo() {
    body=document.body;
    body.style.backgroundColor="white";
    // var element = document.body;
    // element.classList.toggle("dark-mode");
 var mainDibba = document.getElementById("mainDibba");
//  mainDibba.classList.toggle("mainDibbaLight");
 mainDibba.style.backgroundColor="rgba(122, 231, 245, 0.5)";
 circleYellowWala=document.getElementById("circleYellowWala");
circleYellowWala.style.backgroundColor="rgba(247, 47, 221, 0.5)";
circleGreyWala=document.getElementById("circleGreyWala");
circleGreyWala.style.backgroundColor="rgba(179, 15, 255, 0.5)";

leftDibba=document.getElementById("leftDibba");
leftDibba.style.backgroundColor="rgb(242, 211, 136)";
// document.dir



// about ka js hai ye bkl
txt=document.getElementById("meraNam");
txt.style.color="rgb(50, 168, 82)";

txt1=document.getElementById("abtPeelaText1");
txt1.style.color="rgb(50, 168, 82)";

txt2=document.getElementById("abtPeelaText2");
txt2.style.color="rgb(50, 168, 82)";


txt3=document.getElementById("abtPeelaText3");
txt3.style.color="rgb(50, 168, 82)";

txt4=document.getElementById("abtPeelaText4");
txt4.style.color="rgb(50, 168, 82)";


text5=document.getElementById("abtdibba1");
text5.style.backgroundColor="rgb(242, 211, 136)";

text6=document.getElementById("abtdibba2");
text6.style.backgroundColor="rgb(242, 211, 136)";



text7=document.getElementById("abtdibba3");
text7.style.backgroundColor="rgb(242, 211, 136)";

text8=document.getElementById("abtdibba4");
text8.style.backgroundColor="rgb(242, 211, 136)";


jadu=document.getElementById("abtSafedText1");
jadu.style.color="black";

jadu1=document.getElementById("abtSafedText2");
jadu1.style.color="black";

jadu2=document.getElementById("abtSafedText3");
jadu2.style.color="black";


jadu3=document.getElementById("abtSafedText4");
jadu3.style.color="black";

jadu4=document.getElementById("headingWhite");
jadu4.style.color="black";


txt9=document.getElementById("headingYellow");
txt9.style.color="rgb(50, 168, 82)";


info=document.getElementById("name");
info.style.color="rgb(50, 168, 82)";

info1=document.getElementById("name1");
info1.style.color="black";


info55=document.getElementById("age");
info55.style.color="rgb(50, 168, 82)";

info11=document.getElementById("age1");
info11.style.color="black";


info555=document.getElementById("qualification");
info555.style.color="rgb(50, 168, 82)";

info111=document.getElementById("qualification1");
info111.style.color="black";


info65=document.getElementById("post");
info65.style.color="rgb(50, 168, 82)";

info11=document.getElementById("post1");
info11.style.color="black";



info33=document.getElementById("language");
info33.style.color="rgb(50, 168, 82)";

info11=document.getElementById("language1");
info11.style.color="black";




}





function ratKardo() {
 const ratKiLine = document.getElementsByTagName("link"); 
  }


  function enableStylesheet (node) {
    link = document.getElementById("firstCSS");
    // link.href = 'aboutRaat.css';
    link.rel = 'alternate stylesheet';
  }


  function toggleTheme() { 

    var theme = document.getElementsByTagName('link')[0]; 

    // Change the value of href attribute  
    // to change the css sheet. 
    if (theme.getAttribute('href') == 'about.css') { 
        theme.setAttribute('href', 'aboutRaat.css'); 
    } else { 
        theme.setAttribute('href', 'about.css'); 
    } 
}