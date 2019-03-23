import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class VariousType {
  naming:string;
}

export class Laptop {
  public id :     number;
  public name :   string;
  public weight:  number;
  public price :  number;
}

export class ComputerService { 
  
  lappy  = [ 
    {    id: 1,     name: 'Compaq',    wireless: '-',     weight: 1.941,    touchpad: '-',      price: 30000  },
    {    id: 2,     name: 'Lenovo',    wireless: '-',     weight: 0.811,    touchpad: '-',      price: 25000  },
    {    id: 3,     name: 'Dell',      wireless: '-',     weight: 1.0026,   touchpad: '-',      price: 30000  }, 
    {    id: 4,     name: 'hp',        wireless: '-',     weight: 1.0107,   touchpad: '-',      price: 35000  },
    {    id: 5,     name: 'mac',       wireless: '-',     weight: 2.0122,   touchpad: '-',      price: 75000  },
    ];
  mob  =  [ 
    {    id: 1,     name: 'iphone',     wireless: '-',    weight: 1.941,    touchpad: 'yes',     price: 30000  },
    {    id: 2,     name: 'Vivo',       wireless: '-',    weight: 0.811,    touchpad: 'yes',     price: 25000  },
    {    id: 3,     name: 'Oppo',       wireless: '-',    weight: 1.0026,   touchpad: 'yes',     price: 30000  }, 
    {    id: 4,     name: 'Xiomi',      wireless: '-',    weight: 1.3026,   touchpad: 'yes',     price: 15000  }, 
  
  ];
  tab =  [ 
    {    id: 1,     name: 'Samsung',    wireless: '-',    weight: '-',      touchpad: 'yes',     price: 30000  },
    {    id: 2,     name: 'Philips',    wireless: '-',    weight: '-',      touchpad: 'no',      price: 25000  },
    {    id: 3,     name: 'iphone',     wireless: '-',    weight: '-',      touchpad: 'no',      price: 30000  }, 
  ];
  headset = [  
    {    id:1,      name: 'BOAT',       wireless: 'yes',  weight: '-',     touchpad: '-',        price: 30000  },
    {    id:2,      name: 'JBL',        wireless: 'no',   weight: '-',     touchpad: '-',        price: 25000  },
    {    id:3 ,     name: 'Samsung',    wireless: 'no',   weight: '-',     touchpad: '-',        price: 30000  }, 
  ];


  constructor() { }

  getlaptop(): any[] {
    return this.lappy;
        }
 getmobile() : any {
   return this.mob;
  }
  gettab(): any {
    return this.tab;
  }
  headphone(): any {
    return this.headset;
  }

}
