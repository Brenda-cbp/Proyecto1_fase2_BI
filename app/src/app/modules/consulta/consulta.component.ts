import { Component, OnInit } from '@angular/core';
import { Enfermedad } from "../../models/enfermedad";
import { DiagnosticoService } from "../../services/diagnostico.service"
import { FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-consulta',
  templateUrl: './consulta.component.html',
  styleUrls: ['./consulta.component.css']
})
export class ConsultaComponent implements OnInit {

  enfermedad1=new Enfermedad(1, "Neoplasms", " ", 15 );
  enfermedad2=new Enfermedad(2, "Digestive system diseases", " ", 5 );
  enfermedad3=new Enfermedad(3, "Nervous system diseases", " ", 120 );
  enfermedad4=new Enfermedad(4, "Cardiovascular diseases", " ", 3 );
  enfermedad5=new Enfermedad(5, "General pathological conditions", "Por favor rectificar con el médico", 130 );
  enfermedades :Enfermedad[]=[this.enfermedad1, this.enfermedad2 , this.enfermedad3, this.enfermedad4, this.enfermedad5]
  
  buttonEnabled = false;
  resultado: number=0;

  public form:FormGroup;

  constructor(private diagnosticoService: DiagnosticoService, 
    private formBuilder: FormBuilder) {
      console.log ("Llego")
      this.form= this.formBuilder.group({
        diagnostico:[""]
      })
     }


  ngOnInit() {
    console.log ("Llego")
    this.form= this.formBuilder.group({
      diagnostico:[""]
    })

  }
  on_ChangeInput() 
  {this.buttonEnabled = true }

  predecir(){
    console.log ("Llego")
    this.diagnosticoService.generarDiagnostico(this.form.value).subscribe(datos =>{
      console.log(datos)
      this.resultado = datos 
    })

  }

}
