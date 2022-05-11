import { Component, OnInit } from '@angular/core';
import { Enfermedad } from '../../models/enfermedad';
import { Lectura } from '../../models/lectura';
import { DiagnosticoService } from '../../services/diagnostico.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-consulta',
  templateUrl: './consulta.component.html',
  styleUrls: ['./consulta.component.css'],
})
export class ConsultaComponent implements OnInit {
  enfermedad1 = new Enfermedad(1, 'Neoplasms', '');
  enfermedad2 = new Enfermedad(2, 'Digestive system diseases', '');
  enfermedad3 = new Enfermedad(3, 'Nervous system diseases', '');
  enfermedad4 = new Enfermedad(4, 'Cardiovascular diseases', '');
  enfermedad5 = new Enfermedad(5, 'General pathological conditions', '');
  enfermedades: Enfermedad[] = [
    this.enfermedad1,
    this.enfermedad2,
    this.enfermedad3,
    this.enfermedad4,
    this.enfermedad5,
  ];

  buttonEnabled = false;
  resultado: String = '';
  progress = false;
  lectura = new Lectura(0, [0.5, 0.1, 0.1, 0.1, 0.1]);

  public form: FormGroup;

  constructor(
    private diagnosticoService: DiagnosticoService,
    private formBuilder: FormBuilder
  ) {
    this.form = this.formBuilder.group({
      medical_abstracts: [''],
    });
  }

  ngOnInit() {
    this.form = this.formBuilder.group({
      medical_abstracts: [''],
    });
  }
  on_ChangeInput() {
    this.buttonEnabled = true;
  }

  predecir() {
    this.progress = true;
    console.log('Llego');
    this.diagnosticoService
      .generarDiagnostico(this.form.value)
      .subscribe((datos) => {
        console.log(datos);
        let probabilities: Number[] = JSON.parse(
          datos.probabilities.replace(' ', '')
        );
        let string_prediccion: string = `La categoría con mayor probabilidad es: ${
          this.enfermedades[parseInt(datos.predict) - 1].nombre
        }.\n\nLas probabilidades de pertenecer a cada categoría son:\n`;
        let string_probabilidades: string = '';

        for (let i = 0; i < this.enfermedades.length; i++) {
          string_probabilidades.concat(
            `${this.enfermedades[i].nombre}: ${probabilities[i]}\n`
          );
        }

        this.resultado = string_prediccion.concat(string_probabilidades);
      });
    this.progress = false;
  }

  darEnfermedadSegunConvencion(convencion: number) {
    if (convencion == 1) {
      return this.enfermedades[0];
    } else if (convencion == 2) {
      return this.enfermedades[1];
    } else if (convencion == 3) {
      return this.enfermedades[2];
    } else if (convencion == 4) {
      return this.enfermedades[3];
    } else if (convencion == 5) {
      return this.enfermedades[4];
    } else {
      return '';
    }
  }
}
