const insertador = {
  calculáEInsertáResultado(){
    const materias = this.obtenéValoresDe("materias");
    const viaje = this.obtenéValoresDe("viaje");
    const unaPersona = new Persona(materias, viaje);
    const hechopelotez = unaPersona.quéTanHechoPelotaEstás();
    this.insertáResultado(hechopelotez);
  },
  obtenéValoresDe(unaEntrada){
    return document.getElementById(unaEntrada).value
  },
  insertáResultado(nuevoValor){
    document.getElementById('resultado').innerHTML = nuevoValor;
  }
}
