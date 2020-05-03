let divBigCookie = document.querySelector('#bigCookie')

export const sonClickCreation=() => {
    for (let i = 1; i < 8; i++) {
        
        var divSon = document.createElement('audio')
        divSon.src=`/assets/sounds/click${i}.mp3`
        divSon.className='clickSon'
        divBigCookie.appendChild(divSon)

    }
}