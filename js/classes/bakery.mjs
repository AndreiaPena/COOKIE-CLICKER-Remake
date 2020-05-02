export class Bakery{
    constructor(name, cookies, buildings, cookiesPerClick , cookiesPerSecond ){
        this._name = name || 'Shirini Foroushi';
        this._cookies = cookies || 0;
        this._buildings = buildings || [];
        this._cookiesPerClick = cookiesPerClick || 50;
        this._cookiesPerSecond = cookiesPerSecond || 0 ;  
    }
    
    get cookies(){
        return this._cookies;
    }

    get cookiesPerClick(){
        return this._cookiesPerClick;
    }

    bakeCookies(howMany){
        return this._cookies += this._cookiesPerClick
    }
    
 
}

