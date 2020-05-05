
import {Bakery} from './classes/bakery.mjs';
import {Building} from './classes/building.mjs';
import {buildings} from './data.mjs';

const newBakery = new Bakery()
const newBuilding = new Building()

///////////////////////////////////////// RECUPERATION DE DIV POUR CLASS BAKERY/////////////////////////////////////////

let h2Bakery = document.querySelector('h2')
h2Bakery.innerHTML = newBakery.name

let spanStock = document.getElementById('cookiesStock').getElementsByTagName('span')
spanStock[0].innerHTML = newBakery.cookies

let spanPerSecond = document.getElementById('cookiesPerSecond').getElementsByTagName('span')
spanPerSecond[0].innerHTML = newBakery.cookiesPerSecond


let divBigCookie = document.querySelector('#bigCookie')
///////////////////////////////////////// GESTIONNAIRE DEVENEMENT AU CLIC /////////////////////////////////////////


divBigCookie.addEventListener('click', (event)=>{
    spanStock[0].innerHTML = newBakery.bakeCookies(newBakery.cookiesPerClick)
    switchBuilding(newBakery)

    let divPlusOne = document.createElement('div')
    divPlusOne.className = 'up'
    divPlusOne.innerHTML = `+${newBakery.cookiesPerClick}`
    divPlusOne.style.inset=`${event.offsetY - 20}px ${event.offsetX - 10}px`
    divBigCookie.appendChild(divPlusOne)

    divPlusOne.addEventListener('animationend', ()=>{
        divBigCookie.removeChild(divPlusOne)
    })

    audio()
    let clickSon = document.getElementsByClassName('clickSon')
    clickSon[Math.floor(Math.random() * (7-1)+1)].play()
    
})


const switchBuilding = (newBakery) => {  
    for ( let i = 0 ; i < buildings.length ; i++){
        if( newBakery.cookies >= buildings[i].cost){ // si 16 >= 15
            let divCursorGrandma = document.getElementById(`building-${buildings[i].name.toLowerCase()}`)

            divCursorGrandma.classList.remove('locked')
            divCursorGrandma.classList.remove('disabled')
            divCursorGrandma.classList.add('unlocked')
            divCursorGrandma.classList.add('enable')


            let divTestSuivante = document.getElementById(`building-${buildings[i + 1].name.toLowerCase()}`)
            divTestSuivante.classList.remove('locked')
            divTestSuivante.classList.add('unlocked')

            let tuileTroisieme = document.getElementById(`building-${buildings[i + 2].name.toLowerCase()}`);
            tuileTroisieme.style.display = "flex"
        }
    }
}



////////////////////////////////////////// fichiers SON click //////////////////////////////
const audio = () => {  
for (let i = 1; i < 8; i++) {
    
    var divSon = document.createElement('audio')
    divSon.src=`/assets/sounds/click${i}.mp3`
    divSon.className='clickSon'
    divBigCookie.appendChild(divSon)

}
}

///////////////////////////////////////// BOUCLE FOR /////////////////////////////////////////
const creationBuilding = () => {  
for ( let i = 0 ; i < buildings.length ; i++){

    let divBuilding = document.getElementById('buildings')

    let divTuile = document.createElement('div')
    
    divTuile.id=`building-${buildings[i].name.toLowerCase()}`
    divTuile.className='locked disabled all'
    divBuilding.appendChild(divTuile)

    let divIcon = document.createElement('div')
    divIcon.className='icon'
    divTuile.appendChild(divIcon)
        
    let divName = document.createElement('div')
    divName.className='name'
    divName.innerHTML= buildings[i].name
    divTuile.appendChild(divName)

    let divCost = document.createElement('div')
    divCost.className='cost'
    divCost.innerHTML= buildings[i].cost
    divTuile.appendChild(divCost)

    let divNumber = document.createElement('div')
    divNumber.className='number'
    divTuile.appendChild(divNumber)

    if (i < buildings.length - 3){
        divTuile.style.display = "flex"
    } else {
        divTuile.style.display = "none"
    }

    }
}

creationBuilding()


// cherchons les enfants de la div avec l'id buildings, avec childNodes, on peut les récuperer
const divMere = document.getElementById('buildings').childNodes


 // ForEach() est une méthode qui permet d'executer une fonction donnée sur chaque élement du tableau
        // donc ça se traduit ici par :  forEach, pour chaque element de la divMère (ses enfants qui sont les tuiles)
        // à chacunes de ces tuiles on vient appliquer un gestionnaire d'evenement au click
divMere.forEach(tuile => tuile.addEventListener('click', handleCheck));


//la fonction handleCheck, est la fonction qu'on appelle à la ligne 130
// Elle nous permet de modifier les valeurs de la div cost et number 
// ainsi à chaque click, elle permet d'activer la méthode buy (ligne 142) 
//pour voir ce que fait buy() aller voir la page de la class Building
function handleCheck() {
    let divNumber = this.querySelector('.number')
    let divCost = this.querySelector('.cost')
    newBuilding.number = divNumber.innerHTML
    newBuilding.cost= divCost.innerHTML  
    newBuilding.buy() 
    divNumber.innerHTML = newBuilding.number
    divCost.innerHTML = newBuilding.cost
}


// //////////////    Jouer un son aléatoire au clic


