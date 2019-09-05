export class GradeSchool {
  constructor() {
    this.curRoster = {}
  }
  roster() {
    return JSON.parse(JSON.stringify(this.curRoster))
  }
  add(name, grade){
    if (this.curRoster[grade]) { this.curRoster[grade] = [...this.curRoster[grade], name].sort() } 
      else { Object.assign(this.curRoster, {[grade] : [name]})
    }
  }
  grade(grade){
    const myRoster = this.curRoster[grade] || []
    return ([...myRoster])
  }
}
