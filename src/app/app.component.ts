import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'hostikar';
  clientHeight:number

  constructor(){
    this.clientHeight = window.innerHeight; 
  }
}
