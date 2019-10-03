
//jshint esversion:6

// tabs
$("#tab-2").click(function(){
    $("#tab-2").addClass("tab-border");
    $("#tab-1").removeClass("tab-border");
    $(".attempt-1-3").addClass("attempt-1-3-off");
    $(".attempt-4-6").addClass("attempt-4-6-show");
});

$("#tab-1").click(function(){
    $("#tab-1").addClass("tab-border");
    $("#tab-2").removeClass("tab-border");
    $(".attempt-1-3").removeClass("attempt-1-3-off");
    $(".attempt-4-6").removeClass("attempt-4-6-show");
});

//open new window - progrees part

function openWin_P1() {
  window.open("https://new-kong.github.io/TinDog/");
}

function openWin_P3() {
  window.open("https://new-kong.github.io/myTunes-Clone/");
}


function openWin_P4() {
  window.open("https://new-kong.github.io/Previous-Version-Netflix-Clone/");
}

function openWin_P5() {
  window.open("https://new-kong.github.io/Food-Monster/");
}

//open new window - Linkedin
function openWin_L1() {
  window.open("https://my.linkedin.com/in/wai-hoo-kong-14a119174?trk=profile-badge");
}

//open backend

function openWin_B1(){
  window.open("https://new-kong.github.io/Auth/");
}


// magnific pop-up previous art

$(".parent-container").magnificPopup({
  delegate:"a",
  type:"image",

  gallery:{
    enabled:true
  }
});

// magnific pop-up in progress

$(".progress-right").magnificPopup({
  delegate:"a",
  type:"image",

  gallery:{
    enabled:true
  }

});


// navbar
$(".navBtn").click(function(){
  $(".nav").toggleClass("nav-show");
});

// arrow-back-to-top

$(window).scroll(function(){
  let position = $(this).scrollTop();
  console.log(position);

  if(position>=1500){
    $("#back-to-top").addClass("scrollTop");
  }else{
    $("#back-to-top").removeClass("scrollTop");
  }
});
