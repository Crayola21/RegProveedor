import { Component, OnInit } from '@angular/core';
import { GestionProveedoresService } from 'src/app/services/gestion-proveedores.service';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-registrar-proveedores',
  templateUrl: './registrar-proveedores.component.html',
  styleUrls: ['./registrar-proveedores.component.css']
})
export class RegistrarProveedoresComponent implements OnInit {

  

  get Identificacion(){
    return this.gestionProvService.FormularioRegistroProv.controls["Identificacion"];
  }

  get Nombre(){
    return this.gestionProvService.FormularioRegistroProv.controls["Nombre"];
  }

  get Apellido(){
    return this.gestionProvService.FormularioRegistroProv.controls["Apellido"];
  }

  get Pais(){
    return this.gestionProvService.FormularioRegistroProv.controls["Pais"];
  }

  get Ciudad(){
    return this.gestionProvService.FormularioRegistroProv.controls["Ciudad"];
  }

  get Direccion(){
    return this.gestionProvService.FormularioRegistroProv.controls["Direccion"];
  }

  get Email(){
    return this.gestionProvService.FormularioRegistroProv.controls["Email"];
  }

  get Celular(){
    return this.gestionProvService.FormularioRegistroProv.controls["Celular"];
  }

  get Telefono(){
    return this.gestionProvService.FormularioRegistroProv.controls["Telefono"];
  }

  constructor(public gestionProvService:GestionProveedoresService, private formBuilder:FormBuilder) { }

  ngOnInit() {
    this.gestionProvService.FormularioRegistroProv = this.formBuilder.group({

      IdProveedor:[0],
      Identificacion:["",Validators.required],
      Nombre:["",Validators.required],
      Apellido:["",Validators.required],
      Pais:["",Validators.required],
      Ciudad:["",Validators.required],
      Direccion:["",Validators.required],
      Email:["",Validators.required],
      Celular:["",Validators.required],
      Telefono:["",Validators.required]

    })
  }

  onSubmit(){
    this.gestionProvService.proveedor = this.gestionProvService.FormularioRegistroProv.value;
    if(this.gestionProvService.proveedor.IdProveedor==0 || this.gestionProvService.proveedor.IdProveedor==null){
      this.guardarproveedor();
    }
    else{
      this.editarproveedor();
    }
  }

  guardarproveedor(){

    this.gestionProvService.guardarproveedor().subscribe(
      res =>{
        this.gestionProvService.FormularioRegistroProv.reset();
        console.log("Se registró proveedor");
      },
      err =>{
        console.log(err);
      }
    )
    alert("Guardado con Exito!")
  }

  editarproveedor(){
    this.gestionProvService.editarproveedor().subscribe(
      res =>{
        this.gestionProvService.FormularioRegistroProv.reset();
        console.log("Se actualizó el proveedor", "Proveedor");
        this.gestionProvService.refrescarlistaproveedor();
      },
      err =>{
        console.log(err);
      }
    )

  }


}
