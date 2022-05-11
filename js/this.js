const persona1={
    nombre:"Joaquin",
    saludo:function(){
        console.log("Hola, me llamo "+this.nombre+".");
    }
}
persona1.saludo();

const persona2={
    nombre:"Nicolas",
    saludo:function(){
        alert("Hola, me llamo "+this.nombre+".");
    }
}
persona2.saludo();

