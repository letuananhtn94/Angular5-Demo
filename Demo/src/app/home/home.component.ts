import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  @Input() student;
  @Output() onYell=new EventEmitter<string>();

  homeTitle = "Welcome to the homepage!";
  myString = "I like chicken";
  myBoolean = false;
  constructor() { }

// student={
//   name:"Phong Ho",
//   age:27
// };
  date=new Date();
  ngOnInit() {
    console.log(this.student);
    //this.fireYellEvent();
  }

  // alertMe(){
  //   alert("Hi there!!");
  // }

  fireYellEvent(e){
    this.onYell.emit(e);
  }
}
