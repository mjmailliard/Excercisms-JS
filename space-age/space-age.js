
// Given an age in seconds, calculate how old someone would be on:

// - Earth: orbital period 365.25 Earth days, or 31557600 seconds
// - Mercury: orbital period 0.2408467 Earth years
// - Venus: orbital period 0.61519726 Earth years
// - Mars: orbital period 1.8808158 Earth years
// - Jupiter: orbital period 11.862615 Earth years
// - Saturn: orbital period 29.447498 Earth years
// - Uranus: orbital period 84.016846 Earth years
// - Neptune: orbital period 164.79132 Earth years

// So if you were told someone were 1,000,000,000 seconds old, you should
// be able to say that they're 31.69 Earth-years old.
// need class and constructor


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
