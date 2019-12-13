import { Component, OnInit } from '@angular/core';
import { GestionProveedoresService } from 'src/app/services/gestion-proveedores.service';
import { Proveedor } from 'src/app/models/proveedor';

@Component({
  selector: 'app-listar-proveedores',
  templateUrl: './listar-proveedores.component.html',
  styleUrls: ['./listar-proveedores.component.css']
})
export class ListarProveedoresComponent implements OnInit {

  constructor(public gestionProvService:GestionProveedoresService) { }

  ngOnInit() {
    this.gestionProvService.refrescarlistaproveedor();
  }

  llenarformularioproveedor(proveedor:Proveedor){

    this.gestionProvService.FormularioRegistroProv.patchValue(proveedor);

  }

  eliminarproveedor(id:any){
    if(confirm(("Estas seguro de eliminar el proveedor?"))){
      this.gestionProvService.eliminarproveedor(id).subscribe(
        res => {
          this.gestionProvService.refrescarlistaproveedor();
          console.log("Proveedor eliminado correctamente", "Eliminar proveedor")
        }
      )

    }

  }

}
