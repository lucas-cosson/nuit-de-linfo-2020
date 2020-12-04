"use strict"; 

document.addEventListener("DOMContentLoaded", function(_e) {
    let nbMasks=6;
    let tableauMasks=document.getElementById("masks");

    //Récupération du dernier masque trouvé, grace au local storage
    let currentMask = localStorage.getItem("currentMask");
    if (!currentMask) {
        currentMask=0;
    }else {
        currentMask = JSON.parse(currentMask);
    }
    var m = document.createElement("div");
    m.classList.add("mask");
    m.setAttribute("id", "nextMask");
    m.onclick=changePosMask;
    tableauMasks.children[currentMask].appendChild(m);
    
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

    let nbMasks=24;
    let maskArray = new Array();

    maskArray[0]=document.getElementsByClassName("carousel-inner")[0].children[0];
    maskArray[1]=document.getElementById("parasol").children[0];
    var m = document.createElement("div");
    m.classList.add("mask");
    m.setAttribute("id", "nextMask");
    
});