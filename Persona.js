class Persona {
  constructor(materias, viaje){
    this.materias = materias;
    this.viaje = viaje;
  }
  quéTanHechoPelotaEstás(){
    return 100 * (this.materias / 10 + this.viaje / 5) / 2
  }
}
