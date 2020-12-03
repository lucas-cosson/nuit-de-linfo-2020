document.addEventListener("DOMContentLoaded", () => {
  const leetSpeakData = {
    activated: false,
    html: document.body.innerHTML,
  };

  function leetSpeak() {
    if (leetSpeakData.activated) {
      leetSpeakData.activated = false;
      document.body.innerHTML = leetSpeakData.html;
      return;
    }

    leetSpeakData.activated = true;

    for (let child of document.body.childNodes) {
      if (child.innerText !== undefined) {
        child.innerText = child.innerText.replaceAll(/e/gi, "3");
        child.innerText = child.innerText.replaceAll(/s/gi, "5");
        child.innerText = child.innerText.replaceAll(/t/gi, "7");
      }
    }
  }

  document.getElementById("leet-speak").addEventListener("click", leetSpeak);
});
