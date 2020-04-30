export class Bakery{
    constructor(name, cookies, buildings, cookiesPerClick , cookiesPerSecond ){
        this._name = name || 'Shirini Foroushi';
        this._cookies = cookies || 16;
        this._buildings = buildings || [];
        this._cookiesPerClick = cookiesPerClick ||  1;
        this._cookiesPerSecond = cookiesPerSecond || 0 ;  
    }
    
}

