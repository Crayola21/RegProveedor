import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Proveedor } from '../models/proveedor';

@Injectable({
  providedIn: 'root'
})
export class GestionProveedoresService {

  FormularioRegistroProv:FormGroup;

  readonly rootURL = 'http://localhost:51090/api';

  proveedor:Proveedor;
  listaproveedor:Proveedor[];

  constructor(private http:HttpClient) { }

  guardarproveedor(){
    if(this.proveedor.IdProveedor == null){
      this.proveedor.IdProveedor=0;
    }
    return this.http.post(this.rootURL + '/Proveedor' , this.proveedor)
  }

  editarproveedor(){
    return this.http.put(this.rootURL + '/Proveedor/' + this.proveedor.IdProveedor, this.proveedor)
  }

  eliminarproveedor(id){
    return this.http.delete(this.rootURL + '/Proveedor/' + id)
  }

  refrescarlistaproveedor(){
    this.http.get(this.rootURL + '/Proveedor' )
    .toPromise()
    .then(res=> this.listaproveedor = res as Proveedor[])
  }
}
