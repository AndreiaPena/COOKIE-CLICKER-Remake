import {Bakery} from './classes/bakery.mjs';
export const newBakery = new Bakery()

import {Building} from './classes/building.mjs';
export const newBuilding = new Building()

import {buildings} from './data.mjs';

import {tuilesCreation} from './dom/tuiles-creation.mjs'
tuilesCreation()

import {clickBigCookie} from './utils/eventListener-clickBigCookie.mjs'
clickBigCookie()

import {bakeryContent} from './dom/bakery-injectionDynamicContent.mjs'
bakeryContent()
