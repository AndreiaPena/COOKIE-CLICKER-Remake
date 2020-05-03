import {newBakery} from '/js/main.mjs';

export const bakeryContent=() => {
    let h2Bakery = document.querySelector('h2')
    h2Bakery.innerHTML = newBakery._name

    let spanStock = document.getElementById('cookiesStock').getElementsByTagName('span')

    // REVOIR PARTIE DU SPAN QUI ACTIVE LES TUILES 
    spanStock[0].innerHTML = newBakery._cookies
    // REVOIR PARTIE DU SPAN QUI ACTIVE LES TUILES 

    let spanPerSecond = document.getElementById('cookiesPerSecond').getElementsByTagName('span')
    spanPerSecond[0].innerHTML = newBakery._cookiesPerSecond
}