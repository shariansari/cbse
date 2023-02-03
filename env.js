$(document).ready(function () {
    $(".Login").hide();
    Boards();


    function Boards (Def ="10th Class") {


 
  
    async function test() {
      const response = await fetch(` https://api.markschamp.com/studentbasic/getCourseVideosDemo?classes=${Def}`);
      const jason = await response.json();
      return jason;

    }
    test().then((res) => {
      const vedioDataCard = res;
      localStorage.setItem("demovedios", JSON.stringify(vedioDataCard));
      VedioClass10();

    });
  }
   $(".class_9th").click(function(){
    $(".responsive").html("");
    let Cls9 ="9th Class"
    Boards(Cls9);
    $(".responsive").html("");
   })

  

  });
////
   
// $(".SelectRound").click(function () {
//     const data = $(this).innerHTML;

//   })
//   let SlectedClass ="12th Class Science";
//   let Coursebtns = document.querySelectorAll(".classSelect");
  
//   Array.from(Coursebtns).forEach((butoon,index) => {
//     butoon.addEventListener('click', (e) => {
//       localStorage.setItem("Indices",index);
//       if(localStorage.getItem("Indices") == index){
//         let SlectedClass = e.target.innerHTML;

// localStorage.setItem("SlelectedClass", SlectedClass);
//         $(".classSelect").removeClass("docolor");
//   $(butoon).addClass("docolor"); 
//       }
    
    
   
    
  


//     })
//   });
//   let MediumBtns =document.querySelectorAll(".Medium");
//   Array.from(MediumBtns).forEach((medium,index)=>{
//     medium.addEventListener("click",(e)=>{
//       localStorage.setItem("Indices",index);
//       if(localStorage.getItem("Indices") == index){
      

//         $(".Medium").removeClass("docolor");
//   $(medium).addClass("docolor"); 
//       }
    
//     })

//   })
//   let CouRse = document.querySelectorAll(".listLinks");
//   Array.from(CouRse).forEach((course) => {
//     course.addEventListener("click", (e) => {
//       let SelectedCourse = e.target.innerHTML;
//       localStorage.setItem("SlelectedCourse", SelectedCourse)
//     })
//   })
  

  $("#DemoCall").click(function(){
  
    
let CallName =$("#CallName").val();
let CallPhone =$("#callPhone").val();
let CallClasses =$("#callClass").val();

const param =new URLSearchParams()
param.append("studentsName",`${CallName}`);
param.append("phoneNo",`${CallPhone}`);
param.append("classes",`${CallClasses}`);

if(CallName==="" && CallPhone==="" ){
$("#Callname").html("Fields Can't be empty *")
$("#Callphone").html("Fields Can't be empty *")
setTimeout(() => {
  $("#Callname").html("");
  $("#Callphone").html("");

   }, 2500);
}
else if (CallPhone.length!=10){
$("#Callphone").html("Invalid Phoneno *");
setTimeout(() => {
  $("#Callname").html("");
  $("#Callphone").html("");

   }, 2500);

}
else{
axios.post("https://api.markschamp.com//studentbasic/bookFreeDemo",param)
.then(function(response){
  if(response.data.message=='Successfully Saved.'){
    $("#DemoShort").html("We will call you shortly...");
    setTimeout(() => {
  $("#DemoShort").html("");
  $("#CallName").val("");
  $("#callPhone").val("");


   }, 2500);

  
    
  
  }
})

}


  })


$(".register").click(function(){
$(".Login").hide();
$(".Register").show();
})
$(".login").click(function(){
$(".Login").show();
$(".Register").hide();
})




