const oneEarthYear = 31557600
export class SpaceAge {
    constructor(seconds) {
        this.seconds = seconds   
    }
onEarth() {
    let earthYears = (this. seconds/oneEarthYear)
    earthYears = earthYears.toFixed(2)
return Number(earthYears)
}
onMercury() {
    let mercuryYears = (this.seconds/(oneEarthYear * 0.2408467) )
    mercuryYears = mercuryYears.toFixed(2)
return Number(mercuryYears)
}
onVenus() {
    let venusYears = (this.seconds/(oneEarthYear * 0.61519726) )
    venusYears = venusYears.toFixed(2)
return Number(venusYears)
}
onMars() {
    let marsYears = (this.seconds/(oneEarthYear * 1.8808158) )
    marsYears = marsYears.toFixed(2)
return Number(marsYears)
}onJupiter() {
    let jupiterYears = (this.seconds/(oneEarthYear * 11.862615) )
    jupiterYears = jupiterYears.toFixed(2)
return Number(jupiterYears)
} 
onSaturn() {
    let saturnYears = (this.seconds/(oneEarthYear * 29.447498) )
    saturnYears = saturnYears.toFixed(2)
return Number(saturnYears)
}onUranus() {
    let uranusYears = (this.seconds/(oneEarthYear * 84.016846) )
    uranusYears = uranusYears.toFixed(2)
return Number(uranusYears)
}onNeptune() {
    let neptuneYears = (this.seconds/(oneEarthYear * 164.79132) )
    neptuneYears = neptuneYears.toFixed(2)
return Number(neptuneYears)
}

}
