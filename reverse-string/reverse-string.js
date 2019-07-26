export const reverseString = (string) => {
    if (string === '' || string === undefined) { 
        return ''
    } else {
        string = string.split('')
                console.log(string)
        string = string.reverse()
                console.log(string)
        string = string.toString()
                console.log(string)
        string = string.replace(/,/g, '')
                console.log(string)
        return string
        }
// console.log(string)
    }



reverseString()