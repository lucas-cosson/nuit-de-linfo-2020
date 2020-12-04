document.addEventListener("DOMContentLoaded", function() {
    let video=document.getElementById('autoplay');
    let root=document.getElementsByClassName('premier');
    let i = root.length;
    video.addEventListener("mouseover", function(){
        video.play();
        let j=i;
        while(j--){
            root[j].className += ' enBas';
        }
    });

    let nav=document.getElementById('unroll');
    nav.addEventListener("onmouseout", function(){
        video.pause();
        let j=i;
        while(j--){
            root[j].classList.remove('enBas');
        }
    });
});