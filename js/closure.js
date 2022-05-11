function exterior(){
    const mensaje='Closure';
    function interior(){
        return mensaje;
    }
    return interior
}

const foo=exterior();
console.log(foo()); //Retorna el mensaje 'Closure'   