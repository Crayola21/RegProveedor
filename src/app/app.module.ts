import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GestionProveedoresComponent } from './components/gestion-proveedores/gestion-proveedores.component';
import { ListarProveedoresComponent } from './components/gestion-proveedores/listar-proveedores/listar-proveedores.component';
import { RegistrarProveedoresComponent } from './components/gestion-proveedores/registrar-proveedores/registrar-proveedores.component';

import{FormsModule, ReactiveFormsModule} from "@angular/forms"
import { GestionProveedoresService } from './services/gestion-proveedores.service';

import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    GestionProveedoresComponent,
    ListarProveedoresComponent,
    RegistrarProveedoresComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [GestionProveedoresService],
  bootstrap: [AppComponent]
})
export class AppModule { }
