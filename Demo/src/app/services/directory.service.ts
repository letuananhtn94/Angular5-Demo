import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DirectoryService {

  constructor(private http: HttpClient) { }

  getNinjas():Observable<any>{
    return this.http.get('https://angular-course-d11e0.firebaseio.com/ninjas.json');
  }

  addNinja(name:string, belt:string):Observable<any>{
    return this.http.post('https://angular-course-d11e0.firebaseio.com/ninjas.json', {name:name, belt:belt});
  }

  deleteNinja(id):Observable<any>{
    return this.http.delete('https://angular-course-d11e0.firebaseio.com/ninjas/'+id+'.json');
  }
}
