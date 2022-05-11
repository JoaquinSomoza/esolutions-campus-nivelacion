let input=[
    {nombre:"Pedro",edad:20,ciudad:"Córdoba"},
    {nombre:"Patricia",edad:22,ciudad:"Córdoba"},
    {nombre:"José",edad:23,ciudad:"Mendonza"},
    {nombre:"María",edad:20,ciudad:"Córdoba"},
    {nombre:"Juan",edad:20,ciudad:"Córdoba"},
    {nombre:"Ana",edad:22,ciudad:"Córdoba"}
]
input.sort(function(a,b){
    if(a.nombre>b.nombre){
        return 1;
    }
    if(a.nombre<b.nombre){
        return -1;
    }
    return 0;
})

input.sort(function(a,b){
    if(a.edad>b.edad){
        return 1;
    }
    if(a.edad<b.edad){
        return -1;
    }
        return 0;
})
            
let salida=[];
for(let i=0;i<input.length;i++){
    if(input[i].ciudad=="Córdoba"){
        salida.push(input[i]);
    }
    
}


console.log(salida);

