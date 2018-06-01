import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  student={
    name:"Phong Ho",
    age:27063
  }

  yell(e){
    alert("I am yelling!!!!!!");
  }
}
