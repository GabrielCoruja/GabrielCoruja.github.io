const getPlanet = () => {
    setTimeout(() => {
        const mars = {
            name: "Mars",
            distanceFromSun: {
                value: 227900000,
                measurementUnit: "kilometers"
            }
        }
        console.log("Returned planet: ", mars.name)}, 3500)
    }
    getPlanet() // imprime Marte depois de 4 segundos