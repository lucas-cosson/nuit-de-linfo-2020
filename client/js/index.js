
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

    const waterman = document.getElementById("waterman");
    const lieu = document.getElementById("lieu");
    const date_session = document.getElementById("date-session");
    const time = document.getElementById("time");
    const pollution = document.getElementById("pollution");
    const pollution_value = document.getElementById("pollution-value");

    pollution.addEventListener(
    "input",
    () => {
        pollution_value.innerHTML = `${pollution.value}%`;
    },
    false
    );

    window.addEventListener ("load", function(){
    const loader = document.querySelector(".loader");
    setTimeout(suiteTraitement, 5000);
    function suiteTraitement()
    {
    loader.className+=" hidden";
    }

    });

    // Nav bar 
    document.querySelector("#gauche .premier:first-child").addEventListener("click", () => {
        const doc = document.querySelector(".display-view");
        document.getElementById("register-view").classList.toggle("display-view");
        doc.classList.toggle("display-view");
    });

    document.querySelector("#gauche .premier:last-child").addEventListener("click", () => {
        const doc = document.querySelector(".display-view");
        document.getElementById("connect-view").classList.toggle("display-view");
        doc.classList.toggle("display-view");
    });

    document.querySelector("#gauche .second:first-child").addEventListener("click", () => {
        document.querySelector(".display-view").classList.toggle("display-view");
        document.getElementById("formulaire").classList.toggle("display-view");
    });

    document.getElementById("submit-data").addEventListener("click", async () => {
        if(waterman.value === "neo" || waterman.value === "Neo"){
            document.getElementById("easterEgg").children[0].classList.remove("hidden");
            waterman.value = "";
            return;
        }
        const init = {
        method: "POST",
        body: JSON.stringify({
        waterman: waterman.value,
        lieu: lieu.value,
        date_session: date_session.value,
        time: time.value,
        pollution: pollution.value,
        }),
        headers: { "Content-Type": "application/json" },
    };

    await fetch(`/api/form/insert`, init);
    });

    // EASTER EGG
    document.getElementById("easterEgg").addEventListener("click", () => {
        document.getElementById("easterEgg").children[0].classList.add("hidden");
    });
    document.getElementById("easterEgg").querySelector("button:nth-of-type(2)").addEventListener("click", () => {
        document.getElementById("leet-speak").children[0].classList.remove("hidden");
    });
});