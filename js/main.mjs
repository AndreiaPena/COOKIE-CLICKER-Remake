import {Bakery} from './classes/bakery.mjs';
import {Building} from './classes/building.mjs';
import {buildings} from './data.mjs';

const newBakery = new Bakery()
const newBuilding = new Building()




let h2Bakery = document.querySelector('h2')
h2Bakery.innerHTML = newBakery._name

let spanStock = document.getElementById('cookiesStock').getElementsByTagName('span')
// let spanStock = document.querySelector('#cookiesStock span')
spanStock[0].innerHTML = newBakery._cookies

let cookieClick = document.querySelector('#bigCookie')
console.log(cookieClick)

cookieClick.addEventListener('click', ()=>{
    spanStock[0].innerHTML = newBakery.bakeCookies()

})




let spanPerSecond = document.getElementById('cookiesPerSecond').getElementsByTagName('span')
spanPerSecond[0].innerHTML = newBakery._cookiesPerSecond



for( let i = 0 ; i < buildings.length- 3 ; i++){

    let divBuilding = document.getElementById('buildings')

    let divTuile = document.createElement('div')
    
    divTuile.id=`building-${buildings[i].name.toLowerCase()}`
    divTuile.className='locked disabled'
    divBuilding.appendChild(divTuile)

    var divIcon = document.createElement('div')
    divIcon.classList='icon'
    divTuile.appendChild(divIcon)
        
    let divName = document.createElement('div')
    divName.classList='name'
    divName.innerHTML= buildings[i].name
    divTuile.appendChild(divName)

    let divCost = document.createElement('div')
    divCost.classList='cost'
    divCost.innerHTML= buildings[i].cost
    divTuile.appendChild(divCost)

    let divNumber = document.createElement('div')
    divNumber.classList='number'
    divTuile.appendChild(divNumber)
    
    function classChange(){
        // il nous faut faire en sorte que locked n'apparaissent plus dès qu'il a été une fois unlocked
        let spanStockParse = parseInt(spanStock[0].innerHTML)
       
        if( spanStockParse >= buildings[0].cost){ // si 16 >= 15
            divTuile.classList.remove('locked')
            divTuile.classList.remove('disabled')
            divTuile.classList.add('unlocked')
            divTuile.classList.add('enable')
        }
        
        else if( spanStockParse  < buildings[0].cost){ // si 0 < 15
            divTuile.classList.remove('enable')
            divTuile.classList.add('disabled')
        }
        // console.log(spanStock[0])
    }
    
    classChange()

    
    var spanStockParse = parseInt(spanStock[0].innerHTML)
        if( spanStockParse >= buildings[i].cost){ // si 16 >= 15
            divTuile.classList.remove('locked')
            divTuile.classList.remove('disabled')
            divTuile.classList.add('unlocked')
            divTuile.classList.add('enable')
        }
        
        else if( spanStockParse  < buildings[i].cost){ // si 0 < 15
            divTuile.classList.remove('enable')
            divTuile.classList.add('disabled')
        } 
}

let count = 0
        for (let j = 1; j < buildings.length - 3 ; j++){
            count = count+= 6
            divIcon.style.backgroundPositionY=`${count}%`
        }

// silhouette du cursor et de la grandma , ça marche en manuel
// let divLocked = document.getElementsByClassName('locked')
// let divUnlocked = document.getElementsByClassName('unlocked')

// if ( divLocked.ClassList = 'locked'){
    
// let divLockedCursor = divLocked[0].querySelector('.icon')
// let divLockedGrandma = divLocked[1].querySelector('.icon')

// divLockedCursor.style.backgroundPositionY='0%'
// divLockedGrandma.style.backgroundPositionY='6%'
// }

// if ( divUnlocked.ClassList = 'locked'){

// let divUnlockedCursor = divUnlocked[0].querySelector('.icon')
// let divUnlockedGrandma = divUnlocked[1].querySelector('.icon')

// divUnlockedCursor.style.backgroundPositionY='0%'
// divUnlockedGrandma.style.backgroundPositionY='6%'
// }
