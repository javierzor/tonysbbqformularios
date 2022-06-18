import { Component } from '@angular/core';
import { VariosService } from '../service/varios.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  respuestadetonysvisualizarformularioresuelto: any;

  constructor(
    public variosservicios: VariosService,


  ) 
  {

    this.obtenermovimientos();
  }


  obtenermovimientos(){

    var datatonysvisualizarformularioresuelto = {
      nombre_solicitud: 'tonysvisualizarformularioresuelto',
      
    }
     this.variosservicios.variasfunciones(datatonysvisualizarformularioresuelto).subscribe(async( res: any ) =>{
       console.log('respuesta de tonysvisualizarformularioresuelto', res);
       this.respuestadetonysvisualizarformularioresuelto=res;
     });
  }

}
