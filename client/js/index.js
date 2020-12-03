document.addEventListener("DOMContentLoaded", function() {
    let video=document.getElementById('autoplay');
    video.addEventListener("mouseover", function(){
        video.play();
    });

    video.addEventListener("mouseout", function(){
        video.pause();
    });    
});