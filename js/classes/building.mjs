import { buildings } from "../data.mjs";

export class Building {
    constructor(name, description, number, cookiesPerSecond , cost){
        this._name = name || `${buildings.name}`;
        this._description = description  || `${buildings.description}`;
        this._number = number ||  0;
        this._cookiesPerSecond = cookiesPerSecond || `${buildings.cookiesPerSecond}`;
        this._cost = cost ||   `${buildings.cost}`;
    }

    buy(){
       this._number++
       return this._cost = Math.ceil(this._cost *= 1.15);
    }
    
}
