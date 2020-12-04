async function getApi() {
    const response = await fetch("http://newsapi.org/v2/everything?q=surf&from=2020-11-04&sortBy=publishedAt&apiKey=455ef94368134ee2973fa2318de6b270");
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