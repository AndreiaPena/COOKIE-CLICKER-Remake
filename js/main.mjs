import {Bakery} from './classes/bakery.mjs';
import {Building} from './classes/building.mjs';
import {buildings} from './data.mjs';

// console.log(buildings[0].name)

// J'instancie la class Bakery, pour créer newBakery
const newBakery = new Bakery()


// Ici on déclare une variable h2Bakery, auquel on souhaite récupérer le h2
let h2Bakery = document.querySelector('h2')
// A ce h2Bakery, qui est le h2 en html, on veut changer son string par la valeur de l'attribut newBakery._name qui est par défaut Macarena
h2Bakery.innerHTML = newBakery._name

// Ici on déclare une variable spanStock qui récupère la balise span de la div dont l'id est cookiesStock
let spanStock = document.getElementById('cookiesStock').getElementsByTagName('span')
// getElementsByTagName renvoie un HTMLCollection, il faut donc que j'indexe à [0] ma span pour la récupérer
spanStock[0].innerHTML = newBakery._cookies


// let divStock = document.getElementById('cookiesStock')
// let spanStock = divStock .getElementsByTagName('span')
// spanStock[0].innerHTML = newBakery._cookies

let spanPerSecond = document.getElementById('cookiesPerSecond').getElementsByTagName('span')
// console.log(spanPerSecond)
spanPerSecond[0].innerHTML = newBakery._cookiesPerSecond



const newBuilding = new Building()
// console.log(newBuilding)



let divStore = document.getElementById('store')
let divBuilding = document.getElementById('buildings')
// console.log(divBuilding)

//
let divCursor = document.createElement('div')
// On lui ajoute un id, le mot building- en dur et pour le reste, la valeur name de l'objet cursor
// On utilise la méthode ES6, les littéraux de gabarit pour concaténer le building- avec la valeur
divCursor.id=`building-${buildings[0].name.toLowerCase()}`
divCursor.className='locked disabled'
divBuilding.appendChild(divCursor)


function classChange(){
    console.log(spanStock[0])
    if(spanStock[0].innerHTML >= buildings[0].cost){
        divCursor.classList.remove('locked')
        divCursor.classList.remove('disabled')
        divCursor.classList.add('unlocked')
        divCursor.classList.add('enable')
        console.log(spanStock[0])
    }else if(spanStock[0] < buildings[0].cost){
        divCursor.classList.remove('enable')
        divCursor.classList.add('disabled')
    }
    console.log(spanStock[0])
}
// classChange()
console.log(classChange())


// classList.add ou remouve

let divIcon = document.createElement('div')
divIcon.classList='icon'
divCursor.appendChild(divIcon)

let divName = document.createElement('div')
divName.classList='name'
divName.innerHTML= buildings[0].name
divCursor.appendChild(divName)

let divCost = document.createElement('div')
divCost.classList='cost'
divCost.innerHTML= buildings[0].cost
divCursor.appendChild(divCost)

let divNumber = document.createElement('div')
divNumber.classList='number'
divCursor.appendChild(divNumber)

