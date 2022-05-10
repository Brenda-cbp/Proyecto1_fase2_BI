export class Enfermedad {
  convension: number;
  nombre: String;
  descripcion: String;
  casos:number;

  constructor(
    convension: number,
    nombre: String,
    descripcion: String,
    casos:number
  )
  {
    this.convension= convension;
    this.nombre=nombre;
    this.descripcion=descripcion;
    this.casos=casos;
  }
}
