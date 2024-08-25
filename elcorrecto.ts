// crear las clases Edificio, Piso y Departamento aquí
class Departamento {
    name: string
  
    constructor(name: string ){
      this.name = name;
    }
  
    getName (){
      return this.name
    }
  }
  
  class Piso { 
      name : string;
      private departamentos : Departamento[]
      constructor (name: string){
         this.name=name;
         this.departamentos=[]
      }
       
      pushDepartamento(departamento: Departamento) {
          this.departamentos.push(departamento); // Agregar el nombre del departamento al array
      }
  
      getDepartamentos() {
          return this.departamentos; // Retornar el array de departamentos
      }  
      
  }
  
  class Edificio{
      pisos : Piso[];
      constructor (piso:Piso[]) { 
          this.pisos = piso
          this.pisos = piso
      }
      getDepartamentosByPiso(nombreDePiso:string):Departamento[]{
          const pisoEncontrado = this.pisos.find(piso => piso.name === nombreDePiso);
          return pisoEncontrado ? pisoEncontrado.getDepartamentos() : [];
      }
  
      
      addDepartamentoToPiso(nombreDePiso:string, departamento:Departamento){
           const pisoEncontrado= this.pisos.find(piso=>piso.name === nombreDePiso);
           if (pisoEncontrado) {
              pisoEncontrado.pushDepartamento(departamento);
      }
   }
  }
  
 // no modificar este test
  function testClaseEdificio() {
      const unPiso = new Piso("planta baja");
      const otroPiso = new Piso("primer piso");
      const unEdificio = new Edificio([unPiso, otroPiso]);
      const deptoUno = new Departamento("depto uno");
      const deptoDos = new Departamento("depto dos");
      const deptoTres = new Departamento("depto tres");
      unEdificio.addDepartamentoToPiso("planta baja", deptoUno);
      unEdificio.addDepartamentoToPiso("planta baja", deptoDos);
      unEdificio.addDepartamentoToPiso("planta baja", deptoTres);
    
      const deptos = unEdificio.getDepartamentosByPiso("planta baja");
      const deptosEmpty = unEdificio.getDepartamentosByPiso("primer piso");
    
      if (
        Array.isArray(deptosEmpty) &&
        deptosEmpty.length == 0 &&
        deptos.length == 3 &&
        deptos[2].getName() == "depto tres"
      ) {
        console.log("testClaseBandaApartment passed");
      } else {
        throw "testClaseBandaApartment not passed";
      }
    }
    
    function main() {
      testClaseEdificio();
  
      
    }
    main();