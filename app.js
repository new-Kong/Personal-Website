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
  window.open("https://github.com/new-Kong/TinDog.git");
}

function openWin_P3() {
  window.open("https://github.com/new-Kong/myTunes.git");
}


function openWin_P4() {
  window.open("https://github.com/new-Kong/Nexflix-Clone.git");
}

function openWin_P5() {
  window.open("https://github.com/new-Kong/Food-Monster.git");
}

function openWin_P6() {
  window.open("https://github.com/new-Kong/Personal-Website.git");
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
