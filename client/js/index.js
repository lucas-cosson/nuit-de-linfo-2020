document.addEventListener("DOMContentLoaded", function() {
    let video=document.getElementById('autoplay');
    video.addEventListener("mouseover", function(){
        video.autoplay=true;
        video.play();
    });
});