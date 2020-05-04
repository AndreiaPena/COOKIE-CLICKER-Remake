export class Bakery{
    constructor(name, cookies, buildings, cookiesPerClick , cookiesPerSecond ){
        this._name = name || 'Shirini Foroushi';
        this._cookies = cookies || 0 ;
        this._buildings = buildings || [];
        this._cookiesPerClick = cookiesPerClick || 1;
        this._cookiesPerSecond = cookiesPerSecond || 0 ;  
    }
    get name(){
        return this._name;
    }
    get cookies(){
        return this._cookies;
    }
    get buildings(){
        return this._buildings;
    }
    get cookiesPerClick(){
        return this._cookiesPerClick;
    }
    get cookiesPerSecond(){
        return this._cookiesPerSecond;
    }

    bakeCookies(howMany){
        return this._cookies += howMany
    }
    
 
}

