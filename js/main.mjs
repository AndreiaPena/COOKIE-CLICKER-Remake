import {Bakery} from './classes/bakery.mjs';
import {ajoutCookies} from '/js/dom/dom-bakery.mjs';
import {infosDom} from '/js/dom/dom-bakery.mjs';
import {creationBuilding} from '/js/dom/dom-store.mjs';
import {achatTuiles} from '/js/dom/dom-store.mjs';
// import { addCookiesPerSecond } from "/js/dom/dom-bakery.mjs";



const newBakery = new Bakery()
 
ajoutCookies(newBakery)
infosDom(newBakery)
creationBuilding(newBakery)
achatTuiles(newBakery)
// addCookiesPerSecond(newBakery)