import {switchBuilding} from '/js/dom/dom-store.mjs';

let h2Bakery = document.querySelector('h2')
let spanCookieStock = document.getElementById('cookiesStock').getElementsByTagName('span')
let spanPerSecond = document.querySelector('#cookiesPerSecond span')
let divBigCookie = document.querySelector('#bigCookie')


export const infosDom = (newBakery) => { 

h2Bakery.innerHTML = newBakery.name
spanCookieStock[0].innerHTML = newBakery.cookies
spanPerSecond.innerHTML = newBakery.cookiesPerSecond
}


export const ajoutCookies = (newBakery) => {  

divBigCookie.addEventListener('click', (event)=>{
    spanCookieStock[0].innerHTML = newBakery.bakeCookies(newBakery.cookiesPerClick)
    switchBuilding(newBakery)

    let divPlusOne = document.createElement('div')
    divPlusOne.className = 'up'
    divPlusOne.innerHTML = `+${newBakery.cookiesPerClick}`
    divPlusOne.style.inset=`${event.offsetY - 20}px ${event.offsetX - 10}px`
    divBigCookie.appendChild(divPlusOne)

    divPlusOne.addEventListener('animationend', ()=>{
        divBigCookie.removeChild(divPlusOne)
    })

    audioCookie()
    let clickSon = document.getElementsByClassName('clickCookie')
    clickSon[Math.floor(Math.random() * (7-1)+1)].play()
    
})

}

const audioCookie = () => {  
    for (let i = 1; i < 8; i++) {
        
        let divSon = document.createElement('audio')
        divSon.src=`/assets/sounds/click${i}.mp3`
        divSon.className='clickCookie'
        divBigCookie.appendChild(divSon)
    
    }
    }
    