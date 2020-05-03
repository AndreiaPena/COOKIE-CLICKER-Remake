import {newBakery} from '/js/main.mjs';
import {sonClickCreation} from '/js/dom/son-click-creation.mjs'
sonClickCreation()

let divBigCookie = document.querySelector('#bigCookie')
let spanStock = document.getElementById('cookiesStock').getElementsByTagName('span')

export const clickBigCookie = (element) => {

    divBigCookie.addEventListener('click', (event)=>{
        spanStock[0].innerHTML = newBakery.bakeCookies()

        let divPlusOne = document.createElement('div')
        divPlusOne.className = 'up'
        divPlusOne.innerHTML = `+${newBakery._cookiesPerClick}`
        let test = divPlusOne.style.top=`${event.offsetY}px`
        console.log(test)
        let test1 = divPlusOne.style.left=`${event.offsetX}px`
        console.log(test1)
        divBigCookie.appendChild(divPlusOne)

        divPlusOne.addEventListener('animationend', ()=>{
            divBigCookie.removeChild(divPlusOne)
        })

        const clickSon = document.getElementsByClassName('clickSon')
        clickSon[Math.floor(Math.random() * (7-1)+1)].play()
    })
}




