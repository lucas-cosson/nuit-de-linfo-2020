document.addEventListener("DOMContentLoaded", function() {
    var video=document.getElementsByClassName('autoplay');
    video.addEventListener("mouseover", function(){
        video.autoplay=true;
        video.play();
    });
});