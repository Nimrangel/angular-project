import { Component } from '@angular/core';

@Component({
  selector: '.productcli',
  templateUrl: './productcli.component.html',
  styles: ['p{color:green}']
})
export class ProductComponent {

  productId:number = 1;
  stockStatus:string = 'Yes';

  // or

  getStockStatus(){
    return this.stockStatus
  }

}
