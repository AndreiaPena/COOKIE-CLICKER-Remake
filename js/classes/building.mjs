import { buildings } from "../data.mjs";

export class Building {
    constructor(name, description, number, cookiesPerSecond , cost){
        this._name = name || `${buildings.name}`;
        this._description = description  || `${buildings.description}`;
        this._number = number ||  3;
        this._cookiesPerSecond = cookiesPerSecond || `${buildings.cookiesPerSecond}`;
        this._cost = cost ||   `${buildings.cost}`;
    }

    buy(){
        return (this._number++) && (Math.floor(this._cost *= 1.15))
    }
    
}
// buy()
// console.log(buy())
// console.log(newBuilding)