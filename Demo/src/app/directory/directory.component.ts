import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import { FormControl, FormGroup, FormBuilder, Validators  } from '@angular/forms';
import {DirectoryService} from '../services/directory.service';

@Component({
  selector: 'app-directory',
  templateUrl: './directory.component.html',
  styleUrls: ['./directory.component.css']
})
export class DirectoryComponent implements OnInit {
  ninja: string;
  ninjaForm: FormGroup;

  constructor(private route:ActivatedRoute,private navigator:Router , private fb: FormBuilder, private directoryService: DirectoryService) { 
    this.ninja=route.snapshot.params['ninja'];

    this.createForm();
  }
  term="";
  ninjas=[];

  ngOnInit() {
    this.directoryService.getNinjas().subscribe((res)=>{
      for(let key in res){
        res[key].id=key;
        this.ninjas.push(res[key]);
      }
    });
  }

  addNinja(){
    this.directoryService.addNinja(this.ninjaForm.controls["name"].value, this.ninjaForm.controls["belt"].value).subscribe((res)=>{
      this.navigator.navigateByUrl('/', {skipLocationChange: true}).then(()=>
      this.navigator.navigate(["/directory"]));
    });
  }

  removeNinja(id){
    this.directoryService.deleteNinja(id).subscribe((res)=>{
      this.navigator.navigateByUrl('/', {skipLocationChange: true}).then(()=>
      this.navigator.navigate(["/directory"]));
    });
  }

  createForm() {
    this.ninjaForm = this.fb.group({
      name: ['', Validators.required ],
      belt: ['', Validators.required ]
    });
  }
}