$("#signup").click(function(){
Name =$("#EnterName").val();
Email=$("#EnterEmail").val();
Password=$("#EnterPassword").val();
Phoneno=$("#EnterPhoneno").val();



localStorage.setItem("StudentName",`${Name}`)


const param =new URLSearchParams()
param.append("studentsName",`${Name}`);
param.append("studentsEmail",`${Email}`);
param.append("phone",`${Phoneno}`);
param.append("password",`${Password}`);


if(Name === "" && Email ==="" && Phoneno ==="" && Password ===""){
$("#NameError").html("Fields Can't be empty *")
  $("#EmailError").html("Fields Can't be empty *")
  $("#PasswordError").html("Fields Can't be empty *")
  $("#PhonenoError").html("Fields Can't be empty *")
        
setTimeout(() => {
  $("#NameError").html("")
  $("#EmailError").html("")
  $("#PasswordError").html("")
  $("#PhonenoError").html("")
      }, 2500);

}
else if(Phoneno.length!=10){
$("#PhonenoError").html("Please Enter Valid no *")
setTimeout(() => {
  $(".NameError").html("")
  $(".EmailError").html("")
  $(".PasswordError").html("")
  $(".PhonenoError").html("")
      }, 2500);
}
else if(Name ===""){
$("#NameError").html("Fields Can't be empty *")
setTimeout(() => {
  $("#NameError").html("")
  $("#EmailError").html("")
  $("#PasswordError").html("")
  $("#PhonenoError").html("")
      }, 2500);
}
else if(Email ===""){
$("#EmailError").html("Fields Can't be empty *")
setTimeout(() => {
  $("#NameError").html("")
  $("#EmailError").html("")
  $("#PasswordError").html("")
  $("#PhonenoError").html("")
      }, 2500);
}
else if(!Email.includes("@")){
$("#EmailError").html("Email must have @ *")
setTimeout(() => {
  $("#NameError").html("")
  $("#EmailError").html("")
  $("#PasswordError").html("")
  $("#PhonenoError").html("")
      }, 2500);

}
else if(Phoneno ===""){
$("#PhonenoError").html("Fields Can't be empty *")
setTimeout(() => {
  $("#NameError").html("")
  $("#EmailError").html("")
  $("#PasswordError").html("")
  $("#PhonenoError").html("")
      }, 2500);
}
else if(Password ===""){
$("#PasswordError").html("Fields Can't be empty *")
setTimeout(() => {
  $("#NameError").html("")
  $("#EmailError").html("")
  $("#PasswordError").html("")
  $("#PhonenoError").html("")
      }, 2500);
}
else if(Password.length<6){
$("#PasswordError").html("Password Should not be less than 6 *")
setTimeout(() => {
  $("#NameError").html("")
  $("#EmailError").html("")
  $("#PasswordError").html("")
  $("#PhonenoError").html("")
      }, 2500);
}
else if(Password.length>12){
$("#PasswordError").html("Password Should not be greater than 12 *")
setTimeout(() => {
  $("#NameError").html("")
  $("#EmailError").html("")
  $("#PasswordError").html("")
  $("#PhonenoError").html("")
      }, 2500);



}
else{
axios.post('https://api.markschamp.com//studentbasic/signup',param)
.then(function (response) {
  if(response.data.message=='Successfully Saved.'){
    localStorage.setItem("LoggedIn",true);
    $(".hideit").css("display","none");
    
    $(".hideit").removeClass("show");
    location.reload();
  $(".ShowAvtar").show();
$(".sigbtn").hide();
$(".Logout").hide();
$("#Dolog ").click(function(){
  localStorage.setItem("LoggedIn",false);
  $(".ShowAvtar").hide();
$(".sigbtn").show();
})

  
    
  }


})

}

})
$("#login").click(function(){



let CnfrmPhone =$("#ConfirmPhoneno").val();
let CnfrmPassword =$("#ConfirmPassword").val();

const param =new URLSearchParams()
param.append("phoneNoOrEmailid",`${CnfrmPhone}`);
param.append("password",`${CnfrmPassword}`);




if( CnfrmPhone ==="" && CnfrmPassword ===""){
$("#phone").html("Fields Can't be empty *")
 $("#Password").html("Fields Can't be empty *")
 
       
setTimeout(() => {
 $("#phone").html("")
 $("#Password").html("")
  }, 2500);


  

}
else{
axios.post(' https://api.markschamp.com//studentbasic/loginPage',param)
.then(function (response) {
 if(response.data["message:"]=="Successfull Login"){
  localStorage.setItem("LoggedIn",true);
  $(".hideit").css("display","none");
  $(".hideit").removeClass("show");
  location.reload();
  $(".ShowAvtar").show();
$(".sigbtn").hide();
$(".Logout").hide();
$("#Dolog ").click(function(){
  localStorage.setItem("LoggedIn",false);
  $(".ShowAvtar").hide();
$(".sigbtn").show();
})

 
 }

 else{
   $("#phone").html("Phone no and Password doesn't matches *")
 $("#Password").html("Phone no and Password doesn't matches *")
 setTimeout(() => {
 $("#phone").html("")
 $("#Password").html("")
  }, 2500);
 }

})

}


})
let  logged =localStorage.getItem("LoggedIn");
if (logged =="true"){


$(".ShowAvtar").show();
$(".sigbtn").hide();
$("#avtarsh").click(function(){
$(".Logout").toggle();

$("#Dolog ").click(function(){
  localStorage.setItem("LoggedIn",false);
  $(".ShowAvtar").hide();
$(".sigbtn").show();
})
})

}
else{
$(".ShowAvtar").hide();
$(".sigbtn").show();
}