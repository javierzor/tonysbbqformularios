import { Component } from '@angular/core';
import { VariosService } from '../service/varios.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  respuestadetonysvisualizarformularioresuelto: any;
  constructor(
    public variosservicios: VariosService,
    private route: ActivatedRoute


  ) 
  {
    this.traidoporparametrosurl();
  }
  
  async traidoporparametrosurl(){
    this.route.params.subscribe(params => {
      this.obtenermovimientos(params);
      });
  }


  obtenermovimientos(params){

    var datatonysvisualizarformularioresuelto = {
      nombre_solicitud: 'tonysvisualizarformularioresuelto',
      id_publico:params.id_publico
    }
     this.variosservicios.variasfunciones(datatonysvisualizarformularioresuelto).subscribe(async( res: any ) =>{
       console.log('respuesta de tonysvisualizarformularioresuelto', res);
       this.respuestadetonysvisualizarformularioresuelto=res;
     });
  }

}
