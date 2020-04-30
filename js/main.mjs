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



for( let i = 0 ; i < buildings.length- 3 ; i++){

    let divBuilding = document.getElementById('buildings')

    let divCursor = document.createElement('div')
    divCursor.id=`building-${buildings[i].name.toLowerCase()}`
    divCursor.className='locked disabled'
    divBuilding.appendChild(divCursor)

    let divIcon = document.createElement('div')
    divIcon.classList='icon'
    divCursor.appendChild(divIcon)

    let divName = document.createElement('div')
    divName.classList='name'
    divName.innerHTML= buildings[i].name
    divCursor.appendChild(divName)

    let divCost = document.createElement('div')
    divCost.classList='cost'
    divCost.innerHTML= buildings[i].cost
    divCursor.appendChild(divCost)

    let divNumber = document.createElement('div')
    divNumber.classList='number'
    divCursor.appendChild(divNumber)
    
    function classChange(){
        let spanStockParse = parseInt(spanStock[0].innerHTML)
       
        if( spanStockParse >= buildings[0].cost){
            divCursor.classList.remove('locked')
            divCursor.classList.remove('disabled')
            divCursor.classList.add('unlocked')
            divCursor.classList.add('enable')
        }
        
        else if( spanStockParse  < buildings[0].cost){
            divCursor.classList.remove('enable')
            divCursor.classList.add('disabled')
        }
        console.log(spanStock[0])
    }
    
    classChange()
}




