import {Bakery} from './classes/bakery.mjs';
export const newBakery = new Bakery()

import {Building} from './classes/building.mjs';

import {buildings} from './data.mjs';

import {autoTuiles} from './dom/automatisation-tuiles.mjs'
autoTuiles()

import {clickBigCookie} from './utils/eventListener-clickBigCookie.mjs'
clickBigCookie()




// version manuelle pour avoir les différents objets avec un nom de const différent
// const newCursor = new Building(buildings[0].name,buildings[0].description,0,buildings[0].cookiesPerSecond, buildings[0].cost)
// const newGrandma = new Building(buildings[1].name,buildings[1].description,0,buildings[1].cookiesPerSecond, buildings[1].cost)
// const newFarm = new Building(buildings[2].name,buildings[2].description,0,buildings[2].cookiesPerSecond, buildings[2].cost)
// const newMine= new Building(buildings[3].name,buildings[3].description,0,buildings[3].cookiesPerSecond, buildings[3].cost)
// const newFactory = new Building(buildings[4].name,buildings[4].description,0,buildings[4].cookiesPerSecond, buildings[4].cost)


for (  let i=0; i< buildings.length; i++){
    const newBuilding = new Building(buildings[i].name,buildings[i].description,0,buildings[i].cookiesPerSecond,buildings[i].cost)
    newBuilding.buy()
    console.log(newBuilding)
}





