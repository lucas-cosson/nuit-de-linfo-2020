async function getApi() {
    let response = await fetch("http://newsapi.org/v2/everything?q=surf&from=2020-11-04&sortBy=publishedAt&apiKey=455ef94368134ee2973fa2318de6b270");
    response =  await response.json();
    if(response.status == "ok"){
        console.log("réponse");
        for (let index = 0; index < 4; ++index) {
        let carousel = document.getElementsByClassName("carousel-item")[i];
        let html = '';
        if(index === 0){
            html += '<div class="carousel-item active">';
        }
        html += `<div class="carousel-item"><a href="${res.article[i].url}">
                    <img src="${res.article[i].urlToImage}"
                        alt="lien vers l'article"
                        onError="this.onerror=null;this.src='./img/default.jpg';">
                </a></div>`;
        if(index === 0){
            html += '</div>';
        }
        carousel.insertAdjacentHTML("beforeend", html);
        }
    } else {
        console.log("FAIL");
    }

}

getApi();


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

document.getElementById("submit-data").addEventListener("click", async () => {
    if(waterman.value === "néo" || waterman.value === "Néo"){
        console.log("bonjour néo");
        document.getElementById("easterEgg").children[0].classList.remove("hidden");
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