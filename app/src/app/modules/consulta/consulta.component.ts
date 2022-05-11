import { Component, OnInit } from '@angular/core';
import { Enfermedad } from "../../models/enfermedad";
import { Lectura } from "../../models/lectura";
import { DiagnosticoService } from "../../services/diagnostico.service"
import { FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-consulta',
  templateUrl: './consulta.component.html',
  styleUrls: ['./consulta.component.css']
})
export class ConsultaComponent implements OnInit {


  enfermedad1=new Enfermedad(1, "Neoplasms",  "" );
  enfermedad2=new Enfermedad(2, "Digestive system diseases",  "" );
  enfermedad3=new Enfermedad(3, "Nervous system diseases", "" );
  enfermedad4=new Enfermedad(4, "Cardiovascular diseases",  "" );
  enfermedad5=new Enfermedad(5, "General pathological conditions", "" );
  enfermedades :Enfermedad[]=[this.enfermedad1, this.enfermedad2 , this.enfermedad3, this.enfermedad4, this.enfermedad5]

  buttonEnabled = false;
  resultado: String="";
  progress=false;
  lectura= new Lectura(0, [0.5, 0.1, 0.1, 0.1, 0.1])

  public form:FormGroup;

  constructor(private diagnosticoService: DiagnosticoService,
    private formBuilder: FormBuilder) {
      this.form= this.formBuilder.group({
        diagnostico:[""]
      })
     }


  ngOnInit() {  
    this.form= this.formBuilder.group({
      diagnostico:[""]
    })

  }
  on_ChangeInput()
  {this.buttonEnabled = true }

  predecir(){
    this.progress=true
    // console.log ("Llego")
    // this.diagnosticoService.generarDiagnostico(this.form.value).subscribe(datos =>{
    //   console.log(datos)
    //   this.resultado = datos
    // })
    // this.progress=false
  }

  darEnfermedadSegunConvencion (convencion:number){
    if (convencion==1) { return this.enfermedades[0]}
    else if (convencion==2){ return this.enfermedades[1]}
    else if (convencion==3){ return this.enfermedades[2]}
    else if (convencion==4){ return this.enfermedades[3]}
    else if (convencion==5){ return this.enfermedades[3]}
    else{ return ""}
  }
}
