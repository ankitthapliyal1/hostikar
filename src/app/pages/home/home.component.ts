import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

 

  toogle = 1;

  constructor() {  }

  osImages:any = [
    "assets/img/1.png",
    "assets/img/2.png",
    "assets/img/3.png",
    "assets/img/4.png",
    "assets/img/5.png",
    "assets/img/6.png",
    "assets/img/7.png",
    "assets/img/8.png",
    "assets/img/9.png",
    "assets/img/10.png",
    "assets/img/11.png",
    "assets/img/12.png",
    "assets/img/13.png"
  ]

  faq:any = [
    'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Esse veniam dolor necessitatibus voluptatum cupiditate natus. Nesciunt aliquid quasi vel laudantium, quidem fuga repudiandae deserunt voluptatem vitae voluptas iusto, soluta animi.',
    'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Esse veniam dolor necessitatibus voluptatum cupiditate natus. Nesciunt aliquid quasi vel laudantium, quidem fuga repudiandae deserunt voluptatem vitae voluptas iusto, soluta animi.',
    'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Esse veniam dolor necessitatibus voluptatum cupiditate natus. Nesciunt aliquid quasi vel laudantium, quidem fuga repudiandae deserunt voluptatem vitae voluptas iusto, soluta animi.',
    'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Esse veniam dolor necessitatibus voluptatum cupiditate natus. Nesciunt aliquid quasi vel laudantium, quidem fuga repudiandae deserunt voluptatem vitae voluptas iusto, soluta animi.',
    'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Esse veniam dolor necessitatibus voluptatum cupiditate natus. Nesciunt aliquid quasi vel laudantium, quidem fuga repudiandae deserunt voluptatem vitae voluptas iusto, soluta animi.',
     
  ]

  Testimonials = [
    {}, {} ,{}
  ]

  ngOnInit(): void {
  
  }

  checkCheckBoxvalue(event:any){
    console.log(event.target.checked)
 }

  // toogleClick(index:any){
  //   console.log(index)
  //   this.toogle = index
  // }

}
