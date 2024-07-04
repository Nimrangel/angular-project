import { Component } from "@angular/core";

@Component({
    selector: '.products',
    templateUrl: './product.component.html'
})


export class productComponent{
    greet = 'Hello World'
    addProductStatus='No product Added'
    enteredValue = 'Testing Prod 1'
    
    // constructor() {
    //     setTimeout(()=> {
    //         this.addproduct=false
    //     },4000)
    // }

    onClick(){
        this.addProductStatus='Product added and Entered value is ' + this.enteredValue;
        console.log(this.greet);
    }


    onUpdateProductName(event:any){
        console.log(event);
        this.enteredValue=(<HTMLInputElement>event.target).value;
    }
    
}