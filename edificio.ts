// crear las clases Edificio, Piso y Departamento aquí
class Departamento {
   name : string
      constructor (name : string){
         this.name = name;
      }
    getName(){
      return this.name
    }
}

class Piso {
  name : string;
  departamentos : Departamento[];
    
    constructor (name:string){
        this.name = name;
        this.departamentos = [];
    }
    pushDepartamento(departamento:Departamento){
     this.departamentos.push(departamento)
    }

    getDepartamentos(){
      return this.departamentos
    }
}

class Edificio{
  pisos : Piso[];
  constructor (piso:Piso[]) { 
      this.pisos = piso
      this.pisos = piso
  }
  getDepartamentosByPiso(nombreDePiso:string):Departamento[]{
   const pisoEncontrado = this.pisos.find(piso=>piso.name === nombreDePiso);
   return pisoEncontrado ? pisoEncontrado.getDepartamentos() : [];
  }

  
  addDepartamentoToPiso(nombreDePiso:string, departamento:Departamento){
    const pisoEncontrado = this.pisos.find(piso=>piso.name === nombreDePiso);
    if (pisoEncontrado){
        return pisoEncontrado.pushDepartamento(departamento)
    }
  }
}


// no modificar este test
// function testClaseEdificio() {
//   const unPiso = new Piso("planta baja");
//   const otroPiso = new Piso("primer piso");
//   const unEdificio = new Edificio([unPiso, otroPiso]);
//   const deptoUno = new Departamento("depto uno");
//   const deptoDos = new Departamento("depto dos");
//   const deptoTres = new Departamento("depto tres");
//   unEdificio.addDepartamentoToPiso("planta baja", deptoUno);
//   unEdificio.addDepartamentoToPiso("planta baja", deptoDos);
//   unEdificio.addDepartamentoToPiso("planta baja", deptoTres);

//   const deptos = unEdificio.getDepartamentosByPiso("planta baja");
//   const deptosEmpty = unEdificio.getDepartamentosByPiso("primer piso");

//   if (
//     Array.isArray(deptosEmpty) &&
//     deptosEmpty.length == 0 &&
//     deptos.length == 3 &&
//     deptos[2].getName() == "depto tres"
//   ) {
//     console.log("testClaseBandaApartment passed");
//   } else {
//     throw "testClaseBandaApartment not passed";
//   }
// }
console.log("Holas Mundos vino otra persona y agrego esto weyy")
function main() {
  //testClaseEdificio();
  const Depto1 = new Departamento ("Depto1");
  const piso1 = new Piso ("piso1");
  const edificio1 = new Edificio ([piso1]);
  edificio1.addDepartamentoToPiso("piso1",Depto1)
  console.log(edificio1)
}
main();
