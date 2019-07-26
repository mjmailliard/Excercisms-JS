export const hey = (message) => {

    
   const messageTrim = message.trim()

  
   if (messageTrim === '')  
        return 'Fine. Be that way!'
    else if (!messageTrim.endsWith('?') && !messageTrim.endsWith('.') && !messageTrim.endsWith('!') && messageTrim.match( /[\d]/))
        return 'Whatever.'
    else if (messageTrim.match( /[\d]/) && messageTrim.endsWith('?') )
        return 'Sure.'
    else if (messageTrim === messageTrim.toUpperCase() && messageTrim.endsWith('?') && messageTrim.match(/[a-z]/i))
        return `Calm down, I know what I'm doing!`
    else if (messageTrim.match( /[\d]/) && messageTrim !== messageTrim.toUpperCase())
        return 'Whatever.' 
    else if (messageTrim === messageTrim.toUpperCase() && messageTrim.match(/[a-z]/i))
        return 'Whoa, chill out!'  
    else if (messageTrim.endsWith('?')) 
        return 'Sure.'
    else 
        return 'Whatever.'
        
};

