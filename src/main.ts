import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
@Component({
   selector: 'app-root',
   templateUrl: './index.html',
   styleUrls: ['./app.css']
})
export class AppComponent {
   title = 'Angular 7';
   label=""
    // declared array of months.
   months = ["January", "February", "March", "April", "May","June", "July", 
      "August", "September", "October", "November", "December"];
   isavailable = false; //variable is set to true
   isdesable=false;
   myClickFunction(name:string,val:string,event:any) {
      //just added console.log which will display the event details in browser on click of the button.
      this.label=name+' selected '+val;
      console.log(event);
   }
   changemonths(event:any) { 
    alert("Changed month from the Dropdown");
 } 
}
