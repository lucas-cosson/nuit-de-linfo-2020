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
