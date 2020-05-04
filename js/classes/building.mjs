

export class Building {
    constructor(name, description, number, cookiesPerSecond , cost){
        this._name = name ;
        this._description = description  ;
        this._number = number ||  0;
        this._cookiesPerSecond = cookiesPerSecond ;
        this._cost = cost ;
    }

    get name(){
        return this._name;
    }
    get description(){
        return this._description;
    }
    get number(){
        return this._number;
    }
    get cost(){
        return this._cost;
    }
    get cookiesPerSecond(){
        return this._cookiesPerSecond;
    }

    buy(){
        this._number++
        return this._cost = Math.ceil(this._cost *= 1.15);
     }
     
}