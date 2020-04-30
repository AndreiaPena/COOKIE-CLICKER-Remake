

export class Building {
    constructor(name, description, number, cookiesPerSecond , cost){
        this._name = name ||  'batiment';
        this._description = description  ||  'blabla';
        this._number = number ||  0;
        this._cookiesPerSecond = cookiesPerSecond ||  1;
        this._cost = cost ||   1000;
    }

    // get name(){
    //     return this._name;
    // }
}
// console.log(Building)
