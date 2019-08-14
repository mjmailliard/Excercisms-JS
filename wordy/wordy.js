export class WordProblem {
  constructor(props){
  this.question = props
  }
  answer () { 
    let count = 0
    const relevantParts = this.question.replace("What is ", "(").replace("?","").replace(/(\d+)/g , (match, i, original)=>{
      count++
      return (count === 2) ? `${i})` : match})
    const answer = relevantParts.replace(/plus/g, "+").replace(/minus/g, "-").replace(/multiplied by/g,"*").replace(/divided by/g,"/")
    if (!answer.includes("+") && !answer.includes("-") && !answer.includes("*") && !answer.includes("/")) { throw new ArgumentError() }
   return eval(answer)
  }
}
export class ArgumentError extends Error {};
 








