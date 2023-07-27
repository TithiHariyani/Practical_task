import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-client.list',
  templateUrl: './client.list.component.html',
  styleUrls: ['./client.list.component.css']
})
export class ClientListComponent {
  clients:any = [];
  constructor(private _http:HttpClient){      
    this.getClientList().subscribe({
     next:(data)=>{
      this.clients = data
    },
    error:()=>{alert('Error Occured During Retrival Of Clients Data !!!');},
    complete:()=>{}
  });
  }
  
  getClientList = ()=>{
    return this._http.get('http://test.ultim8e.net/api/clients');
  }

  removeClient = (id:number)=>{
    console.log('called');
    
    let res = this.remove(id).subscribe({next:(data)=>{},error:(err)=>{},complete:()=>{}});
    console.log(res);
    
  }

  remove = (id:number)=>{
    return this._http.delete(`http://test.ultim8e.net/api/clients/${id}`);
  }

  editClient = (id:number,data:any)=>{
    this.edit(id,data).subscribe({next:(data)=>{},error:(err)=>{},complete:()=>{}});
  }

  edit = (id:number,data:any)=>{
    return this._http.put(`http://test.ultim8e.net/api/clients/${id}`,data);
  }
}
