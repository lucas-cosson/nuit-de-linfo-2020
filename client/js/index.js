const waterman = document.getElementById("waterman");
const lieu = document.getElementById("lieu");
const date_session = document.getElementById("date-session");
const time = document.getElementById("time");
const polution = document.getElementById("polution");
const polution_value = document.getElementById("polution-value");

polution.addEventListener(
  "input",
  () => {
    polution_value.innerHTML = `${polution.value}%`;
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
  const init = {
    method: "GET",
    body: JSON.stringify({
      waterman: waterman.value,
      lieu: lieu.value,
      date_session: date_session.value,
      time: time.value,
      polution: polution.value,
    }),
    headers: { "Content-Type": "application/json" },
  };
  const response = await fetch(`/database/`, init);
});
