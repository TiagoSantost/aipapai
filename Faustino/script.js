async function bootstrap(){
    try{
       const data = await fetch('https://swapi.dev/api/planets/?page=2')
       const res = await data.json()
       const planetas = res.results


        //Recebe uma função que faz comparação e retorna V e F. se for verddero o elemento entra dentro do array.
        const planetasfrozen = planetas.filter(e => e.climate === "frozen")
        console.log(planetasfrozen)


        const isTemperado = planetas.map(planeta => planeta.climate === "temperate")
        console.log(isTemperado)
        
        const quantosTemperados = planetas
        .reduce((acc, planeta) => planeta.climate ==='temperate' ? acc + 1 : acc,0 )
        console.log(quantosTemperados)







    }catch (error){
        console.log('lascou')
    }
}

bootstrap()