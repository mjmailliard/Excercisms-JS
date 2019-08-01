class PhoneNumber {
  constructor(props) {
    this.phone = props
  }

  number() {
    const cleaned = this.phone.replace(/\D/g,'');
    if (/[,?]/.test(this.phone) || cleaned.length < 10 || cleaned.length > 11) { return null }
    if(cleaned.length === 10) {
      if(cleaned[0] <= 1 || cleaned[3] <= 1 ) { return null }
     }
    if(cleaned.length === 11) { 
      if(cleaned[0] > 1 || cleaned[1] <= 1 || cleaned[4] <= 1){ return null }
        else { return cleaned.slice(1,11)}
    }
  
    return cleaned
  
  }
}
export default PhoneNumber

