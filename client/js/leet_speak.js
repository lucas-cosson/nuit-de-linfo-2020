document.addEventListener("DOMContentLoaded", () => {
  const leetSpeakData = {
    activated: false,
    html: document.body.innerHTML,
    alphabet: {
      o: "0",
      i: "1",
      z: "2",
      e: "3",
      a: "4",
      s: "5",
      g: "6",
      l: "7",
      b: "8",
    },
  };

  function leetSpeak() {
    if (leetSpeakData.activated) {
      leetSpeakData.activated = false;
      document.body.innerHTML = leetSpeakData.html;
      document
        .getElementById("leet-speak")
        .addEventListener("click", leetSpeak);
      return;
    }

    leetSpeakData.activated = true;

    for (let child of document.body.childNodes) {
      if (child.innerText !== undefined) {
        for (let letter in leetSpeakData.alphabet) {
          const regex = new RegExp(letter, "gi");
          child.innerText = child.innerText.replaceAll(
            regex,
            leetSpeakData.alphabet[letter]
          );
        }
      }
    }
  }

  document.getElementById("leet-speak").addEventListener("click", leetSpeak);
});
