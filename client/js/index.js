document.addEventListener("DOMContentLoaded", function () {

  document.getElementById("darkmode").addEventListener("click", () => {
    alert("Nous sommes en rupture de stock de dark mode.");
  });

  let video = document.getElementById("autoplay");
  let root = document.getElementsByClassName("premier");
  let i = root.length;
  video.addEventListener("mouseover", function () {
    video.play();
    let j = i;
    while (j--) {
      root[j].className += " enBas";
    }
  });
  let video = document.getElementById("autoplay");
  let root = document.getElementsByClassName("premier");
  let i = root.length;
  video.addEventListener("mouseover", function () {
    video.play();
    let j = i;
    while (j--) {
      root[j].className += " enBas";
    }
  });

  let nav = document.getElementById("unroll");
  nav.addEventListener("onmouseout", function () {
    video.pause();
    let j = i;
    while (j--) {
      root[j].classList.remove("enBas");
    }
  });

  const waterman = document.getElementById("waterman");
  const lieu = document.getElementById("lieu");
  const date_session = document.getElementById("date-session");
  const time = document.getElementById("time");
  const pollution = document.getElementById("pollution");
  const pollution_value = document.getElementById("pollution-value");
  
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

  let nav = document.getElementById("unroll");
  nav.addEventListener("onmouseout", function () {
    video.pause();
    let j = i;
    while (j--) {
      root[j].classList.remove("enBas");
    }
  });
  
  pollution.addEventListener(
    "input",
    () => {
      pollution_value.innerHTML = `${pollution.value}%`;
    },
    false
  );

  window.addEventListener("load", function () {
    const loader = document.querySelector(".loader");
    setTimeout(suiteTraitement, 5000);
    function suiteTraitement() {
      loader.className += " hidden";
    }
  });

  document.getElementById("submit-data").addEventListener("click", async () => {
    if (waterman.value === "neo" || waterman.value === "Neo") {
      document
        .getElementById("easterEgg")
        .children[0].classList.remove("hidden");
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
  document
    .getElementById("easterEgg")
    .querySelector("button:nth-of-type(2)")
    .addEventListener("click", () => {
      document
        .getElementById("leet-speak")
        .children[0].classList.remove("hidden");
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

  /* WEATHER API */
  const ville = document.getElementById("ville");

  function getLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        async (pos) => {
          var crd = pos.coords;
          const proxyurl = "https://cors-anywhere.herokuapp.com/";
          let url = `https://www.metaweather.com/api/location/search/?lattlong=${crd.latitude},${crd.longitude}`;
          let response = await fetch(proxyurl + url);

          response = await response.json();
          ville.innerHTML = `Ville : ${response[0].title}`;

          url = `https://www.metaweather.com/api/location/${
            response[0].woeid
          }${today()}`;

          response = await fetch(proxyurl + url);
          response = await response.json();
          console.log(response);
          const weather_api = document.getElementById("weather-api-data");
          for (let i = 0; i < 2; i++) {
            weather_api.innerHTML += `<img src="../img/weather/${response[i].weather_state_abbr}.svg" alt="${response[i].weather_state_abbr}"><p>Température : ${response[i].the_temp}C°<p>`;
          }
        },
        (err) => {
          console.error(err);
        }
      );
    } else {
      ville.innerHTML = "Geolocation is not supported by this browser.";
    }
  }

  function today() {
    let today = new Date();
    var dd = today.getDate();
    var mm = today.getMonth() + 1;
    var yyyy = today.getFullYear();
    return `/${yyyy}/${mm}/${dd}/`;
  }

  getLocation();

});
