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

let spanPerSecond = document.getElementById('cookiesPerSecond').getElementsByTagName('span')
spanPerSecond[0].innerHTML = newBakery._cookiesPerSecond



//////////////////////////// CURSOR ////////////////////////////////

    let divBuilding = document.getElementById('buildings')
    let divTuile = document.createElement('div')
    
    divTuile.id=`building-${buildings[0].name.toLowerCase()}`
    divTuile.className='locked disabled'
    divBuilding.appendChild(divTuile)

    let divIcon = document.createElement('div')
    divIcon.classList='icon'
    divTuile.appendChild(divIcon)

    let divName = document.createElement('div')
    divName.classList='name'
    divName.innerHTML= buildings[0].name
    divTuile.appendChild(divName)

    let divCost = document.createElement('div')
    divCost.classList='cost'
    divCost.innerHTML= buildings[0].cost
    divTuile.appendChild(divCost)

    let divNumber = document.createElement('div')
    divNumber.classList='number'
    divTuile.appendChild(divNumber)

   //////////////////////////// GRANDMA ////////////////////////////////
 

    let divTuile2 = document.createElement('div')
    
    divTuile2.id=`building-${buildings[1].name.toLowerCase()}`
    divTuile2.className='locked disabled'
    divBuilding.appendChild(divTuile2)

    let divIcon2 = document.createElement('div')
    divIcon2.classList='icon'
    divTuile2.appendChild(divIcon2)

    let divName2 = document.createElement('div')
    divName2.classList='name'
    divName2.innerHTML= buildings[1].name
    divTuile2.appendChild(divName2)

    let divCost2 = document.createElement('div')
    divCost2.classList='cost'
    divCost2.innerHTML= buildings[1].cost
    divTuile2.appendChild(divCost2)

    let divNumber2 = document.createElement('div')
    divNumber2.classList='number'
    divTuile2.appendChild(divNumber2)



//////////////////////////// ADD AND REMOVE CLASS  ////////////////////////////////
let spanStockParse = parseInt(spanStock[0].innerHTML)
       

//////////////////////////// FOR CURSOR  ////////////////////////////////

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

//////////////////////////// FOR GRANDMA ////////////////////////////////    

         if( spanStockParse >= buildings[1].cost){ // si 101 >= 100
            divTuile2.classList.remove('locked')
            divTuile2.classList.remove('disabled')
            divTuile2.classList.add('unlocked')
            divTuile2.classList.add('enable')
        }
        
        else if( spanStockParse  < buildings[1].cost){ // si 0 < 100
            divTuile2.classList.remove('enable')
            divTuile2.classList.add('disabled')
        }

//////////////////////////// LOCKED OR UNLOCKED ICON  ////////////////////////////////


    let divLocked = document.querySelectorAll('.locked')
    console.log(divLocked)
    let divUnlocked = document.getElementsByClassName('unlocked')
    console.log(divUnlocked)


    //////////////////////////// FOR CURSOR  ////////////////////////////////

    
    
        // let divLockedCursor = divLocked[0].querySelector('.icon')
        // divLockedCursor.style.backgroundPositionY='0%'
        // let divLockedGrandma = divLocked[1].querySelector('.icon')
        // divLockedGrandma.style.backgroundPositionY='6%'



        // let divUnlockedCursor = divUnlocked[0].querySelector('.icon')
        // divUnlockedCursor.style.backgroundPositionY='0%'
    


       //////////////////////////// FOR GRANDMA  ////////////////////////////////

      

        // let divLockedGrandma = divLocked[1].querySelector('.icon')
        // divLockedGrandma.style.backgroundPositionY='6%'
    

  

        // let divUnlockedGrandma = divUnlocked[1].querySelector('.icon')
        // divUnlockedGrandma.style.backgroundPositionY='6%'
    

