import {newBakery} from '/js/main.mjs';
import {sonClickCreation} from '/js/dom/son-click-creation.mjs'
sonClickCreation()

let divBigCookie = document.querySelector('#bigCookie')
let spanStock = document.getElementById('cookiesStock').getElementsByTagName('span')

export const clickBigCookie = () => {

    divBigCookie.addEventListener('click', (event)=>{
        spanStock[0].innerHTML = newBakery.bakeCookies()

        let divPlusOne = document.createElement('div')
        divPlusOne.className = 'up'
        divPlusOne.innerHTML = `+${newBakery._cookiesPerClick}`
        divPlusOne.style.inset=`${event.offsetY - 20}px ${event.offsetX - 10}px`
        
        divBigCookie.appendChild(divPlusOne)

        divPlusOne.addEventListener('animationend', ()=>{
            divBigCookie.removeChild(divPlusOne)
        })

        const clickSon = document.getElementsByClassName('clickSon')
        clickSon[Math.floor(Math.random() * (7-1)+1)].play()

    })
}


