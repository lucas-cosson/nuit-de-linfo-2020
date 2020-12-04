"use strict"; 

document.addEventListener("DOMContentLoaded", function(_e) {
    let nbMasks=6;
    let tableauMasks=document.getElementById("masks");
    console.log(document.getElementById("masks"));

    //Récupération du dernier masque trouvé, grace au local storage
    let currentMask = localStorage.getItem("currentMask");
    if (!currentMask) {
        currentMask=0;   
    }else {
        currentMask = JSON.parse(currentMask);
        var m = document.createElement("div");
        m.classList.add("mask");
        m.setAttribute("id", "nextMask");
        console.log(tableauMasks);
        m.onclick=changePosMask;
        tableauMasks.children[currentMask].appendChild(m);
    }
    
    console.log(document.getElementById ("nextMask"));
    document.getElementById("nextMask").onclick=changePosMask;

    function changePosMask(){
        var toRemove=document.getElementById("nextMask");
        toRemove.parentNode.removeChild(toRemove);
        currentMask++;
        if(currentMask<nbMasks){
            var m = document.createElement("div");
            m.classList.add("mask");
            m.setAttribute("id", "nextMask");
            console.log(tableauMasks);
            m.onclick=changePosMask;
            tableauMasks.children[currentMask].appendChild(m);
        }else{
            alert('Vous avez trouvé tous les masques');
        }
        localStorage.setItem("currentMask", JSON.stringify(currentMask));
    }

    //Permet de conserver l'avancée du joueur dans sa recherche des masques
    /*this.afficherHighscores = async function() {
        
            alert("perdu")
        
            // recupération des scores depuis le stockage local
            let high = localStorage.getItem("highscores");
            if (! high) {
                high = [];   
            }
            else {
                high = JSON.parse(high);   
            }
            // détermine rang du joueur (dans le top 10 ou pas)
            let rang = 0;
            while (rang < 10 && rang < high.length && high[rang].distance > distance) {
                rang++;
            }
            // si dans le top 10 -> ajout au tableau des high scores (et sauvegarde de celui-ci)
            if (rang < 10) {
                let pseudo = window.prompt("Tu as réussi à entrer dans le Top 10.\nQuel est ton nom : ");   
                if (pseudo != null && pseudo.trim().length > 0) {
                    high.splice(rang, 0, { distance: distance, pseudo: pseudo, steps: steps });
                    while (high.length > 10) {
                        high.pop();   
                    }
                    localStorage.setItem("highscores", JSON.stringify(high));
                }
            }
            // affichage de la fenêtre 
            let divHighscore = document.createElement("div");
            divHighscore.id = "highscores";
            // tableau des scores
            let table = "<table><tr><th>Rang</th><th>Joueur</th><th>Distance</th><th>Etapes</th></tr>";
            for (let j in high) {
                table += "<tr" 
                    + (rang == j ? " style='font-weight: bold; background-color: white;'" : "")
                    + "><td>" + (1*j+1) + "</td><td>" + high[j].pseudo + "</td><td>" + high[j].distance + "px</td><td>" + high[j].steps + "</td></tr>";
            }
            table += "</table>";
            divHighscore.innerHTML = "<h2>Top 10</h2>" + table;
            // bouton recommencer 
            let recomm = document.createElement("button");
            recomm.innerHTML = "Recommencer";
            recomm.addEventListener("click", function(e) {
                document.body.removeChild(divHighscore);
                this.init();
            }.bind(this));            
            divHighscore.appendChild(recomm);
            // ajout de la fenêtre
            document.body.appendChild(divHighscore);
        }*/
});