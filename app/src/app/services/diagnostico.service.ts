import { Injectable } from '@angular/core';
import { HttpClient} from "@angular/common/http";
import { Observable} from "rxjs";

@Injectable({
  providedIn: "root"
})
export class DiagnosticoService {

  servidor= "http://3.228.160.169/"  //"CAMBIARRRRRRRRRRRRRRRRRRRRRRR"
  constructor(private servicio: HttpClient) { }

  generarDiagnostico(abstract: String): Observable<any> {
    return this.servicio.post(this.servidor+"/predict", abstract)
  }
}
